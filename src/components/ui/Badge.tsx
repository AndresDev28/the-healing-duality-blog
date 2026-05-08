import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode,
  variant?: "primary" | "tertiary",
  size?: 'sm' | 'md';
  className?: string 
}

export default function Badge({children, className, variant = 'primary', size = 'sm'}: BadgeProps) {

  const baseStyles = 'inline-flex items-center uppercase tracking-widest font-semibold rounded-pill'
  
  const variantStyles = {
      primary: 'bg-primary/10 text-primary',
      tertiary: 'bg-tertiary/10 text-tertiary'
  }

  const sizeStyles = {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-2.5 py-1'
  }

  const styles = cn(baseStyles, 
      variantStyles[variant],
      sizeStyles[size],
      className
  )

  return (
      <div className={styles}>
          {children}
      </div>
  )
}