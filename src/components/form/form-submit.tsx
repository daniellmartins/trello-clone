"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui";

type FormSubmitProps = {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "primary";
};

export function FormSubmit({
  children,
  disabled = false,
  className = "",
  variant = "default",
}: FormSubmitProps) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={disabled || pending}
      className={className}
      variant={variant}
      size="sm"
    >
      {children}
    </Button>
  );
}
