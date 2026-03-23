"use client";

import { Badge } from "./Badge";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/cn";

export function SectionHeading({
  badge,
  badgeAr,
  title,
  titleAr,
  description,
  descriptionAr,
  className,
  align = "center",
}: {
  badge?: string;
  badgeAr?: string;
  title: string;
  titleAr: string;
  description?: string;
  descriptionAr?: string;
  className?: string;
  align?: "center" | "left";
}) {
  const { t } = useI18n();

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <Badge variant="sky" className="mb-4">
          {t(badge, badgeAr || badge)}
        </Badge>
      )}
      <h2 className="text-[32px] font-semibold tracking-[-0.6px] text-fg leading-[1.2] mb-3">
        {t(title, titleAr)}
      </h2>
      {description && (
        <p
          className={cn(
            "text-[15px] text-fg-muted leading-relaxed",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {t(description, descriptionAr || description)}
        </p>
      )}
    </div>
  );
}
