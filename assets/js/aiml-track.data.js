const trackData = [
  {
    id: "probability-statistics",
    title: "1. Probability and Statistics",
    description: "The uncertainty engine behind data science and machine learning.",
    color: "cyan",
    topics: [
      {
        id: "counting-events",
        title: "Counting, Sample Space, and Events",
        subtopics: ["Permutations and combinations", "Probability axioms", "Sample space", "Independent and mutually exclusive events"],
        useCase: "Setting up the event model before doing any serious inference.",
        mathUsed: ["Combinatorics", "Set Theory", "Probability"],
        completed: false
      },
      {
        id: "joint-conditional-bayes",
        title: "Joint, Conditional, and Bayesian Probability",
        subtopics: ["Marginal probability", "Conditional probability", "Joint probability", "Bayes Theorem", "Conditional expectation and variance"],
        useCase: "Reasoning under uncertainty in spam filtering, diagnosis, and probabilistic modeling.",
        mathUsed: ["Probability", "Expectation", "Conditional Reasoning"],
        completed: false
      },
      {
        id: "descriptive-statistics",
        title: "Descriptive Statistics and Dependence",
        subtopics: ["Mean", "Median", "Mode", "Standard deviation", "Correlation", "Covariance"],
        useCase: "Summarizing and comparing real datasets before modeling them badly.",
        mathUsed: ["Statistics", "Linear Algebra"],
        completed: false
      },
      {
        id: "random-variables-distributions",
        title: "Random Variables and Distributions",
        subtopics: ["Discrete random variables", "PMF", "Continuous random variables", "PDF", "CDF", "Conditional PDF"],
        useCase: "Modeling uncertainty in classification, forecasting, and simulation pipelines.",
        mathUsed: ["Probability", "Functions", "Calculus"],
        completed: false
      },
      {
        id: "standard-distributions",
        title: "Standard Distributions",
        subtopics: ["Uniform", "Bernoulli", "Binomial", "Exponential", "Poisson", "Normal", "Standard normal", "t-distribution", "Chi-squared"],
        useCase: "Choosing realistic models for count data, waiting times, errors, and uncertainty.",
        mathUsed: ["Probability", "Statistics"],
        completed: false
      },
      {
        id: "inference-testing",
        title: "Inference and Hypothesis Testing",
        subtopics: ["Central limit theorem", "Confidence interval", "z-test", "t-test", "Chi-squared test"],
        useCase: "Deciding whether an observed signal is real or just noise pretending to be important.",
        mathUsed: ["Statistics", "Sampling Theory"],
        completed: false
      }
    ]
  },
  {
    id: "linear-algebra",
    title: "2. Linear Algebra",
    description: "The structural language of vectors, projections, and model geometry.",
    color: "indigo",
    topics: [
      {
        id: "vector-spaces-dependence",
        title: "Vector Spaces and Dependence",
        subtopics: ["Vector space", "Subspaces", "Linear dependence", "Linear independence"],
        useCase: "Understanding feature spaces and model representation at the most basic level.",
        mathUsed: ["Vectors", "Proof Logic"],
        completed: false
      },
      {
        id: "matrices-systems",
        title: "Matrices and Systems of Equations",
        subtopics: ["Matrices", "Systems of linear equations", "Gaussian elimination", "Determinant", "Rank", "Nullity"],
        useCase: "Solving parameter systems and understanding linear structure in ML pipelines.",
        mathUsed: ["Matrices", "Algebra"],
        completed: false
      },
      {
        id: "matrix-properties-forms",
        title: "Matrix Properties and Quadratic Forms",
        subtopics: ["Orthogonal matrix", "Idempotent matrix", "Partition matrix", "Quadratic forms"],
        useCase: "Reasoning about geometry, constraints, and optimization surfaces.",
        mathUsed: ["Matrices", "Geometry", "Optimization"],
        completed: false
      },
      {
        id: "projections-eigens-svd",
        title: "Projections, Eigen Systems, and SVD",
        subtopics: ["Projection matrix", "Eigenvalues", "Eigenvectors", "LU decomposition", "Singular value decomposition"],
        useCase: "Powering PCA, dimensionality reduction, embeddings, and stable decomposition methods.",
        mathUsed: ["Linear Algebra", "Optimization"],
        completed: false
      }
    ]
  },
  {
    id: "calculus-optimization",
    title: "3. Calculus and Optimization",
    description: "The machinery behind model fitting, approximation, and parameter updates.",
    color: "purple",
    topics: [
      {
        id: "single-variable-foundations",
        title: "Functions, Limits, and Differentiability",
        subtopics: ["Functions of a single variable", "Limit", "Continuity", "Differentiability"],
        useCase: "Understanding what optimization is actually moving through.",
        mathUsed: ["Calculus", "Functions"],
        completed: false
      },
      {
        id: "taylor-series-local-models",
        title: "Taylor Series and Local Approximation",
        subtopics: ["Taylor series", "Local approximation"],
        useCase: "Approximating model behavior and loss surfaces near a point.",
        mathUsed: ["Calculus", "Series"],
        completed: false
      },
      {
        id: "maxima-minima-optimization",
        title: "Maxima, Minima, and Optimization",
        subtopics: ["Maxima and minima", "Single-variable optimization"],
        useCase: "Finding best-fit values rather than guessing with confidence.",
        mathUsed: ["Differentiation", "Optimization"],
        completed: false
      }
    ]
  },
  {
    id: "programming-dsa",
    title: "4. Programming, Data Structures, and Algorithms",
    description: "Because the math is useless if you cannot build or scale the system around it.",
    color: "amber",
    topics: [
      {
        id: "python-foundations",
        title: "Programming in Python",
        subtopics: ["Python syntax", "Problem-solving patterns", "Implementation habits"],
        useCase: "Translating model ideas into experiments, pipelines, and usable tools.",
        mathUsed: ["Algorithmic Thinking", "Logic"],
        completed: false
      },
      {
        id: "basic-data-structures",
        title: "Core Data Structures",
        subtopics: ["Stacks", "Queues", "Linked lists", "Trees", "Hash tables"],
        useCase: "Building systems that store, retrieve, and traverse data efficiently.",
        mathUsed: ["Discrete Structures", "Complexity"],
        completed: false
      },
      {
        id: "search-sorting",
        title: "Search and Sorting Algorithms",
        subtopics: ["Linear search", "Binary search", "Selection sort", "Bubble sort", "Insertion sort"],
        useCase: "Understanding baseline algorithmic cost before pretending everything is scalable.",
        mathUsed: ["Asymptotic Reasoning", "Logic"],
        completed: false
      },
      {
        id: "divide-conquer-graphs",
        title: "Divide and Conquer and Graph Basics",
        subtopics: ["Mergesort", "Quicksort", "Graph theory intro", "Traversals", "Shortest path"],
        useCase: "Powering graph search, recommendation, and network-aware systems.",
        mathUsed: ["Recursion", "Graph Theory", "Optimization"],
        completed: false
      }
    ]
  },
  {
    id: "databases-warehousing",
    title: "5. Database Management and Warehousing",
    description: "The part that keeps your fancy models connected to reality and actual data.",
    color: "cyan",
    topics: [
      {
        id: "er-relational-model",
        title: "ER Modeling and Relational Foundations",
        subtopics: ["ER-model", "Relational model", "Relational algebra", "Tuple calculus"],
        useCase: "Designing clean data systems before downstream analytics inherit chaos.",
        mathUsed: ["Logic", "Set Theory", "Relations"],
        completed: false
      },
      {
        id: "sql-integrity-normalization",
        title: "SQL, Integrity, and Normal Forms",
        subtopics: ["SQL", "Integrity constraints", "Normal form", "Data types", "File organization", "Indexing"],
        useCase: "Making queryable data reliable enough to trust in production.",
        mathUsed: ["Logic", "Relational Modeling"],
        completed: false
      },
      {
        id: "data-transformation",
        title: "Data Transformation",
        subtopics: ["Normalization", "Discretization", "Sampling", "Compression"],
        useCase: "Cleaning and reshaping messy data before it reaches a model.",
        mathUsed: ["Statistics", "Optimization"],
        completed: false
      },
      {
        id: "warehouse-modelling",
        title: "Data Warehousing",
        subtopics: ["Multidimensional schema", "Concept hierarchies", "Measures", "Categorization and computations"],
        useCase: "Organizing data for BI dashboards, reporting, and large-scale analytical workflows.",
        mathUsed: ["Aggregation", "Discrete Structures", "Statistics"],
        completed: false
      }
    ]
  },
  {
    id: "machine-learning",
    title: "6. Machine Learning",
    description: "The modeling layer where statistics, optimization, and linear algebra start working for a salary.",
    color: "indigo",
    topics: [
      {
        id: "supervised-learning-basics",
        title: "Supervised Learning Foundations",
        subtopics: ["Regression", "Classification", "Bias-variance trade-off"],
        useCase: "Predicting values or labels from known training data.",
        mathUsed: ["Statistics", "Optimization", "Linear Algebra"],
        completed: false
      },
      {
        id: "linear-models-classifiers",
        title: "Linear Models and Classical Classifiers",
        subtopics: ["Simple linear regression", "Multiple linear regression", "Ridge regression", "Logistic regression", "k-nearest neighbour", "Naive Bayes", "Linear discriminant analysis"],
        useCase: "Building the first serious predictive systems before reaching for deeper models.",
        mathUsed: ["Probability", "Linear Algebra", "Optimization"],
        completed: false
      },
      {
        id: "svm-trees-validation",
        title: "SVMs, Decision Trees, and Validation",
        subtopics: ["Support vector machine", "Decision trees", "Leave-one-out cross-validation", "k-fold cross-validation"],
        useCase: "Choosing and validating models instead of just fitting them and hoping.",
        mathUsed: ["Optimization", "Statistics", "Geometry"],
        completed: false
      },
      {
        id: "neural-networks",
        title: "Neural Networks",
        subtopics: ["Multi-layer perceptron", "Feed-forward neural network"],
        useCase: "Learning nonlinear mappings from data in higher-capacity models.",
        mathUsed: ["Linear Algebra", "Calculus", "Optimization"],
        completed: false
      },
      {
        id: "unsupervised-learning",
        title: "Unsupervised Learning and Dimensionality Reduction",
        subtopics: ["Clustering", "k-means / k-medoid", "Hierarchical clustering", "Single-linkage", "Multiple-linkage", "Dimensionality reduction", "Principal component analysis"],
        useCase: "Grouping structure and reducing complexity when labels do not exist.",
        mathUsed: ["Linear Algebra", "Optimization", "Statistics"],
        completed: false
      }
    ]
  },
  {
    id: "artificial-intelligence",
    title: "7. Artificial Intelligence",
    description: "The reasoning layer where search, logic, and uncertainty stop being separate boxes.",
    color: "purple",
    topics: [
      {
        id: "search-strategies",
        title: "Search",
        subtopics: ["Informed search", "Uninformed search", "Adversarial search"],
        useCase: "Planning and decision-making in environments where you need to choose actions intelligently.",
        mathUsed: ["Graph Theory", "Optimization", "Game Trees"],
        completed: false
      },
      {
        id: "logic-representation",
        title: "Logic and Knowledge Representation",
        subtopics: ["Propositional logic", "Predicate logic"],
        useCase: "Representing rules and reasoning cleanly instead of improvising brittle heuristics.",
        mathUsed: ["Logic", "Discrete Structures"],
        completed: false
      },
      {
        id: "reasoning-under-uncertainty",
        title: "Reasoning Under Uncertainty",
        subtopics: ["Conditional independence representation", "Exact inference through variable elimination", "Approximate inference through sampling"],
        useCase: "Making structured decisions when the world is noisy, incomplete, and inconveniently real.",
        mathUsed: ["Probability", "Bayesian Reasoning", "Sampling"],
        completed: false
      }
    ]
  }
];
