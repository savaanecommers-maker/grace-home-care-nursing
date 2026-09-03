import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState({ msg: '', type: '' })

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const name = form.name.value.trim()
    const phone = form.phone.value.trim()
    const email = form.email.value.trim()
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!name || !phone || !emailValid) {
      setStatus({ msg: 'Please fill in your name, phone, and a valid email.', type: 'error' })
      return
    }

    setStatus({ msg: 'Thank you! We received your request. For urgent care, call us at +91 63010 52929.', type: 'success' })
    form.reset()
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Get In Touch</p>
          <h2>We&apos;re here to help</h2>
          <p className="section-sub">At Grace Home Nursing Service, we understand the importance of providing personalized care in the comfort of your own home. Whether you have questions, want to schedule a consultation, or need assistance, we&apos;re here to help.</p>
          <ul className="contact-list">
            <li>
              <span className="contact-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.98.36 1.94.7 2.86a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.22-1.22a2 2 0 0 1 2.11-.45c.92.34 1.88.57 2.86.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <div><strong>Phone</strong><a href="tel:+916301052929">+91 63010 52929</a><br /><a href="tel:+918328182283">Branch: 83281 82283</a></div>
            </li>
            <li>
              <span className="contact-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <div><strong>Email</strong><a href="mailto:info@gracehomecarenursing.com">info@gracehomecarenursing.com</a></div>
            </li>
            <li>
              <span className="contact-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div><strong>Head Office</strong><span>Pedda Gadhili, Hanumanthavaka, Visakhapatnam, AP 530040</span></div>
            </li>
            <li>
              <span className="contact-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div><strong>Vijayawada Branch</strong><span>Near Benz Circle, Bharathi Nagar, Vijayawada, AP 520008</span></div>
            </li>
            <li>
              <span className="contact-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div><strong>Rajamahendravaram Branch</strong><span>Danavai Peta, Rajamahendravaram, AP 533103</span></div>
            </li>
            <li>
              <span className="contact-ico" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </span>
              <div><strong>Work Hours</strong><span>8 AM – 7 PM · Monday to Sunday</span></div>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Your full name" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" required placeholder="+91 00000 00000" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="you@example.com" />
          </div>
          <div className="field">
            <label htmlFor="service">Service Needed</label>
            <select id="service" name="service">
              <option value="">Select a service</option>
              <option>Nursing Care</option>
              <option>Care Taker</option>
              <option>Pediatric Care</option>
              <option>Old Age Care</option>
              <option>Doctor Consultation</option>
              <option>Physiotherapy</option>
              <option>Personal Care Services</option>
              <option>NRI Service</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="message">How can we help?</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell us a little about your needs..."></textarea>
          </div>
          <button type="submit" className="btn btn-submit btn-block">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Send Message
          </button>
          {status.msg && (
            <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.msg}</p>
          )}
        </form>
      </div>
    </section>
  )
}
