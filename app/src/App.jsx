import { useCallback, useEffect, useRef, useState } from 'react';
import { events, members } from './data.js';
import TabBar from './components/TabBar.jsx';
import RsvpSheet from './components/RsvpSheet.jsx';
import Home from './screens/Home.jsx';
import Events from './screens/Events.jsx';
import EventDetail from './screens/EventDetail.jsx';
import Members from './screens/Members.jsx';
import MemberDetail from './screens/MemberDetail.jsx';
import More from './screens/More.jsx';
import Onboarding from './screens/Onboarding.jsx';

const STORAGE_KEY = 'cyber-cougars';
const TABS = ['home', 'events', 'members', 'more'];

function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

// ?tab=events and ?joined=1 mirror the prototype's startTab / startJoined props.
function initialTab() {
  const t = new URLSearchParams(window.location.search).get('tab');
  return TABS.includes(t) ? t : 'home';
}

export default function App() {
  const saved = useRef(loadSaved()).current;
  const [tab, setTab] = useState(initialTab);
  const [view, setView] = useState(null); // { name: 'event' | 'member' | 'onboarding', id? }
  const [joined, setJoined] = useState(
    () => !!saved.joined || new URLSearchParams(window.location.search).get('joined') === '1'
  );
  const [profile, setProfile] = useState(saved.profile || null);
  const [rsvps, setRsvps] = useState(saved.rsvps || {});
  const [sheetEventId, setSheetEventId] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ joined, profile, rsvps }));
    } catch {
      /* storage unavailable — state just won't persist */
    }
  }, [joined, profile, rsvps]);

  // New screen starts at the top.
  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [tab, view]);

  const goTab = (t) => { setTab(t); setView(null); };
  const openEvent = (id) => setView({ name: 'event', id });
  const openMember = (id) => setView({ name: 'member', id });
  const openOnboarding = () => setView({ name: 'onboarding' });
  const closeView = () => { setView(null); setSheetEventId(null); };
  const closeSheet = useCallback(() => setSheetEventId(null), []);
  const confirmRsvp = () => {
    setRsvps((r) => ({ ...r, [sheetEventId]: true }));
    setSheetEventId(null);
  };
  const handleJoined = (p) => { setJoined(true); setProfile(p); };

  const currentEvent = view?.name === 'event' ? events.find((e) => e.id === view.id) : null;
  const currentMember = view?.name === 'member' ? members.find((m) => m.id === view.id) : null;
  const sheetEvent = sheetEventId ? events.find((e) => e.id === sheetEventId) : null;

  let screen;
  if (currentEvent) {
    screen = (
      <EventDetail
        event={currentEvent}
        rsvped={!!rsvps[currentEvent.id]}
        onBack={closeView}
        onRsvp={() => setSheetEventId(currentEvent.id)}
      />
    );
  } else if (currentMember) {
    screen = <MemberDetail member={currentMember} onBack={closeView} />;
  } else if (view?.name === 'onboarding') {
    screen = <Onboarding onJoined={handleJoined} onClose={closeView} />;
  } else if (tab === 'events') {
    screen = <Events rsvps={rsvps} onOpenEvent={openEvent} />;
  } else if (tab === 'members') {
    screen = <Members onOpenMember={openMember} />;
  } else if (tab === 'more') {
    screen = <More joined={joined} onJoin={openOnboarding} />;
  } else {
    screen = <Home nextEvent={events[0]} joined={joined} onJoin={openOnboarding} onOpenEvent={openEvent} />;
  }

  return (
    <div className="app">
      <main className="scroll" ref={scrollRef}>{screen}</main>
      {!view && <TabBar tab={tab} onChange={goTab} />}
      {sheetEvent && <RsvpSheet event={sheetEvent} onConfirm={confirmRsvp} onCancel={closeSheet} />}
    </div>
  );
}
