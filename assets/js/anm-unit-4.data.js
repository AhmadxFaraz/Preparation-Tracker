// --- Data Structure ---
const studyData = [
  {
    id: "topic_1",
    title: "1. FEM Foundations",
    description: "Starting ideas behind the finite element method.",
    color: "blue",
    tasks: [
      { id: "anm4_t1_1", text: "Theory: Basic concept of the finite element method", type: "theory", completed: false },
      { id: "anm4_t1_2", text: "Theory: Variational formulation of BVPs", type: "theory", completed: false }
    ]
  },
  {
    id: "topic_2",
    title: "2. Approximation Methods",
    description: "Approximation strategies named explicitly in the syllabus.",
    color: "indigo",
    tasks: [
      { id: "anm4_t2_1", text: "Theory: Rayleigh-Ritz approximation", type: "theory", completed: false },
      { id: "anm4_t2_2", text: "Theory: Weighted residual methods", type: "theory", completed: false }
    ]
  },
  {
    id: "topic_3",
    title: "3. One-Dimensional FEM Analysis",
    description: "Assembly and post-processing steps for the 1D problem.",
    color: "purple",
    tasks: [
      { id: "anm4_t3_1", text: "Theory: Finite element analysis of one-dimensional problem", type: "theory", completed: false },
      { id: "anm4_t3_2", text: "Theory: Derivation, assembly, and solution of element equations", type: "theory", completed: false },
      { id: "anm4_t3_3", text: "Theory: Post processing of the results", type: "theory", completed: false }
    ]
  },
  {
    id: "topic_4",
    title: "4. Lecture Plan Extension",
    description: "Reserved for later worked FEM problems.",
    color: "amber",
    tasks: [
      { id: "anm4_t4_1", text: "Add selected Unit 4 finite-element examples once you choose them", type: "note", completed: false }
    ]
  }
];
