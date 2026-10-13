const WA_PATH = 'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.53 15.26L2 22l4.85-1.42A10 10 0 1 0 12 2z'

const PLANS = [
  {
    name: 'Basic NRI Care',
    price: '$35',
    period: 'month',
    inr: '₹2,999/month',
    highlight: false,
    badge: null,
    features: [
      '2 home visits per month',
      'Basic parent well-being checks',
      'Medicine & appointment reminders',
      'WhatsApp visit reports',
    ],
  },
]

export default function NRIPricing() {
  return (
    <section className="section nri-pricing-section" id="nri-pricing">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">NRI Care Plans</p>
          <h2>Care for your parents, from anywhere</h2>
          <p className="section-sub">
            Living abroad? Choose a plan and we&apos;ll take care of your loved ones back home —
            with regular updates so you always stay connected.
          </p>
        </div>

        <div className="nri-pricing-grid">
          {PLANS.map(plan => (
            <div className={`nri-plan-card${plan.highlight ? ' nri-plan-card--featured' : ''}`} key={plan.name}>
              {plan.badge && <span className="nri-plan-badge">{plan.badge}</span>}
              <div className="nri-plan-header">
                <h3 className="nri-plan-name">{plan.name}</h3>
                <div className="nri-plan-price">
                  <span className="nri-plan-amount">{plan.price}</span>
                  <span className="nri-plan-period">/ {plan.period}</span>
                </div>
                <p className="nri-plan-inr">{plan.inr}</p>
              </div>
              <ul className="nri-plan-features">
                {plan.features.map(f => (
                  <li key={f}>
                    <span className="nri-plan-check" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="nri-plan-actions">
                <a
                  href="https://wa.me/916301052929"
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d={WA_PATH} />
                  </svg>
                  Get Started on WhatsApp
                </a>
                <a href="tel:+916301052929" className="btn btn-ghost">Call Us</a>
              </div>
            </div>
          ))}
        </div>

        <p className="nri-pricing-note">
          * Plans are customizable. Contact us for weekly visit plans, medical escort, or dedicated care manager options.
        </p>
      </div>
    </section>
  )
}
