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
          <a href="#about">About</a>
          <a href="#attend">Attend</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="purdue-name">Purdue</span>
            <span className="brand-dash" aria-hidden="true">–</span>
            <span className="michigan-name">UMich</span>
          </p>
          <span className="eyebrow-rule" aria-hidden="true" />
          <h1>
            <span>Quantum</span>
            <span>Algorithms</span>
            <span>Seminar</span>
          </h1>
          <span className="title-rule" aria-hidden="true"><i /></span>
          <p className="hero-intro">
            A joint online forum for new ideas in quantum algorithms, complexity,
            and computation—bringing together researchers from Purdue and Michigan.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#schedule">
              View schedule <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-quiet" href="#attend">How to join</a>
          </div>
        </div>

        <aside className="next-talk" aria-labelledby="next-talk-heading">
          <div className="orbit-field" aria-hidden="true">
            <span className="orbit orbit-one" />
            <span className="orbit orbit-two" />
            <span className="particle particle-one" />
            <span className="particle particle-two" />
            <span className="particle particle-three" />
          </div>
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

      <section className="about section" id="about">
        <div className="section-heading">
          <p className="section-number">02 / About</p>
          <h2>Two campuses.<br />One conversation.</h2>
        </div>
        <div className="about-grid">
          <article>
            <span className="article-index">A</span>
            <h3>The seminar</h3>
            <p>
              The Purdue–University of Michigan Quantum Algorithms Seminar is a
              shared space for researchers and students to discuss current work,
              foundational results, and emerging directions in quantum computation.
            </p>
          </article>
          <article>
            <span className="article-index">B</span>
            <h3>The format</h3>
            <p>
              Talks take place online and are open to both university communities.
              The usual cadence, presentation length, and discussion format are TBD.
            </p>
          </article>
          <article>
            <span className="article-index">C</span>
            <h3>The audience</h3>
            <p>
              Faculty, postdoctoral researchers, graduate students, and interested
              guests are welcome. Background expectations will be noted with each talk.
            </p>
          </article>
        </div>
      </section>

      <section className="attend section" id="attend">
        <div>
          <p className="section-number">03 / Attend</p>
          <h2>Join the seminar online.</h2>
        </div>
        <div className="attend-details">
          <div>
            <span>Meeting day &amp; time</span>
            <strong>TBD</strong>
          </div>
          <div>
            <span>Online meeting link</span>
            <strong>TBD</strong>
          </div>
          <div>
            <span>Contact</span>
            <strong>TBD</strong>
          </div>
        </div>
      </section>

      <footer>
        <p>Purdue–University of Michigan Quantum Algorithms Seminar</p>
        <p>Online · Updated August 2026</p>
      </footer>
    </main>
  );
}
