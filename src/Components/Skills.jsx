import List from "./List.jsx"
import languages from "../data/languages.js"
import framesAndLibs from '../data/framesAndLibs.js';
import tools from './../data/tools.js';
import environments from './../data/environments.js';

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

            <h1
                className="text-xl font-bold mb-3 mt-5"
            >
                Tools
            </h1>
            <List list={tools} />

            <h1
                className="text-xl font-bold mb-3 mt-5"
            >
                Environments
            </h1>
            <List list={environments} />
            
        </div>
    )
}

export default Skills