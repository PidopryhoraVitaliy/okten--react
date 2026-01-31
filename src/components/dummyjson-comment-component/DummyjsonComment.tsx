import './DummyjsonComment.css';
import type {FC} from "react";
import type {DummyjsonCommentModel} from "../../models/DummyjsonCommentModel.ts";

type PropType = { comment: DummyjsonCommentModel };

export const DummyjsonComment: FC<PropType> = ({comment: {user, body, likes}}) => {
    return (
        <div className={'dummyjson-comment'}>
            <p>user: <b>{user.username}</b> ({user.fullName})</p>
            <p>{body}</p>
            <p>likes: {likes}</p>
        </div>
    );
};