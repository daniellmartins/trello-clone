"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useOrganizationList } from "@clerk/nextjs";

type ParamsProps = {
  organizationId: string;
};

export function OrgControl() {
  const params = useParams<ParamsProps>();
  const { setActive } = useOrganizationList();

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.organizationId,
    });
  }, [setActive, params.organizationId]);

  return null;
}
