// --- Data Structure ---
const studyData = [
  {
    id: "topic_1",
    title: "1. Numerical Integration",
    description: "Quadrature methods named in the syllabus.",
    color: "blue",
    tasks: [
      { id: "anm2_t1_1", text: "Theory: Romberg integration", type: "theory", completed: false },
      { id: "anm2_t1_2", text: "Theory: Gaussian quadrature", type: "theory", completed: false }
    ]
  },
  {
    id: "topic_2",
    title: "2. System of Differential Equations",
    description: "Initial value methods for systems of ODEs.",
    color: "indigo",
    tasks: [
      { id: "anm2_t2_1", text: "Theory: System of first order and higher order differential equations by Euler's methods", type: "theory", completed: false },
      { id: "anm2_t2_2", text: "Theory: System of first order and higher order differential equations by Runge-Kutta methods", type: "theory", completed: false }
    ]
  },
  {
    id: "topic_3",
    title: "3. Approximation Theory",
    description: "Chebyshev approximation closes the unit.",
    color: "purple",
    tasks: [
      { id: "anm2_t3_1", text: "Theory: Chebyshev approximation", type: "theory", completed: false },
      { id: "anm2_t3_2", text: "Practice: Review one approximation example or derivation", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_4",
    title: "4. Lecture Plan Extension",
    description: "Future place for quadrature and ODE worked examples.",
    color: "amber",
    tasks: [
      { id: "anm2_t4_1", text: "Add selected Unit 2 examples when the lecture plan is finalized", type: "note", completed: false }
    ]
  }
];
