import './Post.css';
import type {FC} from "react";
import type {PostModel} from "../../models/PostModel.ts";

type PropType = { post: PostModel };
export const Post: FC<PropType> = ({post: {userId, id, title, body}}) => {
    return (
        <div className={'post'}>
            <p>user id: {userId} / post id: {id}</p>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};