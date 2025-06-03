import ipoptIcon from "../images/ipopt.png"
import tenziesIcon from "../images/tenzies.png"
import PALIcon from "../images/pal.png"
import GOLIcon from "../images/gameOfLife.jpg"
import chefClaudeIcon from "../images/chefclaude.png"

const projects = [
  {
    id: 1,
    title: "IPOPT (Research)",
    description: "Interior Point Non-linear Optimizer for a Spring Loaded Inverted Pendulums (SLIP)",
    tech: ["C", "Python", "Mathematica"],
    img: ipoptIcon,
    github: "https://github.com/HP-002/slip_ipopt",
    live: null
  },
  {
    id: 2,
    title: "Tenzies",
    description: "Tenzies is a fun and interactive dice game",
    tech: ["React", "Vite", "CSS"],
    img: tenziesIcon,
    github: "https://github.com/HP-002/tenzies",
    live: "https://hp-tenzies.netlify.app/"
  },
  {
    id: 3,
    title: "PAL Webpage",
    description: "Webpage for Peer-Assisted Learning Program to host worksheets and solutions",
    tech: ["JavaScript", "HTML", "CSS"],
    img: PALIcon,
    github: "https://github.com/HP-002/PAL_webpage",
    live: "https://www.acsu.buffalo.edu/~hetpatel/STA-119/"
  },
  {
    id: 4,
    title: "Alice's Game of Life",
    description: "Automaton Simulator based on Conway's Game of Life. It is built using C++ to operate an Arduino UNO R4 Microcontroller and a logical circuit built using NPN transistors and diodes.",
    tech: ["C++", "Arduino UNO R4"],
    img: GOLIcon,
    github: "https://github.com/WhiteWolf1603/alices-game-of-life",
    live: null
  },
  {
    id: 5,
    title: "Chef Claude",
    description: "Chef Claude is a React + Vite web app that uses Hugging Face's Recipe AI to generate recipes based on user-provided ingredients.",
    tech: ["React", "HuggingFace API", "HTML", "CSS"],
    img: chefClaudeIcon,
    github: "https://github.com/HP-002/chefClaude",
    live: "https://hp-chefclaude.netlify.app/"
  },  
]

export default projects