import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700", className)}>
      {children}
    </span>
  );
}
