import { useState } from 'react'
import { SERVICES } from '../data.js'
import ServiceModal from './ServiceModal.jsx'

export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Services</p>
          <h2>Comprehensive home care, tailored to you</h2>
          <p className="section-sub">From skilled nursing to specialized treatments, our team delivers a complete range of professional home care services designed around your family&apos;s needs.</p>
        </div>

        <div className="cards-grid">
          {SERVICES.map(svc => (
            <article
              key={svc.id}
              className="card"
              tabIndex={0}
              role="button"
              onClick={() => setActive(svc)}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(svc) } }}
            >
              <div className="card-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: svc.icon }} />
              </div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <span className="card-link">Know More →</span>
            </article>
          ))}
        </div>

        <div className="services-cta">
          <p>Need a service you don&apos;t see here? We&apos;re happy to help — just reach out.</p>
          <a href="https://wa.me/916301052929" className="btn btn-primary" target="_blank" rel="noopener">Talk to Our Care Team</a>
        </div>
      </div>

      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </section>
  )
}
