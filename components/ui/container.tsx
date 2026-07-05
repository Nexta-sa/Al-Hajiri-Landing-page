import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
}

/** Centered max-width wrapper matching the Figma 1280px content column. */
export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  const Component = Tag as React.ElementType;
  return (
    <Component
      className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-10", className)}
      {...props}
    />
  );
}
