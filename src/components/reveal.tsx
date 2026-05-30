"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = Omit<HTMLMotionProps<"div">, "ref"> & {
  delay?: number;
  children: ReactNode;
};

export function Reveal({
  delay = 0,
  children,
  className,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerTag = "div" | "ul" | "ol";

type StaggeredListProps = {
  children: ReactNode;
  className?: string;
  as?: StaggerTag;
  stagger?: number;
};

export function StaggeredList({
  children,
  className,
  as = "div",
  stagger = 0.06,
}: StaggeredListProps) {
  const sharedProps = {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "0px 0px -80px 0px" },
    variants: {
      hidden: {},
      visible: { transition: { staggerChildren: stagger } },
    },
    className,
    children,
  };

  if (as === "ul") return <motion.ul {...sharedProps} />;
  if (as === "ol") return <motion.ol {...sharedProps} />;
  return <motion.div {...sharedProps} />;
}

type ItemTag = "div" | "li";

type StaggeredItemProps = {
  children: ReactNode;
  className?: string;
  as?: ItemTag;
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function StaggeredItem({
  children,
  className,
  as = "div",
}: StaggeredItemProps) {
  if (as === "li") {
    return (
      <motion.li variants={itemVariants} className={className}>
        {children}
      </motion.li>
    );
  }
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
