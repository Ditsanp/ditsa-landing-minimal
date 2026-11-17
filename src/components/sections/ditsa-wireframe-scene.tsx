"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function DitsaWireframeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (error) {
      console.error("Unable to create the DITSA wireframe renderer:", error);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute("aria-hidden", "true");
    container.appendChild(renderer.domElement);

    const rotatingGroup = new THREE.Group();
    const modelGroup = new THREE.Group();
    modelGroup.rotation.z = 0.12;
    rotatingGroup.add(modelGroup);
    scene.add(rotatingGroup);

    const wireMaterials: THREE.Material[] = [];
    const originalMaterials: THREE.Material[] = [];
    const render = () => renderer.render(scene, camera);
    let animationFrame = 0;
    let disposed = false;
    let model: THREE.Group | null = null;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      renderer.setSize(width, height, true);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
      render();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    new GLTFLoader().load(
      "/Ditsa-3d_wireframe.glb",
      (gltf) => {
        if (disposed) return;

        model = gltf.scene;
        model.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            const materials = Array.isArray(object.material)
              ? object.material
              : [object.material];
            originalMaterials.push(...materials);
            const material = new THREE.MeshBasicMaterial({
              color: 0x719cef,
              wireframe: true,
              transparent: true,
              opacity: 0.58,
              depthWrite: false,
              side: THREE.DoubleSide,
            });
            wireMaterials.push(material);
            object.material = material;
          } else if (
            object instanceof THREE.Line ||
            object instanceof THREE.LineSegments
          ) {
            originalMaterials.push(object.material);
            const material = new THREE.LineBasicMaterial({
              color: 0x719cef,
              transparent: true,
              opacity: 0.58,
              depthWrite: false,
            });
            wireMaterials.push(material);
            object.material = material;
          }
        });

        const bounds = new THREE.Box3().setFromObject(model);
        const size = bounds.getSize(new THREE.Vector3());
        model.scale.setScalar(3.5 / Math.max(size.y, 0.001));
        const center = new THREE.Box3().setFromObject(model).getCenter(new THREE.Vector3());
        model.position.sub(center);
        modelGroup.add(model);

        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        let animationStartedAt: number | null = null;
        const animate = (now: number) => {
          if (disposed) return;
          animationStartedAt ??= now;
          if (!reduceMotion) {
            const phase = ((now - animationStartedAt) / 10000) * Math.PI * 2;
            rotatingGroup.rotation.y =
              ((1 - Math.cos(phase)) / 2) * THREE.MathUtils.degToRad(-90);
          }
          render();
          animationFrame = window.requestAnimationFrame(animate);
        };
        animate(performance.now());
      },
      undefined,
      (error) => {
        if (!disposed) {
          console.error("Failed to load the DITSA wireframe model:", error);
        }
      },
    );

    return () => {
      disposed = true;
      window.cancelAnimationFrame(animationFrame);
      observer.disconnect();
      model?.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Line) {
          object.geometry.dispose();
        }
      });
      wireMaterials.forEach((material) => material.dispose());
      originalMaterials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full w-full"
      aria-label="Three-dimensional wireframe D artwork"
      role="img"
    />
  );
}
