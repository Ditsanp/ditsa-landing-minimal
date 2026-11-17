import SectionWrapper from "../wrappers/section-wrapper";
import DitsaWireframeScene from "./ditsa-wireframe-scene";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <SectionWrapper>
        <div className="grid min-w-0 grid-cols-1 items-center gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(0,440px)]">
          <div className="min-w-0">
            <h1 className="hero-typography uppercase">
              Ditsa Technology Pvt. Ltd. — Your Digital Growth Partner
            </h1>
            <p className="section-p-typography mt-6">
              A digital marketing and technology company based in Bhaktapur,
              Nepal. We help businesses grow through digital marketing, website
              development, custom apps and software, and AI-powered data
              analytics.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ditsa-cyan px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d3db4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ditsa-cyan focus-visible:ring-offset-2 dark:bg-[#3155dc] dark:hover:bg-[#4165f5]"
              >
                View Featured Work <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-ditsa-cyan hover:text-ditsa-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ditsa-cyan focus-visible:ring-offset-2 dark:border-white/20 dark:hover:border-[#4165f5] dark:hover:text-[#4165f5]"
              >
                Contact Us <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="order-first flex min-w-0 w-full items-center justify-center md:order-last md:justify-end">
            <div className="h-[300px] w-full max-w-[280px] md:h-[400px] md:max-w-[320px] lg:h-[440px] lg:max-w-[400px] xl:h-[480px] xl:max-w-[440px]">
              <DitsaWireframeScene />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
