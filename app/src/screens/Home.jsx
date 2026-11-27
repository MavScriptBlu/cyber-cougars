import { announcements } from '../data.js';
import { DateLine, MemberStatus } from '../components/ui.jsx';

export default function Home({ nextEvent, joined, onJoin, onOpenEvent }) {
  return (
    <div>
      <header className="masthead">
        <img src="/cyber-cougars-badge.png" alt="Cyber Cougars badge" />
        <h1 className="name">Cyber Cougars</h1>
        <div className="sub">Mid-State Technical College</div>
      </header>

      <div className="callout pad-x" style={{ marginTop: 20 }}>
        <div className="eyebrow">This is a student-run club</div>
        <p><strong>The students run the Cyber Cougars.</strong> The advisor advises.</p>
      </div>

      <div className="pad-x" style={{ marginTop: 16 }}>
        {joined ? <MemberStatus /> : <button type="button" className="btn" onClick={onJoin}>Become a member</button>}
      </div>

      <section className="section">
        <h2 className="h-section">Next up</h2>
        <button type="button" className="reset-btn event-card" onClick={() => onOpenEvent(nextEvent.id)}>
          <DateLine event={nextEvent} />
          <div className="title">{nextEvent.title}</div>
          <div className="small">{nextEvent.location}</div>
        </button>
      </section>

      <section className="section" style={{ marginBottom: 32 }}>
        <h2 className="h-section">What's on</h2>
        <div className="list" style={{ margin: 0 }}>
          {announcements.map((a) => (
            <article key={a.id} className="announcement">
              <div className="top">
                <span className="eyebrow">Announcement</span>
                <span className="small">{a.date}</span>
              </div>
              <h3 className="title">{a.title}</h3>
              <p>{a.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
