const projects = [
  {
    id: 'compiler',
    title: 'Alpha Compiler',
    description:
      'Developed a compiler to compile Alpha language code to x86-64 assembly code. The compiler includes a lexer, parser, symbol table, type checker, and code generator. It converts a Alpha code into an x86-64 executable.',
    tech: ['C', 'x86-64 Assembly', 'Flex', 'Bison', 'Makefile'],
    github: 'https://github.com/HP-002/alpha-compiler',
    live: null,
    showInResearch: true,
  },
  {
    id: 'pintos',
    title: 'Pintos Operating System (Stanford)',
    description:
      'Developed core kernel components, including the threading subsystem with synchronization primitives (Mutex, Semaphores, & Conditional Variables) and a Multilevel Feedback Queue Scheduler (MLFQS). Built a comprehensive system call interface that enforced argument validation, safe user memory access, and secure transitions between user and kernel modes.',
    tech: ['C', 'gdb', 'Makefile'],
    github: 'https://github.com/ShambhaviGoyal/Pintos',
    live: null,
    showInResearch: true,
  },
  {
    id: 'crowdsense',
    title: 'Crowdsense',
    description:
      'Developed a real-time crowd monitoring system using Ultralytics YOLO, PyTorch, and OpenCV to accurately detect occupancy levels from live CCTV feeds. Designed a multi-service architecture that integrated a Python model pipeline with a FastAPI backend, utilizing WebSockets to facilitate instantaneous data communication to a React Native mobile application built with Expo.',
    tech: [
      'Ultralytics YOLO',
      'Pytorch',
      'OpenCV',
      'FastAPI',
      'Websockets',
      'React Native',
      'Expo',
    ],
    github: 'https://github.com/HP-002/crowdsense.git',
    live: 'https://devpost.com/software/crowdsense-q9ariu',
    showInResearch: true,
  },
  {
    id: 'salary-estimator',
    title: 'Salary Estimator',
    description:
      'Implemented and compared 15 different models including logistic regression, random forests, XGBoost, SVMs, and neural networks to estimate salary based on various attributes. This introduced me to various machine learning models and helped me learn the basics of TensorFlow and Scikit-learn.',
    tech: ['Python', 'Colab', 'Scikit-learn', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/HP-002/salary_estimator.git',
    live: null,
    showInResearch: true,
  },
  {
    id: 'ipopt',
    title: 'IPOPT (Research)',
    description:
      'Interior Point Non-linear Optimizer for a Spring Loaded Inverted Pendulums (SLIP)',
    tech: ['C', 'Python', 'Mathematica'],
    github: 'https://github.com/HP-002/slip_ipopt',
    live: null,
    showInResearch: false,
  },
  {
    id: 'gol',
    title: "Alice's Game of Life",
    description:
      "Automaton Simulator based on Conway's Game of Life. It is built using C++ to operate an Arduino UNO R4 Microcontroller and a logical circuit built using NPN transistors and diodes on a breadboard.",
    tech: ['C++', 'Arduino UNO R4'],
    github: 'https://github.com/WhiteWolf1603/alices-game-of-life',
    live: null,
    showInResearch: true,
  },
  {
    id: 'tenzies',
    title: 'Tenzies',
    description: 'Tenzies is a fun and interactive dice game built using React. This was one of many projects I developed while learning React and JavaScript.',
    tech: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/HP-002/tenzies',
    live: 'https://hp-tenzies.netlify.app/',
    showInResearch: false,
  },
  {
    id: 'pal',
    title: 'PAL Webpage',
    description:
      'Webpage for Peer-Assisted Learning Program to host worksheets and solutions. Simple platform used to communicate with students attending my Supplemental Instruction Sessions. This website allowed me to effeciently send material covered in the sessions to all the students.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/HP-002/PAL_webpage',
    live: 'https://www.acsu.buffalo.edu/~hetpatel/STA-119/',
    showInResearch: false,
  },
  {
    id: 'chef-claude',
    title: 'Chef Claude',
    description:
      "Chef Claude is a React + Vite web app that uses Hugging Face's Recipe AI to generate recipes based on user-provided ingredients. I learned using APIs with React while working on this project.",
    tech: ['React', 'HuggingFace API', 'HTML', 'CSS'],
    github: 'https://github.com/HP-002/chefClaude',
    live: 'https://hp-chefclaude.netlify.app/',
    showInResearch: false,
  },
]

export default projects
