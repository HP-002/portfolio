import SidebarItem from "./SidebarItem.jsx"
import { IoIosArrowDropright } from "react-icons/io"
import sideBarItems from "../data/sidebarItems.js"

function Sidebar(props) {

    return (
        <div
            className={`fixed bg-[#000000] min-h-screen flex flex-col justify-center shrink-0 ${props.isOpen ? "w-48" : "w-18"} duration-300 text-gray-100 px-4`}
        >
            <div
                className="py-3 flex justify-start px-2"
            >
                <IoIosArrowDropright
                    size={24}
                    className={`cursor-pointer ${props.isOpen ? "rotate-90" : "rotate-0"} duration-300`}
                    onClick={props.toggleSidebar}
                />
            </div>

            {/* Content */}
            <div
                className="mt-4 flex-1 flex flex-col justify-center gap-1"
            >
                {sideBarItems?.map((item) => (
                    <SidebarItem
                        key={item.id}
                        title={item.title}
                        link={item.link}
                        icon={item.icon}
                        isOpen={props.isOpen}
                    />
                ))}
            </div>

        </div>
    )
}

export default Sidebar