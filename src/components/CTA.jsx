const CALL_ICON = 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.98.36 1.94.7 2.86a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.22-1.22a2 2 0 0 1 2.11-.45c.92.34 1.88.57 2.86.7A2 2 0 0 1 22 16.92z'
const WA_PATH = 'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.53 15.26L2 22l4.85-1.42A10 10 0 1 0 12 2z'

export default function CTA() {
  return (
    <section className="cta-band">
      <span className="cta-blob cta-blob--1" aria-hidden="true"></span>
      <span className="cta-blob cta-blob--2" aria-hidden="true"></span>
      <div className="container cta-inner">
        <div className="cta-copy">
          <p className="eyebrow cta-eyebrow">We&apos;re Ready When You Are</p>
          <h2>Let compassionate care find its way to your doorstep</h2>
          <p className="cta-sub">Your well-being is our priority. Reach out today — our care team is available all week, 8 AM to 7 PM, to answer your questions and arrange the right support.</p>
          <div className="cta-actions">
            <a href="tel:+916301052929" className="btn btn-light">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
                <path d={CALL_ICON} />
              </svg>
              Call +91 63010 52929
            </a>
            <a href="https://wa.me/916301052929" className="btn btn-cta-outline" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{ marginRight: 8 }}>
                <path d={WA_PATH} />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="cta-visual">
          <div className="cta-photo">
            <img src="/assets/company office.jpeg" alt="Grace Home Care Nursing company office" />
          </div>
        </div>
      </div>
    </section>
  )
}
