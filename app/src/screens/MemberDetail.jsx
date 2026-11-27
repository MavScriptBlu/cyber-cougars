import { BackBar } from '../components/ui.jsx';

export default function MemberDetail({ member, onBack }) {
  return (
    <div className="detail">
      <BackBar label="Members" onBack={onBack} />
      <div className="badge-card">
        <div className="avatar lg" aria-hidden="true">{member.initials}</div>
        <h1 className="name">{member.name}</h1>
        <div className="eyebrow">{member.role}</div>
        <div className="rule" />
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>Member since {member.since}</div>
        <div className="eyebrow muted" style={{ marginTop: 6 }}>Cyber Cougars · Mid-State</div>
      </div>
    </div>
  );
}
