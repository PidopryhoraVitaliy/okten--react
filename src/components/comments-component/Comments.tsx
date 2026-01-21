import './Comments.css';
import {useEffect, useState} from "react";
import {loadComments} from "../../service/api.service.ts";
import type {CommentModel} from "../../models/CommentModel.ts";
import {Comment} from "../comment-component/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<CommentModel[]>([]);

    useEffect(() => {
        loadComments().then(data => setComments(data));
    }, []);

    return (
        <>
            <div className='wrap'>
                <h1>Comments:</h1>
            </div>
            <div className='wrap'>
                {
                    comments.map((comment: CommentModel) => <Comment key={comment.id} comment={comment}/>)
                }
            </div>
        </>
    );
};