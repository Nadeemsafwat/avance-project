import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import ProjectCard from '../components/ProjectCard'

const featuredProjects = [
  {
    id: 1,
    name: 'Mountain View',
    category: 'Interior',
    location: 'New Cairo',
    year: '2024',
    description: 'A masterclass in minimalist luxury — warm marble, handcrafted millwork, and layered light.',
    color: '#0A1F44',
    gradient: 'linear-gradient(135deg, #0A1F44 0%, #1E3A8A 100%)',
    aspect: '4/5',
  },
  {
    id: 2,
    name: 'Advida Compound',
    category: 'Exterior',
    location: 'New Zayed',
    year: '2024',
    description: 'A bold commercial compound that redefines the skyline with parametric stone cladding.',
    color: '#1E3A8A',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
    aspect: '4/5',
  },
  {
    id: 3,
    name: 'Al khowair1273',
    category: 'Exterior',
    location: 'Oman',
    year: '2023',
    description: 'Biophilic design meets coastal luxury in this breathtaking administrative and residential buildings.',
    color: '#0D2759',
    gradient: 'linear-gradient(135deg, #0D2759 0%, #C9A96E 100%)',
    aspect: '4/5',
  },
]

const services = [
  {
    number: '01',
    title: 'Interior Design',
    description: 'Complete interior transformations — from concept to completion, crafted with intention.',
  },
  {
    number: '02',
    title: 'Exterior Design',
    description: 'Facades, landscapes, and architectural exteriors that command attention.',
  },
  {
    number: '03',
    title: 'Design Consultation',
    description: 'Expert guidance for those navigating significant design decisions.',
  },
]

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '12', label: 'Years of Mastery' },
  { value: '8', label: 'Countries' },
  { value: '96%', label: 'Client Satisfaction' },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const els = document.querySelectorAll('.animate-on-scroll')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-primary flex items-center overflow-hidden"
      >
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Decorative vertical line */}
        <div className="absolute top-0 right-1/3 w-px h-full bg-gold/10" />

        {/* Large background text */}
        <div className="absolute bottom-0 right-0 font-display text-[20vw] font-bold text-white/[0.02] leading-none select-none pointer-events-none">
          A
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gold" />
              <span className="font-mono text-xs tracking-[0.4em] text-gold uppercase">
                Premium Design Studio
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] mb-8">
              Where Vision
              <br />
              <em className="text-gold">Becomes</em>
              <br />
              Space.
            </h1>

            <p className="font-body font-light text-white/60 text-lg leading-relaxed mb-10 max-w-md">
              Avance Designs is an award-winning studio specializing in interior and exterior design for clients who demand the extraordinary.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="btn-primary">
                Explore Our Work
                <span>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/20 text-white/80 font-body font-light text-sm tracking-widest uppercase px-8 py-4 hover:border-gold hover:text-gold transition-all duration-500"
              >
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right — abstract design visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg ml-auto">
              {/* Layered geometric shapes */}
              <div className="absolute inset-0 border border-gold/20 rotate-6" />
              <div className="absolute inset-4 border border-gold/10 -rotate-3" />
              <div
                className="absolute inset-12 flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #0A1F44 100%)',
                  border: '1px solid rgba(201,169,110,0.3)',
                }}
              >
                <div className="text-center">
                  <div className="font-display text-7xl font-light text-gold/60 mb-2">12</div>
                  <div className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">Years of Excellence</div>
                </div>
              </div>

              {/* Floating accent cards */}
              <div className="absolute -bottom-6 -left-6 bg-gold p-5">
                <div className="font-display text-4xl font-light text-primary">150+</div>
                <div className="font-mono text-[10px] tracking-widest text-primary/70 uppercase">Projects</div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur p-4 border border-white/10">
                <div className="font-mono text-[10px] tracking-widest text-gold uppercase mb-1">Latest</div>
                <div className="font-display text-sm text-white">Bushar133</div>
                <div className="font-mono text-[10px] text-white/40 mt-1">Muscat, Oman · 2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="bg-white border-b border-primary/10 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center animate-on-scroll stagger-${i + 1}`}>
              <div className="font-display text-4xl font-light text-primary">{s.value}</div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-primary/40 uppercase mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-28 px-6 lg:px-12 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div className="animate-on-scroll">
              <p className="section-tag mb-4">Selected Work</p>
              <h2 className="section-title">
                Featured
                <br />
                Projects
              </h2>
            </div>
            <Link to="/portfolio" className="btn-ghost animate-on-scroll">
              View All Projects
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="py-28 px-6 lg:px-12 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll">
              <p className="section-tag mb-4">What We Do</p>
              <h2 className="font-display text-5xl lg:text-6xl font-light text-white leading-tight">
                Design as a
                <br />
                <em className="text-gold">Philosophy.</em>
              </h2>
              <p className="mt-6 font-body font-light text-white/50 text-lg leading-relaxed">
                We believe every space is an opportunity to elevate the human experience. Our process is rigorous, our craft is refined.
              </p>
              <Link to="/services" className="mt-10 inline-flex items-center gap-3 border border-gold text-gold font-body font-light text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold hover:text-primary transition-all duration-500">
                Explore Services
                <span>→</span>
              </Link>
            </div>

            <div className="space-y-0 divide-y divide-white/10">
              {services.map((s, i) => (
                <div
                  key={s.number}
                  className={`group py-8 flex gap-8 items-start hover:bg-white/5 px-4 -mx-4 transition-colors duration-300 cursor-pointer animate-on-scroll stagger-${i + 1}`}
                >
                  <span className="font-mono text-xs tracking-widest text-gold/60 mt-1 shrink-0">
                    {s.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-light text-white group-hover:text-gold transition-colors duration-300 mb-2">
                      {s.title}
                    </h3>
                    <p className="font-body font-light text-white/40 text-sm leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                  <span className="ml-auto text-white/20 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300 mt-1 shrink-0">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE BAND ── */}
      <div className="overflow-hidden bg-gold py-4">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{
            animation: 'marquee 20s linear infinite',
          }}
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="font-display text-xl font-light text-primary/70 tracking-widest">
              Interior Design &nbsp;·&nbsp; Exterior Design &nbsp;·&nbsp; Luxury Spaces &nbsp;·&nbsp; Award-Winning Studio &nbsp;·&nbsp;
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>

      {/* ── CTA ── */}
      <section className="py-32 px-6 lg:px-12 bg-white text-center">
        <div className="max-w-3xl mx-auto animate-on-scroll">
          <p className="section-tag mb-6">Ready to begin?</p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-primary leading-tight mb-6">
            Your dream space
            <br />
            <em>awaits.</em>
          </h2>
          <p className="font-body font-light text-primary/50 text-lg mb-12 max-w-md mx-auto">
            Schedule a complimentary consultation with our lead designers and explore what's possible.
          </p>
          <Link to="/contact" className="btn-primary">
            Book a Consultation
            <span>→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
