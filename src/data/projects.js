import demo from "./../assets/html.svg"

const projects = [
  {
    id: 1,
    title: "IPOPT (Research)",
    description: "Interior Point Non-linear Optimizer for a Spring Loaded Inverted Pendulums (SLIP)",
    tech: ["C", "Python", "Mathematica"],
    img: null,
    github: "https://github.com/HP-002/slip_ipopt",
    live: null
  },
  {
    id: 2,
    title: "Tenzies",
    description: "Tenzies is a fun and interactive dice game",
    tech: ["React", "Vite", "CSS"],
    img: demo,
    github: "https://github.com/HP-002/tenzies",
    live: ""
  },
  {
    id: 3,
    title: "PAL Webpage",
    description: "Webpage for Peer-Assisted Learning Program to host worksheets and solutions",
    tech: ["JavaScript", "HTML", "CSS"],
    img: "",
    github: "https://github.com/HP-002/PAL_webpage",
    live: ""
  },
  {
    id: 4,
    title: "Alice's Game of Life",
    description: "Automaton Simulator based on Conway's Game of Life. It is built using C++ to operate an Arduino UNO R4 Microcontroller and a logical circuit built using NPN transistors and diodes.",
    tech: ["C++", "Arduino UNO R4"],
    img: "",
    github: "https://github.com/WhiteWolf1603/alices-game-of-life",
    live: ""
  },
  {
    id: 5,
    title: "Chef Claude",
    description: "",
    tech: ["React", "HuggingFace API", "HTML", "CSS"],
    img: "",
    github: "https://github.com/HP-002/chefClaude",
    live: ""
  },  
]

export default projects