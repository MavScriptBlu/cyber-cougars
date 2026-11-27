import { BackBar, DateLine } from '../components/ui.jsx';

export default function EventDetail({ event, rsvped, onBack, onRsvp }) {
  return (
    <div className="detail">
      <BackBar label="Events" onBack={onBack} />
      <div className="event-detail">
        <DateLine event={event} />
        <h1 className="title">{event.title}</h1>
        <div className="loc">{event.location}</div>
        <div className="hr" />
        <p className="desc">{event.desc}</p>
        {rsvped ? (
          <div className="rsvp-confirmed">You're in — see you there.</div>
        ) : (
          <button type="button" className="btn" onClick={onRsvp}>RSVP</button>
        )}
      </div>
    </div>
  );
}
