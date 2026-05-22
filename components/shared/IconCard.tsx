import { cn } from "@/lib/utils";

interface IconCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export function IconCard({ icon, title, description, className }: IconCardProps) {
  return (
    <div className={cn("rounded-xl border border-zinc-200 bg-white p-6 transition-shadow hover:shadow-lg", className)}>
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-primary-900">{title}</h3>
      <p className="text-zinc-600 leading-relaxed">{description}</p>
    </div>
  );
}
