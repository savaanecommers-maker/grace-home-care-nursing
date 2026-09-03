import { useState } from 'react'
import Lightbox from './Lightbox.jsx'

const WA_ICON = `M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.53 15.26L2 22l4.85-1.42A10 10 0 1 0 12 2z`

export default function Hero() {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Your Trusted Partner in Home Nursing</p>
          <h1><span className="typed">Empowering Care, Enriching Lives</span></h1>
          <p className="hero-quote">&ldquo;Compassionate care where you call home.&rdquo;</p>
          <p className="lead">
            We care for you <strong>at home</strong> after hospital discharge, providing{' '}
            <strong>comprehensive nursing care</strong> with qualified nurses. The only
            thing you need to do is <strong>call us when you need us</strong>.
          </p>
          <div className="hero-actions">
            <a href="https://wa.me/916301052929" className="btn btn-whatsapp" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                <path d={WA_ICON} />
              </svg>
              Chat on WhatsApp
            </a>
            <a href="#services" className="btn btn-ghost">Explore Services</a>
          </div>
          <ul className="hero-badges">
            <li><span>5.0 ★</span> 255 Google Reviews</li>
            <li><span>No:1</span> Homecare Agency</li>
            <li><span>All Week</span> 8 AM – 7 PM</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div
            className="hero-photo-wrap"
            onClick={() => setLightboxOpen(true)}
            style={{ cursor: 'zoom-in' }}
            title="Click to view full image"
          >
            <img
              src="/assets/hero-6173.jpg"
              alt="Grace Home Care Nursing team providing compassionate care"
              className="hero-photo"
              width="1400"
              height="933"
            />
            <span className="hero-photo-glow" aria-hidden="true"></span>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          src="/assets/hero-6173.jpg"
          caption="Grace Home Care Nursing"
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  )
}
