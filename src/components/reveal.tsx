"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { useMemo, type ReactNode } from "react";

type RevealProps = Omit<HTMLMotionProps<"div">, "ref"> & {
  delay?: number;
  children: ReactNode;
};

const REVEAL_INITIAL = { opacity: 0, y: 28 };
const REVEAL_ANIMATE = { opacity: 1, y: 0 };
const VIEWPORT = { once: true, margin: "0px 0px -120px 0px" };
const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({ delay = 0, children, className, ...props }: RevealProps) {
  return (
    <motion.div
      initial={REVEAL_INITIAL}
      whileInView={REVEAL_ANIMATE}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: REVEAL_EASE }}
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

export function StaggeredList({ children, className, as = "div", stagger = 0.09 }: StaggeredListProps) {
  const variants = useMemo(() => ({ hidden: {}, visible: { transition: { staggerChildren: stagger } } }), [stagger]);

  const sharedProps = {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: VIEWPORT,
    variants,
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function StaggeredItem({ children, className, as = "div" }: StaggeredItemProps) {
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
