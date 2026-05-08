import PostCard from "./PostCard"

interface PostGridProps {
  posts: Array<{
    title: string
    description: string
    tags: string[]
    permalink: string
    image?: string
  }>
  columns?: 1 | 2 | 3 | 4 // Columnas en desktop
  showHeader?: boolean // Mostrar titulo de sección
  headerLabel?: string // "Lastest Reflections"
  headerTitle?: string // "Stories of Transofrmation"
}

export default function PostGrid({ posts, columns, showHeader, headerLabel, headerTitle}: PostGridProps) {

  
  return (
    <section className="bg-surface-container-low py-20">
    <div className="container mx-auto px-6">
      
      {/* 1. HEADER CONDICIONAL */}
      {showHeader && (
        <div className="max-w-2xl mb-12">
          <p className="font-label text-primary text-label-md uppercase tracking-widest font-medium mb-4">
            {headerLabel}
          </p>
          <h2 className="font-headline text-on-surface text-4xl lg:text-5xl leading-tight">
            {headerTitle}
          </h2>
        </div>
      )}
      {/* 2. GRID O MENSAJE VACÍO */}
      {posts.length === 0 ? (
        <p className="font-body text-on-surface text-center py-12">
          No hay publicaciones disponibles
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      )}
    </div>
  </section>
  )
}