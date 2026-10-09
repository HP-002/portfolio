import skillsSections from "../../../assets/data/skillsSections";
import { SiCmake, SiGnu, SiLinux, SiOpengl, SiPostgresql } from "react-icons/si";
import { LuCable, LuScanText } from "react-icons/lu";

// Keep every shared skill visible, including entries hidden in research mode.
const extras = {
  "Web Development": [
    { name: "WebSockets", description: "Real-time communication", Icon: LuCable },
  ],
  "Other Frameworks & Libraries": [
    { name: "OpenGL", description: "Graphics API", Icon: SiOpengl },
    { name: "GLSL", description: "Shader language", Icon: SiOpengl },
    { name: "Flex", description: "Lexer generator", Icon: LuScanText },
  ],
  Tools: [
    { name: "gdb", description: "Debugger", Icon: SiGnu },
    { name: "CMake", description: "Build system", Icon: SiCmake },
    { name: "PostgreSQL", description: "Database", Icon: SiPostgresql },
  ],
  Environments: [{ name: "Linux", description: "Operating system", Icon: SiLinux }],
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
