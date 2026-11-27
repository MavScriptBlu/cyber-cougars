const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'events', label: 'Events' },
  { id: 'members', label: 'Members' },
  { id: 'more', label: 'More' },
];

export default function TabBar({ tab, onChange }) {
  return (
    <nav className="tab-bar" aria-label="Main">
      {TABS.map((t) => (
        <button
          key={t.id}
          type="button"
          className="tab"
          aria-current={tab === t.id ? 'page' : undefined}
          onClick={() => onChange(t.id)}
        >
          <span className="dot" />
          <span>{t.label}</span>
        </button>
      ))}
    </nav>
  );
}
