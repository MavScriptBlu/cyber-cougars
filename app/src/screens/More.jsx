import { resources } from '../data.js';
import { MemberStatus, PageHeader } from '../components/ui.jsx';

function ResourceRow({ r }) {
  const inner = (
    <>
      <div className="body">
        <div className="title" style={{ fontWeight: 600 }}>{r.label}</div>
        <div className="meta">{r.detail}</div>
      </div>
      <div style={{ fontSize: 14, color: 'var(--maroon)', flex: 'none' }} aria-hidden="true">↗</div>
    </>
  );
  return r.url ? (
    <a className="list-row" href={r.url} target="_blank" rel="noreferrer">{inner}</a>
  ) : (
    <div className="list-row">{inner}</div>
  );
}

export default function More({ joined, onJoin }) {
  return (
    <div style={{ paddingBottom: 16 }}>
      <PageHeader eyebrow="Links & resources" title="More" />
      <div className="list">
        {resources.map((r) => <ResourceRow key={r.id} r={r} />)}
      </div>

      <div className="pad-x" style={{ marginTop: 20 }}>
        {joined ? <MemberStatus /> : <button type="button" className="btn" onClick={onJoin}>Join the club</button>}
      </div>

      <p className="small pad-x" style={{ marginTop: 32, marginBottom: 0 }}>
        Cyber Cougars is a Mid-State Technical College student club.
      </p>
    </div>
  );
}
