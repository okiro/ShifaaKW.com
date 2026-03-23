import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function GlassCard({
  children,
  hoverable = true,
  className,
}: {
  children: ReactNode;
  hoverable?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-card",
        !hoverable && "hover:transform-none hover:bg-[rgba(255,255,255,0.72)] hover:border-[rgba(255,255,255,0.55)]",
        className
      )}
    >
      {children}
    </div>
  );
}
