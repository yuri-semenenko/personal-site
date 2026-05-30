import { cn } from "@/lib/utils";
import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"section"> & {
  id: string;
  title: string;
  eyebrow?: string;
  children?: ReactNode;
};

export function Section({
  id,
  title,
  eyebrow,
  className,
  children,
  ...rest
}: Props) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn(
        "scroll-mt-20 border-t border-border/50 px-4 py-20 sm:px-6 sm:py-24",
        className,
      )}
      {...rest}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-2">
          {eyebrow && (
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              {eyebrow}
            </p>
          )}
          <h2
            id={headingId}
            className="text-3xl tracking-tight text-foreground sm:text-4xl"
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
