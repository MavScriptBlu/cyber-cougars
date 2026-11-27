import { members } from '../data.js';
import { Chevron, PageHeader } from '../components/ui.jsx';

export default function Members({ onOpenMember }) {
  return (
    <div style={{ paddingBottom: 16 }}>
      <PageHeader eyebrow="Officers & members" title="Members" />
      <div className="list">
        {members.map((m) => (
          <button key={m.id} type="button" className="reset-btn list-row" onClick={() => onOpenMember(m.id)}>
            <div className="avatar" aria-hidden="true">{m.initials}</div>
            <div className="body">
              <div className="title">{m.name}</div>
              <div className="meta">{m.role}</div>
            </div>
            <Chevron />
          </button>
        ))}
      </div>
    </div>
  );
}
