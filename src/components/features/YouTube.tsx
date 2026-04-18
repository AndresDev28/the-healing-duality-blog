import React from "react";
import { cn } from "@/lib/utils";

interface YouTubeProps {
  id: string;
  title?: string;
}

export function YouTube({ id, title }: YouTubeProps) {
  return (
    <div className={cn(
      "my-8",
      "aspect-video",           // 16:9 aspect ratio
      "bg-surface-container-low", // Placeholder background while loading
      "rounded-[var(--radius-xl)]",
      "overflow-hidden",
      "editorial-shadow"
    )}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        title={title || "YouTube video player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full relative z-10"
        loading="lazy"
      />
    </div>
  );
}
