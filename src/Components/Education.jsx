import { motion, useScroll } from "motion/react"
import { useRef } from "react"
import UBLogo from "../assets/images/ublogo.png"
import CourseCloud from "./CourseCloud.jsx"

function Education() {
    const educationRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: educationRef,
        offset: ["start center", "end center"],
    })

    console.log(motion)

    return (
        <div
            className="m-5 p-5 rounded-lg scroll-mt-8"
            id="education"
        >
            <h1
                className=" mb-3 text-xl font-bold text-neutral-200"
            >
                Education
            </h1>

            <div
                className="flex relative"
            >

                <div
                    className="relative w-4 mr-3"
                >
                    <motion.div
                        id="scroll-indicator"
                        style={{
                            scaleY: scrollYProgress,
                            transformOrigin: "top",
                            backgroundColor: "oklch(68.5% 0.169 237.323)",
                        }}
                        className="w-0.5 rounded-full h-full bg-gray-700 absolute left-1/2 top-0 -translate-x-1/2 origin-top"
                    />
                </div>

                <div
                    ref={educationRef}
                >

                    <div
                        className="rounded-lg shadow-lg
                    flex flex-wrap flex-col sm:flex-row gap-4 sm:items-center sm:justify-between"
                    >
                        {/* Left */}
                        <div
                            className="sm:flex gap-4 justify-start items-center"
                        >
                            <img
                                className="h-18 hidden sm:block"
                                src={UBLogo}
                                alt=""
                            />
                            <div
                                className=""
                            >
                                <h1
                                    className="text-lg font-bold text-blue-400"
                                >
                                    University at Buffalo
                                </h1>
                                <h1
                                    className="text-lg font-semibold text-neutral-400"
                                >
                                    BS in Computer Science
                                </h1>
                                <p
                                    className="text-sm font-semibold text-neutral-400"
                                >
                                    Minor: Statistics

                                </p>
                                <p
                                    className="text-sm font-semibold text-neutral-400"
                                >
                                    GPA: 4.0/4.0
                                </p>
                                <p
                                    className="text-sm font-semibold text-neutral-400"
                                >
                                    Graduation: May 2027
                                </p>

                            </div>

                        </div>

                        {/* Right */}
                        <CourseCloud />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education