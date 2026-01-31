import './JsonplaceholderPost.css';
import type {FC} from "react";
import type {JsonplaceholderPostModel} from "../../models/JsonplaceholderPostModel.ts";

type PropType = { post: JsonplaceholderPostModel };
export const JsonplaceholderPost: FC<PropType> = ({post: {title, body}}) => {
    return (
        <div className='jsonplaceholder-post'>
            <h4>{title}</h4>
            <p>{body}</p>
        </div>
    );
};