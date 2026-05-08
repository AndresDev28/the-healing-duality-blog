import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export default function Button({variant = "primary", size = "md", className, children, href, onClick, icon}: ButtonProps) {

  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-pill font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = { // Tokens del diseño definidos en el tema de Tailwind y SPEC
    primary: "bg-primary text-on-surface hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-surface-container-low text-on-surface hover:bg-surface-container-low/90 focus:ring-secondary",
    ghost: "hover:bg-transparent hover:bg-primary/10 focus:ring-primary",
  };

  const sizeStyles = { 
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Agrego cn para combinar las clases, tanto base cono las variantes y tamaños para resolver conflictos con Tailwind. React modernoo y limpio. Además, permite que el usuario agregue clases personalizadas a través de className sin preocuparse por el orden o la duplicación de clases.
  const styles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  // Content se crea para evitar la repetición de código tanto en el botón como en el enlace (DRY - Don't Repeat Yourself).
  const content = (
    <>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
    </>
  );

  // Resolver polimorfismo (Link vs Button) y en cuanto a TypeScript, el componente ButtonProps incluye tanto las propiedades de un botón tradicional como las de un enlace, lo que permite que el componente se adapte a diferentes casos de uso sin necesidad de crear componentes separados para cada tipo de elemento interactivo.
  if (href) {
    return (
        <Link href={href} className={styles} onClick={onClick}>
            {content}
        </Link>
    )
  }

  return (
    <button className={styles} onClick={onClick}>
        {content}
    </button>
  )
}