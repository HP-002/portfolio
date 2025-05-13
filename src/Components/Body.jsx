import AboutMe from './AboutMe.jsx';
import Education from './Education.jsx';
import Skills from "./Skills.jsx"

function Body() {
    return (
        <div className="m-0 bg-gray-950 w-screen ">
            <AboutMe />
            <Education />
            <Skills />
        </div>
    )
}

export default Body;