import './Todo.css';
import type {FC} from "react";
import type {TodoModel} from "../../models/TodoModel.ts";

type PropType = { todo: TodoModel };
export const Todo: FC<PropType> = ({todo:{userId, id, title, completed}}) => {
    return (
        <div>
            userId: {userId} - {id} - {title} - {completed.toString()}
        </div>
    );
};