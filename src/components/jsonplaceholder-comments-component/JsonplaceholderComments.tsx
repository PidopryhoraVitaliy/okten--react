import './JsonplaceholderComments.css';
import {useEffect, useState} from "react";
import type {JsonplaceholderCommentModel} from "../../models/JsonplaceholderCommentModel.ts";
import {loadComments} from "../../services/jsonplaceholder.api.service.ts";
import {JsonplaceholderComment} from "../jsonplaceholder-comment-component/JsonplaceholderComment.tsx";

export const JsonplaceholderComments = () => {
    const [comments, setComments] = useState<JsonplaceholderCommentModel[]>([]);

    useEffect(() => {
        loadComments().then(data => setComments(data));
    }, []);

    return (
        <>
            <div className='title-wrap'>
                <h2>jsonplaceholder comments:</h2>
            </div>
            <div className='comments-wrap'>
                {
                    comments.map((comment: JsonplaceholderCommentModel) => <JsonplaceholderComment key={comment.id} comment={comment}/>)
                }
            </div>
        </>
    );
};