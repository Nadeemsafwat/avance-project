import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const services = [
  {
    id: 'interior',
    number: '01',
    title: 'Interior Design',
    tagline: 'The art of living beautifully.',
    description:
      'From concept to completion, we design interior environments that are as functional as they are beautiful. Our interiors balance architectural integrity with personal expression — every material selected, every detail resolved.',
    offerings: [
      'Residential interiors',
      'Hospitality & F&B',
      'Commercial offices',
      'Custom furniture design',
      'Art curation & styling',
      'Lighting design',
    ],
    color: '#0A1F44',
    accent: '#C9A96E',
  },
  {
    id: 'exterior',
    number: '02',
    title: 'Exterior Design',
    tagline: 'Architecture that commands presence.',
    description:
      "Our exterior practice encompasses facade design, landscape architecture, and built environment strategy. We believe a building's exterior is its first conversation with the world — and we make every word count.",
    offerings: [
      'Facade design & cladding',
      'Landscape architecture',
      'Master planning',
      'Urban design',
      'Lighting masterplans',
      'Wayfinding & signage',
    ],
    color: '#1E3A8A',
    accent: '#3B82F6',
  },
  {
    id: 'consultation',
    number: '03',
    title: 'Design Consultation',
    tagline: 'Clarity before commitment.',
    description:
      'Not every project requires full engagement. Our consultation service provides expert direction, feedback, and strategy for clients who want to move confidently through significant design decisions.',
    offerings: [
      'Initial design review',
      'Concept direction sessions',
      'Material & finish selection',
      'Contractor briefings',
      'Design audits',
      'Feasibility assessments',
    ],
    color: '#0D2759',
    accent: '#C9A96E',
  },
]

const process = [
  { step: '01', label: 'Discovery', desc: 'We listen deeply — understanding your life, your vision, and your space.' },
  { step: '02', label: 'Concept', desc: 'We translate insight into a clear, compelling design direction.' },
  { step: '03', label: 'Development', desc: 'Every detail is worked through — materials, fixtures, joinery, lighting.' },
  { step: '04', label: 'Delivery', desc: 'We oversee execution to ensure the finished space matches the vision.' },
]

export default function Services() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageHero
        tag="Our Expertise"
        title={<>Services Built<br />for the <em>Exceptional.</em></>}
        subtitle="Three pillars of practice, each delivered with the same uncompromising commitment to excellence."
      />

      {/* Services list */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-28 px-6 lg:px-12 ${i % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            {/* Visual — alternates sides */}
            <div
              className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''} animate-on-scroll`}
            >
              <div
                className="w-full aspect-[4/3] relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}dd 100%)` }}
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(${service.accent} 1px, transparent 1px), linear-gradient(90deg, ${service.accent} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="font-display text-9xl font-bold leading-none"
                      style={{ color: `${service.accent}15` }}
                    >
                      {service.number}
                    </div>
                    <div
                      className="font-mono text-xs tracking-[0.4em] uppercase mt-4"
                      style={{ color: `${service.accent}60` }}
                    >
                      {service.title}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: service.accent }}
                />
              </div>
            </div>

            {/* Content */}
            <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} animate-on-scroll stagger-2`}>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-gold">{service.number}</span>
                <div className="w-8 h-px bg-gold" />
              </div>
              <h2 className="section-title mb-3">{service.title}</h2>
              <p className="font-display text-xl font-light text-gold italic mb-6">{service.tagline}</p>
              <p className="font-body font-light text-primary/60 leading-relaxed text-lg mb-10">
                {service.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-10">
                {service.offerings.map((o) => (
                  <div key={o} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-gold rounded-full shrink-0" />
                    <span className="font-body font-light text-sm text-primary/70">{o}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="btn-primary">
                Enquire About This Service →
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-28 px-6 lg:px-12 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="section-tag mb-4">How We Work</p>
            <h2 className="font-display text-5xl font-light text-white">Our Process</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {process.map((p, i) => (
              <div
                key={p.step}
                className={`p-10 group animate-on-scroll stagger-${i + 1}`}
              >
                <div className="font-mono text-3xl font-light text-gold/30 mb-6 group-hover:text-gold transition-colors duration-300">
                  {p.step}
                </div>
                <h3 className="font-display text-2xl font-light text-white mb-3">{p.label}</h3>
                <p className="font-body font-light text-white/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 bg-white text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <p className="section-tag mb-4">Let's Begin</p>
          <h2 className="section-title mb-6">Ready to start your project?</h2>
          <Link to="/contact" className="btn-primary">
            Book a Free Consultation →
          </Link>
        </div>
      </section>
    </>
  )
}
