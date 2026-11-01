import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({ title, subtitle, centered = true, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", centered && "text-center", className)}>
      <h2 className="font-display text-3xl font-medium text-primary-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-base text-zinc-600">{subtitle}</p>}
      <div className={cn("mt-4 h-px w-12 bg-accent-400", centered && "mx-auto")} />
    </div>
  );
}
