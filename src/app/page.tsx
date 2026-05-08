import { posts } from "@/lib/posts";;
import  Hero  from "@/components/features/Hero"
import PostGrid from "@/components/features/PostGrid"

export default function Home() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Hero Section - Asymmetric Layout with Gradient Background */}
      <Hero
        label="Welcome to the journey"
        title="The Healing Duality Blog"
        description="Exploring the delicate balance between strength and vulnerability, wisdom and wonder, healing and growth. A space for deep reflection and gentle transformation."
        buttonText="Begin Your Journey"
        buttonHref="/blog"
      />
      <PostGrid 
        posts={posts}
        showHeader={true}
        headerLabel="Lates Reflection"
        headerTitle="Stories of TRansformation"
      />
    </div>
  );
}
