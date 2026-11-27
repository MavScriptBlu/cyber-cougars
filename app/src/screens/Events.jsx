import { events } from '../data.js';
import { Chevron, PageHeader } from '../components/ui.jsx';

export default function Events({ rsvps, onOpenEvent }) {
  return (
    <div style={{ paddingBottom: 16 }}>
      <PageHeader eyebrow="September–October 2026" title="Events" />
      <div className="list">
        {events.map((e) => (
          <button key={e.id} type="button" className="reset-btn list-row" onClick={() => onOpenEvent(e.id)}>
            <div className="cal-date">
              <div className="month">{e.month}</div>
              <div className="num">{e.dateNum}</div>
            </div>
            <div className="body">
              <div className="title">{e.title}</div>
              <div className="meta">{e.day} · {e.time} · {e.location}</div>
              {rsvps[e.id] && <div className="rsvp-tag">You're in</div>}
            </div>
            <Chevron />
          </button>
        ))}
      </div>
    </div>
  );
}
