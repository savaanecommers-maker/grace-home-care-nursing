const FOUNDED = 2022
const years = Math.max(new Date().getFullYear() - FOUNDED, 1)

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-frame">
            <img src="/assets/company office.jpeg" alt="Grace Home Care Nursing office" className="about-image" />
            <div className="about-badge" aria-hidden="true">
              <span className="about-badge-num">{years}+</span>
              <span className="about-badge-label">Years of Care</span>
            </div>
          </div>
          <div className="about-accent" aria-hidden="true"></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">About Us</p>
          <h2>No:1 Homecare Nursing Agency</h2>
          <p>Founded in <strong>2022</strong> under the leadership of our Chairman, <strong>James Richard</strong>, Grace Home Care Nursing Services has spent <strong>{years}+ years</strong> caring for families across Visakhapatnam. We touch your sickness at your home after hospital discharge, providing comprehensive nursing care with qualified nurses — the only thing you need to do is call us when you need us.</p>
          <p>At our core, we believe in delivering compassionate care that transforms houses into homes and clients into family. With a commitment to excellence, our dedicated team strives to provide personalized, professional, and reliable home nursing services, ensuring comfort, dignity, and peace of mind for you and your loved ones.</p>
          <ul className="check-list">
            <li>Experienced staff for elder care at home</li>
            <li>Emergency physician &amp; doctor consultation</li>
            <li>Physiotherapy at home</li>
            <li>Care after hospital discharge</li>
          </ul>
          <div className="about-chips">
            <span className="chip">Since 2022</span>
            <span className="chip">Verified Caregivers</span>
            <span className="chip">Trained Nurses</span>
            <span className="chip">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  )
}
