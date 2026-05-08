import Link from 'next/link'
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"

interface HeroProps {
    label: string,
    title: string,
    description: string,
    buttonText: string,
    buttonHref: string
}

export default function Hero ({label, title, description, buttonText, buttonHref}: HeroProps) {
  return (
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
            {label}
          </p>

          {/* Display-Lg: 3.5rem, Noto Serif, letter-spacing -0.02em */}
          <h1 className="font-headline text-display-lg text-on-surface leading-[1.1] tracking-[-0.02em]">
            {title}
          </h1>

          {/* Body-Lg: 1rem, Manrope */}
          <p className="font-body text-body-lg text-on-surface leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Action Button - Primary Color with Pill Shape */}
          <div className="flex items-center gap-4">
            <Button variant="primary" size="lg" href={buttonHref}>
              {buttonText}
            </Button>
          </div>
        </div>

        {/* Right Column - Hero Image (Asymmetric: spans 5 columns) */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          {/* Card: surface-container-lowest (#ffffff) for lift effect */}
          <Card variant="elevated" padding="none" className="overflow-hidden relative">
            {/* Placeholder for Hero Image */}
            <div className="aspect-[4/5] bg-gradient-to-br from-surface-container-low to-surface-container-lowest flex items-center justify-center">
              <div className="text-center p-8 space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-container opacity-20" />
                <p className="font-label text-tertiary text-sm uppercase tracking-widest">
                  {label}{/*Editorial Image*/}
                </p>
              </div>
            </div>

            {/* Metadata Overlay - Bottom Left */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-surface-container-lowest to-transparent">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-label text-tertiary text-xs uppercase tracking-widest mb-1">
                    {label}{/* Feature history */}
                  </p>
                  <p className="font-headline text-on-surface text-lg">
                    {title} {/* Finding balance in caos */}
                  </p>
                </div>
                <Button className="w-12 h-12 rounded-full bg-primary text-surface-container-lowest flex items-center justify-center hover:bg-primary-container transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
  

}