
function ListItem(props) {
    const iconIsBlack = props.name === "Pandas" || props.name === "MicroPython" || props.name === "Node.js"

    return (
        <div
            className={`pt-1 pb-1 pl-4 pr-4 w-fit flex gap-3 rounded-2xl items-center
            inset-shadow-2xs shadow-2xs inset-shadow-${props.insetColor} shadow-${props.shadowColor}`}
        >
            {/* Left */}
            <img 
                src={props.icon}
                className={`h-10 ${iconIsBlack ? "bg-white rounded-md p-0.5" : ""}`}
            />

            {/* Right */}
            <div>
                {/* Top */}
                <h1
                    className="text-lg font-bold"
                >
                    {props.name}
                </h1>

                {/* Bottom */}
                <p
                    className="text-sm font-semibold pb-0.5"
                >
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default ListItem