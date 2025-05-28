import { IoPerson } from "react-icons/io5";
import { IoMdSchool } from "react-icons/io";
import { FaGears } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";

const sidebarItems = [
    {
        id: 2,
        title: "About Me",
        link: "#about",
        icon: IoPerson,
    },
    {
        id: 3,
        title: "Education",
        link: "#education",
        icon: IoMdSchool,
    },
    {
        id: 4,
        title: "Skills",
        link: "#skills",
        icon: FaGears,
    },
    {
        id: 5,
        title: "Experiences",
        link: "#experiences",
        icon: MdWork,
    },
    
    {
        id: 6,
        title: "Projects",
        link: "#projects",
        icon: FaLaptopCode,
    },
    
    {
        id: 7,
        title: "Contact",
        link: "#contact",
        icon: MdContactPage,
    },
]

export default sidebarItems