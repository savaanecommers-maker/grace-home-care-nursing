import { STEPS } from '../data.js'

export default function HowItWorks() {
  return (
    <section className="section section--alt" id="how">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Simple Process</p>
          <h2>Getting care is easy</h2>
          <p className="section-sub">From your first call to ongoing care, we make the whole journey smooth and stress-free.</p>
        </div>
        <div className="steps">
          {STEPS.map((step, i) => (
            <div className="step" key={step.num}>
              <div className="step-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: step.icon }} />
              </div>
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
