import './Post.css';
import type {FC} from "react";
import type {PostModel} from "../../models/PostModel.ts";

type PropType = { post: PostModel };
export const Post: FC<PropType> = ({post: {userId, id, title, body}}) => {
    return (
        <div className={'post'}>
            <p>userId: {userId}</p>
            <p>{id}</p>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};