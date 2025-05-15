import { BsCaretRightFill } from "react-icons/bs";

function Experience(props) {
    return (
        <div
            className="mb-5 p-5 text-white bg-white/10 rounded-4xl shadow-xs shadow-blue-400 inset-shadow-xs inset-shadow-white"
        >

            {/* Top */}
            <div
                className="flex gap-4 justify-between mb-2"
            >
                {/* Left */}
                <div>
                    {/* Top */}
                    <h1
                        className="text-xl font-bold text-blue-400"
                    >
                        {props.department}
                    </h1>
                    {/* Bottom */}
                    <h1
                        className="text-lg font-semibold text-gray-300"
                    >
                        {props.title}
                    </h1>
                </div>

                {/* Right */}
                <div
                    className="text-right"
                >
                    {/* Top */}
                    <h1
                        className="font-semibold text-gray-300"
                    >
                        {props.start} - {props.end}
                    </h1>
                    {/* Bottom */}
                    {props.webpage &&
                        <p
                            className="font-semibold text-gray-300"
                        >
                            {props.webpage}
                        </p>
                    }
                </div>
            </div>

            {/* Bottom */}
            <ul
                className="space-y-2 text-gray-300"
            >
                {props.description.map((point, idx) => (
                    <li
                        key={idx}
                        className="pl-4 flex gap-2 justify-start"
                    >
                        <span><BsCaretRightFill size={14}
                            className="shrink-0 mt-1.5 text-blue-400"
                        /></span>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience