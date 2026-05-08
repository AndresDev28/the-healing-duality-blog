import Link from 'next/link'
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import Badge from "@/components/ui/Badge"

interface PostCardProps {
  post: {
    title: string
    description: string
    tags: string[]
    permalink: string
    image?: string // Opcional, porque algunos post podrían no tener imagen
  }
  showImage?: boolean // Para decidir si renderizamos la imagen o no
  className?: string
}

export default function PostCard({ post, showImage, className }: PostCardProps) {
  
  // Desestructuración de objeto post para usar sus propiedades directamente
  const { title, description, tags, permalink } = post

  return (
    <>
      <Card variant="default" className={`p-8 space-y-6 hover:scale-[1.02] transition-transform duration-300 flex flex-col items-start ${className || ''}`}
      >
        {/* Category usando Badge */}
        <Badge variant="primary" size="sm">
          {tags?.[0] || 'Reflection'}
        </Badge>
        
        {/* Title */}
        <h3 className="font-headline text-on-surface text-xl leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="fonst-body text-body-lg text-on-surface/80 leading-relaxed grow" >
          {description}
        </p>

        {/* Read More Link */}
        <div className="pt-4 w-full">
          <Link href={permalink} className="font-label text-primary text-sm uppercase tracking-widest hover:text-primary-container transition-colors duration-300 flex items-center gap-2">
            Read Reflection
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Card>
    </>
  )
}