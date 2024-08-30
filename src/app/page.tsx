import Footer from "@/components/globals/footer";
import ClientMarquee from "@/components/molecules/our-clients";
import { VelocityScroll } from "@/components/molecules/velocity-words";
import AboutSection from "@/components/sections/about-section";
import ContactUsSection from "@/components/sections/contact-section";
import HeroSection from "@/components/sections/hero-section";
import OurFocusAreas from "@/components/sections/our-focus-areas";
import ServicesSection from "@/components/sections/projects-section";
import MaxWidthWrapper from "@/components/wrappers/max-width-wrapper";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <MaxWidthWrapper>
        <HeroSection />
        <ClientMarquee />
        <AboutSection />

        <ServicesSection />

        {/* <ExperienceSection /> */}

        <div className="py-10 border-b">
          <VelocityScroll
            text="DITSA: Your Gateway for Digital Transformation"
            default_velocity={2}
            className="hero-typography py-2"
          />
        </div>
        <OurFocusAreas />
        <ContactUsSection />

        {/* <EducationSection />
        <SkillSection />
        <Photos />
        <Socials /> */}
      </MaxWidthWrapper>
    </main>
  );
}
