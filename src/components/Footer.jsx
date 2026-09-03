const WA_PATH = 'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.53 15.26L2 22l4.85-1.42A10 10 0 1 0 12 2z'

const SERVICES_LIST = [
  'Nursing Care','Care Taker','Pediatric Care','Old Age Care','Doctor Consultation',
  'Physiotherapy','Post-Surgical Care','Mother & Baby Care','Palliative Care',
  'Lab Sample Collection','Medical Equipment','Personal Care Services','NRI Service',
  'Ambulance Service',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div className="container footer-cta-inner">
          <div>
            <h3>Need care for your loved one?</h3>
            <p>Our team is ready to help — reach out today for a free consultation.</p>
          </div>
          <div className="footer-cta-actions">
            <a href="tel:+916301052929" className="btn btn-light">Call Now</a>
            <a href="https://wa.me/916301052929" className="btn btn-cta-outline" target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </div>

      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#top" className="brand brand--light">
            <img src="/assets/grace home care logo.jpeg" alt="Grace Home Care Nursing logo" className="brand-logo" width="44" height="44" />
            <span className="brand-text">
              <strong>Grace Home Care</strong>
              <span className="brand-divider" aria-hidden="true"></span>
              <strong>Nursing Services</strong>
            </span>
          </a>
          <p>Compassionate Care Where You Call Home — Elevating Lives with Home Nursing Excellence.</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/grace_homecare_services/" className="footer-social" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/916301052929" className="footer-social" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor"><path d={WA_PATH} /></svg>
            </a>
            <a href="mailto:info@gracehomecarenursing.com" className="footer-social" aria-label="Email">
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul className="footer-services">
            {SERVICES_LIST.map(s => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#why">Why Choose Us</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h4>Get In Touch</h4>
          <ul>
            <li>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.98.36 1.94.7 2.86a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.22-1.22a2 2 0 0 1 2.11-.45c.92.34 1.88.57 2.86.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:+916301052929">+91 63010 52929</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:info@gracehomecarenursing.com">info@gracehomecarenursing.com</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Visakhapatnam, Andhra Pradesh</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>8 AM – 7 PM · Mon–Sun</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {year} Grace Home Care Nursing Services. All rights reserved.</p>
        <p className="footer-legal">
          <a href="#top">Terms of Service</a> · <a href="#top">Privacy Policy</a> · <a href="#top">Legal</a>
        </p>
      </div>
    </footer>
  )
}
