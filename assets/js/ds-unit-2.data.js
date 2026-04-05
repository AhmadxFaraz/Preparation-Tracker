// --- Data Structure ---
const studyData = [
  {
    id: "topic_1",
    title: "1. Graph Fundamentals",
    description: "Definitions and structural language for graphs.",
    color: "blue",
    tasks: [
      { id: "ds2_t1_1", text: "Theory: Formal definition of a graph", type: "theory", completed: false },
      { id: "ds2_t1_2", text: "Theory: Directed and undirected graphs", type: "theory", completed: false },
      { id: "ds2_t1_3", text: "Theory: Cycles, chains, and paths", type: "theory", completed: false }
    ]
  },
  {
    id: "topic_2",
    title: "2. Connectivity and Matrices",
    description: "Connectivity ideas and matrix-based graph representations.",
    color: "indigo",
    tasks: [
      { id: "ds2_t2_1", text: "Theory: Connectivity and adjacency", type: "theory", completed: false },
      { id: "ds2_t2_2", text: "Theory: Incidence and adjacency matrices", type: "theory", completed: false },
      { id: "ds2_t2_3", text: "Practice: Build matrices for sample graphs", type: "problem", completed: false }
    ]
  },
  {
    id: "topic_3",
    title: "3. Graph Algorithms",
    description: "Optimization and network algorithms named in the syllabus.",
    color: "purple",
    tasks: [
      { id: "ds2_t3_1", text: "Theory: Shortest path algorithm", type: "theory", completed: false },
      { id: "ds2_t3_2", text: "Theory: Transport networks and flows in networks", type: "theory", completed: false },
      { id: "ds2_t3_3", text: "Theory: Ford-Fulkerson algorithm", type: "theory", completed: false }
    ]
  },
  {
    id: "topic_4",
    title: "4. Practice and Revision",
    description: "Keep space for future problem selection.",
    color: "amber",
    tasks: [
      { id: "ds2_t4_1", text: "Add selected graph theory problems when you choose the source material", type: "note", completed: false }
    ]
  }
];
