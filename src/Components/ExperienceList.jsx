import { motion, useScroll } from "motion/react"
import { useRef } from "react"
import Experience from "./Experience.jsx"
import experiences from "../assets/data/experiences.js"

function ExperienceList() {
    const experiencesRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: experiencesRef,
        offset: ["start center", "end center"],
    })

    console.log(motion);

    return (
        <div
            className="m-5 p-5 text-neutral-200 rounded-lg scroll-mt-8"
            id="experiences"
        >
            <h1
                className="text-xl font-bold mb-3"
            >
                Experiences
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
                    ref={experiencesRef}
                    className="space-y-8"
                >
                    {experiences.map((experience) => (
                        <Experience
                            key={experience.id}
                            department={experience.department}
                            title={experience.title}
                            start={experience.start}
                            end={experience.end}
                            webpage={experience.webpage}
                            webpageLink={experience.webpageLink}
                            description={experience.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceList