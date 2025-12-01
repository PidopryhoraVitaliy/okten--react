import styles from './CourseComponent.module.css';
import type {FC} from "react";
import type {CourseModel} from "../../models/CourseModel.ts";

type CourseComponentProps = {
    course: CourseModel;
}

export const CourseComponent: FC<CourseComponentProps> = ({course}) => {
    return (
        <li>
            <h3>{course.title}</h3>
            <p>Duration: {course.monthDuration} month ({course.hourDuration} hour)</p>
            <p>Modules:</p>
            <div className={styles.wrapper}>
                {
                    course.modules.map((item, index) => <div key={index}>{item}</div>)
                }
            </div>
        </li>
    );
};