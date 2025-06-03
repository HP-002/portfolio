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
            className="m-5 p-5 text-neutral-200 rounded-lg relative"
            id="about"
        >
            <h1
                className="relative text-xl font-bold mb-3"
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
                            backgroundColor: "oklch(68.5% 0.169 237.323)",
                        }}
                        className="w-0.5 rounded-full h-full bg-gray-700 absolute left-1/2 top-0 -translate-x-1/2 origin-top"
                    />
                </div>

                <div
                    ref={aboutMeRef}
                    className="relative"
                >
                    <div
                        className="relative text-sm text-neutral-400 text-justify flex flex-col gap-4"
                    >
                        <p>
                            Hi, I’m Het! I’m a Computer Science student minoring in Statistics at the University at Buffalo. I’m passionate about designing and building efficient, scalable systems—whether through backend development, algorithm optimization, or full-stack application design.
                        </p>

                        <p>
                            I’m proficient in Java, C, Python, and JavaScript, and enjoy working across different layers of the tech stack. My academic and project experience has sparked a strong interest in low-level systems such as Operating Systems, Compilers, and Distributed Systems, while I’ve also developed a growing enthusiasm for Machine Learning and its real-world applications.
                        </p>

                        <p>
                            Outside of coursework, I work as a tutor and Peer-Assisted Learning Leader, where I help students deepen their understanding of computer science and math. These roles have not only reinforced my technical foundations but also sharpened my communication and leadership skills. I'm always looking for opportunities to learn, collaborate, and contribute to impactful software solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe