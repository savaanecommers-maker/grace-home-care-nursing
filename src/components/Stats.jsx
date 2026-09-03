const ICONS = {
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
  chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>,
  badge: <><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></>,
  clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
}

const STATS = [
  { icon: 'star', color: 'gold', num: '5.0 ★', label: 'Google Rating' },
  { icon: 'chat', color: 'coral', num: '255+', label: 'Happy Reviews' },
  { icon: 'badge', color: 'blue', num: 'No:1', label: 'Homecare Agency' },
  { icon: 'clock', color: 'mint', num: '7 Days', label: 'A Week Service' },
]

export default function Stats() {
  return (
    <section className="stats">
      <span className="stats-blob stats-blob--1" aria-hidden="true"></span>
      <span className="stats-blob stats-blob--2" aria-hidden="true"></span>
      <div className="container stats-grid">
        {STATS.map(s => (
          <div className="stat" key={s.label}>
            <span className={`stat-icon stat-icon--${s.color}`} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {ICONS[s.icon]}
              </svg>
            </span>
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
