import crowdsenseImage from '../images/crowdsense.webp'
import gameOfLifeImage from '../images/gameoflife.webp'
import tenziesImage from '../images/tenzies.webp'
import chefClaudeImage from '../images/chefclaude.webp'

/**
 * Shared fields: id, title, description, tech, github, live, showInResearch.
 * Presentation fields (research ignores them):
 *   category: 'AI & ML' | 'Systems' | 'Web & Mobile'
 *   label, note: short creative copy
 *   image: imported image or null
 *   visual: 'black-hole' | 'traffic' | 'compiler' | 'data' | 'kernel' | 'learning' | 'motion' | null
 *   status: e.g. 'In progress', or null
 */
const projects = [
  {
    id: 'traffic-light-control',
    title: 'Traffic Light Control',
    description:
      'An in-progress reinforcement learning project exploring adaptive signal control in a simulated intersection, using traffic queues and time in green to inform decisions.',
    tech: ['Python', 'Gymnasium', 'NumPy', 'Q-Learning', 'Double Q-Learning'],
    // Repo is private (404); restore https://github.com/HP-002/traffic-light-control once it's public.
    github: null,
    live: null,
    showInResearch: false,
    category: 'AI & ML',
    label: 'Learning when to let traffic flow',
    note: 'Currently developing a custom Gymnasium environment and Q-Learning / Double Q-Learning agents. The simulation supports stochastic arrivals; evaluation and refinements are ongoing.',
    image: null,
    visual: 'traffic',
    status: 'In progress',
  },
  {
    id: 'black-hole',
    title: 'Black Hole Simulator',
    description:
      'A real-time C++ and OpenGL simulator that bends light through curved spacetime. Fly around a black hole, explore its accretion disk, and see gravitational lensing in motion.',
    tech: ['C++17', 'OpenGL', 'GLSL', 'CMake'],
    github: 'https://github.com/HP-002/black-hole-simulator',
    live: null,
    showInResearch: false,
    category: 'Systems',
    label: 'An experiment in spacetime',
    note: 'An ongoing learning project built without a game engine. GPU compute shaders trace light rays, with an HDR rendering pipeline, bloom, and ACES tone mapping.',
    image: null,
    visual: 'black-hole',
    status: null,
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
    category: 'AI & ML',
    label: 'Vision meets everyday life',
    note: 'A YOLO vision pipeline feeds a FastAPI service, which streams live occupancy updates over WebSockets to an Expo mobile app.',
    image: crowdsenseImage,
    visual: null,
    status: null,
  },
  {
    id: 'compiler',
    title: 'Alpha Compiler',
    description:
      'Developed a compiler to compile Alpha language code to x86-64 assembly code. The compiler includes a lexer, parser, symbol table, type checker, and code generator. It converts Alpha code into an x86-64 executable.',
    tech: ['C', 'x86-64 Assembly', 'Flex', 'Bison', 'Makefile'],
    github: 'https://github.com/HP-002/compiler-alpha',
    live: null,
    showInResearch: true,
    category: 'Systems',
    label: 'From language to machine',
    note: 'Built with Team Dijkstra’s Delegates. Supports primitives, strings, arrays, and records, with inspection flags for tokens, symbol tables, type checking, IR, and assembly.',
    image: null,
    visual: 'compiler',
    status: null,
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
    category: 'Systems',
    label: 'Under the hood',
    note: 'Kernel work spanning synchronization, a multilevel feedback queue scheduler, system calls, argument validation, and safe user memory access.',
    image: null,
    visual: 'kernel',
    status: null,
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
    category: 'AI & ML',
    label: 'Finding patterns in data',
    note: 'Compared 15 models to explore how different learning methods handle salary estimation, including tree-based models, SVMs, and neural networks.',
    image: null,
    visual: 'data',
    status: null,
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
    category: 'Systems',
    label: 'Code becomes circuitry',
    note: 'A physical cellular automaton using an Arduino UNO R4 and a breadboard circuit built with transistors and diodes.',
    image: gameOfLifeImage,
    visual: null,
    status: null,
  },
  {
    id: 'tenzies',
    title: 'Tenzies',
    description: 'Tenzies is a fun and interactive dice game built using React. This was one of many projects I developed while learning React and JavaScript.',
    tech: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/HP-002/tenzies',
    live: 'https://hp-tenzies.netlify.app/',
    showInResearch: false,
    category: 'Web & Mobile',
    label: 'A little room for play',
    note: 'An interactive React dice game made while exploring component state and user interaction.',
    image: tenziesImage,
    visual: null,
    status: null,
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
    category: 'Web & Mobile',
    label: 'Ingredients into inspiration',
    note: 'A React interface that sends available ingredients to a Hugging Face recipe-generation API.',
    image: chefClaudeImage,
    visual: null,
    status: null,
  },
  {
    id: 'pal',
    title: 'PAL Webpage',
    description:
      'Webpage for Peer-Assisted Learning Program to host worksheets and solutions. Simple platform used to communicate with students attending my Supplemental Instruction Sessions. This website allowed me to efficiently send material covered in the sessions to all the students.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/HP-002/PAL_webpage',
    live: 'https://www.acsu.buffalo.edu/~hetpatel/STA-119/',
    showInResearch: false,
    category: 'Web & Mobile',
    label: 'Making learning accessible',
    note: 'A lightweight home for the worksheets and solutions used in my supplemental instruction sessions.',
    image: null,
    visual: 'learning',
    status: null,
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
    category: 'Systems',
    label: 'Motion, mathematically',
    note: 'Exploring nonlinear optimization for a spring-loaded inverted pendulum with IPOPT.',
    image: null,
    visual: 'motion',
    status: null,
  },
]

export default projects
