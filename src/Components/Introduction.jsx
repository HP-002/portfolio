import ProfileImage from './../assets/profile.jpg';
import { MdLocationPin } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

function Introduction() {
    return (
        <div
            className="m-5 p-5 flex justify-between items-center gap-1"
        >
            <div>
                <h1
                    className="text-4xl text-left text-amber-50 font-bold scroll-mt-20"
                    id="about"
                >
                    Het Patel
                </h1>
                <div
                    className="text-left text-gray-400 font-semibold"
                >
                    <div className="flex items-center gap-1.5">
                        <p
                            className="text-balance text-lg"
                        >
                            CS Undergrad at University at Buffalo
                        </p>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-md">
                        <IoMdSchool className="text-amber-50" />
                        <p>University at Buffalo</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-md">
                        <MdLocationPin className="text-amber-50" />
                        <p>Buffalo, NY</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-md">
                        <FaLinkedinIn className="text-amber-50" />
                        <p>hetpatel19</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-md">
                        <IoLogoGithub className="text-amber-50" />
                        <p>HP-002</p>
                    </div>

                </div>
                <div
                    className="mt-3 text-lg"
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