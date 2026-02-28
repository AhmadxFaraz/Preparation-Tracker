// --- Data Structure ---
    const studyData = [
        {
            id: "topic_1",
            title: "1. First-Order Differential Equations",
            description: "Linear/nonlinear equations, exact equations, and integrating factors.",
            color: "blue",
            tasks: [
                { id: "t1_1", text: "Theory: Linear and nonlinear differential equations", type: "theory", completed: false },
                { id: "t1_2", text: "Theory: Exact first-order equations and integrating factors", type: "theory", completed: false },
                { id: "t1_3", text: "Exercise 4.4, Q. 1-45 (p. 4.24, J&I)", type: "problem", completed: false }
            ]
        },
        {
            id: "topic_2",
            title: "2. Higher-Order Homogeneous Linear ODEs",
            description: "Constant-coefficient equations with real/complex and repeated roots.",
            color: "indigo",
            tasks: [
                { id: "t2_1", text: "Theory: Real distinct and repeated roots", type: "theory", completed: false },
                { id: "t2_2", text: "Theory: Simple and repeated complex roots", type: "theory", completed: false },
                { id: "t2_3", text: "Exercise 5.3, Q. 1-26 (p. 5.25, J&I)", type: "problem", completed: false },
                { id: "t2_4", text: "Example 5.3, Q. 33-45 (p. 5.25, J&I)", type: "problem", completed: false }
            ]
        },
        {
            id: "topic_3",
            title: "3. Non-Homogeneous Linear ODEs",
            description: "Operator methods, Euler-Cauchy equations, and variation of parameters.",
            color: "purple",
            tasks: [
                { id: "t3_1", text: "Theory: Operator methods for particular integrals", type: "theory", completed: false },
                { id: "t3_2", text: "Theory: Euler Cauchy equation", type: "theory", completed: false },
                { id: "t3_3", text: "Theory: Method of variation of parameters", type: "theory", completed: false },
                { id: "t3_4", text: "Exercise 5.7, Q. 1-50 (p. 5.54, J&I)", type: "problem", completed: false },
                { id: "t3_5", text: "Exercise 5.6, Q. 1-45 (p. 5.43, J&I)", type: "problem", completed: false },
                { id: "t3_6", text: "Exercise 5.4, Q. 1-12 (p. 5.32, J&I)", type: "problem", completed: false }
            ]
        },
        {
            id: "topic_4",
            title: "4. Simultaneous Linear Differential Equations",
            description: "Methods for solving simultaneous linear differential systems.",
            color: "teal",
            tasks: [
                { id: "t4_1", text: "Theory: Simultaneous linear differential equations", type: "theory", completed: false },
                { id: "t4_2", text: "Exercise 75 (p. 381, CP)", type: "problem", completed: false }
            ]
        },
        {
            id: "topic_5",
            title: "5. Applications to Physical Problems",
            description: "Growth/decay/mixing, particle motion, and electrical circuit models.",
            color: "amber",
            tasks: [
                { id: "t5_1", text: "Theory: Growth, decay, and mixing problems (p. 387, CP)", type: "theory", completed: false },
                { id: "t5_2", text: "Theory: Motion of particle (p. 390, CP)", type: "theory", completed: false },
                { id: "t5_3", text: "Theory: Electrical circuits (p. 392, CP)", type: "theory", completed: false }
            ]
        }
    ];
