interface BadgeProps {
  children: React.ReactNode;
  variant?: "teal" | "navy" | "gray";
}

const badgeVariants = {
  teal: "bg-teal-50 text-teal-700 border-teal-200",
  navy: "bg-navy-900/5 text-navy-900 border-navy-900/10",
  gray: "bg-gray-100 text-gray-700 border-gray-200",
};

export function Badge({ children, variant = "teal" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full border ${badgeVariants[variant]}`}
    >
      {children}
    </span>
  );
}
