# Purdue–UMich Quantum Algorithms Seminar

Website for the joint online Quantum Algorithms Seminar organized by Purdue
University and the University of Michigan.

Live site:
[zrz1996.github.io/purdue-umich-quantum-algorithms-seminar](https://zrz1996.github.io/purdue-umich-quantum-algorithms-seminar/)

## Where to make changes

Most routine updates are made in [`app/page.tsx`](app/page.tsx).

| What you want to change | File |
| --- | --- |
| Schedule, next seminar, Zoom link, or organizers | `app/page.tsx` |
| Colors, fonts, spacing, or page layout | `app/globals.css` |
| Browser title, description, or social-sharing metadata | `app/layout.tsx` |
| Social-sharing image | `public/og.png` |
| GitHub Pages configuration after renaming the repository | `next.config.ts` |

## Add or edit a scheduled talk

Open `app/page.tsx`. Near the top of the file is the `talks` list:

```tsx
const talks = [
  {
    date: 'September 11',
    speaker: 'Junaid Aftab',
    title: 'TBD',
    materials: '',
  },
  // More talks go here.
];
```

Each pair of braces represents one schedule row. Edit its four fields:

- `date`: the date displayed in the first column.
- `speaker`: the speaker's name.
- `title`: the talk title. Use `'TBD'` until it is confirmed.
- `materials`: optional text for the Materials column. Leave it as an empty
  string (`''`) to display an em dash.

For example:

```tsx
{
  date: 'October 9',
  speaker: 'Ada Lovelace',
  title: 'A New Quantum Algorithm',
  materials: 'Slides forthcoming',
},
```

To add a talk, copy an existing entry, paste the copy before the closing `];`,
and edit its values. Keep a comma after every entry. The talks appear in the
same order as they are listed in the file, so keep them in chronological order.

To remove a talk, delete its complete `{ ... },` entry. For an event that has
already happened, either remove it or move it below upcoming talks, depending
on how you want the schedule to appear.

## Update the “Next seminar” card

The next-seminar card is also in `app/page.tsx`. It is intentionally maintained
separately from the schedule, so changing a schedule row does **not**
automatically change the card.

Update these parts of the card:

```tsx
<p className="talk-date">September 11</p>
<h2 id="next-talk-heading">Talk title to be announced</h2>

<dt>Speaker</dt>
<dd>Junaid Aftab</dd>

<dt>Time</dt>
<dd>TBD</dd>
```

When a talk title or time has not been confirmed, leave the corresponding value
as `TBD` or `Talk title to be announced`.

After each seminar, update both:

1. The `talks` list.
2. The date, title, speaker, and time in the “Next seminar” card.

## Change the Zoom link

The common meeting link appears at the very top of `app/page.tsx`:

```tsx
const meetingLink = 'https://umich.zoom.us/j/94303319409';
```

Replace the URL between the quotation marks. The “Join online” link in the next
seminar card will update automatically.

## Change organizers or homepage links

Find the block with `className="organizers"` in `app/page.tsx`:

```tsx
<a href="https://example.com" target="_blank" rel="noreferrer">
  Organizer Name
</a>
```

Change `href` to the organizer's homepage and change the text between `<a>` and
`</a>` to the organizer's name. Copy an entire `<a>...</a>` element to add
another organizer, or delete one to remove an organizer.

## Make a quick change directly on GitHub

For simple content updates, no local setup is required:

1. Open the repository on GitHub.
2. Open `app/page.tsx`.
3. Click the pencil icon labeled **Edit this file**.
4. Make the change and review the **Preview** or **Diff** tab.
5. Click **Commit changes**.
6. Commit directly to `main`, or create a branch and pull request if the change
   should be reviewed first.
7. Open the repository's **Actions** tab and wait for the Pages deployment to
   finish.

Once the workflow succeeds, the live site normally updates within a few
minutes. If the old version remains visible, refresh the page without using the
browser cache.

## Preview changes locally

Local preview is useful for checking several edits before publishing. The
project requires Node.js 22.13 or newer.

For the first local setup:

```bash
git clone <repository-url>
cd purdue-umich-quantum-algorithms-seminar
npm install
```

Before starting a later editing session, download the newest published changes:

```bash
git pull
```

Start the local website:

```bash
npm run dev
```

Open the local address printed in the terminal, normally
[http://localhost:3000](http://localhost:3000). Saved changes should appear
automatically. Stop the local server with `Ctrl+C`.

## Check the production build

Before publishing a larger change, run the same static-site build used by the
GitHub Pages workflow:

```bash
npm run build:github
```

If the command succeeds, the site is ready to publish. If it fails after a
content edit, first check for common syntax mistakes in `app/page.tsx`:

- Missing quotation marks around text.
- A missing comma after a talk entry.
- An unmatched `{`, `}`, `<`, or `>`.
- An apostrophe inside a single-quoted value. Use double quotes for that value
  or escape the apostrophe.

## Publish local changes

The GitHub Pages workflow deploys every push to the `main` branch:

```bash
git status
git diff
git add app/page.tsx
git commit -m "Update seminar schedule"
git push origin main
```

If other files were changed, include them in `git add` as well. After pushing,
check the repository's **Actions** tab. The workflow named
**Deploy seminar site to GitHub Pages** should complete successfully.

GitHub Pages must use **GitHub Actions** as its deployment source. This setting
is under **Repository Settings → Pages → Build and deployment → Source**.

## If the repository name or site address changes

The repository name is used in `next.config.ts`, and the public URL is used in
`app/layout.tsx`. Update both if the repository is renamed or moved to another
GitHub account:

1. Change `repositoryName` in `next.config.ts`.
2. Change `siteUrl` in `app/layout.tsx`.
3. Run `npm run build:github`.
4. Commit and push both files.

Failing to update these values can cause broken styles, missing images, or
incorrect social-sharing links on the published site.
