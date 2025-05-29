import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

function Contact() {
    return (
        <div
            className="m-5 p-5 pb-10 mt-15 rounded-2xl"
            id="contact"
        >
            <h1
                className="mb-5 text-xl text-neutral-200 font-bold"
            >
                Contact Me
            </h1>

            <div
                className="flex flex-wrap gap-5 md:gap-60 lg:gap-100"
            >
                <div
                    className="flex flex-col gap-5"
                >
                    <a
                        className="flex justify-start gap-2 items-center text-neutral-400 hover:text-neutral-200 text-base font-semibold"
                        href="mailto:hetfaldu19@gmail.com"
                    >
                        <MdEmail className="size-5 mt-0.5" />
                        Personal: hetfaldu19@gmail.com
                    </a>

                    <a
                        className="flex justify-start gap-2 items-center text-neutral-400 hover:text-neutral-200 text-base font-semibold"
                            href="mailto:hetpatel@buffalo.edu"
                    >
                        <MdEmail className="size-5 mt-0.5" />
                        College: hetpatel@buffalo.edu
                    </a>

                    <a
                        className="flex justify-start gap-2 items-center text-neutral-400 hover:text-neutral-200 text-base font-semibold"
                            href="https://www.linkedin.com/in/hetpatel19/"
                    >
                        <FaLinkedinIn className="size-5 mt-0.5" />
                        LinkedIn: hetpatel19

                    </a>

                    <a
                        className="flex justify-start gap-2 items-center text-neutral-400 hover:text-neutral-200 text-base font-semibold"
                            href="https://github.com/HP-002"
                    >
                        <IoLogoGithub className="size-5 mt-0.5" />
                        GitHub: HP-002
                    </a>
                </div>

                <div
                    className="flex flex-col gap-5"
                >
                    <button
                        className="p-2 rounded-lg bg-teal-500 cursor-pointer"
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
                        className="p-2 rounded-lg bg-teal-500 cursor-pointer"
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