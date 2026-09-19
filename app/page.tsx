import Link from 'next/link';
import NextTalk from './components/next-talk';
import { talks, talkTitle } from './data/talks';

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="purdue-name">PU</span>
            <span className="university-cross" aria-hidden="true">-</span>
            <span className="michigan-name">UMICH</span>
          </p>
          <h1>Quantum<br />Algorithms<br />Seminar</h1>
          <p className="seminar-introduction">
            A joint online seminar from Purdue University and the University of Michigan
            on quantum algorithms, complexity, and computation. Browse the schedule
            below and select a talk to read its abstract and explore related materials.
          </p>
          <p className="organizers">
            <span>Organizers</span>
            <a href="https://sites.google.com/umich.edu/zhiyan-ding" target="_blank" rel="noreferrer">Zhiyan Ding</a>
            <a href="https://dongylaq.github.io/" target="_blank" rel="noreferrer">Yulong Dong</a>
            <a href="https://ruizhezhang.com/" target="_blank" rel="noreferrer">Ruizhe Zhang</a>
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#schedule">
              View schedule <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <NextTalk />
      </section>

      <section className="schedule section" id="schedule">
        <div className="section-heading">
          <h2>Upcoming talks</h2>
          <p>Select a talk for its abstract, meeting details, and materials.</p>
        </div>

        <div className="schedule-list" role="table" aria-label="Upcoming seminar talks">
          <div className="schedule-row schedule-head" role="row">
            <span role="columnheader">Date</span>
            <span role="columnheader">Speaker</span>
            <span role="columnheader">Talk</span>
            <span role="columnheader">Materials</span>
          </div>
          {talks.map((talk) => (
            <div className="schedule-row" role="row" key={talk.slug}>
              <span className="schedule-date" role="cell">{talk.date}</span>
              <span role="cell">{talk.speaker}</span>
              <strong role="cell">
                <Link className="schedule-talk-link" href={`/talks/${talk.slug}/`}>
                  {talkTitle(talk)}
                  <span className="talk-link-label">View abstract and details →
                    <span className="sr-only"> for {talk.speaker}, {talk.date}</span>
                  </span>
                </Link>
              </strong>
              <span className="materials" role="cell">
                {talk.materials.length > 0 ? talk.materials.map((material) => (
                  <a key={material.url} href={material.url} target="_blank" rel="noreferrer">
                    {material.label}
                  </a>
                )) : '—'}
              </span>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>Purdue–University of Michigan Quantum Algorithms Seminar</p>
        <p>Online · Fall 2026</p>
      </footer>
    </main>
  );
}
