import { useEffect } from 'react';

export default function RsvpSheet({ event, onConfirm, onCancel }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onCancel();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onCancel]);

  return (
    <div className="sheet-backdrop" onClick={onCancel}>
      <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="rsvp-title" onClick={(e) => e.stopPropagation()}>
        <div className="grabber" />
        <h2 id="rsvp-title">Confirm your spot</h2>
        <p>{event.title} · {event.day} {event.dateNum} {event.month}, {event.time}</p>
        <button type="button" className="btn" onClick={onConfirm} autoFocus>Confirm RSVP</button>
        <button type="button" className="btn-secondary" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
