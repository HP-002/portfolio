import WindowsIcon from "./../assets/windows.svg"
import UbuntuIcon from "./../assets/linux.svg"
import NodeIcon from "./../assets/nodejs.svg"
import WSLIcon from "./../assets/wsl.webp"

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
        id: 2,
        name: 'Node.js',
        icon: NodeIcon,
        description: "Runtime Environment",
        insetColor: "lime-500",
        shadowColor: "lime-500",
    },
    {
        id: 3,
        name: "WSL",
        icon: WSLIcon,
        description: "Windows Subsystem for Linux",
        insetColor: "white",
        shadowColor: "blue-500",
    },
]

export default environments