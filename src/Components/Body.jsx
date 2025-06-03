import Introduction from './Introduction.jsx'
import AboutMe from './AboutMe.jsx'
import Education from './Education.jsx'
import Skills from "./Skills.jsx"
import ExperienceList from './ExperienceList.jsx'
import ProjectList from "./ProjectList.jsx"
import Contact from "./Contact.jsx"

function Body(props) {
    return (
        <div
            className={`m-0 ${props.isOpen ? "ml-48" : "ml-18"} bg-black w-screen duration-300 relative`}
        >
            <Introduction />
            <AboutMe />
            <Education />
            <Skills />
            <ProjectList />
            <ExperienceList />
            <Contact />

            <footer
                className="mt-5 text-neutral-200 text-xs bg-neutral-900 text-center"
            >
                HetPatel &copy; {new Date().getFullYear()}
            </footer>
        </div>
    )
}

export default Body;