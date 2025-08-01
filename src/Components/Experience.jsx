import { BsCaretRightFill } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";

function Experience(props) {
    return (
        <div
            className="mb-5 p-5 bg-white/10 rounded-4xl hover:scale-102 hover:shadow-2xs hover:inset-shadow-2xs shadow-sky-500 inset-shadow-white duration-300"
        >

            {/* Top */}
            <div
                className="flex gap-4 justify-between mb-2"
            >
                {/* Left */}
                <div>
                    {/* Top */}
                    <h1
                        className="text-base font-bold text-sky-500"
                    >
                        {props.department}
                    </h1>
                    {/* Bottom */}
                    <h1
                        className="text-base font-semibold text-neutral-300"
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
                        className="font-semibold text-neutral-400"
                    >
                        {props.start} - {props.end}
                    </h1>
                    {/* Bottom */}
                    {props.webpage &&
                        <a
                        className="flex gap-1 items-center justify-end font-semibold text-neutral-400 hover:text-neutral-200 cursor-pointer"
                            href={props.webpageLink}    
                        >
                            <p>
                                {props.webpage}
                            </p>
                            <TbExternalLink className="size-4" />
                        </a>
                    }
                </div>
            </div>

            {/* Bottom */}
            <ul
                className=" text-sm space-y-1 text-neutral-400"
            >
                {props.description.map((point, idx) => (
                    <li
                        key={idx}
                        className="pl-4 flex gap-1.5 justify-start"
                    >
                        <span><BsCaretRightFill size={10}
                            className="shrink-0 mt-1.5 text-sky-500"
                        /></span>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Experience