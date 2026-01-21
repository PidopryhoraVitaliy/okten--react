import './Comment.css';
import type {FC} from "react";
import type {CommentModel} from "../../models/CommentModel.ts";

type PropType = { comment: CommentModel; }

export const Comment: FC<PropType> = ({comment: {name, email, body}}) => {
    return (
        <div className={'comment'}>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};