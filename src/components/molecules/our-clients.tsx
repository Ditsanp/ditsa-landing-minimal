"use client";
import React, { useEffect, useRef } from "react";
import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function ClientMarquee() {
  const scrollRef = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollContent = Array.from(scrollContainer.children);
      scrollContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollContainer.appendChild(duplicatedItem);
      });
    }
  }, []);

  const clients = [
    { src: "/images/clients/epharma.png", alt: "Epharma" },
    { src: "/images/clients/patan.webp", alt: "Patan Heritage" },
    { src: "/images/clients/petskhana.png", alt: "Petskhana" },
    { src: "/images/clients/runshoes.png", alt: "Run Shoes" },
    {
      src: "/images/clients/truehimalayanfoods.png",
      alt: "True Himalayan Foods",
    },
  ];

  return (
    <SectionWrapper>
      <SectionHeader title="Our Clients" />
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          ref={scrollRef}
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          {clients.map((client, index) => (
            <li key={index}>
              <img
                src={client.src}
                alt={client.alt}
                className={
                  client.alt === "True Himalayan Foods"
                    ? "h-32 md:h-32 w-auto object-contain"
                    : "h-40 md:h-52 w-auto object-contain"
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
