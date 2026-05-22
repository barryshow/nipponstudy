import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-4xl font-bold text-primary-700 sm:text-5xl">{value}</div>
      <div className="mt-2 text-zinc-600">{label}</div>
    </div>
  );
}
