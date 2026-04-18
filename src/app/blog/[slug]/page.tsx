import React from "react";
import { posts } from "@/lib/posts";
import { mdxComponents } from "@/components/features/MDXComponents";
import { MDXRenderer } from "@/components/features/MDXRenderer";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Generate static params for all posts (SSG)
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// SEO metadata generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-surface">
      {/* Header - Asymmetric 7/5 Grid Layout */}
      <header className="bg-surface py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left column: Content (spans 7 columns on lg) */}
            <div className="lg:col-span-7">
              <h1 className="font-headline text-display-lg text-on-surface tracking-[-0.02em]">
                {post.title}
              </h1>
              <p className="font-body text-body-lg text-on-surface/80 mt-4 leading-relaxed">
                {post.description}
              </p>
              <div className="flex items-center gap-4 mt-6 font-label text-sm text-tertiary uppercase tracking-widest">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.videoID && (
                  <>
                    <span>•</span>
                    <span>Video Available</span>
                  </>
                )}
              </div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-label uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right column: Cover image (if available, spans 5 columns) */}
            {post.image && (
              <div className="lg:col-span-5">
                <div className="bg-surface-container-lowest rounded-[var(--radius-xl)] overflow-hidden editorial-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Content section with background transition */}
      <section className="bg-surface-container-low py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <MDXRenderer code={post.content} />
        </div>
      </section>

      {/* Footer with surface background */}
      <footer className="bg-surface py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-label text-tertiary text-sm uppercase tracking-widest">
            Thank you for reading
          </p>
        </div>
      </footer>
    </article>
  );
}
