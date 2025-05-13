import SidebarItem from "./SidebarItem.jsx"
import { TiThMenuOutline } from "react-icons/ti"
import sideBarItems from "../data/sidebarItems.js"
import { useState } from "react"

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleSidebar() {
        setIsOpen(!isOpen)
    }

    return (
        <div
            className={`bg-[#000000] min-h-screen shrink-0 ${isOpen ? "w-48" : "w-18"} duration-300 text-gray-100 px-4`}
        >
            <div
                className="py-3 flex justify-start px-2"
            >
                <TiThMenuOutline size={24} className="cursor-pointer" onClick={toggleSidebar}/>
            </div>

            <div
                className="mt-4 flex flex-col gap-4 relative"
            >
                {sideBarItems?.map((item) => (
                    <SidebarItem 
                        key={item.id}
                        title={item.title}
                        link={item.link}
                        icon={item.icon}
                        isOpen={isOpen}
                    />
                ))}
            </div>

        </div>
    )
}

export default Sidebar