import { TESTIMONIALS } from '../data.js'

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Happy Customers</p>
          <h2>What our families say</h2>
          <p className="section-sub">5.0 rating based on 255 reviews, powered by Google.</p>
        </div>
        <div className="cards-grid testimonials">
          {TESTIMONIALS.map((t, i) => (
            <blockquote className="testimonial" key={i}>
              <p>{t.text}</p>
              <footer>
                <strong>Google Review</strong>
                <span>★★★★★ · {t.date}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
