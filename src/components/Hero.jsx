import { motion } from 'framer-motion'

const title = 'SUMMER 2026'.split('')

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { delay: 0.5 + i * 0.04, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video background */}
      <video
        autoPlay muted loop playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        poster="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=800&fit=crop"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-walking-in-a-black-dress-39849-large.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />

      <div className="relative z-20 text-center px-6">
        <motion.h1 className="text-7xl md:text-9xl font-extralight tracking-[0.3em] text-white flex justify-center flex-wrap mb-8">
          {title.map((letter, i) => (
            <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="visible" className="inline-block">
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="text-base md:text-lg text-white/50 font-light tracking-[0.3em] mb-12"
        >
          A NEW LIGHT ON STYLE
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 1 }}
          href="#shop"
          className="inline-block border border-white/40 text-white px-12 py-4 text-xs tracking-[0.3em] font-light hover:bg-white hover:text-black transition-all duration-500"
        >
          SHOP NOW
        </motion.a>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}