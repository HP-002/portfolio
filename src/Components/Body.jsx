import Introduction from './Introduction.jsx'
import AboutMe from './AboutMe.jsx'
import Education from './Education.jsx'
import Skills from "./Skills.jsx"
import ExperienceList from './ExperienceList.jsx'
import ProjectList from "./ProjectList.jsx"

function Body() {
    return (
        <div className="m-0 bg-black w-screen ">
            <Introduction />
            <AboutMe />
            <Education />
            <Skills />
            <ExperienceList />
            <ProjectList />
        </div>
    )
}

export default Body;