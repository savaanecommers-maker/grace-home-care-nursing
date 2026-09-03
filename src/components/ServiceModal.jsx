import { useEffect } from 'react'

const WA_PATH = 'M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.53 15.26L2 22l4.85-1.42A10 10 0 1 0 12 2z'

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return
    document.body.style.overflow = 'hidden'
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [service, onClose])

  if (!service) return null

  const { title, icon, modalBody } = service

  return (
    <div className="service-modal open" role="dialog" aria-modal="true" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="service-modal-dialog">
        <button className="service-modal-close" onClick={onClose} aria-label="Close">&times;</button>
        <div className="service-modal-header">
          <span className="service-modal-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" dangerouslySetInnerHTML={{ __html: icon }} />
          </span>
          <h3>{title}</h3>
        </div>
        <div className="service-modal-body">
          <p dangerouslySetInnerHTML={{ __html: modalBody.intro }} />
          <p className="service-modal-subhead">{modalBody.subhead}</p>
          <ul className="service-modal-list">
            {modalBody.items.map(item => (
              <li key={item.title}>
                <span className="sm-ico" aria-hidden="true">{item.icon}</span>
                <div>
                  <strong>{item.title}</strong> — {item.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="service-modal-footer">
          <a href="https://wa.me/916301052929" className="btn btn-whatsapp" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d={WA_PATH} /></svg>
            Enquire on WhatsApp
          </a>
          <a href="tel:+916301052929" className="btn btn-ghost">Call Us</a>
        </div>
      </div>
    </div>
  )
}
