import { ClerkProvider } from "@clerk/nextjs";

type PlatformLayout = {
  children: React.ReactNode;
};

export default function PlatformLayout({ children }: PlatformLayout) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
