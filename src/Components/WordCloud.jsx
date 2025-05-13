import Course from "./Course.jsx"
import coursework from './../data/coursework.js';

function WordCloud() {
    return (
        <div
            className="flex justify-stretch justify-items-stretch flex-wrap gap-3"
        >
            {coursework.map((course) => (
                <Course
                    key={course.id}
                    title={course.title}
                    category={course.category}
                    description={course.description}
                />
            ))}
        </div>
    )
}

export default WordCloud