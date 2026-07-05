"use client";

import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useDemo } from "./demo-context";
import { cn } from "@/lib/utils";

interface DemoCtaProps extends ButtonProps {
  withArrow?: boolean;
}

/** Button wired to open the Book-a-Demo wizard from anywhere in the tree. */
export function DemoCta({ children, withArrow, className, onClick, ...props }: DemoCtaProps) {
  const { openDemo } = useDemo();
  return (
    <Button
      onClick={(event) => {
        onClick?.(event);
        openDemo();
      }}
      className={cn(className)}
      {...props}
    >
      {children}
      {withArrow && <ArrowRight className="size-4" aria-hidden />}
    </Button>
  );
}
