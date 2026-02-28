// --- Data Structure ---
        const studyData = [
            {
                id: "topic_1",
                title: "1. Partial Differentiation & Euler's Theorem",
                description: "Functions of several variables, homogeneous functions, and verification of Euler's Theorem.",
                color: "blue",
                tasks: [
                    { id: "t1_1", text: "Theory: Functions of several variables", type: "theory", completed: false },
                    { id: "t1_2", text: "Theory: Partial differentiation", type: "theory", completed: false },
                    { id: "t1_3", text: "Theory: Homogeneous functions & Euler's theorem", type: "theory", completed: false },
                    { id: "t1_4", text: "Q.3 Exercise 2.2 (J&I, p.2.30)", type: "problem", completed: false },
                    { id: "t1_5", text: "Solved Ex 2.22 & 2.23 (J&I, p.2.33)", type: "problem", completed: false },
                    { id: "t1_6", text: "Q. 1-13 / Exercise 2.3 (J&I, p.2.44)", type: "problem", completed: false },
                    { id: "t1_7", text: "Verify Euler: f(x,y) = (x^1/4 + y^1/4) / (x^1/5 + y^1/5)", type: "problem", completed: false },
                    { id: "t1_8", text: "Verify Euler: f(x,y) = (x^2 - 3xy) / (x+y)", type: "problem", completed: false },
                    { id: "t1_9", text: "Solved Ex 2.26 & 2.27 (J&I, p.2.36-37)", type: "problem", completed: false },
                    { id: "t1_10", text: "Q. 29-33 / Exercise 2.3 (J&I, p.2.45)", type: "problem", completed: false },
                    { id: "t1_11", text: "Q. 6 & 7 / Example 25 (Chandrika Prasad, p.145)", type: "problem", completed: false },
                    { id: "t1_12", text: "Q. 15 & 18 / Example 25 (Chandrika Prasad, p.147)", type: "problem", completed: false }
                ]
            },
            {
                id: "topic_2",
                title: "2. Total Differential & Change of Variables",
                description: "Mastering the total differential coefficient and changing variables in functions.",
                color: "indigo",
                tasks: [
                    { id: "t2_1", text: "Theory: Total differential coefficient", type: "theory", completed: false },
                    { id: "t2_2", text: "Theory: Change of variables", type: "theory", completed: false },
                    { id: "t2_3", text: "Q. 16-20 / Exercise 2.2 (J&I, p.2.31)", type: "problem", completed: false },
                    { id: "t2_4", text: "Q. 26-30 / Exercise 2.2 (J&I, p.2.31)", type: "problem", completed: false },
                    { id: "t2_5", text: "Q. 3, 6, 7 / Example 27 (Chandrika Prasad, p.158-59)", type: "problem", completed: false },
                    { id: "t2_6", text: "Q. 12, 13 & 14 / Example 27 (Chandrika Prasad, p.158-59)", type: "problem", completed: false }
                ]
            },
            {
                id: "topic_3",
                title: "3. Jacobians",
                description: "Definition and properties of Jacobians.",
                color: "purple",
                tasks: [
                    { id: "t3_1", text: "Theory: Jacobian Definition and properties", type: "theory", completed: false },
                    { id: "t3_2", text: "Solved Example 2.19 (J&I, p.2.27)", type: "problem", completed: false },
                    { id: "t3_3", text: "Solved Example 2.20(a) (J&I, p.2.28)", type: "problem", completed: false },
                    { id: "t3_4", text: "Q. 1-8 / Example 28 (Chandrika Prasad, p.161-162)", type: "problem", completed: false }
                ]
            },
            {
                id: "topic_4",
                title: "4. Taylor Series & Errors",
                description: "Expansions of functions of two variables and approximation methods.",
                color: "teal",
                tasks: [
                    { id: "t4_1", text: "Theory: Taylor series for function of two variables", type: "theory", completed: false },
                    { id: "t4_2", text: "Q. 36-40 / Exercise 2.3 (J&I, p.2.45)", type: "problem", completed: false },
                    { id: "t4_3", text: "Theory: Error and Approximations", type: "theory", completed: false },
                    { id: "t4_4", text: "Q. 4-9 / Example 29 (Chandrika Prasad, p.165-66)", type: "problem", completed: false },
                    { id: "t4_5", text: "Q. 48-52 / Exercise 2.2 (J&I, p.2.32)", type: "problem", completed: false }
                ]
            },
            {
                id: "topic_5",
                title: "5. Maxima and Minima",
                description: "Optimization using the 2nd derivative test.",
                color: "amber",
                tasks: [
                    { id: "t5_1", text: "Theory: Maxima and minima of function of two variables", type: "theory", completed: false },
                    { id: "t5_2", text: "Theory: 2nd derivative test", type: "theory", completed: false },
                    { id: "t5_3", text: "Q. 1-6 / Exercise 2.4 (J&I, p.2.54)", type: "problem", completed: false },
                    { id: "t5_4", text: "Q. 5, 7, 8 & 15 / Example 30 (Chandrika Prasad, p.174-75)", type: "problem", completed: false }
                ]
            }
        ];

