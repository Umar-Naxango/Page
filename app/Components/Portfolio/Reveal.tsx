import { ReactNode, CSSProperties, ElementType } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

type RevealVariant = "fade-up" | "fade" | "fade-left" | "fade-right" | "zoom" | "blur-in";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

const variantClass: Record<RevealVariant, string> = {
  "fade-up": "reveal-fade-up",
  fade: "reveal-fade",
  "fade-left": "reveal-fade-left",
  "fade-right": "reveal-fade-right",
  zoom: "reveal-zoom",
  "blur-in": "reveal-blur",
};

export default function Reveal({
  children,
  as: Tag = "div",
  variant = "fade-up",
  delay = 0,
  duration = 800,
  className,
  style,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn("reveal", variantClass[variant], inView && "in-view", className)}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
