export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-auto border-b  w-full">
      <div className="px-5 md:px-10 max-w-[90%] py-10 mx-auto border-r border-l">
        {children}
      </div>
    </section>
  );
}
