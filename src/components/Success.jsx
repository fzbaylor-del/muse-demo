import { useEffect } from 'react'
import { useCart } from '../context/CartContext'

export default function Success({ onBack }) {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div style={{ minHeight: '100vh', background: 'black', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div>
        <h1 style={{ fontSize: '2rem', fontWeight: 300, letterSpacing: '0.2em', marginBottom: '1rem' }}>THANK YOU</h1>
        <p style={{ color: '#aaa', marginBottom: '2rem' }}>Your order has been placed. The designer will be in touch.</p>
        <button
          onClick={onBack}
          style={{
            border: '1px solid white',
            padding: '0.75rem 1.5rem',
            letterSpacing: '0.2em',
            background: 'transparent',
            color: 'white',
            cursor: 'pointer',
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          CONTINUE SHOPPING
        </button>
      </div>
    </div>
  )
}