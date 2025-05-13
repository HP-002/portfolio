
function Language(props) {
    return (
        <div
            className="pt-1 pb-1 pl-4 pr-4 w-fit flex gap-3 rounded-2xl items-center
            inset-shadow-blue-50 inset-shadow-2xs shadow-2xs shadow-blue-400"
        >
            {/* Left */}
            <img 
                src={props.icon}
                className="h-10"
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

export default Language