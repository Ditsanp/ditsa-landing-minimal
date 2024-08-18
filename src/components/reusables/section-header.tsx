export default function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="section-title-typography ">
      <span className="text-ditsa-cyan dark:text-ditsa-lightcyan">{title}</span>
      <span className="text-accent-red">.</span>
    </h2>
  );
}
