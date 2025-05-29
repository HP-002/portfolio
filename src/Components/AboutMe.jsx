import { useRef } from "react"
import { motion, useScroll } from "motion/react"

function AboutMe() {
    const aboutMeRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: aboutMeRef,
        offset: ["start center", "end center"],
    })

    console.log(motion);

    return (
        <div
            className="m-5 p-5 text-white rounded-lg"
            id="about"
        >
            <h1
                className="text-xl font-bold mb-3"
            >
                About Me
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
                ref={aboutMeRef}
                >
                    <p
                        className="text-sm text-gray-300 text-justify"
                    >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tenetur vitae repellat, voluptatem asperiores animi dolores facilis perferendis ipsa a sit maiores quas vel error molestias tempora temporibus! Incidunt, laboriosam?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe