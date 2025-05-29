import { motion, useScroll } from "motion/react"
import { useRef } from "react"
import Project from "./Project.jsx"
import projects from './../data/projects.js';

function ProjectList() {
    const projectsRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: projectsRef,
        offset: ["start center", "end center"],
    })

    console.log(motion)

    return (
        <div
            className="m-5 p-5 scroll-mt-8"
            id="projects"
        >
            <h1
                className="text-xl font-bold mb-3 text-neutral-200"
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
                            backgroundColor: "oklch(70.4% 0.14 182.503)",
                        }}
                        className="w-0.5 rounded-full h-full bg-gray-700 absolute left-1/2 top-0 -translate-x-1/2 origin-top"
                    />
                </div>

                <div
                    ref={projectsRef}
                    className="flex flex-wrap gap-5"
                >
                    {projects.map(project => (
                        <Project
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            img={project.img}
                            github={project.github}
                            live={project.live}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProjectList