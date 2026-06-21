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
        showInResearch: true,
    },
    {
        id: "docker",
        name: "Docker",
        icon: DockerIcon,
        description: "Containerization",
        showInResearch: true,
    },
    {
        id: "npm",
        name: "npm",
        icon: NPMIcon,
        description: "Package Manager",
        showInResearch: false,
    },
    {
        id: "expo",
        name: "Expo",
        icon: ExpoIcon,
        description: "Mobile Development",
        showInResearch: true,
    },
    {
        id: "supabase",
        name: "Supabase",
        icon: SupabaseIcon,
        description: "Database",
        showInResearch: true,
    },
    {
        id: "firebase",
        name: "Firebase",
        icon: FirebaseIcon,
        description: "Cloud-based",
        showInResearch: true,
    },
    {
        id: "webpack",
        name: "Webpack",
        icon: WebpackIcon,
        description: "Module Bundler",
        showInResearch: false,
    },
    {
        id: "vs",
        name: "VS Code",
        icon: VSCodeIcon,
        description: "IDE",
        showInResearch: false,
    },
    {
        id: "idea",
        name: "IntelliJ IDEA",
        icon: IntelliJIcon,
        description: "IDE",
        showInResearch: false,
    },
    {
        id: "minitab",
        name: "Minitab",
        icon: MinitabIcon,
        description: "Statistical Software",
        showInResearch: true,
    },
    {
        id: "figma",
        name: "Figma",
        icon: FigmaIcon,
        description: "Collaborative Design Platform",
        showInResearch: false,
    },
]

export default tools