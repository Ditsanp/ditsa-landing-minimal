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
    { src: "/images/staging/client-narmin.webp", alt: "NARMIN" },
    {
      src: "/images/staging/client-kshamadevi-group.webp",
      alt: "Kshamadevi Group",
    },
    {
      src: "/images/staging/client-canixa-life-sciences.webp",
      alt: "Canixa Life Sciences",
    },
    {
      src: "/images/staging/client-jasmine-hygiene.webp",
      alt: "Jasmine Hygiene",
    },
    { src: "/images/staging/client-poison-jeans.webp", alt: "Poison Jeans" },
    { src: "/images/staging/client-jenish-paints.webp", alt: "Jenish Paints" },
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
            <li key={index} className="flex items-center">
              <div className="flex h-16 w-28 items-center justify-center rounded-lg bg-white p-2.5 shadow-sm md:h-20 md:w-36">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}
