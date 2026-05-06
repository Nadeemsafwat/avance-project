import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'
import ProjectCard from '../components/ProjectCard'

const categories = ['All', 'Interior', 'Exterior', 'Hospitality', 'Commercial']

const projects = [
  { id: 1, name: 'Bushar133', category: 'Exterior', location: 'Oman', year: '2024', description: 'Minimalist luxury residential design with handcrafted millwork and layered marble.',image: '/Images/nour-residence.jpg', color: '#0A1F44', gradient: 'linear-gradient(135deg, #0A1F44 0%, #1E3A8A 60%)', aspect: '4/5' },
  { id: 2, name: 'Al khowair 1273', category: 'Exterior', location: 'Dubai', year: '2024', description: 'Parametric facade design for a landmark commercial tower in New Dubai.',image: '/Images/Khowair.jpeg', color: '#1E3A8A', gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)', aspect: '4/5' },
  { id: 3, name: 'Zahret el patio', category: 'Interior', location: 'Sheikh zayed', year: '2023', description: 'Biophilic coastal villa design blending local materials with tropical sensibility.', color: '#0D2759', gradient: 'linear-gradient(135deg, #0D2759 0%, #C9A96E 100%)', aspect: '4/5' },
  { id: 4, name: 'Palm Hills', category: 'Interior', location: 'Sheikh zayed', year: '2023', description: 'A 5-star boutique hotel reimagining traditional Arabian hospitality for the modern era.', color: '#C9A96E', gradient: 'linear-gradient(135deg, #C9A96E 0%, #0A1F44 100%)', aspect: '4/3' },
  { id: 5, name: 'Avance office', category: 'Commercial', location: 'Sheikh zayed', year: '2023', description: 'Open-plan tech headquarters with biophilic zones and flexible collaboration spaces.', color: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6 0%, #0A1F44 100%)', aspect: '4/3' },
  { id: 6, name: 'Bank', category: 'commercial', location: 'New administartive capital', year: '2023', description: 'A residential complex whose undulating facade mirrors the rhythm of the Mediterranean sea.', color: '#0A1F44', gradient: 'linear-gradient(135deg, #0A1F44 0%, #3B82F6 60%)', aspect: '4/3' },
  { id: 7, name: 'Advida', category: 'commercial', location: 'New Zayed', year: '2023', description: 'A heritage home restored and modernized with Qatari design motifs reimagined in luxury materials.', color: '#1E3A8A', gradient: 'linear-gradient(135deg, #1E3A8A 0%, #0A1F44 100%)', aspect: '4/5' },
  { id: 8, name: 'Al solimania', category: 'Interior', location: 'Sheikh zayed', year: '2023', description: 'An all-day dining concept defined by dramatic double-height volumes and artisanal finishes.', color: '#0D2759', gradient: 'linear-gradient(135deg, #0D2759 0%, #1E3A8A 100%)', aspect: '4/5' },
  { id: 9, name: 'Mountain View', category: 'Interior', location: 'New Cairp', year: '2021', description: 'Mixed-use development weaving retail, workspace, and public realm into a cohesive district.', color: '#C9A96E', gradient: 'linear-gradient(135deg, #C9A96E 0%, #1E3A8A 100%)', aspect: '4/3' },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [displayProjects, setDisplayProjects] = useState(projects)

  useEffect(() => {
    if (activeCategory === 'All') {
      setDisplayProjects(projects)
    } else {
      setDisplayProjects(projects.filter((p) => p.category === activeCategory))
    }
  }, [activeCategory])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    const els = document.querySelectorAll('.animate-on-scroll')
    els.forEach((el) => {
      el.classList.remove('visible')
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [displayProjects])

  return (
    <>
      <PageHero
        tag="Our Work"
        title={<>A Portfolio of<br /><em>Distinction.</em></>}
        subtitle="150+ projects across residential, commercial, and hospitality sectors — each one a testament to the power of intentional design."
      />

      {/* Filter Bar */}
      <div className="sticky top-[60px] z-30 bg-white/95 backdrop-blur border-b border-primary/10 py-5 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-2">
          <span className="font-mono text-xs text-primary/30 tracking-widest uppercase mr-2">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs tracking-[0.2em] uppercase px-5 py-2.5 transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'border border-primary/20 text-primary/60 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto font-mono text-xs text-primary/30">
            {displayProjects.length} project{displayProjects.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 px-6 lg:px-12 bg-[#FAFAFA] min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          {displayProjects.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-display text-3xl font-light text-primary/30">No projects found.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Award band */}
      <section className="py-16 px-6 lg:px-12 bg-primary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="animate-on-scroll">
            <p className="font-mono text-xs tracking-[0.4em] text-gold/60 uppercase mb-3">Recognition</p>
            <h3 className="font-display text-4xl font-light text-white">
              Award-Winning Practice
            </h3>
          </div>
          <div className="flex flex-wrap gap-8 animate-on-scroll stagger-2">
            {['SBID Award 2023', 'INDEX Design Award', 'MEED Project Award', 'Dezeen Shortlist'].map((award) => (
              <div key={award} className="text-center">
                <div className="font-mono text-[10px] tracking-widest text-gold/80 uppercase">{award}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
