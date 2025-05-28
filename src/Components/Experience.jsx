import { BsCaretRightFill } from "react-icons/bs";

function Experience(props) {
    return (
        <div
            className="mb-5 p-5 text-white bg-white/10 rounded-4xl shadow-blue-400 inset-shadow-white"
        >

            {/* Top */}
            <div
                className="flex gap-4 justify-between mb-2"
            >
                {/* Left */}
                <div>
                    {/* Top */}
                    <h1
                        className="text-base font-bold text-blue-400"
                    >
                        {props.department}
                    </h1>
                    {/* Bottom */}
                    <h1
                        className="text-base font-semibold text-gray-300"
                    >
                        {props.title}
                    </h1>
                </div>

                {/* Right */}
                <div
                    className="text-sm text-right"
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
                className=" text-sm space-y-1 text-gray-300"
            >
                {props.description.map((point, idx) => (
                    <li
                        key={idx}
                        className="pl-4 flex gap-1.5 justify-start"
                    >
                        <span><BsCaretRightFill size={10}
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