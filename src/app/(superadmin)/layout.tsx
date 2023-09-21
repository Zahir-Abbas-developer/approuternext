export default function LayoutMain({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
     <p>Header</p>
      <section className="p-7">{children}</section>
      <p>Footer</p>
    </>
  );
}