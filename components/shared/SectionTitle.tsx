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
      <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 max-w-2xl text-lg text-zinc-600 mx-auto">{subtitle}</p>}
      <div className={cn("mt-4 h-1 w-16 rounded-full bg-accent-400", centered && "mx-auto")} />
    </div>
  );
}
