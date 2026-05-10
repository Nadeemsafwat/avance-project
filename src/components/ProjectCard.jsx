import { useState } from 'react'

export default function ProjectCard({ project, index = 0 }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`group relative overflow-hidden cursor-pointer animate-on-scroll stagger-${Math.min(index + 1, 6)}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: project.aspect || '4/3' }}
      >
        <div
          className="absolute inset-0 transition-transform duration-[1200ms] ease-luxury group-hover:scale-110"
          style={{
            backgroundColor: project.color || '#1E3A8A',
            backgroundImage: project.image
            ? `url(${project.image})`
            : project.gradient
            ,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Simulated image with geometric overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="transition-all duration-700"
            style={{
              width: '60%',
              height: '60%',
              border: '1px solid rgba(201, 169, 110, 0.3)',
              transform: hovered ? 'rotate(3deg) scale(1.05)' : 'rotate(0deg) scale(1)',
              transition: 'transform 800ms cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          />
        </div>

        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className="font-mono text-[10px] tracking-[0.3em] text-gold/80 uppercase bg-primary/60 backdrop-blur-sm px-3 py-1.5">
            {project.category}
          </span>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-primary/80 flex flex-col justify-end p-8 transition-all duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="gold-line mb-4" />
          <h3 className="font-display text-2xl font-light text-white mb-2">
            {project.name}
          </h3>
          <p className="font-body font-light text-white/70 text-sm leading-relaxed">
            {project.description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-gold">
            <span className="font-mono text-xs tracking-widest uppercase">View Project</span>
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="pt-5 pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-display text-xl font-light text-primary group-hover:text-secondary transition-colors duration-300">
              {project.name}
            </h3>
            <p className="font-body font-light text-sm text-primary/50 mt-1">
              {project.location} · {project.year}
            </p>
          </div>
          <div
            className={`mt-1 text-gold transition-all duration-300 ${hovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
          >
            →
          </div>
        </div>
      </div>
    </div>
  )
}
