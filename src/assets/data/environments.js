import WindowsIcon from "../images/windows.svg"
import UbuntuIcon from "../images/linux.svg"
import NodeIcon from "../images/nodejs.svg"
import ColabIcon from "../images/colab.svg"
import WSLIcon from "../images/wsl.webp"

const environments = [
    {
        id: 1,
        name: "Windows",
        icon: WindowsIcon,
        description: "OS",
    },
    {
        id: 2,
        name: "Ubuntu Linux",
        icon: UbuntuIcon,
        description: "OS",
    },
    {
        id: 3,
        name: 'Node.js',
        icon: NodeIcon,
        description: "Runtime Environment",
    },
    {
        id: "colab",
        name: "Google Colab",
        icon: ColabIcon,
        description: "Cloud-based",
    },
    {
        id: 4,
        name: "WSL",
        icon: WSLIcon,
        description: "Windows Subsystem for Linux",
    },
]

export default environments