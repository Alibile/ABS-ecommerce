import Header from "./Components/Header";
export default function DashboardLayout(
  {
    children,
  }: {
    children: React.ReactNode;
  },
  headerPaddingClass: string,
  headerPositionClass: string,
  headerTop: string
): JSX.Element {
  return (
    <section>
      <Header
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
        headerPositionClass={headerPositionClass}
      />
      {children}
    </section>
  );
}
