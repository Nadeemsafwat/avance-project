import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

const team = [
  {
    name: 'Ahmed El Shenawy',
    role: 'Founder & Principal',
    bio: 'With 10 years shaping luxury environments across the Middle East and Europe, Layla brings a rare blend of cultural sensitivity and architectural rigor.',
    initials: 'LM',
    color: '#0A1F44',
  },
  {
    name: 'Omar Mohamed',
    role: 'Head of Exterior Design',
    bio: 'A graduate of the Architectural Association, Omar specializes in facade systems and contextual urbanism that balance boldness with belonging.',
    initials: 'KR',
    color: '#1E3A8A',
  },
  {
    name: 'Ahmed Shawky',
    role: 'Senior Interior Designer',
    bio: "Ahmed's background in fine arts and product design informs her obsessive attention to material selection, texture, and tactile experience.",
    initials: 'SN',
    color: '#C9A96E',
  },
  {
    name: 'Ahmed Abdelghany',
    role: 'Project Director',
    bio: 'Ahmed ensures every project is delivered on time and beyond expectation, coordinating complex teams across multiple international sites.',
    initials: 'OK',
    color: '#0D2759',
  },
]

const values = [
  {
    icon: '◇',
    title: 'Intentional Craft',
    description: 'Every material, every joint, every proportion is considered and reconsidered until it is exactly right.',
  },
  {
    icon: '○',
    title: 'Cultural Resonance',
    description: 'We design spaces that feel rooted in their context — culturally, climatically, and humanly.',
  },
  {
    icon: '△',
    title: 'Lasting Impact',
    description: 'Our work is built to endure. We reject trends in favor of timeless principles that age with grace.',
  },
]

export default function About() {
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
        tag="Our Story"
        title={<>Design with<br /><em>Purpose.</em></>}
        subtitle="Founded in 2012, Avance Designs has grown from a boutique Cairo studio into a globally recognized practice."
      />

      {/* Story */}
      <section className="py-28 px-6 lg:px-12 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="animate-on-scroll">
            <p className="section-tag mb-4">Our Origins</p>
            <h2 className="section-title mb-8">
              Born from a
              <br />belief in beauty.
            </h2>
            <div className="space-y-5 font-body font-light text-primary/70 leading-relaxed text-lg">
              <p>
                Avance Designs was founded by Ahmed El Shenawy His vision was simple: bring the precision and ambition of global design to the region's most discerning clients.
              </p>
              <p>
                What began as a three-person studio has grown into a 24-person multidisciplinary team, delivering transformative projects across residential, commercial, and hospitality sectors.
              </p>
              <p>
                We have never compromised on quality. We never will.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-on-scroll stagger-2">
            <div
              className="w-full aspect-square relative"
              style={{ background: 'linear-gradient(135deg, #0A1F44 0%, #1E3A8A 100%)' }}
            >
              <div className="absolute inset-6 border border-gold/20 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="font-display text-6xl font-light text-gold/70 mb-3">2012</div>
                  <div className="gold-line mx-auto mb-4" />
                  <div className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">Founded in Cairo</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gold p-6">
                <div className="font-display text-3xl font-light text-primary">8</div>
                <div className="font-mono text-[10px] tracking-widest text-primary/70 uppercase mt-1">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 px-6 lg:px-12 bg-primary">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-1">
          <div className="bg-white/5 border border-white/10 p-12 animate-on-scroll">
            <div className="font-mono text-xs tracking-[0.4em] text-gold uppercase mb-6">Mission</div>
            <h3 className="font-display text-4xl font-light text-white mb-6 leading-snug">
              To create spaces that elevate everyday life.
            </h3>
            <p className="font-body font-light text-white/50 leading-relaxed">
              We pursue excellence in every engagement — from a private apartment to a landmark tower — measuring success by the lasting impact we have on the people who inhabit our spaces.
            </p>
          </div>
          <div className="bg-gold p-12 animate-on-scroll stagger-2">
            <div className="font-mono text-xs tracking-[0.4em] text-primary/70 uppercase mb-6">Vision</div>
            <h3 className="font-display text-4xl font-light text-primary mb-6 leading-snug">
              To define the design language of our generation.
            </h3>
            <p className="font-body font-light text-primary/70 leading-relaxed">
              We see a future where exceptional design is not a luxury but an expectation — where the built environment consistently inspires, delights, and endures.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <p className="section-tag mb-4">What We Stand For</p>
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`group border border-primary/10 p-10 hover:border-gold hover:shadow-lg transition-all duration-500 animate-on-scroll stagger-${i + 1}`}
              >
                <div className="font-display text-4xl text-gold/60 mb-6 group-hover:text-gold transition-colors duration-300">
                  {v.icon}
                </div>
                <h3 className="font-display text-2xl font-light text-primary mb-4">{v.title}</h3>
                <p className="font-body font-light text-primary/60 leading-relaxed text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 px-6 lg:px-12 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 animate-on-scroll">
            <p className="section-tag mb-4">The People</p>
            <h2 className="section-title">
              Meet the
              <br />Team
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`group animate-on-scroll stagger-${i + 1}`}
              >
                {/* Avatar */}
                <div
                  className="w-full aspect-square flex items-center justify-center relative overflow-hidden mb-5"
                  style={{ background: `linear-gradient(135deg, ${member.color} 0%, ${member.color}cc 100%)` }}
                >
                  <span className="font-display text-5xl font-light text-white/80">{member.initials}</span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
                <h3 className="font-display text-xl font-light text-primary">{member.name}</h3>
                <p className="font-mono text-[10px] tracking-[0.2em] text-gold uppercase mt-1 mb-3">{member.role}</p>
                <p className="font-body font-light text-primary/50 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 lg:px-12 bg-primary text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll">
          <h2 className="font-display text-4xl md:text-5xl font-light text-white mb-6">
            Want to work with us?
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-3 border border-gold text-gold font-body font-light text-sm tracking-widest uppercase px-10 py-4 hover:bg-gold hover:text-primary transition-all duration-500">
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  )
}
