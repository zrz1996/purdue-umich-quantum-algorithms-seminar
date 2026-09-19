'use client';

import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import { getNextTalk, meetingLink, talkTitle } from '../data/talks';

function subscribe(onChange: () => void) {
  const interval = window.setInterval(onChange, 60_000);
  window.addEventListener('focus', onChange);

  return () => {
    window.clearInterval(interval);
    window.removeEventListener('focus', onChange);
  };
}

// Static exports cannot know the visitor's current date. Select after hydration.
function getServerSnapshot() {
  return undefined;
}

export default function NextTalk() {
  const nextTalk = useSyncExternalStore(subscribe, getNextTalk, getServerSnapshot);

  if (!nextTalk) return null;

  return (
    <aside className="next-talk" aria-labelledby="next-talk-heading">
      <div className="next-talk-content">
        <div className="card-label">
          <span className="pulse" aria-hidden="true" /> Next seminar
        </div>
        <p className="talk-date">{nextTalk.date}</p>
        <h2 id="next-talk-heading">
          <Link href={`/talks/${nextTalk.slug}/`}>{talkTitle(nextTalk)}</Link>
        </h2>
        <dl>
          <div>
            <dt>Speaker</dt>
            <dd>{nextTalk.speaker}</dd>
          </div>
          <div>
            <dt>Time</dt>
            <dd>{nextTalk.time}</dd>
          </div>
          <div>
            <dt>Venue</dt>
            <dd><a href={meetingLink} target="_blank" rel="noreferrer">Join online ↗</a></dd>
          </div>
        </dl>
        <Link className="next-talk-details" href={`/talks/${nextTalk.slug}/`}>
          View abstract and details <span aria-hidden="true">→</span>
        </Link>
      </div>
    </aside>
  );
}
