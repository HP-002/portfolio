import { motion, useScroll } from "motion/react"
import { useRef } from "react"

function ProjectList() {
    const projectsRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: projectsRef,
        offset: ["start center", "end center"],
    })

    console.log(motion)

    return (
        <div
            className="m-5 p-5 text-white rounded-lg bg-white/20"
        >
            <h1
                className="text-xl font-bold mb-3"
            >
                Projects
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
                    ref={scrollYProgress}
                    className="flex flex-wrap"
                >
                    {/* Content */}
                </div>
            </div>

        </div>
    )
}

export default ProjectList