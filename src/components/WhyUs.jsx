import { WHY_ITEMS } from '../data.js'

export default function WhyUs() {
  return (
    <section className="section" id="why">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Why Choose Us</p>
          <h2>Care that comes to your home</h2>
          <p className="section-sub">Compassionate care where you call home — elevating lives with home nursing excellence.</p>
        </div>
        <div className="why-grid">
          {WHY_ITEMS.map(item => (
            <div className="why-item" key={item.num}>
              <span className="why-num">{item.num}</span>
              <div className="why-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: item.icon }} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
