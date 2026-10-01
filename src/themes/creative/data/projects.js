import existingProjects from "../../../assets/data/projects";
import crowdSenseImage from "../assets/crowdsense.webp";
import gameOfLifeImage from "../assets/gameOfLife.webp";
import tenziesImage from "../assets/tenzies.webp";
import chefClaudeImage from "../assets/chefclaude.webp";

const presentation = {
  crowdsense: {
    category: "AI & ML",
    label: "Vision meets everyday life",
    image: crowdSenseImage,
    note: "A YOLO vision pipeline feeds a FastAPI service, which streams live occupancy updates over WebSockets to an Expo mobile app.",
  },
  compiler: {
    category: "Systems",
    label: "From language to machine",
    visual: "compiler",
    github: "https://github.com/HP-002/compiler-alpha",
    note: "Built with Team Dijkstra’s Delegates. Supports primitives, strings, arrays, and records, with inspection flags for tokens, symbol tables, type checking, IR, and assembly.",
  },
  pintos: {
    category: "Systems",
    label: "Under the hood",
    visual: "kernel",
    note: "Kernel work spanning synchronization, a multilevel feedback queue scheduler, system calls, argument validation, and safe user memory access.",
  },
  "salary-estimator": {
    category: "AI & ML",
    label: "Finding patterns in data",
    visual: "data",
    note: "Compared 15 models to explore how different learning methods handle salary estimation, including tree-based models, SVMs, and neural networks.",
  },
  gol: {
    category: "Systems",
    label: "Code becomes circuitry",
    image: gameOfLifeImage,
    note: "A physical cellular automaton using an Arduino UNO R4 and a breadboard circuit built with transistors and diodes.",
  },
  tenzies: {
    category: "Web & Mobile",
    label: "A little room for play",
    image: tenziesImage,
    note: "An interactive React dice game made while exploring component state and user interaction.",
  },
  "chef-claude": {
    category: "Web & Mobile",
    label: "Ingredients into inspiration",
    image: chefClaudeImage,
    note: "A React interface that sends available ingredients to a Hugging Face recipe-generation API.",
  },
  pal: {
    category: "Web & Mobile",
    label: "Making learning accessible",
    visual: "learning",
    note: "A lightweight home for the worksheets and solutions used in my supplemental instruction sessions.",
  },
  ipopt: {
    category: "Systems",
    label: "Motion, mathematically",
    visual: "motion",
    note: "Exploring nonlinear optimization for a spring-loaded inverted pendulum with IPOPT.",
  },
};

export default [
  {
    id: "black-hole",
    title: "Black Hole Simulator",
    category: "Systems",
    label: "An experiment in spacetime",
    visual: "black-hole",
    description:
      "A real-time C++ and OpenGL simulator that bends light through curved spacetime. Fly around a black hole, explore its accretion disk, and see gravitational lensing in motion.",
    tech: ["C++17", "OpenGL", "GLSL", "CMake"],
    github: "https://github.com/HP-002/black-hole-simulator",
    live: null,
    note: "An ongoing learning project built without a game engine. GPU compute shaders trace light rays, with an HDR rendering pipeline, bloom, and ACES tone mapping.",
  },
  ...[
    "crowdsense",
    "compiler",
    "pintos",
    "salary-estimator",
    "gol",
    "tenzies",
    "chef-claude",
    "pal",
    "ipopt",
  ].map((id) => ({
    ...existingProjects.find((project) => project.id === id),
    ...presentation[id],
  })),
];
