// --- Data Structure ---
const studyData = [
  {
    id: "topic_1",
    title: "1. Roots of Algebraic and Nonlinear Equations",
    description: "Methods for solving nonlinear equations listed in Unit I.",
    color: "blue",
    tasks: [
      { id: "anm1_t1_1", text: "Theory: Roots of an algebraic equation by Bairstow's method", type: "theory", completed: false },
      { id: "anm1_t1_2", text: "Theory: System of nonlinear equations by iterative method", type: "theory", completed: false },
      { id: "anm1_t1_3", text: "Theory: System of nonlinear equations by Newton-Raphson method", type: "theory", completed: false }
    ]
  },
  {
    id: "topic_2",
    title: "2. Numerical Eigen Value Problems",
    description: "Numerical treatment of eigen values from the same unit.",
    color: "indigo",
    tasks: [
      { id: "anm1_t2_1", text: "Theory: Numerical approach to eigen value problem", type: "theory", completed: false },
      { id: "anm1_t2_2", text: "Practice: Review one sample eigen value iteration workflow", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_3",
    title: "3. Revision Layer",
    description: "Keep a revision pass for the main nonlinear solvers.",
    color: "purple",
    tasks: [
      { id: "anm1_t3_1", text: "Practice: Compare convergence behavior of the Unit I methods", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_4",
    title: "4. Lecture Plan Extension",
    description: "Placeholder for future selected examples.",
    color: "amber",
    tasks: [
      { id: "anm1_t4_1", text: "Add selected Unit 1 nonlinear/eigen problems later", type: "note", completed: false }
    ]
  }
];
