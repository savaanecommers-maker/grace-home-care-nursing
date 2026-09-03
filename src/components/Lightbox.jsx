import { useEffect } from 'react'

export default function Lightbox({ src, caption, onClose, onPrev, onNext }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && onPrev) onPrev()
      else if (e.key === 'ArrowRight' && onNext) onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="lightbox open" aria-hidden="false" role="dialog" aria-label="Image viewer" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close">&times;</button>
      {onPrev && <button className="lightbox-nav lightbox-prev" onClick={onPrev} aria-label="Previous">&#8249;</button>}
      <img className="lightbox-img" src={src} alt={caption} />
      {onNext && <button className="lightbox-nav lightbox-next" onClick={onNext} aria-label="Next">&#8250;</button>}
      {caption && <p className="lightbox-caption">{caption}</p>}
    </div>
  )
}
