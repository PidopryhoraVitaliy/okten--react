import './DummyjsonComments.css';
import {useEffect, useState} from "react";
import {loadComments} from "../../services/dummyjson.api.service.ts";
import type {DummyjsonCommentModel} from "../../models/DummyjsonCommentModel.ts";
import {DummyjsonComment} from "../dummyjson-comment-component/DummyjsonComment.tsx";

export const DummyjsonComments = () => {
    const [comments, setComments] = useState<DummyjsonCommentModel[]>([]);

    useEffect(() => {
        loadComments().then(data => setComments(data));
    }, []);

    return (
        <>
            <div className='title-wrap'>
                <h2>dummyjson comments:</h2>
            </div>
            <div className='comments-wrap'>
                {
                    comments.map((comment: DummyjsonCommentModel) => <DummyjsonComment key={comment.id} comment={comment}/>)
                }
            </div>
        </>
    );
};