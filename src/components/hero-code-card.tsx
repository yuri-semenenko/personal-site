"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  name: string;
  role: string;
  also: string;
  location: string;
  focus: string[];
  statuses: string[];
};

export function HeroCodeCard({
  className,
  name,
  role,
  also,
  location,
  focus,
  statuses,
}: Props) {
  const reduced = useReducedMotion();

  const lines: Line[] = [
    [
      { type: "kw", text: "const" },
      { type: "sp" },
      { type: "id", text: "yuri" },
      { type: "p", text: " = {" },
    ],
    [
      { type: "indent" },
      { type: "key", text: "name" },
      { type: "p", text: ": " },
      { type: "str", text: `"${name}"` },
      { type: "p", text: "," },
    ],
    [
      { type: "indent" },
      { type: "key", text: "role" },
      { type: "p", text: ": " },
      { type: "str", text: `"${role}"` },
      { type: "p", text: "," },
    ],
    [
      { type: "indent" },
      { type: "key", text: "also" },
      { type: "p", text: ": " },
      { type: "str", text: `"${also}"` },
      { type: "p", text: "," },
    ],
    [
      { type: "indent" },
      { type: "key", text: "location" },
      { type: "p", text: ": " },
      { type: "str", text: `"${location}"` },
      { type: "p", text: "," },
    ],
    [
      { type: "indent" },
      { type: "key", text: "focus" },
      { type: "p", text: ": [" },
      ...focus.flatMap<Token>((value, index) => [
        { type: "str", text: `"${value}"` },
        { type: "p", text: index < focus.length - 1 ? ", " : "" },
      ]),
      { type: "p", text: "]," },
    ],
    [
      { type: "indent" },
      { type: "key", text: "status" },
      { type: "p", text: ": [" },
    ],
    ...statuses.map<Line>((status, index) => [
      { type: "indent2" },
      { type: "str", text: `"${status}"` },
      { type: "p", text: index < statuses.length - 1 ? "," : "" },
    ]),
    [{ type: "indent" }, { type: "p", text: "]," }],
    [{ type: "p", text: "};" }],
  ];

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-border bg-card shadow-sm",
        className,
      )}
      aria-hidden
    >
      <div className="flex items-center gap-2 border-b border-border bg-background/50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-chart-3/60" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">
          profile.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[0.8125rem] leading-6">
        <code>
          {lines.map((line, lineIdx) => (
            <motion.span
              key={lineIdx}
              className="block"
              initial={reduced ? false : { opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: reduced ? 0 : 0.2 + lineIdx * 0.055,
                ease: "easeOut",
              }}
            >
              {line.map((token, i) => renderToken(token, i))}
              {line.length === 0 && " "}
            </motion.span>
          ))}
        </code>
      </pre>
    </div>
  );
}

type Token =
  | { type: "kw"; text: string }
  | { type: "id"; text: string }
  | { type: "key"; text: string }
  | { type: "str"; text: string }
  | { type: "p"; text: string }
  | { type: "sp" }
  | { type: "indent" }
  | { type: "indent2" };

type Line = Token[];

function renderToken(token: Token, key: number) {
  switch (token.type) {
    case "kw":
      return (
        <span key={key} className="text-primary">
          {token.text}
        </span>
      );
    case "id":
      return (
        <span key={key} className="text-foreground">
          {token.text}
        </span>
      );
    case "key":
      return (
        <span key={key} className="text-foreground">
          {token.text}
        </span>
      );
    case "str":
      return (
        <span key={key} className="text-highlight">
          {token.text}
        </span>
      );
    case "p":
      return (
        <span key={key} className="text-muted-foreground">
          {token.text}
        </span>
      );
    case "sp":
      return <span key={key}>&nbsp;</span>;
    case "indent":
      return <span key={key}>&nbsp;&nbsp;</span>;
    case "indent2":
      return <span key={key}>&nbsp;&nbsp;&nbsp;&nbsp;</span>;
  }
}
