export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section id="projects-container" className="grow flex">
      <div className="m-auto">{children}</div>
    </section>
  );
}
