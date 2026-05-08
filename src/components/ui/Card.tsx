import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "default" | "glass" | "elevated";
  onClick?: () => void;
}

export default function Card({children, className, padding = "md", variant = "default", onClick}: CardProps) {

  const baseStyles = "rounded-xl transition-all";
  const variantStyles = {
      default: "bg-surface-container-lowest",
      glass: "glass-panel",
      elevated: "editorial-shadow"
  }

  const paddingStyles = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
  }

  const isInteractive = !!onClick // Esto es útil para aplicar estilos condicionales, como cambiar el cursor a pointer solo cuando el card es clickeable.

  const styles = cn(baseStyles, 
      variantStyles[variant], 
      paddingStyles[padding], 
      isInteractive && "cursor-pointer hover:scale-[1.02] transition-transform duration-300",
      className);

  return (
      <div className={styles} onClick={onClick}>
          {children}
      </div>
  )
}