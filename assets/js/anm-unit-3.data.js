// --- Data Structure ---
const studyData = [
  {
    id: "topic_1",
    title: "1. Boundary Value Problems",
    description: "Boundary value formulation and solution strategy.",
    color: "blue",
    tasks: [
      { id: "anm3_t1_1", text: "Theory: Boundary value problems by finite difference method", type: "theory", completed: false },
      { id: "anm3_t1_2", text: "Theory: Boundary value problems by shooting method", type: "theory", completed: false }
    ]
  },
  {
    id: "topic_2",
    title: "2. Numerical Solution of PDEs",
    description: "Numerical treatment of the main PDE classes.",
    color: "indigo",
    tasks: [
      { id: "anm3_t2_1", text: "Theory: Numerical solution of partial differential equations", type: "theory", completed: false },
      { id: "anm3_t2_2", text: "Theory: Parabolic, elliptic, and hyperbolic equations", type: "theory", completed: false }
    ]
  },
  {
    id: "topic_3",
    title: "3. PDE Revision Layer",
    description: "Use this card to consolidate the methods mentally.",
    color: "purple",
    tasks: [
      { id: "anm3_t3_1", text: "Practice: Summarize when to use finite difference versus shooting methods", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_4",
    title: "4. Lecture Plan Extension",
    description: "Placeholder for future unit-specific examples.",
    color: "amber",
    tasks: [
      { id: "anm3_t4_1", text: "Add selected Unit 3 PDE/BVP problems later", type: "note", completed: false }
    ]
  }
];
