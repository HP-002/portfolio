import List from "./List.jsx"
import languages from "../data/languages.js"
import framesAndLibs from '../data/framesAndLibs.js';

function Skills() {
    return (
        <div
            className="m-5 p-5 text-white rounded-lg"
        >
            <h1
                className="text-3xl font-bold mb-3"
            >
                Skills
            </h1>
            
            <h1
                className="text-xl font-bold mb-3"
            >
                Programming Languages
            </h1>
            <List list={languages}/>

            <h1
                className="text-xl font-bold mb-3 mt-5"
            >
                Frameworks & Libraries
            </h1>
            <List list={framesAndLibs} />
            
        </div>
    )
}

export default Skills