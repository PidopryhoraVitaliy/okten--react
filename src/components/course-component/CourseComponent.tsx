import './CourseComponent.css';
import type {FC} from "react";
import type {CourseModel} from "../../models/CourseModel.ts";

type CourseComponentProps = {
    course: CourseModel;
}

export const CourseComponent: FC<CourseComponentProps> = ({course}) => {
    return (
        <li>{course.title} (duration: {course.monthDuration} month)</li>
    );
};