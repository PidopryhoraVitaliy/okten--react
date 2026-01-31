import './JsonplaceholderComment.css';
import type {FC} from "react";
import type {JsonplaceholderCommentModel} from "../../models/JsonplaceholderCommentModel.ts";

type PropType = { comment: JsonplaceholderCommentModel };

export const JsonplaceholderComment: FC<PropType> = ({comment: {name, body, email}}) => {
    return (
        <div className={'jsonplaceholder-comment'}>
            <p>user: <b>{name}</b></p>
            <p>email: {email}</p>
            <p>{body}</p>
        </div>
    );
};