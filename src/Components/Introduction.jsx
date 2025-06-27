import ProfileImage from '../assets/images/profile.jpg';
import { MdLocationPin } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import Resume from "../assets/docs/Het Patel - Resume.pdf";

function Introduction() {
    return (
        <div
            className="mt-8 m-5 p-5 pb-2 flex justify-between items-center gap-1 scroll-mt-20"
            id="about"
        >
            <div>
                <div
                    className='flex gap-2 items-center'
                >
                    <img
                        src={ProfileImage}
                        className="rounded-2xl size-16 mt-1 block sm:hidden"
                    />
                    <h1
                        className="text-4xl text-left text-white font-bold"
                    >
                        Het Patel
                    </h1>
                </div>
                <div
                    className="text-left text-neutral-400 font-semibold"
                >
                    <a
                        className="flex items-center gap-1.5"
                    >
                        <p
                            className="text-balance text-lg"
                        >
                            CS Undergrad at University at Buffalo
                        </p>
                    </a>

                    <a
                        className="mt-2 flex items-center gap-1.5 text-md"
                    >
                        <IoMdSchool className="text-neutral-400" />
                        <p>University at Buffalo</p>
                    </a>

                    <a
                        className="flex items-center gap-1.5 text-md"
                    >
                        <MdLocationPin className="text-neutral-400" />
                        <p>Buffalo, NY</p>
                    </a>

                    <a
                        className="flex items-center gap-1.5 text-md cursor-pointer group"
                        href="https://www.linkedin.com/in/hetpatel19/"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn className="text-neutral-400 group-hover:text-white" />
                        <p className="group-hover:text-white">hetpatel19</p>
                    </a>

                    <a
                        className="flex items-center gap-1.5 text-md cursor-pointer group"
                        href="https://github.com/HP-002"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <IoLogoGithub className="text-neutral-400 group-hover:text-white" />
                        <p className="group-hover:text-white">HP-002</p>
                    </a>
                </div>
                <div
                    className="mt-3 text-lg"
                >
                    <a href={Resume} download>
                        <button
                            className="p-2 rounded-lg bg-sky-500 cursor-pointer"
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
                    </a>
                </div>
            </div>

            <div>
                <img
                    src={ProfileImage}
                    className="w-56 rounded-full hidden sm:block"
                />
            </div>
        </div>
    )
}

export default Introduction