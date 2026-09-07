# Purdue–UMich Quantum Algorithms Seminar

A joint online seminar from Purdue University and the University of Michigan
on quantum algorithms, complexity, and computation. The website includes a
seminar schedule and a separate page for each talk, with its title, speaker,
abstract, meeting details, and links to papers or other materials.

Live site:
[zrz1996.github.io/purdue-umich-quantum-algorithms-seminar](https://zrz1996.github.io/purdue-umich-quantum-algorithms-seminar/)

Select a talk on the homepage to open its details. Each talk has a permanent
address that can be shared directly. Unconfirmed titles, abstracts, times, and
materials display an announcement placeholder until they are supplied.

## Where to make changes

Most routine content updates are made in [`app/data/talks.ts`](app/data/talks.ts).
Editing a talk there updates both its schedule entry and its individual page.
The featured “Next seminar” card also reads from this shared data.

| What you want to change | File |
| --- | --- |
| Talk titles, abstracts, dates, speakers, times, or materials | `app/data/talks.ts` |
| Featured next seminar or shared Zoom link | `app/data/talks.ts` |
| Website introduction, organizers, or homepage layout | `app/page.tsx` |
| Layout of every individual talk page | `app/talks/[slug]/page.tsx` |
| Colors, fonts, or spacing | `app/globals.css` |
| Default browser title, description, or social-sharing metadata | `app/layout.tsx` |
| Talk-specific browser and social-sharing metadata | `app/talks/[slug]/page.tsx` |
| Social-sharing image | `public/og.png` |
| GitHub Pages configuration after renaming the repository | `next.config.ts` |
| This GitHub introduction and editing guide | `README.md` |

## Add or edit a talk

Open `app/data/talks.ts` and find the `talks` list. Each `{ ... },` entry
represents one talk. For example (illustrative content):

```ts
{
  slug: '2026-10-09-ada-lovelace',
  date: 'October 9, 2026',
  speaker: 'Ada Lovelace (Example University)',
  title: 'A New Quantum Algorithm',
  abstract: `The first paragraph of the speaker's abstract goes here.

The second paragraph goes here.`,
  time: 'Time to be announced',
  materials: [
    { label: 'Slides', url: 'https://example.com/slides.pdf' },
    { label: 'Paper', url: 'https://example.com/paper.pdf' },
  ],
},
```

- `slug`: a unique URL identifier using lowercase letters, numbers, and hyphens.
  Use the date and speaker's name. Keep it unchanged after publishing so shared
  links continue to work, even when the title changes.
- `date`: the displayed date, including the year.
- `speaker`: the speaker's name and affiliation.
- `title`: the talk title. Use `'TBD'` until it is confirmed.
- `abstract`: the speaker's abstract. Use backticks for multiple paragraphs and
  separate paragraphs with a blank line. Leave it as `''` to display
  “Abstract to be announced.” Abstracts are plain text, not Markdown or HTML.
  Escape any literal backtick or `${` within a backtick-delimited abstract.
- `time`: the confirmed meeting time, including its time zone, or
  `'Time to be announced'`.
- `materials`: a list of labeled links to papers, slides, or recordings. Use
  `[]` when none are available. Links appear on both the homepage and talk page.

To add a talk, copy an entry into the `talks` list and edit its values. Keep a
comma after each entry and list talks in chronological order. There is no need
to create a page file or manually add a homepage link: both are generated from
the data when the site builds.

For the example above, the published page would be:

```text
https://zrz1996.github.io/purdue-umich-quantum-algorithms-seminar/talks/2026-10-09-ada-lovelace/
```

Keep past entries if their pages should remain accessible; deleting an entry
also removes its page at the next deployment. If retaining past talks, change
“Upcoming talks” to “Seminar schedule” in `app/page.tsx`, including the table's
accessible label, when appropriate.

## Update the “Next seminar” card

Near the bottom of `app/data/talks.ts`, change the slug in this line to the next
scheduled talk's slug:

```ts
export const nextTalk = talks.find((talk) => talk.slug === '2026-09-11-junaid-aftab');
```

The card automatically uses that talk's title, date, speaker, and time, and
links to its details page. You do not need to copy those details into the
homepage. The featured talk is selected manually; it does not advance based on
the current date. If the slug does not match an entry, the card is hidden.

## Change the Zoom link or organizers

Update `meetingLink` in `app/data/talks.ts` to change the online meeting URL on
the featured card and every talk page:

```ts
export const meetingLink = 'https://umich.zoom.us/j/94303319409';
```

To edit organizers, find `className="organizers"` in `app/page.tsx`. Change an
organizer's link text and `href`, or copy an entire `<a>...</a>` element to add
another organizer. The introduction is the paragraph with
`className="seminar-introduction"` in the same file.

## Make a quick change directly on GitHub

For simple content updates, no local setup is required:

1. Open the repository on GitHub.
2. Open `app/data/talks.ts` (or another file from the table above).
3. Click the pencil icon labeled **Edit this file**.
4. Make your changes and review the diff.
5. Click **Commit changes**. Commit to `main`, or create a branch and pull
   request for review before merging into `main`.
6. Check the repository's **Actions** tab for the Pages deployment.

When deployment finishes, check the homepage and the affected talk page on the
live site. Refresh without the browser cache if an older version is displayed.

## Preview changes locally

The project requires Node.js 22.13 or newer. If you downloaded a ZIP, extract it
and open a terminal in the project folder. If you cloned the repository, open
that folder. Install the dependencies:

```bash
npm ci
```

Start the local website:

```bash
npm run dev
```

Open the local address printed in the terminal, normally
[http://localhost:3000](http://localhost:3000). Follow a talk link to preview its
page. Saved changes should appear automatically. Stop the server with `Ctrl+C`.

If working in a Git clone, run `git pull` before a new editing session to
download the latest committed changes.

## Check the production build

Before publishing, run:

```bash
npm run lint
npm run build:github
```

The build exports the homepage and every talk page into `out/`. GitHub Actions
sets the repository URL prefix automatically. To check that same configuration
locally on macOS or Linux, use:

```bash
GITHUB_ACTIONS=true npm run build:github
```

If a content edit causes the build to fail, check `app/data/talks.ts` for missing
commas, unmatched braces, or quotation marks. Use backticks for multiline
abstracts and double quotes or escaping for apostrophes inside single-quoted
text. Each slug must be unique.

## Publish local changes

The GitHub Pages workflow deploys every push to `main`. In a Git clone, review
your changes and publish them with:

```bash
git status
git diff
git add app/data/talks.ts app/page.tsx 'app/talks/[slug]/page.tsx' app/globals.css README.md
git commit -m "Add individual seminar talk pages"
git push origin main
```

For subsequent updates, stage only the files you changed and choose a suitable
commit message. If you downloaded a ZIP without Git history, use GitHub's file
editor/upload interface or clone the repository and copy your changed files
into the clone before committing.

After pushing, check the workflow named **Deploy seminar site to GitHub Pages**
in the **Actions** tab. GitHub Pages must use **GitHub Actions** as its deployment
source under **Settings → Pages → Build and deployment → Source**.

## If the repository name or site address changes

Update `repositoryName` in `next.config.ts` and `siteUrl` in `app/layout.tsx`.
Update the live-site links in this README as well. Run the production build,
then commit and push the changes. These settings keep styles, navigation, and
social-sharing URLs aligned with the published site address.
