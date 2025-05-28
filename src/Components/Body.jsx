import Introduction from './Introduction.jsx'
import AboutMe from './AboutMe.jsx'
import Education from './Education.jsx'
import Skills from "./Skills.jsx"
import ExperienceList from './ExperienceList.jsx'
import ProjectList from "./ProjectList.jsx"
import Contact from "./Contact.jsx"

function Body() {
    return (
        <div className="m-0 bg-black w-screen ">
            <Introduction />
            <AboutMe />
            <Education />
            <Skills />
            <ExperienceList />
            <ProjectList />
            <Contact />
            
            <footer
                className="mt-5 text-white text-xs bg-white/10 text-center"
            >
                HetPatel &copy; {new Date().getFullYear()}
            </footer>
        </div>
    )
}

export default Body;