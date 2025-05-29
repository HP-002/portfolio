import React from 'react';

function SidebarItem(props) {
    return (
        <a
            href={props.link}
            className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-neutral-900 rounded-md`}
        >
            <div
                className={`${props.isActive ? "text-neutral-200" : "text-neutral-500"}`}
            >{React.createElement(props.icon, { size: 24 })}</div>

            <h2
                className={`whitespace-pre duration-500 ${!props.isOpen && 'opacity-0 -translate-y-10 overflow-hidden'}
                ${props.isActive ? "text-neutral-200" : "text-neutral-500"}`}
            >
                {props.title}
            </h2>

            
            <h2
                className={`
                    ${props.isOpen && 'hidden'}
                    absolute left-48 bg-white/20 font-semibold whitespace-pre text-neutral-200 rounded-mg drop-shadow-lg px-0 py-0 w-0 overflow-hidden
                    group-hover:px-2 group-hover:py-1 group-hover:left-15.5 group-hover:duration-300 group-hover:w-fit backdrop-blur-xl rounded-lg`}
            >
                {props.title}
            </h2>
        </a>
    )
}

export default SidebarItem;