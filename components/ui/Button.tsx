import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variantStyles = {
  primary:
    "bg-accent-500 text-white hover:bg-accent-600",
  secondary:
    "bg-accent-500 text-white hover:bg-accent-600",
  outline:
    "border border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({ children, href, variant = "primary", size = "md", className, onClick, type, disabled }: ButtonProps) {
  const styles = cn(
    "inline-flex min-h-11 items-center justify-center rounded-md font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type || "button"} onClick={onClick} disabled={disabled} className={styles}>
      {children}
    </button>
  );
}
