import { OrgControl } from "./_components";

type OrganizationLayoutIdProps = {
  children: React.ReactNode;
};

export default function OrganizationIdLayout({
  children,
}: OrganizationLayoutIdProps) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
