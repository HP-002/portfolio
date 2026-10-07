import skillsSections from "../../../assets/data/skillsSections";

// Keep every shared skill visible, including entries hidden in research mode.
const extras = {
  "Web Development": [
    { name: "WebSockets", description: "Real-time communication" },
  ],
  "Other Frameworks & Libraries": [
    { name: "OpenGL", description: "Graphics API" },
    { name: "GLSL", description: "Shader language" },
    { name: "Flex", description: "Lexer generator" },
  ],
  Tools: [
    { name: "gdb", description: "Debugger" },
    { name: "CMake", description: "Build system" },
    { name: "PostgreSQL", description: "Database" },
  ],
  Environments: [{ name: "Linux", description: "Operating system" }],
};

export default skillsSections.map((section) => ({
  ...section,
  items: [
    ...section.items.map((item) => ({
      ...item,
      name: item.id === "opacus" ? "Opacus" : item.name,
    })),
    ...(extras[section.title] || []),
  ],
}));
