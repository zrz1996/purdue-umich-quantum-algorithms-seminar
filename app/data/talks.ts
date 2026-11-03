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
    materials: [
                { label: '[CKBG25,Nature]', url: 'https://www.nature.com/articles/s41586-025-09583-x' },
                { label: '[CKBG23,arXiv]', url: 'https://arxiv.org/abs/2303.18224'},
                { label: '[DCL24,PRR]', url: 'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.033147' },
                { label: '[DLL24,PRX Quantum]', url: 'https://journals.aps.org/prxquantum/pdf/10.1103/PRXQuantum.5.020332' },
                { label: '[DLL25,CMP]', url: 'https://link.springer.com/article/10.1007/s00220-025-05235-3' },
                { label: '[ZDH+26,PRX]', url: 'https://journals.aps.org/prx/abstract/10.1103/wzb3-dbg9' },
               ],
  },
  {
    slug: '2026-10-16-yongtao-zhan',
    date: 'October 16, 2026',
    speaker: 'Yongtao Zhan (Caltech)',
    title: 'System–Bath Dynamics: Old Ideas and New Insights',
    abstract: 'System–bath interactions have long played a central role in the study of open quantum systems. In this talk, I will first review the historical development of system–bath dynamics, including the derivation of Davies generators and experimental demonstrations of low-energy state preparation over the past several decades. I will then discuss the limitations of these traditional approaches and highlight recent advances in harnessing system–bath interactions for efficient Gibbs- and ground-state preparation, along with recent experimental efforts to implement such protocols. Time permitting, I will also discuss theoretical developments in understanding system–bath dynamics beyond the Lindblad approximation.',
    time: '4:10PM–5:10PM EST',
    materials: [{ label: '[DZPL,Nature Physics]', url: 'https://www.nature.com/articles/s41567-026-03389-y' }],
  },
  {
    slug: '2026-10-23-jungmo-lee',
    date: 'October 23, 2026',
    speaker: 'Jungmo Lee (University of Michigan)',
    title: 'Gradient Estimation in Variational Quantum Algorithms',
    abstract: 'Gradient-based optimization of variational quantum algorithms requires estimating derivatives of expectation values with respect to variational parameters. While expectation values can be estimated directly from quantum measurements, obtaining their gradients directly is generally more challenging. In this talk, I will introduce the parameter-shift rule for gate-based variational quantum algorithms and its extension to continuous-time quantum control through the differentiable analog quantum computing (DAC) framework, which combines parameter-shift techniques with Monte Carlo integration. I will then discuss black-box zeroth-order gradient estimation methods, including finite differences, Gaussian smoothing-based estimators, and simultaneous perturbation stochastic approximation (SPSA). I will compare these approaches in terms of measurement complexity and estimation accuracy.  Finally, I will briefly present our ongoing work on variational quantum eigenvalue transformation of unitaries (QETU) for ground-state preparation.',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
  {
    slug: '2026-10-30-ruizhe-zhang',
    date: 'October 30, 2026',
    speaker: 'Ruizhe Zhang (Purdue University)',
    title: 'Early Fault-Tolerant Approaches for Quantum Eigenvalue Problems',
    abstract: 'This will be a self-contained tutorial talk on estimating the eigenvalues of a quantum Hamiltonian on an early fault-tolerant quantum computer. I will provide an overview of the approaches to this problem. Then, I will discuss our approach based on Gaussian filtering (QMEGS) and the connection between this quantum problem and a classical signal-processing problem called superresolution. If time allows, I’ll briefly discuss a recent generalization for estimating eigenvalue degeneracies (QFAMES). ',
    time: '4:10PM–5:10PM EST',
    materials: [],
  },
  {
    slug: '2026-11-6-lingwei-zhang',
    date: 'November 6, 2026',
    speaker: 'Lingwei Zhang (University of Michigan)',
    title: 'Quantum Spectral Estimation with Multiple Initial States',
    abstract: 'Multiple initial states provide access to spectral information that a single state cannot reveal, including eigenvalue degeneracies and observable spectra within eigenspaces. In this talk, I will introduce QFAMES, a Gaussian-filtering framework for recovering this information from matrix-valued quantum signals. I will explain how cross amplitudes between initial states encode eigenspace structure and how QFAMES uses this structure to estimate energies, multiplicities, and observables. Then, I will present our recent work on improving its sampling efficiency. By sampling evolution times independently across state pairs, we obtain better error and cost scaling with the number of initial states under suitable assumptions, while retaining Heisenberg scaling for energy estimation.',
    time: '4:10PM–5:10PM EST',
    materials: [{ label: '[DLYZ,PRX Quantum]', url: 'https://journals.aps.org/prxquantum/abstract/10.1103/jch7-734h' },
               { label: '[ZD,arXiv/2610.20482]', url: 'https://arxiv.org/abs/2610.20482' }
               ],
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
