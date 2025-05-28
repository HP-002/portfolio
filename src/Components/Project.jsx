import { IoLogoGithub } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";

function Project(props) {
    return (
        <div
            className="p-2 max-w-50 flex flex-col justify-between bg-white/10 rounded-lg"
        >
            <div
                className="mb-2 flex flex-col gap-3 items-center"
            >
                <h1
                    className="text-lg font-bold text-blue-400"
                >
                    {props.title}
                </h1>

                <img
                    src={props.img}
                    className="size-40"
                />

                <p
                    className="text-base font-semibold text-center text-gray-300"
                >
                    {props.tech.join(", ")}
                </p>

                <p
                    className="p-2 text-sm text-pretty text-gray-300"
                >
                    {props.description}
                </p>

            </div>
            <div
                className="self-center flex gap-2"
            >
                {props.github &&
                    <a
                        href={props.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <IoLogoGithub
                            className="size-5 text-gray-300 hover:text-white"
                        />
                    </a>
                }

                {props.live &&
                    <a
                        href={props.live}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <TbExternalLink
                            className="size-5 text-gray-300 hover:text-white"
                        />
                    </a>
                }

            </div>
        </div>
    )
}

export default Project