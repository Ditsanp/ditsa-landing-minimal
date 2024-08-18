import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function AboutSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="about us" />
        <p className="section-p-typography">
          At DITSA, we fuel your digital transformation with smart, innovative
          solutions and latest technology. Our team excel in developing tailored
          strategies that promote growth and enhance efficiency, simplifying
          complicated challenges. Our team excels at crafting unique strategies
          that simplify challenges and drive growth. We&apos;re committed to
          transforming your business with visionary tech and creative insights.
          {/* <br />
          <br /> */}
          {/* I&apos;m a self-taught developer who&apos;s passionate about building
          user-friendly, accessible websites and applications. I&apos;m always
          eager to learn new technologies and frameworks, and I&apos;m currently
          diving deep into the world of React and Next.js.
          <br />
          <br />
          When I&apos;m not coding, you can find me exploring the great
          outdoors, riding my bike, hopping cafes, experimenting with new
          recipes, or
          <a href="https://www.instagram.com/sulavbaral/"> capturing moments</a>
          . I&apos;m also a coffee aficionado, so you&apos;ll often find me
          sipping on a cup of freshly brewed coffee while working on my
          projects. */}
        </p>
      </SectionWrapper>
    </>
  );
}
