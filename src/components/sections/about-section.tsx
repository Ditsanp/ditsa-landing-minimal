import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function AboutSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="about us" />
        <p className="section-p-typography">
          Ditsa Technology Pvt. Ltd. is a digital marketing and technology
          company based in Bhaktapur, Nepal. We help businesses grow with
          thoughtful digital marketing, website development, custom app and
          software development, and AI and data analytics solutions.
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
