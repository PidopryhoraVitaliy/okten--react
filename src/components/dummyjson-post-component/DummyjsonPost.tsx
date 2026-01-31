import './DummyjsonPost.css';
import type {FC} from "react";
import type {DummyjsonPostModel} from "../../models/DummyjsonPostModel.ts";

type PropType = { post: DummyjsonPostModel };
export const Post: FC<PropType> = ({post: {title, body, reactions, views}}) => {
    return (
        <div className='dummyjson-post'>
            <h4>{title}</h4>
            <p>{body}</p>
            <p>views: {views}</p>
            <p>likes: {reactions.likes}</p>
        </div>
    );
};