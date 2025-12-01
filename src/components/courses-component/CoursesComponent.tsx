import './CoursesComponent.css';
import {coursesArray} from "../../data/coursesList.ts";
import {CourseComponent} from "../course-component/CourseComponent.tsx";

export const CoursesComponent = () => {
    return (
        <ul>
            {
                coursesArray.map((course, i) =>
                    <CourseComponent key={i} course={course}/>
                )
            }
        </ul>
    );
};