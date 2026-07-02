import { useState, useEffect } from 'react'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Success from './components/Success'
import Footer from './components/Footer'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState('home') // 'home' | 'checkout' | 'success'

  useEffect(() => {
    if (window.location.search.includes('payment=success')) {
      setCurrentPage('success')
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  const navigateToCheckout = () => setCurrentPage('checkout')
  const navigateToHome = () => setCurrentPage('home')
  const navigateToSuccess = () => setCurrentPage('success')

  return (
    <CartProvider>
      {currentPage === 'success' && <Success onBack={navigateToHome} />}
      {currentPage === 'checkout' && <Checkout onBack={navigateToHome} onSuccess={navigateToSuccess} />}
      {currentPage === 'home' && (
        <div className="min-h-screen bg-black text-white">
          <Navbar onCartOpen={() => setCartOpen(true)} />
          <Hero />
          <ProductGrid onCartOpen={() => setCartOpen(true)} />
          <Cart
            isOpen={cartOpen}
            onClose={() => setCartOpen(false)}
            onCheckout={navigateToCheckout}
          />
          <Footer />
        </div>
      )}
    </CartProvider>
  )
}

export default App