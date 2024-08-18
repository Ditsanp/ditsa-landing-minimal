export default function MaxWidthWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mx-auto w-full ">{children}</div>;
}
