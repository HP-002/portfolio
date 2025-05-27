import { motion, useScroll } from "motion/react"
import { useRef } from "react"
import UBLogo from "../assets/ublogo.png"
import CourseCloud from "./WordCloud.jsx"

function Education() {
    const educationRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: educationRef,
        offset: ["start center", "end center"],
    })

    console.log(motion)

    return (
        <div
            className="m-5 p-5 text-white rounded-lg"
        >
            <h1
                className="text-xl font-bold mb-3"
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
                            backgroundColor: "oklch(70.7% 0.165 254.624)",
                        }}
                        className="w-0.5 rounded-full h-full bg-gray-700 absolute left-1/2 top-0 -translate-x-1/2 origin-top"
                    />
                </div>

                <div
                    ref={educationRef}
                >

                    <div
                        className="text-white rounded-lg shadow-lg
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
                                    className="text-lg font-semibold text-gray-300"
                                >
                                    BS in Computer Science
                                </h1>
                                <p
                                    className="text-sm font-semibold text-gray-300"
                                >
                                    Minor: Statistics

                                </p>
                                <p
                                    className="text-sm font-semibold text-gray-300"
                                >
                                    GPA: 3.8/4.0
                                </p>
                                <p
                                    className="text-sm font-semibold text-gray-300"
                                >
                                    Graduation: May 2024
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