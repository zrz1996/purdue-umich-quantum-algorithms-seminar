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
    title: 'From nonlinear stochastic differential equations to quantum channels: the Kolmogorov-Lindblad mapping',
    abstract: 'Nonlinear stochastic differential equations describe dynamics under uncertainty, but their nonlinear coefficients and noise averaging complicate quantum representations. In the talk, we will discuss the Kolmogorov-Lindblad mapping developed by us that encodes their probability laws as the position diagonals of trace-one quantum density operators. For each Brownian realisation, a stochastic flow transports the initial ensemble; the square-root Jacobian makes its action on half-densities unitary. Averaging the resulting pure-state projectors gives a Lindblad equation with Hermitian jump operators. Its diagonal reproduces the Fokker-Planck density, while forward and backward intertwining identities recover bounded observables and time correlations independently of the initial coherences. A Galerkin approximation obtained by projecting the Stratonovich generators preserves the Lindblad structure. We give a residual-based error estimate and conditional quantum costs that display the dimension dependence of approximation constants, operator normalisations, state preparation and readout. Numerical experiments for double-well Langevin dynamics and noisy Lorenz-63 show rapid convergence of selected statistics at fixed dimension. The construction provides an exact bridge from flow-regular nonlinear diffusions to quantum channels; any computational advantage additionally requires controlled approximationand coherent access for the chosen problem family.',
    time: '4:10PM–5:10PM EST',
    materials: [{ label: 'arXiv:2608.09903', url: 'https://arxiv.org/abs/2608.09903' },],
  },
  // {
  //   slug: '2026-09-25-lingwei-zhang',
  //   date: 'September 25, 2026 (Rescheduled)',
  //   speaker: 'Lingwei Zhang (University of Michigan)',
  //   title: 'Improved Error Scaling for Quantum Spectral Estimation with Multiple Initial States',
  //   abstract: 'Estimating the eigenvalues and multiplicities of quantum Hamiltonians, together with properties of observables within their eigenspaces, is a fundamental task in quantum computation. The QFAMES framework addresses these problems through Gaussian filtering of transition amplitudes between multiple initial states. In this talk, we will introduce an independent time-sampling strategy and examine how it improves the dependence of estimation error and computational cost on the number of initial states. We will present three theoretical results concerning eigenvalue accuracy, exact multiplicity recovery, and observable estimation, highlighting the main ideas behind the error analysis and proofs. Under suitable assumptions and with sufficiently many time samples per initial-state pair, the leading contribution to the total simulation cost for eigenvalue and observable estimation is independent of the number of initial states, up to logarithmic factors. We will conclude with preliminary numerical results illustrating the predicted error scaling.',
  //   time: '4:10PM–5:10PM EST',
  //   materials: [{ label: '[DLYZ,PRX Quantum]', url: 'https://journals.aps.org/prxquantum/abstract/10.1103/jch7-734h' },],
  // },
  {
    slug: '2026-10-02-ke-wang',
    date: 'October 2, 2026',
    speaker: 'Ke Wang (University of Michigan)',
    title: 'Microscopic Derivation of Master Equations for Open Quantum Systems',
    abstract: 'This tutorial talk will introduce the microscopic derivation of open quantum system dynamics from system–environment interactions, covering both non-Markovian and Markovian regimes. We will discuss the hierarchy of approximations connecting microscopic Hamiltonian dynamics, non-Markovian reduced dynamics, and Markovian master equations, and explain how these different descriptions are related. We will also discuss their connections to Hamiltonian simulation.',
    time: '4:10PM–5:10PM EST',
    materials: [
      { label: 'arXiv:1906.04478', url: 'https://arxiv.org/abs/1906.04478' },
    ],
  },
  {
    slug: '2026-10-09-zhiyan-ding',
    date: 'October 9, 2026',
    speaker: 'Zhiyan Ding (University of Michigan)',
    title: 'Tutorial on thermal/ground state preparation via Lindblad dynamics',
    abstract: 'In this talk, I will give a tutorial about constructing Lindblad dynamics for solving thermal state/ground state preparation problems. The talk will start with intuition from both mathematical and physical side. I will introduce the recent development in the last three years. I will mainly focus on introducing the construction of such dynamics and the theory behind the construction. After that, I will briefly introduce how the end-to-end theoretical complexity is proved in this community and provide several references.',
    time: '4:10PM–5:10PM EST',
    materials: [{ label: '[DCL24,PRR]', url: 'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.033147' },
                { label: '[DLL24,PRX Quantum]', url: 'https://journals.aps.org/prxquantum/pdf/10.1103/PRXQuantum.5.020332' },
                { label: '[DLL25,CMP]', url: 'https://link.springer.com/article/10.1007/s00220-025-05235-3' },
                { label: '[ZDH+26,PRX]', url: 'https://journals.aps.org/prx/abstract/10.1103/wzb3-dbg9' },
               ],
  },
  {
    slug: '2026-10-16-yongtao-zhan',
    date: 'October 16, 2026',
    speaker: 'Yongtao Zhan (Caltech)',
    title: 'TBD',
    abstract: 'TBD',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
  {
    slug: '2026-10-23-jungmo-lee',
    date: 'October 23, 2026',
    speaker: 'Jungmo Lee (University of Michigan)',
    title: 'TBD',
    abstract: 'TBD',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
  {
    slug: '2026-10-30-ruizhe-zhang',
    date: 'October 30, 2026',
    speaker: 'Ruizhe Zhang (Purdue University)',
    title: 'TBD',
    abstract: 'TBD',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
  {
    slug: '2026-11-6-lingwei-zhang',
    date: 'November 6, 2026',
    speaker: 'Lingwei Zhang (University of Michigan)',
    title: 'Improved Error Scaling for Quantum Spectral Estimation with Multiple Initial States',
    abstract: 'Estimating the eigenvalues and multiplicities of quantum Hamiltonians, together with properties of observables within their eigenspaces, is a fundamental task in quantum computation. The QFAMES framework addresses these problems through Gaussian filtering of transition amplitudes between multiple initial states. In this talk, we will introduce an independent time-sampling strategy and examine how it improves the dependence of estimation error and computational cost on the number of initial states. We will present three theoretical results concerning eigenvalue accuracy, exact multiplicity recovery, and observable estimation, highlighting the main ideas behind the error analysis and proofs. Under suitable assumptions and with sufficiently many time samples per initial-state pair, the leading contribution to the total simulation cost for eigenvalue and observable estimation is independent of the number of initial states, up to logarithmic factors. We will conclude with preliminary numerical results illustrating the predicted error scaling.',
    time: '4:10PM–5:10PM EST',
    materials: [{ label: '[DLYZ,PRX Quantum]', url: 'https://journals.aps.org/prxquantum/abstract/10.1103/jch7-734h' },],
  }, 
  {
    slug: '2026-11-13-haoen-li',
    date: 'November 13, 2026',
    speaker: 'Haoen Li (University of California, Berkeley)',
    title: 'TBD',
    abstract: 'TBD',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
  {
    slug: '2026-12-04-jiaqing-jiang',
    date: 'December 4, 2026',
    speaker: 'Jiaqing Jiang (Simons Institute at UC Berkeley)',
    title: 'TBD',
    abstract: 'TBD',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
];

// Keep today's talk featured until the calendar day ends in Eastern time.
export function getNextTalk(now = new Date()) {
  const today = new Date(
    now.toLocaleDateString('en-US', { timeZone: 'America/New_York' }),
  );

  return talks.find((talk) => new Date(talk.date) >= today);
}

export function talkTitle(talk: Talk) {
  return talk.title.trim() && talk.title !== 'TBD'
    ? talk.title
    : 'Talk title to be announced';
}
