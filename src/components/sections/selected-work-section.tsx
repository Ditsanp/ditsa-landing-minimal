import Image from "next/image";
import { ArrowUpRight, Building2, Globe2, Layers3, ShoppingBag } from "lucide-react";

import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";

const projects = [
  {
    number: "01",
    name: "NARMIN",
    kind: "Best Practice Portal",
    description:
      "A digital portal bringing local government best practices, provincial summaries, and indicator-based information into one organized platform.",
    tags: ["Product", "Web"],
    image: "/images/staging/project-narmin.png",
    alt: "NARMIN local government best practice portal shown on a laptop",
    href: "https://lgbpp.narmin.org.np",
    Icon: Globe2,
  },
  {
    number: "02",
    name: "Chem Zone International Pvt. Ltd.",
    kind: "Corporate Website",
    description:
      "A corporate website presenting Chem Zone’s trading expertise, product range, and global sourcing network, with clear paths for business inquiries.",
    tags: ["Web", "Corporate"],
    image: "/images/staging/project-chem-zone.png",
    alt: "Chem Zone International corporate website displayed in a laptop mockup",
    href: "https://chemzoneinternational.com",
    Icon: Building2,
  },
  {
    number: "03",
    name: "Docs Foundation Nepal",
    kind: "Website Revamp",
    description:
      "A clearer digital home for DOCS Foundation Nepal, bringing its mission, programs, and ways to support children into one organized experience.",
    tags: ["Web", "Redesign"],
    image: "/images/staging/project-docs-foundation.png",
    alt: "DOCS Foundation Nepal website for its programs and community work",
    href: "https://docsfnepal.org",
    Icon: Layers3,
  },
  {
    number: "04",
    name: "Poison Jeans",
    kind: "E-commerce",
    description:
      "A digital home for Poison Jeans, connecting its fashion identity, collections, and nationwide retail presence in one experience.",
    tags: ["Brand", "E-commerce"],
    image: "/images/staging/project-poison-jeans.webp",
    alt: "Poison Jeans fashion website featuring its collection",
    href: "https://poisonjeans.com.np/",
    Icon: ShoppingBag,
  },
];

export default function SelectedWorkSection() {
  return (
    <SectionWrapper>
      <div id="work" className="scroll-mt-24">
        <SectionHeader title="Selected Projects" />
        <p className="section-p-typography max-w-3xl">
          A selection of digital products and websites built for teams doing
          meaningful work.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map(({ number, name, kind, description, tags, image, alt, href, Icon }) => (
            <article
              key={number}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-[#151515]"
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${name} project`}
                className="block"
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-ditsa-cyan/15 via-white to-accent-green/30 p-3 md:h-72">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-3 transition-transform duration-500 hover:scale-[1.025]"
                  />
                  <span className="absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ditsa-cyan shadow-sm">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                </div>
              </a>
              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ditsa-cyan dark:text-ditsa-lightcyan">
                    {kind}
                  </p>
                  <span className="text-sm text-black/40 dark:text-white/40">
                    {number}
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight md:text-2xl">
                  {name}
                </h3>
                <p className="section-p-typography mt-3 !text-[15px]">
                  {description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs dark:border-white/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ditsa-cyan hover:gap-3 dark:text-ditsa-lightcyan"
                >
                  View project <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
