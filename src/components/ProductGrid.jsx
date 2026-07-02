import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

const products = [
  { id: 1, name: 'SILK GOWN', price: 85000, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop' },
  { id: 2, name: 'WOOL COAT', price: 120000, image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop' },
  { id: 3, name: 'LINEN DRESS', price: 45000, image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=500&fit=crop' },
  { id: 4, name: 'CASHMERE SET', price: 95000, image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=500&fit=crop' },
  { id: 5, name: 'EVENING JUMPSUIT', price: 110000, image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=500&fit=crop' },
  { id: 6, name: 'SATIN BLOUSE', price: 55000, image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=500&fit=crop' },
]

export default function ProductGrid({ onCartOpen }) {
  const { addToCart } = useCart()

  return (
    <section id="shop" className="py-32 px-6 max-w-7xl mx-auto bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-thin tracking-[0.2em] text-center mb-20"
      >
        THE COLLECTION
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            className="group relative bg-gray-900 overflow-hidden cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-between p-6">
              <div>
                <h3 className="text-sm font-light tracking-[0.2em]">{product.name}</h3>
                <p className="text-sm text-white/50 mt-1 font-light">₦{product.price.toLocaleString()}</p>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="bg-white text-black px-5 py-2 text-xs tracking-wider font-medium hover:bg-rose-500 hover:text-white transition-colors"
              >
                ADD
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIEW CART button at bottom of product grid */}
      <div className="flex justify-center mt-20">
        <button
          onClick={onCartOpen}
          className="bg-white text-black px-12 py-4 text-sm font-medium tracking-widest hover:bg-rose-500 hover:text-white transition-colors"
        >
          VIEW CART
        </button>
      </div>
    </section>
  )
}