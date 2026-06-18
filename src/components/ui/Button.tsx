import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "secondary" | "premium" | "whatsapp";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  icon?: React.ReactNode;
  onLinkClick?: () => void;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  icon,
  onLinkClick,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary: [
      "bg-cta-bg text-cta-text",
      "hover:opacity-90 active:scale-95",
      "focus:ring-heading",
    ].join(" "),
    secondary: [
      "bg-elevated text-accent",
      "border border-subtle",
      "hover:border-subtle-muted active:scale-95",
      "focus:ring-subtle",
    ].join(" "),
    ghost: [
      "bg-transparent text-body",
      "hover:text-heading",
      "focus:ring-subtle",
    ].join(" "),
    premium: [
      "bg-white text-primary",
      "shadow-[0_8px_32px_rgba(255,255,255,0.25)]",
      "hover:shadow-[0_12px_48px_rgba(255,255,255,0.45)]",
      "hover:-translate-y-1 active:scale-95",
      "focus:ring-white",
    ].join(" "),
    whatsapp: [
      "bg-[#25D366] text-white",
      "shadow-[0_6px_30px_rgba(37,211,102,0.4)]",
      "hover:shadow-[0_12px_48px_rgba(37,211,102,0.65)]",
      "hover:-translate-y-1 active:scale-95",
      "focus:ring-[#25D366]",
    ].join(" "),
  };

  const sizeStyles = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  const arrow =
    variant === "primary" ? (
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    ) : null;

  const buttonContent = (
    <span className="flex items-center gap-2 group">
      {children}
      {icon ? icon : arrow}
    </span>
  );

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onLinkClick}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {buttonContent}
    </button>
  );
}