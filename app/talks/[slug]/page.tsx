import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { meetingLink, talks, talkTitle } from '../../data/talks';

type TalkPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return talks.map((talk) => ({ slug: talk.slug }));
}

export async function generateMetadata({ params }: TalkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const talk = talks.find((entry) => entry.slug === slug);
  if (!talk) notFound();

  const title = `${talkTitle(talk)} | ${talk.speaker} | Purdue–UMich Seminar`;
  const description = `${talk.speaker} · ${talk.date}. ${talkTitle(talk)}. View the abstract and seminar details.`;

  return {
    title,
    description,
    openGraph: { title, description, url: `/talks/${talk.slug}/` },
    twitter: { title, description },
  };
}

export default async function TalkPage({ params }: TalkPageProps) {
  const { slug } = await params;
  const talk = talks.find((entry) => entry.slug === slug);
  if (!talk) notFound();

  return (
    <main>
      <article className="talk-page">
        <nav aria-label="Seminar navigation">
          <Link className="text-link" href="/#schedule">← Back to all talks</Link>
        </nav>
        <header className="talk-header">
          <p className="card-label">Purdue–UMich Quantum Algorithms Seminar</p>
          <p className="schedule-date">{talk.date}</p>
          <h1>{talkTitle(talk)}</h1>
          <p className="talk-speaker">{talk.speaker}</p>
          <p className="talk-time">{talk.time} · Online</p>
          <a className="button button-primary" href={meetingLink} target="_blank" rel="noreferrer">
            Join online <span aria-hidden="true">↗</span>
          </a>
        </header>

        <section className="talk-section" aria-labelledby="abstract-heading">
          <h2 id="abstract-heading">Abstract</h2>
          {talk.abstract.trim()
            ? talk.abstract.trim().split(/\n\s*\n/).map((paragraph, index) => (
              <p className="abstract-paragraph" key={index}>{paragraph}</p>
            ))
            : <p className="pending-details">Abstract to be announced.</p>}
        </section>

        <section className="talk-section" aria-labelledby="materials-heading">
          <h2 id="materials-heading">Materials</h2>
          {talk.materials.length > 0 ? (
            <ul className="talk-materials">
              {talk.materials.map((material) => (
                <li key={material.url}>
                  <a className="text-link" href={material.url} target="_blank" rel="noreferrer">
                    {material.label} <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : <p className="pending-details">Materials to be announced.</p>}
        </section>
      </article>

      <footer>
        <p>Purdue–University of Michigan Quantum Algorithms Seminar</p>
        <Link href="/" className="text-link">Seminar home</Link>
      </footer>
    </main>
  );
}
