import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

type BadgeVariant = "default" | "secondary" | "outline" | "sky" | "navy" | "gold" | "success" | "error" | "warning" | "info";

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-fg text-white",
  secondary: "bg-white/70 text-fg-muted border-border backdrop-blur-[6px]",
  outline: "bg-transparent text-fg border-border-2",
  sky: "bg-[rgba(0,136,204,0.10)] text-sky border-[rgba(0,136,204,0.20)]",
  navy: "bg-navy-tint text-navy border-[rgba(0,62,120,0.15)]",
  gold: "bg-gold-tint text-gold border-[rgba(200,149,42,0.2)]",
  success: "bg-[#F0FDF4] text-success border-[#BBF7D0]",
  error: "bg-[#FEF2F2] text-error border-[#FECACA]",
  warning: "bg-[#FFFBEB] text-warning border-[#FDE68A]",
  info: "bg-[#F0F9FF] text-info border-[#BAE6FD]",
};

export function Badge({
  variant = "default",
  dot,
  children,
  className,
}: {
  variant?: BadgeVariant;
  dot?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-transparent whitespace-nowrap",
        variantStyles[variant],
        className
      )}
    >
      {dot && (
        <span className="w-[5px] h-[5px] rounded-full shrink-0 bg-current" />
      )}
      {children}
    </span>
  );
}
