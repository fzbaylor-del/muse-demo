import ScrollReveal from './ScrollReveal'

const looks = [
  { src: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop', alt: 'Evening Gown' },
  { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop', alt: 'Streetwear Set' },
  { src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=500&fit=crop', alt: 'Tailored Suit' },
  { src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop', alt: 'Summer Dress' },
  { src: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=500&fit=crop', alt: 'Avant-Garde Piece' },
  { src: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=500&fit=crop', alt: 'Casual Linen' },
]

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-24 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          The <span className="text-rose-500">Lookbook</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {looks.map((item, i) => (
          <ScrollReveal key={i}>
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">{item.alt}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}