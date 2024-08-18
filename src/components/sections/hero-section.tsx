import Link from "next/link";
import { Button } from "../ui/button";
import SectionWrapper from "../wrappers/section-wrapper";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <SectionWrapper>
        <div className="flex flex-col md:flex-row items-center">
          <div>
            <h1 className="hero-typography uppercase">
              DITSA: Your Gateway for Digital Transformation with Innovative
              Solutions and Advanced Technology
            </h1>
            <p className="section-p-typography mt-10">
              We are a team of experts in digital transformation, providing
              innovative solutions and advanced technology to help you grow your
              business. Our mission is to help you succeed in the digital age by
              providing you with the tools and resources you need to thrive in
              today's competitive marketplace.
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
