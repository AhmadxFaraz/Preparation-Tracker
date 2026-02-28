// --- Data Structure ---
    const studyData = [
        {
            id: "topic_1",
            title: "1. Rank of a Matrix",
            description: "Definition, examples, and echelon form methods for computing rank.",
            color: "blue",
            tasks: [
                { id: "t1_1", text: "Theory: Rank of a matrix (definition and examples)", type: "theory", completed: false },
                { id: "t1_2", text: "Theory: Echelon form of a matrix", type: "theory", completed: false },
                { id: "t1_3", text: "Exercise 3.1, Q. 26-30 (p. 3.17, J&I)", type: "problem", completed: false },
                { id: "t1_4", text: "Example 34, Q. 1-9 (p. 212, CP)", type: "problem", completed: false },
                { id: "t1_5", text: "Exercise 3.3, Q. 1-10 (J&I)", type: "problem", completed: false }
            ]
        },
        {
            id: "topic_2",
            title: "2. Consistency of Simultaneous Equations",
            description: "Homogeneous/non-homogeneous systems using rank and Theorem 3.7.",
            color: "indigo",
            tasks: [
                { id: "t2_1", text: "Theory: Consistency via rank of matrices", type: "theory", completed: false },
                { id: "t2_2", text: "Theory: Theorem 3.7", type: "theory", completed: false },
                { id: "t2_3", text: "Exercise 3.3, Q. 26-45 (p. 3.54, J&I)", type: "problem", completed: false },
                { id: "t2_4", text: "Example 34, Q. 12-18 (p. 212, CP)", type: "problem", completed: false }
            ]
        },
        {
            id: "topic_3",
            title: "3. Vector Spaces",
            description: "Subspaces, linear dependence/independence, dimension, and basis.",
            color: "purple",
            tasks: [
                { id: "t3_1", text: "Theory: Vector space definitions and examples", type: "theory", completed: false },
                { id: "t3_2", text: "Theory: Subspaces, dependence/independence, dimension and basis", type: "theory", completed: false },
                { id: "t3_3", text: "Exercise 3.2, Q. 1-9 (p. 3.37, J&I)", type: "problem", completed: false },
                { id: "t3_4", text: "Exercise 3.2, Q. 21 (p. 3.38, J&I)", type: "problem", completed: false },
                { id: "t3_5", text: "Exercise 3.2, Q. 27 (p. 3.39, J&I)", type: "problem", completed: false }
            ]
        },
        {
            id: "topic_4",
            title: "4. Eigen Value Problems",
            description: "Eigen values/eigen vectors, properties, and diagonalizable matrices.",
            color: "teal",
            tasks: [
                { id: "t4_1", text: "Theory: Eigen values and eigen vectors", type: "theory", completed: false },
                { id: "t4_2", text: "Theory: Properties and diagonalizable matrices", type: "theory", completed: false },
                { id: "t4_3", text: "Exercise 3.4, Q. 7-35 (p. 3.91, J&I)", type: "problem", completed: false }
            ]
        },
        {
            id: "topic_5",
            title: "5. Cayley Hamilton Theorem",
            description: "Statement, verification, and applications of Theorem 3.9.",
            color: "amber",
            tasks: [
                { id: "t5_1", text: "Theory: Cayley Hamilton Theorem (Theorem 3.9)", type: "theory", completed: false },
                { id: "t5_2", text: "Exercise 3.4, Q. 1-6 (p. 3.91, J&I)", type: "problem", completed: false },
                { id: "t5_3", text: "Example 35, Q. 18 (p. 225, CP)", type: "problem", completed: false }
            ]
        }
    ];
