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
      ? "bg-elevated text-accent border border-subtle"
      : "bg-elevated text-body border border-subtle";

  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${variantStyles} font-label text-xs font-bold uppercase tracking-wider`}
    >
      {children}
    </div>
  );
}
