import AboutMe from './AboutMe.jsx';
import Education from './Education.jsx';
import Skills from "./Skills.jsx"
import ExperienceList from './ExperienceList.jsx';

function Body() {
    return (
        <div className="m-0 bg-black w-screen ">
            <AboutMe />
            <Education />
            <Skills />
            <ExperienceList />
        </div>
    )
}

export default Body;