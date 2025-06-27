import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";

function Header(props) {
    return (
        <header
            className={`fixed ml-18 pr-10 py-2 top-0 right-0 w-screen z-30 bg-none flex gap-5 justify-end duration-300
                ${props.isVisible ? "translate-y-0" : "-translate-y-10"}
                backdrop-blur-lg shadow-lg ring-3 ring-black/10 shadow-black/30`}
        >
            <a
                className="flex justify-start gap-2 items-center text-neutral-500 text-base font-semibold hover:text-neutral-200"
                href="https://www.linkedin.com/in/hetpatel19/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedinIn className="size-5 mt-0.5" />
            </a>

            <a
                className="flex justify-start gap-2 items-center text-neutral-500 text-base font-semibold hover:text-neutral-200"
                href="https://github.com/HP-002"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IoLogoGithub className="size-5 mt-0.5" />
            </a>

            <a
                className="flex justify-start gap-2 items-center text-neutral-500 text-base font-semibold hover:text-neutral-200"
                href="mailto:hetfaldu19@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MdEmail className="size-5 mt-0.5" />
            </a>
        </header>
    )
}

export default Header