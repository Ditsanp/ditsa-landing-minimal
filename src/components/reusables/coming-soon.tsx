import SectionWrapper from "../wrappers/section-wrapper";

export default function ComingSoon() {
  return (
    <>
      {/* comingf soob */}
      <SectionWrapper>
        <div className="flex mb-20 flex-col min-h-screen">
          <h2 className="text-[14vw] averta-bold leading-[0.8] mt-10">
            <span className="dark:text-gradient bebas-font">DITSA-AI</span>
            <span className="text-accent-red">.</span>
          </h2>

          <h2 className="text-[14vw] averta-bold leading-[0.8] mt-10">
            <span className="dark:text-gradient bebas-font">Coming</span>
            <span className="text-accent-red">.</span>
            <span className="dark:text-gradient bebas-font">Soon</span>
          </h2>

          <p className="section-p-typography mt-10">
            We are working on something awesome. Stay tuned!
          </p>
        </div>
      </SectionWrapper>
    </>
  );
}
