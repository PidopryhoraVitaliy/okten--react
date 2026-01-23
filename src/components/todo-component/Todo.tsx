import './Todo.css';
import type {FC} from "react";
import type {TodoModel} from "../../models/TodoModel.ts";

type PropType = { todo: TodoModel };
export const Todo: FC<PropType> = ({todo: {userId, id, todo, completed}}) => {
    return (
        <div className={'todo'}>
            user id: {userId} / id: {id} / {todo} / {completed.toString()}
        </div>
    );
};