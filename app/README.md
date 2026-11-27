# Cyber Cougars app

Mobile web app for Mid-State Technical College's IT club, built from the Claude Design handoff in `../project/Cyber Cougars App.dc.html`.

React + Vite, no other dependencies.

```bash
cd app
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## What's in it

- **Home** — masthead with the club badge, student-run callout, join button, next event, announcements
- **Events** — list → detail → RSVP confirm sheet ("You're in" shows on the list after)
- **Members** — roster → member badge card
- **More** — Teams / GitHub / college links, join button
- **Join flow** — name + email → interests → confirm → done

Joined status, your roster entry and RSVPs are saved in `localStorage`, so they stick around between visits on the same device.

`?tab=events` (or `members`, `more`) opens on that tab, and `?joined=1` starts as a member. These match the prototype's `startTab` / `startJoined` settings.

## Still to do

- All content lives in `src/data.js` and is placeholder data. Swap it for the real schedule and roster.
- Teams, GitHub and Teams-background links have `url: null`. Fill them in.
- Joining and RSVPs only save on the device. Nothing gets sent to a server yet.
