import { motion, useScroll } from "motion/react"
import { useRef } from "react"
import List from "./List.jsx"
import languages from "../data/languages.js"
import framesAndLibs from '../data/framesAndLibs.js';
import tools from './../data/tools.js';
import environments from './../data/environments.js';

function Skills() {
    const skillsRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: skillsRef,
        offset: ["start center", "end center"],
    })

    console.log(motion);

    return (
        <div
            className="m-5 p-5 text-white rounded-lg scroll-mt-8"
            id="skills"
        >
            <h1
                className="text-xl font-bold mb-3"
            >
                Skills
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
                    ref={skillsRef}
                >
                    <h1
                        className="text-lg font-bold mb-3"
                    >
                        Programming Languages
                    </h1>
                    <List list={languages} />

                    <h1
                        className="text-lg font-bold mb-3 mt-5"
                    >
                        Frameworks & Libraries
                    </h1>
                    <List list={framesAndLibs} />

                    <h1
                        className="text-lg font-bold mb-3 mt-5"
                    >
                        Tools
                    </h1>
                    <List list={tools} />

                    <h1
                        className="text-lg font-bold mb-3 mt-5"
                    >
                        Environments
                    </h1>
                    <List list={environments} />
                </div>
            </div>

        </div>
    )
}

export default Skills