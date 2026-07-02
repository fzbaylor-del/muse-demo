import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { total, clearCart } = useCart()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handlePay = async (e) => {
    e.preventDefault()
    setLoading(true)

    const amountKobo = total * 100 // Paystack expects kobo

    try {
      const response = await fetch('https://api.paystack.co/transaction/initialize', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_PAYSTACK_TEST_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          amount: amountKobo,
          callback_url: `${window.location.origin}/?payment=success`, // Redirect URL after payment
        }),
      })

      const data = await response.json()
      if (data.status) {
        // Paystack test mode will redirect to this URL
        window.location.href = data.data.authorization_url
      } else {
        alert('Payment initialization failed')
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-light tracking-widest mb-4">THANK YOU</h1>
          <p className="text-white/50">Your order has been placed. The designer will be in touch.</p>
          <a href="/" className="mt-8 inline-block border border-white/30 px-6 py-3 text-sm tracking-wider hover:bg-white hover:text-black transition-colors">CONTINUE SHOPPING</a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <h2 className="text-2xl font-light tracking-widest mb-8 text-center">CHECKOUT</h2>
        <div className="bg-gray-900 p-6 mb-6">
          <p className="text-sm text-white/50 mb-2">Order Summary</p>
          <p className="text-xl font-light">₦{total.toLocaleString()}</p>
        </div>
        <form onSubmit={handlePay}>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-transparent border border-white/20 px-4 py-3 mb-4 text-white placeholder-white/30 focus:outline-none focus:border-white"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-4 text-sm font-medium tracking-wider hover:bg-rose-500 hover:text-white transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'PAY NOW'}
          </button>
        </form>
      </div>
    </div>
  )
}