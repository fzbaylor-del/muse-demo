import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'

export default function Cart({ isOpen, onClose, onCheckout }) {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            className="absolute right-0 top-0 h-full w-96 bg-gray-900 text-white p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-light tracking-widest">CART</h2>
              <button onClick={onClose} className="text-2xl font-light">✕</button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-white/50 font-light">Your cart is empty.</p>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto space-y-6">
                  {cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1">
                        <h4 className="text-sm font-light tracking-wider">{item.name}</h4>
                        <p className="text-sm text-white/50">₦{item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-lg">-</button>
                          <span className="text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-lg">+</button>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-white/50 hover:text-rose-500">✕</button>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <div className="flex justify-between text-lg font-light mb-6">
                    <span>TOTAL</span>
                    <span>₦{total.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={onCheckout}
                    className="block w-full bg-white text-black text-center py-4 text-sm font-medium tracking-wider hover:bg-rose-500 hover:text-white transition-colors"
                  >
                    CHECKOUT
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}