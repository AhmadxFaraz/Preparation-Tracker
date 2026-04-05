// --- Data Structure ---
const studyData = [
  {
    id: "topic_1",
    title: "1. Problem Formulation",
    description: "Set up the linear programming model correctly before solving.",
    color: "blue",
    tasks: [
      { id: "ds4_t1_1", text: "Theory: Formation of linear programming problems", type: "theory", completed: false },
      { id: "ds4_t1_2", text: "Practice: Translate a word problem into constraints and objective function", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_2",
    title: "2. Solution Methods",
    description: "Main methods listed in the syllabus.",
    color: "indigo",
    tasks: [
      { id: "ds4_t2_1", text: "Theory: Graphical method", type: "theory", completed: false },
      { id: "ds4_t2_2", text: "Theory: Simplex method", type: "theory", completed: false },
      { id: "ds4_t2_3", text: "Practice: Solve one graphical LP example", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_3",
    title: "3. Duality",
    description: "Understand the dual viewpoint in linear programming.",
    color: "purple",
    tasks: [
      { id: "ds4_t3_1", text: "Theory: Duality", type: "theory", completed: false },
      { id: "ds4_t3_2", text: "Practice: Write the dual of a standard-form LP problem", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_4",
    title: "4. Lecture Plan Extension",
    description: "Keep a slot for later exam-oriented problem sets.",
    color: "amber",
    tasks: [
      { id: "ds4_t4_1", text: "Add simplex and duality practice questions when you select them", type: "note", completed: false }
    ]
  }
];
