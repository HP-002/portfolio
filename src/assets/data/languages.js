import CIcon from "../images/c.svg"
import JavaIcon from "../images/java.svg"
import KotlinIcon from "../images/kotlin.svg"
import PythonIcon from "../images/python.svg"
import CppIcon from "../images/cpp.svg"
import JavaScriptIcon from "../images/javascript.svg"
import HtmlIcon from "../images/html.svg"
import CssIcon from "../images/css.svg"
import TypeScriptIcon from "../images/typescript.svg"
import VHDLIcon from "../images/vhdl.svg"
import OCamlIcon from "../images/ocaml.svg"
import MIPSIcon from "../images/mips.svg"
import GoIcon from "../images/golang.svg"

const languages = [
    {
        id: 'c',
        name: 'C',
        icon: CIcon,
        description: "Programming",
        showInResearch: true,
    },
    {
        id: 'python',
        name: 'Python',
        icon: PythonIcon,
        description: "Programming",
        showInResearch: true,
    },
    {
        id: 'go',
        name: 'Go',
        icon: GoIcon,
        description: "Programming",
        showInResearch: true,
    },
    {
        id: 'java',
        name: 'Java',
        icon: JavaIcon,
        description: "Programming",
        showInResearch: true,
    },
    {
        id: 'kotlin',
        name: 'Kotlin',
        icon: KotlinIcon,
        description: "Android Development",
        showInResearch: false,
    },
    {
        id: 'cpp',
        name: 'C++',
        icon: CppIcon,
        description: "Programming",
        showInResearch: false,
    },
    {
        id: 'ocaml',
        name: 'OCaml',
        icon: OCamlIcon,
        description: "Programming",
        showInResearch: false,
    },
    {
        id: 6,
        name: 'JavaScript',
        icon: JavaScriptIcon,
        description: "Scripting",
        showInResearch: true,
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        icon: TypeScriptIcon,
        description: "Scripting",
        showInResearch: false,
    },
    {
        id: 7,
        name: 'HTML',
        icon: HtmlIcon,
        description: "Markup",
        showInResearch: false,
    },
    {
        id: 8,
        name: 'CSS',
        icon: CssIcon,
        description: "Styling",
        showInResearch: false,
    },
    {
        id: 'mips',
        name: 'MIPS',
        icon: MIPSIcon,
        description: "Assembly",
        showInResearch: false,
    },
    {
        id: 'vhdl',
        name: 'VHDL',
        icon: VHDLIcon,
        description: "Hardware Description Language",
        showInResearch: false,
    },
]

export default languages