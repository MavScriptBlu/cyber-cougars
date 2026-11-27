export function Chevron() {
  return (
    <svg className="chev" width="8" height="14" viewBox="0 0 8 14" aria-hidden="true">
      <path d="M1 1l6 6-6 6" stroke="#8c8385" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PageHeader({ eyebrow, title }) {
  return (
    <header className="page-header">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="h1">{title}</h1>
    </header>
  );
}

export function BackBar({ label, onBack }) {
  return (
    <div className="back-bar">
      <button type="button" onClick={onBack} aria-label={`Back to ${label}`}>
        <svg width="10" height="16" viewBox="0 0 10 16" aria-hidden="true">
          <path d="M8 1L1 8l7 7" stroke="#231f20" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div>{label}</div>
    </div>
  );
}

export function MemberStatus() {
  return (
    <div className="member-status">
      <span className="dot" />
      <span>You're a member</span>
    </div>
  );
}

export function DateLine({ event }) {
  return (
    <div className="date-line">
      <span className="date-pill">{event.day} {event.dateNum} {event.month}</span>
      <span className="small">{event.time}</span>
    </div>
  );
}
