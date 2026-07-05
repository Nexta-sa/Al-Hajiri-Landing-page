import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button style variants. Kept in a non-"use client" module so it can be called
 * from both client components (Button) and server components (e.g. a styled
 * anchor) without crossing the RSC client-reference boundary.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-gradient-160 text-white shadow-glow hover:brightness-110 active:brightness-95",
        secondary:
          "border border-white/10 bg-white/[0.04] text-white hover:border-white/20 hover:bg-white/[0.07] active:bg-white/[0.05]",
        ghost: "text-ink-muted hover:text-white",
        outline:
          "border border-white/10 bg-transparent text-white hover:border-brand-500/40 hover:bg-brand-500/10",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-[15px]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
