import { Navbar } from "./_components";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="h-full">
      <Navbar />

      <div>{children}</div>
    </div>
  );
}
