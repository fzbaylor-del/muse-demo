export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 text-center">
      <p className="text-white/30 text-xs tracking-widest">
        E-commerce Demo. Developed by{' '}
        <a
          href="https://ceo-portfolio-puce.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white transition-colors underline underline-offset-2"
        >
          Victor Enang
        </a>
        .
      </p>
    </footer>
  )
}