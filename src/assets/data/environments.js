import WindowsIcon from "../images/windows.svg"
import UbuntuIcon from "../images/linux.svg"
import NodeIcon from "../images/nodejs.svg"
import ColabIcon from "../images/colab.svg"
import WSLIcon from "../images/wsl.webp"

const environments = [
    {
        id: "windows",
        name: "Windows",
        icon: WindowsIcon,
        description: "OS",
        showInResearch: true,
    },
    {
        id: "ubuntu",
        name: "Ubuntu",
        icon: UbuntuIcon,
        description: "OS",
        showInResearch: true,
    },
    {
        id: "nodejs",
        name: 'Node.js',
        icon: NodeIcon,
        description: "Runtime Environment",
        showInResearch: true,
    },
    {
        id: "colab",
        name: "Google Colab",
        icon: ColabIcon,
        description: "Cloud-based",
        showInResearch: true,
    },
    {
        id: "wsl",
        name: "WSL",
        icon: WSLIcon,
        description: "Windows Subsystem for Linux",
        showInResearch: false,
    },
]

export default environments