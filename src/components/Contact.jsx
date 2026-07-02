import { useState } from 'react'
import ScrollReveal from './ScrollReveal'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('https://formspree.io/f/YOUR_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join the <span className="text-rose-500">List</span>
        </h2>
        <p className="text-gray-600 mb-10">Be the first to know when the new collection drops.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
            required
            disabled={status === 'submitting'}
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-full transition-all disabled:opacity-50"
          >
            {status === 'submitting' ? 'Sending...' : 'Notify Me'}
          </button>
        </form>
        {status === 'success' && <p className="mt-4 text-green-600">You're on the list! ✨</p>}
        {status === 'error' && <p className="mt-4 text-red-500">Something went wrong. Please try again.</p>}
      </ScrollReveal>
    </section>
  )
}