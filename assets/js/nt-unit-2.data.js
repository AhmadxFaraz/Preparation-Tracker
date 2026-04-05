// --- Data Structure ---
const studyData = [
  {
    id: "topic_1",
    title: "1. Classical Interpolation Formulae",
    description: "Core interpolation methods listed in the syllabus.",
    color: "blue",
    tasks: [
      { id: "nt2_t1_1", text: "Theory: Lagrange interpolation", type: "theory", completed: false },
      { id: "nt2_t1_2", text: "Theory: Newton's divided difference interpolation", type: "theory", completed: false }
    ]
  },
  {
    id: "topic_2",
    title: "2. Polynomial and Rational Interpolation",
    description: "Intermediate interpolation models beyond the standard formulas.",
    color: "indigo",
    tasks: [
      { id: "nt2_t2_1", text: "Theory: Polynomial interpolation", type: "theory", completed: false },
      { id: "nt2_t2_2", text: "Theory: Rational function interpolation", type: "theory", completed: false },
      { id: "nt2_t2_3", text: "Practice: Compare polynomial and rational fits on sample data", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_3",
    title: "3. Spline Interpolation",
    description: "Spline methods at the end of Unit II.",
    color: "purple",
    tasks: [
      { id: "nt2_t3_1", text: "Theory: Spline interpolation", type: "theory", completed: false },
      { id: "nt2_t3_2", text: "Practice: Review a basic spline construction example", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_4",
    title: "4. Lecture Plan Extension",
    description: "Place to add book-specific interpolation problems later.",
    color: "amber",
    tasks: [
      { id: "nt2_t4_1", text: "Add selected interpolation questions when the detailed lecture plan is available", type: "note", completed: false }
    ]
  }
];
