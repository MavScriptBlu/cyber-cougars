import { useState } from 'react';
import { interests } from '../data.js';

export default function Onboarding({ onJoined, onClose }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [picked, setPicked] = useState([]);

  const infoValid = name.trim().length > 0 && email.includes('@');
  const toggle = (tag) =>
    setPicked((p) => (p.includes(tag) ? p.filter((t) => t !== tag) : [...p, tag]));

  const finish = () => {
    onJoined({ name: name.trim(), email: email.trim(), interests: picked });
    setStep(3);
  };

  return (
    <div className="detail">
      <div className="ob-top">
        <div className="eyebrow">Join the club</div>
        <button type="button" className="ob-close" onClick={onClose} aria-label="Close">×</button>
      </div>

      {step !== 3 && (
        <div className="ob-progress" aria-label={`Step ${step + 1} of 3`}>
          {[0, 1, 2].map((i) => <span key={i} className={step >= i ? 'on' : ''} />)}
        </div>
      )}

      {step === 0 && (
        <form
          className="ob-step"
          onSubmit={(e) => { e.preventDefault(); if (infoValid) setStep(1); }}
        >
          <div>
            <h1 className="h-screen">Tell us about you</h1>
            <p className="lede">Just enough to add you to the roster.</p>
          </div>
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name" aria-label="Full name" autoComplete="name" />
          <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" aria-label="Email address" autoComplete="email" />
          <button type="submit" className="btn" disabled={!infoValid}>Continue</button>
        </form>
      )}

      {step === 1 && (
        <div className="ob-step">
          <div>
            <h1 className="h-screen">What are you into?</h1>
            <p className="lede">Pick as many as you like.</p>
          </div>
          <div className="chips">
            {interests.map((label) => (
              <button key={label} type="button" className="chip" aria-pressed={picked.includes(label)} onClick={() => toggle(label)}>
                {label}
              </button>
            ))}
          </div>
          <div className="btn-row">
            <button type="button" className="btn-secondary" onClick={() => setStep(0)}>Back</button>
            <button type="button" className="btn" onClick={() => setStep(2)}>Continue</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="ob-step">
          <div>
            <h1 className="h-screen">Confirm</h1>
            <p className="lede">Check the roster entry before you join.</p>
          </div>
          <dl className="summary">
            <div><dt className="eyebrow muted">Name</dt><dd>{name}</dd></div>
            <div><dt className="eyebrow muted">Email</dt><dd>{email}</dd></div>
            <div><dt className="eyebrow muted">Interests</dt><dd>{picked.length ? picked.join(', ') : 'No preference yet'}</dd></div>
          </dl>
          <div className="btn-row">
            <button type="button" className="btn-secondary" onClick={() => setStep(1)}>Back</button>
            <button type="button" className="btn grow" onClick={finish}>Join the Cyber Cougars</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="ob-done">
          <div className="check" aria-hidden="true">
            <svg width="28" height="22" viewBox="0 0 28 22">
              <path d="M2 11l8 8L26 2" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="h-screen" style={{ margin: 0 }}>You're in!</h1>
          <p>Welcome to the Cyber Cougars. Watch for the weekly Teams invite and say hi at the next meeting.</p>
          <button type="button" className="btn" onClick={onClose}>Done</button>
        </div>
      )}
    </div>
  );
}
