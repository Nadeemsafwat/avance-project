import { useEffect, useState } from 'react'
import PageHero from '../components/PageHero'

const contactInfo = [
  {
    icon: '◎',
    label: 'Visit Us',
    lines: ['7-5B Polygon sodic west', 'Sodic West, Egypt'],
  },
  {
    icon: '◉',
    label: 'Call Us',
    lines: ['+20 15213', 'sunday – thursday, 9am – 6pm'],
  },
  {
    icon: '✉',
    label: 'Write to Us',
    lines: ['avancedesignss@gmail.com', 'projects@avancedesigns.com'],
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <>
      <PageHero
        tag="Get In Touch"
        title={<>Let's Build<br />Something <em>Remarkable.</em></>}
        subtitle="Whether you have a brief, a question, or simply a vision — we'd love to hear from you."
      />

      {/* Contact Info Strip */}
      <div className="bg-white border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10">
          {contactInfo.map((info, i) => (
            <div
              key={info.label}
              className={`py-10 px-8 flex items-start gap-5 animate-on-scroll stagger-${i + 1}`}
            >
              <span className="text-gold text-xl mt-1 shrink-0">{info.icon}</span>
              <div>
                <p className="font-mono text-[10px] tracking-[0.3em] text-primary/40 uppercase mb-2">
                  {info.label}
                </p>
                {info.lines.map((line) => (
                  <p key={line} className="font-body font-light text-primary text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <section className="py-28 px-6 lg:px-12 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <div className="animate-on-scroll">
            <p className="section-tag mb-4">Send a Message</p>
            <h2 className="section-title mb-10">
              Start the
              <br />conversation.
            </h2>

            {submitted ? (
              <div className="border border-gold bg-white p-12 text-center">
                <div className="font-display text-5xl text-gold mb-4">✓</div>
                <h3 className="font-display text-2xl font-light text-primary mb-3">
                  Thank you, {formData.name.split(' ')[0]}.
                </h3>
                <p className="font-body font-light text-primary/60 leading-relaxed">
                  Your message has been received. One of our team will be in touch within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' }) }}
                  className="mt-8 font-mono text-xs tracking-widest text-gold uppercase hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.3em] text-primary/50 uppercase block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full border border-primary/20 bg-white px-5 py-4 font-body font-light text-primary text-sm placeholder:text-primary/30 focus:outline-none focus:border-gold transition-colors duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.3em] text-primary/50 uppercase block mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-primary/20 bg-white px-5 py-4 font-body font-light text-primary text-sm placeholder:text-primary/30 focus:outline-none focus:border-gold transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] text-primary/50 uppercase block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+20 ..."
                    className="w-full border border-primary/20 bg-white px-5 py-4 font-body font-light text-primary text-sm placeholder:text-primary/30 focus:outline-none focus:border-gold transition-colors duration-300"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Service */}
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.3em] text-primary/50 uppercase block mb-2">
                      Service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border border-primary/20 bg-white px-5 py-4 font-body font-light text-primary text-sm focus:outline-none focus:border-gold transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="interior">Interior Design</option>
                      <option value="exterior">Exterior Design</option>
                      <option value="consultation">Design Consultation</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="font-mono text-[10px] tracking-[0.3em] text-primary/50 uppercase block mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full border border-primary/20 bg-white px-5 py-4 font-body font-light text-primary text-sm focus:outline-none focus:border-gold transition-colors duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select a range</option>
                      <option value="50k-100k">$50K – $100K</option>
                      <option value="100k-250k">$100K – $250K</option>
                      <option value="250k-500k">$250K – $500K</option>
                      <option value="500k+">$500K+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] text-primary/50 uppercase block mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and any relevant details..."
                    className="w-full border border-primary/20 bg-white px-5 py-4 font-body font-light text-primary text-sm placeholder:text-primary/30 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-3">
                      <span className="w-4 h-4 border border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>Send Message →</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map & Info */}
          <div className="animate-on-scroll stagger-2">
            <p className="section-tag mb-4">Find Us</p>
            <h2 className="section-title mb-10">
              Our
              <br />Studio.
            </h2>

            {/* Map Placeholder */}
            <div
              className="w-full aspect-[4/3] relative mb-8 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0A1F44 0%, #1E3A8A 100%)' }}
            >
              {/* Stylized map placeholder */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-4 h-4 bg-gold rounded-full mb-4 animate-pulse" />
                <p className="font-display text-xl font-light text-white mb-1">7-5B Polygon, Sodic West</p>
                <p className="font-mono text-xs tracking-widest text-gold/60 uppercase">Giza, Egypt</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 font-mono text-xs tracking-widest text-gold uppercase border border-gold/40 px-6 py-3 hover:bg-gold hover:text-primary transition-all duration-300"
                >
                  Open in Maps →
                </a>
              </div>
            </div>

            {/* Office hours */}
            <div className="bg-primary p-8">
              <p className="font-mono text-[10px] tracking-[0.4em] text-gold/60 uppercase mb-5">Studio Hours</p>
              <div className="space-y-3">
                {[
                  { day: 'Sunday – Thursday', hours: '9:00 AM – 6:00 PM' },
                  { day: 'Saturday', hours: 'closed' },
                  { day: 'Friday', hours: 'Closed' },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between items-center border-b border-white/5 pb-3">
                    <span className="font-body font-light text-sm text-white/60">{h.day}</span>
                    <span className="font-mono text-xs text-gold">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
