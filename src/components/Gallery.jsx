import { useState } from 'react'
import { GALLERY_FILES, prettyCaption } from '../data.js'
import Lightbox from './Lightbox.jsx'

const BATCH = 8

export default function Gallery() {
  const [shown, setShown] = useState(BATCH)
  const [lightbox, setLightbox] = useState(null) // { index }

  const visible = GALLERY_FILES.slice(0, shown)

  function openLightbox(index) {
    setLightbox({ index })
  }

  function closeLightbox() {
    setLightbox(null)
  }

  function prev() {
    setLightbox(lb => ({ index: lb.index === 0 ? visible.length - 1 : lb.index - 1 }))
  }

  function next() {
    setLightbox(lb => ({ index: lb.index === visible.length - 1 ? 0 : lb.index + 1 }))
  }

  return (
    <section className="section section--alt" id="gallery">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Our Work</p>
          <h2>A glimpse of the care we provide</h2>
          <p className="section-sub">Real moments from our team delivering compassionate home care across Visakhapatnam and beyond.</p>
        </div>

        <div className="gallery-grid">
          {visible.map((file, i) => (
            <figure className="gallery-item" key={file} onClick={() => openLightbox(i)}>
              <img
                src={`/assets/${encodeURIComponent(file)}`}
                alt={prettyCaption(file)}
                loading="lazy"
              />
              <figcaption>{prettyCaption(file)}</figcaption>
            </figure>
          ))}
        </div>

        {shown < GALLERY_FILES.length && (
          <div className="gallery-more">
            <button className="btn btn-ghost" onClick={() => setShown(s => Math.min(s + BATCH, GALLERY_FILES.length))}>
              Load More Photos
            </button>
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox
          src={`/assets/${encodeURIComponent(visible[lightbox.index])}`}
          caption={prettyCaption(visible[lightbox.index])}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  )
}
