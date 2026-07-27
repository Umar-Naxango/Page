"use client";

import { ReactNode, CSSProperties, ElementType } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface StaggerProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
}

/**
 * Wraps a group of children — each child fades-up sequentially when the wrapper enters view.
 * Pairs with `.stagger` CSS in index.css (handles up to 6 children).
 */
export default function Stagger({ children, as: Tag = "div", className, style }: StaggerProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag ref={ref} className={cn("stagger", inView && "in-view", className)} style={style}>
      {children}
    </Tag>
  );
}
