interface SectionLabelProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function SectionLabel({
  children,
  variant = "primary",
}: SectionLabelProps) {
  const variantStyles =
    variant === "primary"
      ? "bg-primary-fixed text-on-primary-fixed"
      : "bg-secondary-container text-on-secondary-container";

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${variantStyles} font-label text-xs font-bold uppercase tracking-wider`}
    >
      {children}
    </div>
  );
}
