const talks = [
  { date: 'TBD', speaker: 'TBD', title: 'TBD', link: '' },
  { date: 'TBD', speaker: 'TBD', title: 'TBD', link: '' },
  { date: 'TBD', speaker: 'TBD', title: 'TBD', link: '' },
  { date: 'TBD', speaker: 'TBD', title: 'TBD', link: '' },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="purdue-name">Purdue University</span>
            <span className="university-cross" aria-hidden="true">×</span>
            <span className="michigan-name">University of Michigan</span>
          </p>
          <h1>Quantum<br />Algorithms<br />Seminar</h1>
          <p className="hero-intro">
            A joint online forum for new ideas in quantum algorithms, complexity,
            and computation—bringing together researchers from Purdue and Michigan.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#schedule">
              View schedule <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <aside className="next-talk" aria-labelledby="next-talk-heading">
          <div className="next-talk-content">
            <div className="card-label">
              <span className="pulse" aria-hidden="true" /> Next seminar
            </div>
            <p className="talk-date">TBD</p>
            <h2 id="next-talk-heading">Talk title to be announced</h2>
            <dl>
              <div>
                <dt>Speaker</dt>
                <dd>TBD</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>TBD</dd>
              </div>
              <div>
                <dt>Venue</dt>
                <dd>Online · link TBD</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section className="schedule section" id="schedule">
        <div className="section-heading">
          <p className="section-number">01 / Schedule</p>
          <h2>Upcoming talks</h2>
          <p>Talk details and reading links will be added as they are confirmed.</p>
        </div>

        <div className="schedule-list" role="table" aria-label="Upcoming seminar talks">
          <div className="schedule-row schedule-head" role="row">
            <span role="columnheader">Date</span>
            <span role="columnheader">Speaker</span>
            <span role="columnheader">Talk</span>
            <span role="columnheader">Materials</span>
          </div>
          {talks.map((talk, index) => (
            <div className="schedule-row" role="row" key={index}>
              <span className="schedule-date" role="cell">{talk.date}</span>
              <span role="cell">{talk.speaker}</span>
              <strong role="cell">{talk.title}</strong>
              <span className="materials" role="cell">{talk.link || '—'}</span>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>Purdue–University of Michigan Quantum Algorithms Seminar</p>
        <p>Online · Updated August 2026</p>
      </footer>
    </main>
  );
}
