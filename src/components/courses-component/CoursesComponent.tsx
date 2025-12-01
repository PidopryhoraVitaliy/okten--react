import './CoursesComponent.css';
import {coursesAndDurationArray} from "../../data/coursesList.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesAndDurationArray.map((course, i) =>
                    <CourseComponent key={i} course={course}/>
                )
            }
        </ul>
    );
};