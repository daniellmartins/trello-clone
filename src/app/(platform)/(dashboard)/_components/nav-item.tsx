import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

import { Activity, CreditCard, Layout, Settings } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@/components/ui";

export type Organization = {
  id: string;
  slug: string | null;
  imageUrl: string;
  name: string;
};

type NavItemProps = {
  organization: Organization;
  isActive: boolean;
  isExpanded: boolean;
  onExpand: (id: string) => void;
};

export function NavItem({
  organization,
  isActive,
  isExpanded,
  onExpand,
}: NavItemProps) {
  const router = useRouter();
  const pathname = usePathname();

  const routes = [
    {
      label: "Boards",
      icon: <Layout className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}`,
    },
    {
      label: "Activity",
      icon: <Activity className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/activity`,
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/settings`,
    },
    {
      label: "Billing",
      icon: <CreditCard className="h-4 w-4 mr-2" />,
      href: `/organization/${organization.id}/billing`,
    },
  ];

  function handleClick(href: string) {
    router.push(href);
  }

  return (
    <AccordionItem value={organization.id} className="border-none">
      <AccordionTrigger
        onClick={() => onExpand(organization.id)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
          isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative">
            <Image
              fill
              src={organization.imageUrl}
              alt="Organization logo"
              className="rounded-sm object-cover"
            />
          </div>
          <span className="font-medium text-sm">{organization.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-1 text-neutral-700">
        {routes.map((router) => {
          const isActive = pathname === router.href;

          return (
            <Button
              key={router.href}
              size="sm"
              variant="ghost"
              onClick={() => handleClick(router.href)}
              className={cn(
                "w-full font-normal justify-start pl-10 mb-1",
                isActive && "bg-sky-500/10 text-sky-700"
              )}
            >
              {router.icon}
              {router.label}
            </Button>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
}
