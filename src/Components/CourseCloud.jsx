import Course from "./Course.jsx"
import coursework from '../assets/data/coursework.js';

function CourseCloud() {
    return (
        <div
            className="flex flex-wrap gap-1"
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

export default CourseCloud