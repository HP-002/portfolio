import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

function Contact() {
    return (
        <div
            className="m-5 p-5 mt-15 rounded-2xl"
        >
            <h1
                className="mb-5 text-xl text-white font-bold"
            >
                Contact Me
            </h1>

            <div
                className="flex flex-wrap gap-5 md:gap-60 lg:gap-100"
            >
                <div
                    className="flex flex-col gap-5"
                >
                    <p
                        className="flex justify-start gap-2 items-center text-gray-300 text-base font-semibold"
                    >
                        <MdEmail className="size-5 mt-0.5" />
                        Personal: <a
                            className="hover:text-white"
                            href="mailto:hetfaldu19@gmail.com"
                        >
                            hetfaldu19@gmail.com
                        </a>
                    </p>

                    <p
                        className="flex justify-start gap-2 items-center text-gray-300 text-base font-semibold"
                    >
                        <MdEmail className="size-5 mt-0.5" />
                        College: <a
                            className="hover:text-white"
                            href="mailto:hetpatel@buffalo.edu"
                        >
                            hetpatel@buffalo.edu
                        </a>
                    </p>

                    <p
                        className="flex justify-start gap-2 items-center text-gray-300 text-base font-semibold"
                    >
                        <FaLinkedinIn className="size-5 mt-0.5" />
                        LinkedIn: <a
                            className="hover:text-white"
                            href="https://www.linkedin.com/in/hetpatel19/"
                        >
                            hetpatel19
                        </a>

                    </p>

                    <p
                        className="flex justify-start gap-2 items-center text-gray-300 text-base font-semibold"
                    >
                        <IoLogoGithub className="size-5 mt-0.5" />
                        GitHub: <a
                            className="hover:text-white"
                            href="https://github.com/HP-002"
                        >
                            HP-002
                        </a>

                    </p>
                </div>

                <div
                    className="flex flex-col gap-5"
                >
                    <button
                        className="p-2 rounded-lg bg-blue-400 cursor-pointer"
                    >
                        <div
                            className="flex gap-2 justify-between items-center font-bold"
                        >
                            <p>
                                Resume
                            </p>
                            <LuDownload className="size-5 mt-0.5" />
                        </div>
                    </button>

                    <button
                        className="p-2 rounded-lg bg-blue-400 cursor-pointer"
                    >
                        <div
                            className="flex gap-2 justify-between items-center font-bold"
                        >
                            <p>
                                Transcript
                            </p>
                            <LuDownload className="size-5 mt-0.5" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Contact