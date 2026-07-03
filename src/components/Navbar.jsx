import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ onCartOpen }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-2xl border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="text-3xl font-thin tracking-[0.3em] text-white hover:text-rose-400 transition-colors">
          MUSE
        </a>
        <div className="hidden md:flex items-center gap-12 text-xs font-light tracking-[0.2em] text-white/60">
          <a href="#shop" className="hover:text-white transition-colors">SHOP</a>
          <button onClick={onCartOpen} className="relative text-white/60 hover:text-white transition-colors">
            <span className="text-xl">🛍️</span>
            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-sans">2</span>
          </button>
        </div>
        <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/5"
          >
            <div className="flex flex-col gap-6 px-6 py-8 text-white text-sm font-light tracking-widest">
              <a href="#shop" onClick={() => setMenuOpen(false)}>SHOP</a>
              <button onClick={() => { onCartOpen(); setMenuOpen(false); }}>🛍️ CART</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}