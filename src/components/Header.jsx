import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a href="#top" className="brand" aria-label="Grace Home Care Nursing home">
          <img src="/assets/grace home care logo.jpeg" alt="Grace Home Care Nursing logo" className="brand-logo" width="60" height="60" />
          <span className="brand-text">
            <strong>Grace Home Care</strong>
            <span className="brand-divider" aria-hidden="true"></span>
            <strong>Nursing Services</strong>
          </span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <button
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            aria-label="Toggle menu"
            onClick={() => setOpen(o => !o)}
          >
            <span></span><span></span><span></span>
          </button>
          <ul className={`nav-menu${open ? ' open' : ''}`} id="nav-menu">
            <li><a href="#services" onClick={close}>Services</a></li>
            <li><a href="#about" onClick={close}>About</a></li>
            <li><a href="#why" onClick={close}>Why Us</a></li>
            <li><a href="#gallery" onClick={close}>Gallery</a></li>
            <li><a href="#testimonials" onClick={close}>Reviews</a></li>
            <li><a href="#contact" className="nav-cta" onClick={close}>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
