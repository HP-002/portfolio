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
        insetColor: "red-500",
        shadowColor: "yellow-500",
    },
    {
        id: 2,
        name: "Ubuntu Linux",
        icon: UbuntuIcon,
        description: "OS",
        insetColor: "white",
        shadowColor: "yellow-500",
    },
    {
        id: 3,
        name: 'Node.js',
        icon: NodeIcon,
        description: "Runtime Environment",
        insetColor: "lime-500",
        shadowColor: "lime-500",
    },
    {
        id: "colab",
        name: "Google Colab",
        icon: ColabIcon,
        description: "Cloud-based",
        insetColor: "orange-300",
        shadowColor: "yellow-300",
    },
    {
        id: 4,
        name: "WSL",
        icon: WSLIcon,
        description: "Windows Subsystem for Linux",
        insetColor: "white",
        shadowColor: "blue-500",
    },
]

export default environments