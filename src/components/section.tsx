import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import type { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"section"> & {
  id: string;
  title: string;
  eyebrow?: string;
  children?: ReactNode;
};

export function Section({ id, title, eyebrow, className, children, ...rest }: Props) {
  const headingId = `${id}-heading`;
  return (
    <section
      aria-labelledby={headingId}
      className={cn("px-4 py-16 sm:px-6 sm:py-20", className)}
      {...rest}
    >
      <div id={id} className="mx-auto max-w-6xl scroll-mt-4">
        <Reveal className="mb-10 flex flex-col gap-2">
          {eyebrow && <p className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>}
          <h2 id={headingId} className="text-3xl tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
