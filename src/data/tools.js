import GitIcon from "./../assets/git.svg"
import NPMIcon from "./../assets/npm.svg"
import WebpackIcon from "./../assets/webpack.svg"
import VSCodeIcon from "./../assets/vscode.svg"
import IntelliJIcon from "./../assets/intellij.svg"
import MinitabIcon from "./../assets/minitab.svg"
import FigmaIcon from "./../assets/figma.svg"

const tools = [
    {
        id: 1,
        name: "Git",
        icon: GitIcon,
        description: "Version Control",
        insetColor: "orange-500",
        shadowColor: "orange-500",
    },
    {
        id: 2,
        name: "npm",
        icon: NPMIcon,
        description: "Package Manager",
        insetColor: "orange-700",
        shadowColor: "orange-700",
    },
    {
        id: 3,
        name: "Webpack",
        icon: WebpackIcon,
        description: "Module Bundler",
        insetColor: "blue-200",
        shadowColor: "sky-600",
    },
    {
        id: 4,
        name: "VS Code",
        icon: VSCodeIcon,
        description: "IDE",
        insetColor: "sky-600",
        shadowColor: "blue-400",
    },
    {
        id: 5,
        name: "IntelliJ IDEA",
        icon: IntelliJIcon,
        description: "IDE",
        insetColor: "rose-500",
        shadowColor: "blue-500",
    },
    {
        id: 6,
        name: "Minitab",
        icon: MinitabIcon,
        description: "Statistical Software",
        insetColor: "lime-300",
        shadowColor: "lime-300",
    },
    {
        id: 7,
        name: "Figma",
        icon: FigmaIcon,
        description: "Collaborative Design Platform",
        insetColor: "red-400",
        shadowColor: "blue-300",
    },
]

export default tools