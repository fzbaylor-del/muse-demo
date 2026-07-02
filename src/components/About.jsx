import ScrollReveal from './ScrollReveal'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The <span className="text-rose-500">Vision</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe clothing is more than fabric — it's a statement. Every piece is handcrafted with meticulous attention to detail, designed for those who refuse to blend in.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From concept to final stitch, our process honors traditional techniques while embracing modern aesthetics. The result? Timeless pieces that redefine your wardrobe.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center text-gray-400 text-lg">
            [Brand Image Here]
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}