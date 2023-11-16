"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { Menu } from "lucide-react";

import { useMobileSidebar } from "@/hooks";
import { Button, Sheet, SheetContent } from "@/components/ui";
import { Sidebar } from ".";

const SIDEBAR_MOBILE_STATE_STORAGE_KEY = "@trello-clone:sidebar-mobile-state";

export function MobileSidebar() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const onOpen = useMobileSidebar((state) => state.onOpen);
  const onClose = useMobileSidebar((state) => state.onClose);
  const isOpen = useMobileSidebar((state) => state.isOpen);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        className="block md:hidden mr-4"
        variant="ghost"
        size="sm"
      >
        <Menu className="w-4 h-4" />
      </Button>

      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent side="left" className="p-2 pt-10">
          <Sidebar storageKey={SIDEBAR_MOBILE_STATE_STORAGE_KEY} />
        </SheetContent>
      </Sheet>
    </>
  );
}
