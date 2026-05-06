export default function PageHero({ tag, title, subtitle, bgColor = 'bg-primary', image = null }) {
  return (
    <section
      className={`relative min-h-[50vh] flex items-end ${bgColor} overflow-hidden`}
      style={image ? {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {image && <div className="absolute inset-0 bg-primary/70" />}

      {/* Decorative lines */}
      <div className="absolute top-0 right-0 w-px h-full bg-gold/20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gold/20" />

      {/* Corner marks */}
      <div className="absolute top-8 left-6 lg:left-12 flex items-center gap-3">
        <div className="w-8 h-px bg-gold/40" />
        <span className="font-mono text-[10px] tracking-[0.4em] text-gold/60 uppercase">
          Avance Designs
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-16 pt-40">
        {tag && (
          <p className="section-tag mb-4">{tag}</p>
        )}
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight max-w-3xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 font-body font-light text-white/60 text-lg max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-8 flex items-center gap-4">
          <div className="w-16 h-px bg-gold" />
          <div className="w-2 h-2 rounded-full bg-gold" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAFA] to-transparent" />
    </section>
  )
}
