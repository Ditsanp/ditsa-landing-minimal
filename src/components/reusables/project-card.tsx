"use client";
import Image from "next/image";
import WordBadge from "../atoms/word-badge";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import style from "../molecules/menu.module.scss";

export default function ProjectCard({
  name = "Project Name",
  description = "Project Description",
  techs = ["react", "typescript", "redux", "material-ui", "flutter"],
  image,
  className,
}: {
  name?: string;
  description?: string;
  techs?: string[];
  image: any[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const sm = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const images = [
    {
      src: image[0],
      y: sm,
      aspectRatio: "16/9",
    },
    {
      src: image[1],
      y: lg,
      aspectRatio: "9/16",
    },
    {
      src: image[2],
      y: md,
      aspectRatio: "9/16",
    },
  ];

  return (
    <>
      <div ref={containerRef}>
        <div>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className={className}>
              <h3 className="sub-section-title-typography font-semibold">
                {name}
              </h3>
              <p className="section-p-typography">{description}</p>
              <div className="mt-5 gap-2 flex flex-wrap items-center">
                {techs.map((tech, idx) => (
                  <WordBadge key={idx} word={tech} variant="light" />
                ))}
              </div>
            </div>
            <div
              className="hidden md:flex justify-center relative w-full overflow-hidden h-[45vh] md:h-[60vh] 
            bg-gradient-to-b from-ditsa-cyan to-accent-green  dark:text-white
            rounded-2xl"
            >
              {images.map(({ src, y }, i) => {
                return (
                  <motion.div
                    style={{ y }}
                    key={`i_${i}`}
                    // className="h-full object-center object-contain w-full"
                    className={style.imageContainer}
                    //show only one image in small screen
                  >
                    <Image
                      src={src}
                      // placeholder="blur"
                      alt="image"
                      //   fill
                      className={
                        "object-cover border object-center w-full h-full rounded-lg gap-10 !m-0 !p-0" +
                        "aspect-" +
                        images[i].aspectRatio
                      }
                    />
                  </motion.div>
                );
              })}
            </div>
            <div
              className="md:hidden justify-center relative w-full overflow-hidden h-[300px] 
            bg-gradient-to-b from-ditsa-cyan to-accent-green  dark:text-white !px-5 border-none
            rounded-2xl"
            >
              <Image
                src={images[1].src}
                // placeholder="blur"
                alt="image"
                //   fill
                className={
                  "object-contain w-full h-full rounded-lg gap-10 !m-0 " +
                  "aspect-" +
                  images[0].aspectRatio
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
