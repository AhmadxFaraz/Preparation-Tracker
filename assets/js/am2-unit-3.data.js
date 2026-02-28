// --- Data Structure ---
        const studyData = [
            {
                id: "topic_1",
                title: "1. Basic & Inverse Laplace Transforms",
                description: "Basic theory of Laplace Transform, elementary functions, and Inverse Laplace Transform.",
                color: "blue",
                tasks: [
                    { id: "t1_1", text: "Theory: Basic theory of Laplace Transform", type: "theory", completed: false },
                    { id: "t1_2", text: "Theory: Laplace Transform of elementary functions", type: "theory", completed: false },
                    { id: "t1_3", text: "Theory: Inverse Laplace Transform", type: "theory", completed: false },
                    { id: "t1_4", text: "Example 8.1-8.5 (on page 8.2 & 8.3) (J&I)", type: "problem", completed: false },
                    { id: "t1_5", text: "Q. 1-10 / Exercise 8.1 (on page 8.6) (J&I)", type: "problem", completed: false },
                    { id: "t1_6", text: "Q. 19-22 / Exercise 8.1 (on page 8.6) (J&I)", type: "problem", completed: false },
                    { id: "t1_7", text: "Q. 31-40 / Exercise 8.1 (on page 8.6 & 8.7) (J&I)", type: "problem", completed: false }
                ]
            },
            {
                id: "topic_2",
                title: "2. Transforms of Derivatives & Integrals",
                description: "Laplace Transform of derivatives, integrals, and the First Shifting Property.",
                color: "indigo",
                tasks: [
                    { id: "t2_1", text: "Theory: Laplace Transform of derivatives", type: "theory", completed: false },
                    { id: "t2_2", text: "Theory: Laplace Transform of Integrals", type: "theory", completed: false },
                    { id: "t2_3", text: "Theory: Translation Theorem (First Shifting Property)", type: "theory", completed: false },
                    { id: "t2_4", text: "Example 8.16, 8.17 & 8.22 (on page 8.11, 8.12 & 8.15) (J&I)", type: "problem", completed: false },
                    { id: "t2_5", text: "Q. 1-19 / Exercise 8.2 (on page 8.13) (J&I)", type: "problem", completed: false },
                    { id: "t2_6", text: "Q. 1-21 / Exercise 8.3 (on page 8.22) (J&I)", type: "problem", completed: false }
                ]
            },
            {
                id: "topic_3",
                title: "3. Differentiation, Integration & Unit Step",
                description: "Differentiation/Integration of Laplace Transform, Unit Step Functions, and Second Shifting Property.",
                color: "purple",
                tasks: [
                    { id: "t3_1", text: "Theory: Differentiation of Laplace Transform", type: "theory", completed: false },
                    { id: "t3_2", text: "Theory: Integration of Laplace Transform", type: "theory", completed: false },
                    { id: "t3_3", text: "Theory: Unit Step Functions", type: "theory", completed: false },
                    { id: "t3_4", text: "Theory: Translation Theorem (Second Shifting Property)", type: "theory", completed: false },
                    { id: "t3_5", text: "Example 8.32, 8.33 & 8.37 (on page 8.29 & 8.33) (J&I)", type: "problem", completed: false },
                    { id: "t3_6", text: "Q. 10-22 / Exercise 8.4 (on page 8.38) (J&I)", type: "problem", completed: false },
                    { id: "t3_7", text: "Q. 32-42 / Exercise 8.4 (on page 8.38) (J&I)", type: "problem", completed: false },
                    { id: "t3_8", text: "Q. 29-52 / Exercise 8.3 (on page 8.23) (J&I)", type: "problem", completed: false }
                ]
            },
            {
                id: "topic_4",
                title: "4. Periodic Functions & Convolution Theorem",
                description: "Handling periodic functions and applying the Convolution Theorem.",
                color: "teal",
                tasks: [
                    { id: "t4_1", text: "Theory: Periodic Functions", type: "theory", completed: false },
                    { id: "t4_2", text: "Theory: Convolution Theorem", type: "theory", completed: false },
                    { id: "t4_3", text: "Q. 2, 3, 6, 8 / Exercise 8.5 (on page 8.43) (J&I)", type: "problem", completed: false },
                    { id: "t4_4", text: "Q. 46-55 / Exercise 8.4 (on page 8.38) (J&I)", type: "problem", completed: false }
                ]
            },
            {
                id: "topic_5",
                title: "5. Applications to Differential Equations",
                description: "Using Laplace Transforms to solve linear differential equations (Initial Value Problems).",
                color: "amber",
                tasks: [
                    { id: "t5_1", text: "Theory: Applications to linear differential equations (Initial Value Problems)", type: "theory", completed: false },
                    { id: "t5_2", text: "Q. 23-36 / Exercise 8.2 (on page 8.13) (J&I)", type: "problem", completed: false },
                    { id: "t5_3", text: "Q. 22-28 / Exercise 8.3 (on page 8.22)", type: "problem", completed: false },
                    { id: "t5_4", text: "Q. 23-31 & Q. 58-64 / Exercise 8.4 (on page 8.38 & 8.39) (J&I)", type: "problem", completed: false },
                    { id: "t5_5", text: "Q. 53-65 / Exercise 8.3 (on page 8.24) (J&I)", type: "problem", completed: false },
                    { id: "t5_6", text: "Q. 14-20 / Exercise 8.5 (on page 8.44) (J&I)", type: "problem", completed: false }
                ]
            }
];
