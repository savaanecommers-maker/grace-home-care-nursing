export default function Chairman() {
  return (
    <section className="section" id="chairman">
      <div className="container">
        <div className="chairman-card">
          <div className="chairman-media">
            <div className="chairman-avatar">
              <img src="/assets/ceo .jpeg" alt="James Richard, Chairman of Grace Home Care Nursing" loading="lazy" />
            </div>
            <figure className="chairman-award">
              <img src="/assets/ceo taking award.jpeg" alt="James Richard receiving an award" loading="lazy" />
              <figcaption><span className="award-icon" aria-hidden="true">🏆</span> Award-Winning Care</figcaption>
            </figure>
          </div>
          <div className="chairman-body">
            <p className="eyebrow">Message From Our Chairman</p>
            <blockquote className="chairman-quote">
              <p>&ldquo;When I founded Grace Home Care Nursing in 2022, our mission was simple — to bring compassionate, professional care into every home we serve. We treat every patient as family, and their comfort and dignity remain at the heart of everything we do. Thank you for trusting us with your loved ones.&rdquo;</p>
            </blockquote>
            <div className="chairman-sign">
              <strong>James Richard</strong>
              <span>Founder &amp; Chairman, Grace Home Care Nursing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
