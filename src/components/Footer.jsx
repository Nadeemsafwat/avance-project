import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Top CTA Band */}
      <div className="border-t border-gold/20 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-tag mb-3">Start your project</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">
              Let's create something
              <br />
              <em className="text-gold">extraordinary.</em>
            </h2>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-3 border border-gold text-gold font-body font-light text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold hover:text-primary transition-all duration-500"
          >
            Begin Consultation
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10 py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex flex-col leading-none mb-6">
              <span className="font-display text-3xl font-light text-white">Avance</span>
              <span className="font-mono text-[9px] tracking-[0.5em] text-gold uppercase mt-0.5">Designs</span>
            </Link>
            <p className="font-body font-light text-white/50 text-sm leading-relaxed">
              Crafting spaces that inspire. Premium interior and exterior design for discerning clients.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6">Navigation</p>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body font-light text-sm text-white/60 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6">Services</p>
            <ul className="space-y-3">
              {['Interior Design', 'Exterior Design', 'Space Planning', 'Design Consultation', 'Project Management'].map((s) => (
                <li key={s}>
                  <span className="font-body font-light text-sm text-white/60">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold mb-6">Contact</p>
            <address className="not-italic space-y-3">
              <p className="font-body font-light text-sm text-white/60">7-5B Polygon, Sodic West, El Sheikh Zayed, 6 October City 02<br />Giza, Egypt</p>
              <p className="font-body font-light text-sm text-white/60">+20 15213</p>
              <p className="font-body font-light text-sm text-white/60">avance.designss@gmail.com</p>
            </address>
            <div className="flex gap-4 mt-6">
              {['IG', 'BE', 'LI', 'PI'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-mono text-xs text-white/40 hover:text-gold transition-colors duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-white/30">
            © {new Date().getFullYear()} Avance Designs. All rights reserved.
          </p>
          <p className="font-mono text-xs text-white/20">
            Crafted with precision & purpose.
          </p>
        </div>
      </div>
    </footer>
  )
}
