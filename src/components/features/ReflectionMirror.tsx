import React from "react";
import { cn } from "@/lib/utils";

interface ReflectionMirrorProps {
  title?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export function ReflectionMirror({
  title,
  children,
  ariaLabel,
}: ReflectionMirrorProps) {
  return (
    <aside
      className={cn(
        // Glassmorphism base
        "bg-surface/80 backdrop-blur-md",
        "rounded-[var(--radius-xl)]",
        "ring-1 ring-white/30 ring-inset",
        // Typography
        "font-body text-on-surface",
        // Spacing
        "p-6"
      )}
      aria-label={ariaLabel || "Reflective content"}
      {...(title ? { "aria-labelledby": "mirror-title" } : {})}
    >
      {title && (
        <h3 id="mirror-title" className="font-headline text-primary mb-4">
          {title}
        </h3>
      )}
      <div className="prose prose-slate max-w-none">{children}</div>
    </aside>
  );
}
