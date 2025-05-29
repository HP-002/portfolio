import { IoPerson } from "react-icons/io5";
import { IoMdSchool } from "react-icons/io";
import { FaGears } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import { MdContactPage } from "react-icons/md";

const sidebarItems = [
    {
        id: "about",
        title: "About Me",
        link: "#about",
        icon: IoPerson,
    },
    {
        id: "education",
        title: "Education",
        link: "#education",
        icon: IoMdSchool,
    },
    {
        id: "skills",
        title: "Skills",
        link: "#skills",
        icon: FaGears,
    },
    {
        id: "experiences",
        title: "Experiences",
        link: "#experiences",
        icon: MdWork,
    },
    {
        id: "projects",
        title: "Projects",
        link: "#projects",
        icon: FaLaptopCode,
    },
    {
        id: "contact",
        title: "Contact",
        link: "#contact",
        icon: MdContactPage,
    },
]

export default sidebarItems