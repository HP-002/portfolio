import ProfileImage from './../assets/profile.jpg';
import { MdLocationPin } from "react-icons/md";
import { IoMdSchool } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

function Introduction() {
    return (
        <div
            className="m-5 p-5
                flex justify-between items-center gap-1"
        >
            <div>
                <h1
                    className="text-4xl text-left text-amber-50 font-bold"
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
                    className="text-lime-50 text-lg"
                >
                    <button
                        className="p-2 mt-2 rounded-2xl
                            bg-gradient-to-r from-teal-500/50 to-teal-900/50 cursor-pointer"
                    >
                        Resume
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