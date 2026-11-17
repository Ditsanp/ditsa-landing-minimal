import SectionWrapper from "../wrappers/section-wrapper";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <SectionWrapper>
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <h1 className="hero-typography uppercase">
              Ditsa Technology Pvt. Ltd. — Your Digital Growth Partner
            </h1>
            <p className="section-p-typography mt-10">
              A digital marketing and technology company based in Bhaktapur,
              Nepal. We help businesses grow through digital marketing, website
              development, custom apps and software, and AI-powered data
              analytics.
            </p>
          </div>

          <div className="flex order-first md:order-last items-center w-full lg:justify-end">
            <Image
              src="/mascot.svg"
              alt="Hero Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
