import GitIcon from "../images/git.svg"
import DockerIcon from "../images/docker.svg"
import NPMIcon from "../images/npm.svg"
import WebpackIcon from "../images/webpack.svg"
import VSCodeIcon from "../images/vscode.svg"
import IntelliJIcon from "../images/intellij.svg"
import MinitabIcon from "../images/minitab.svg"
import FigmaIcon from "../images/figma.svg"
import FirebaseIcon from "../images/firebase.svg"
import ExpoIcon from "../images/expo.svg"
import SupabaseIcon from "../images/supabase.svg"

const tools = [
    {
        id: "git",
        name: "Git",
        icon: GitIcon,
        description: "Version Control",
        insetColor: "orange-500",
        shadowColor: "orange-500",
    },
    {
        id: "docker",
        name: "Docker",
        icon: DockerIcon,
        description: "Containerization",
        insetColor: "sky-600",
        shadowColor: "white",
    },
    {
        id: "npm",
        name: "npm",
        icon: NPMIcon,
        description: "Package Manager",
        insetColor: "orange-700",
        shadowColor: "orange-700",
    },
    {
        id: "expo",
        name: "Expo",
        icon: ExpoIcon,
        description: "Mobile Development",
        insetColor: "white",
        shadowColor: "white",
    },
    {
        id: "supabase",
        name: "Supabase",
        icon: SupabaseIcon,
        description: "Database",
        insetColor: "green-500",
        shadowColor: "green-500",
    },
    {
        id: "firebase",
        name: "Firebase",
        icon: FirebaseIcon,
        description: "Cloud-based",
        insetColor: "orange-500",
        shadowColor: "yellow-500",
    },
    {
        id: "webpack",
        name: "Webpack",
        icon: WebpackIcon,
        description: "Module Bundler",
        insetColor: "blue-200",
        shadowColor: "sky-600",
    },
    {
        id: "vs",
        name: "VS Code",
        icon: VSCodeIcon,
        description: "IDE",
        insetColor: "sky-600",
        shadowColor: "blue-400",
    },
    {
        id: "idea",
        name: "IntelliJ IDEA",
        icon: IntelliJIcon,
        description: "IDE",
        insetColor: "rose-500",
        shadowColor: "blue-500",
    },
    {
        id: "minitab",
        name: "Minitab",
        icon: MinitabIcon,
        description: "Statistical Software",
        insetColor: "lime-300",
        shadowColor: "lime-300",
    },
    {
        id: "figma",
        name: "Figma",
        icon: FigmaIcon,
        description: "Collaborative Design Platform",
        insetColor: "red-400",
        shadowColor: "blue-300",
    },
]

export default tools