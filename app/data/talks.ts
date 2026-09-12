export type Talk = {
  slug: string;
  date: string;
  speaker: string;
  title: string;
  abstract: string;
  time: string;
  materials: { label: string; url: string }[];
};

export const meetingLink = 'https://umich.zoom.us/j/94303319409';

// Keep talks in chronological order. Slugs form the permanent links to talk pages.
export const talks: Talk[] = [
  {
    slug: '2026-09-11-junaid-aftab',
    date: 'September 11, 2026',
    speaker: 'Junaid Aftab (University of Michigan)',
    title: 'Quantum Simulation via Multi-Product Formulas',
    abstract: 'Quantum simulation is a central task in quantum computing and a key primitive for algorithms involving dynamics, linear systems, and differential equations. I will discuss multi-product formulas, which retain the commutator sensitivity of product formulas while improving the dependence on simulation time and precision. I will then explain how these ideas extend through linear-combination-of-Hamiltonian-simulation methods to non-unitary dynamics and dissipative linear differential equations. I will also briefly discuss related extrapolation techniques for estimating functional quantities of Hermitian matrices in early fault-tolerant quantum settings.',
    time: '4:10PM–5:10PM EST',
    materials: [
      { label: 'arXiv:2606.11475', url: 'https://arxiv.org/abs/2606.11475' },
      { label: 'arXiv:2403.08922', url: 'https://arxiv.org/abs/2403.08922' },
    ],
  },
  {
    slug: '2026-09-18-hsuan-cheng-wu',
    date: 'September 18, 2026',
    speaker: 'Hsuan-Cheng Wu (Penn State University)',
    title: 'TBD',
    abstract: 'TBD',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
  {
    slug: '2026-09-25-lingwei-zhang',
    date: 'September 25, 2026',
    speaker: 'Lingwei Zhang (University of Michigan)',
    title: 'TBD',
    abstract: 'TBD',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
  {
    slug: '2026-10-02-ke-wang',
    date: 'October 2, 2026',
    speaker: 'Ke Wang (University of Michigan)',
    title: 'Microscopic Derivation of Master Equations for Open Quantum Systems',
    abstract: 'This tutorial talk will introduce the microscopic derivation of open quantum system dynamics from system–environment interactions, covering both non-Markovian and Markovian regimes. We will discuss the hierarchy of approximations connecting microscopic Hamiltonian dynamics, non-Markovian reduced dynamics, and Markovian master equations, and explain how these different descriptions are related. We will also discuss their connections to Hamiltonian simulation.',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
  {
    slug: '2026-10-02-ke-wang',
    date: 'October 9, 2026',
    speaker: 'Zhiyan Ding (University of Michigan)',
    title: 'TBD',
    abstract: 'TBD',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
  {
    slug: '2026-10-02-ke-wang',
    date: 'October 16, 2026',
    speaker: 'Yongtao Zhan (Caltech)',
    title: 'TBD',
    abstract: 'TBD',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
  {
    slug: '2026-10-02-ke-wang',
    date: 'October 23, 2026',
    speaker: 'Jungmo Lee (University of Michigan)',
    title: 'TBD',
    abstract: 'TBD',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
];

// Change this slug after each seminar to feature the next scheduled talk.
export const nextTalk = talks.find((talk) => talk.slug === '2026-09-11-junaid-aftab');

export function talkTitle(talk: Talk) {
  return talk.title.trim() && talk.title !== 'TBD'
    ? talk.title
    : 'Talk title to be announced';
}
