const talks = [
  { date: 'TBD', speaker: 'TBD', title: 'TBD', link: '' },
  { date: 'TBD', speaker: 'TBD', title: 'TBD', link: '' },
  { date: 'TBD', speaker: 'TBD', title: 'TBD', link: '' },
  { date: 'TBD', speaker: 'TBD', title: 'TBD', link: '' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Seminar home">
          <span className="brand-mark" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>PU × UM</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#schedule">Schedule</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <figure className="hero-panel hero-left">
          <img
            className="split-art"
            src="og.png"
            width="1536"
            height="1024"
            alt="Purdue–UMich Quantum Algorithms Seminar"
          />
        </figure>

        <div className="hero-panel hero-right">
          <img
            className="split-art"
            src="og.png"
            width="1536"
            height="1024"
            alt=""
            aria-hidden="true"
          />
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
        </div>
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
