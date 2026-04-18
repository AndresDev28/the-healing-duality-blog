import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Hero Section - Asymmetric Layout with Gradient Background */}
      <section className="relative min-h-[80vh] overflow-hidden">
        {/* Gradient Background: primary (#596244) to primary-container (#8e9775) at 45 degrees */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary-container opacity-5" />

        {/* Asymmetric Content Grid */}
        <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Hero Text (Asymmetric: spans 7 columns) */}
            <div className="lg:col-span-7 space-y-8 lg:pr-24">
              {/* Label-Md: Uppercase, letter-spacing 0.1em */}
              <p className="font-label text-primary text-label-md uppercase tracking-widest font-medium">
                Welcome to the journey
              </p>

              {/* Display-Lg: 3.5rem, Noto Serif, letter-spacing -0.02em */}
              <h1 className="font-headline text-display-lg text-on-surface leading-[1.1] tracking-[-0.02em]">
                The Healing Duality Blog
              </h1>

              {/* Body-Lg: 1rem, Manrope */}
              <p className="font-body text-body-lg text-on-surface leading-relaxed max-w-xl">
                Exploring the delicate balance between strength and vulnerability, wisdom and wonder, healing and growth. A space for deep reflection and gentle transformation.
              </p>

              {/* Action Button - Primary Color with Pill Shape */}
              <div className="flex items-center gap-4">
                <button className="px-8 py-4 bg-primary text-on-surface rounded-pill font-body font-medium hover:bg-primary-container transition-colors duration-300">
                  Begin Your Journey
                </button>
              </div>
            </div>

            {/* Right Column - Hero Image (Asymmetric: spans 5 columns) */}
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              {/* Card: surface-container-lowest (#ffffff) for lift effect */}
              <div className="relative bg-surface-container-lowest rounded-[1.5rem] overflow-hidden editorial-shadow">
                {/* Placeholder for Hero Image */}
                <div className="aspect-[4/5] bg-gradient-to-br from-surface-container-low to-surface-container-lowest flex items-center justify-center">
                  <div className="text-center p-8 space-y-4">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-container opacity-20" />
                    <p className="font-label text-tertiary text-sm uppercase tracking-widest">
                      Editorial Image
                    </p>
                  </div>
                </div>

                {/* Metadata Overlay - Bottom Left */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-surface-container-lowest to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-label text-tertiary text-xs uppercase tracking-widest mb-1">
                        Featured Story
                      </p>
                      <p className="font-headline text-on-surface text-lg">
                        Finding Balance in Chaos
                      </p>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-primary text-surface-container-lowest flex items-center justify-center hover:bg-primary-container transition-colors duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Preview Section - Background Layering for Separation */}
      <section className="bg-surface-container-low py-20">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-2xl mb-12">
            <p className="font-label text-primary text-label-md uppercase tracking-widest font-medium mb-4">
              Latest Reflections
            </p>
            <h2 className="font-headline text-on-surface text-4xl lg:text-5xl leading-tight">
              Stories of Transformation
            </h2>
          </div>

          {/* Content Cards Grid - Using surface-container-lowest for lift */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-surface-container-lowest rounded-[1rem] p-8 space-y-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col items-start"
              >
                {/* Category Label */}
                <div>
                  <p className="font-label text-tertiary text-xs uppercase tracking-widest mb-2">
                    {post.tags?.[0] || 'Reflection'}
                  </p>
                </div>

                {/* Post Title */}
                <h3 className="font-headline text-on-surface text-xl leading-snug">
                  {post.title}
                </h3>

                {/* Post Excerpt */}
                <p className="font-body text-body-lg text-on-surface/80 leading-relaxed grow">
                  {post.description}
                </p>

                {/* Read More Link - No border, uses color instead */}
                <div className="pt-4 w-full">
                  <Link href={post.permalink} className="font-label text-primary text-sm uppercase tracking-widest hover:text-primary-container transition-colors duration-300 flex items-center gap-2">
                    Read Reflection
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
