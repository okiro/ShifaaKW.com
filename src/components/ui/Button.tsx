import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "navy" | "gold" | "default";
type Size = "sm" | "md" | "lg" | "xl";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-sky text-white border-sky hover:bg-sky-hover active:bg-sky-active focus-visible:outline-sky focus-visible:ring-[4px] focus-visible:ring-sky-ring",
  secondary:
    "bg-white/80 text-fg border border-border-2 backdrop-blur-[8px] hover:bg-white/95 focus-visible:outline-fg",
  ghost:
    "bg-transparent text-fg border-transparent hover:bg-[rgba(10,37,64,0.06)]",
  outline:
    "bg-transparent text-sky border border-[rgba(0,136,204,0.4)] hover:bg-sky-tint hover:border-sky focus-visible:outline-sky",
  navy:
    "bg-navy text-white border-navy hover:bg-navy-light focus-visible:outline-navy",
  gold:
    "bg-gold text-white border-gold hover:bg-gold-hover focus-visible:outline-gold",
  default:
    "bg-fg text-white border-fg hover:bg-[#1a3a54] focus-visible:outline-fg",
};

const sizeStyles: Record<Size, string> = {
  sm: "h-8 px-3 text-[13px] rounded-[5px]",
  md: "h-9 px-4 text-[14px] rounded-[6px]",
  lg: "h-10 px-5 text-[15px] rounded-[6px]",
  xl: "h-11 px-6 text-[15px] rounded-[6px]",
};

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonProps = ButtonBaseProps &
  (
    | ({ href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">)
    | ({ href?: never } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">)
  );

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 font-medium whitespace-nowrap transition-all duration-150 outline-none cursor-pointer disabled:opacity-45 disabled:cursor-not-allowed disabled:pointer-events-none tracking-[-0.1px] [-webkit-font-smoothing:antialiased]",
    "focus-visible:outline-2 focus-visible:outline-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props as { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
