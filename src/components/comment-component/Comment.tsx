import './Comment.css';
import type {FC} from "react";
import type {CommentModel} from "../../models/CommentModel.ts";

type PropType = { comment: CommentModel; }

export const Comment: FC<PropType> = ({comment: {body, likes, user}}) => {
    return (
        <div className={'comment'}>
            <p>user: <b>{user.username}</b></p>
            <p>{body}</p>
            <p>likes: {likes}</p>
        </div>
    );
};