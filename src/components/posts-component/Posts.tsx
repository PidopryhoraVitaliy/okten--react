import './Posts.css';
import type {PostModel} from "../../models/PostModel.ts";
import {useEffect, useState} from "react";
// import {loadPosts} from "../../services/api.service.ts";
import {Post} from "../post-component/Post.tsx";
import {getAll} from "../../services/general.api.service.ts";
import type {BaseResponceModel} from "../../models/BaseResponceModel.ts";

export const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        // loadPosts().then(data => setPosts(data));
        getAll<BaseResponceModel & PostModel[]>('/posts').then(data => setPosts(data));
    }, []);

    return (
        <>
            <div className='title-wrap'>
                <h2>Posts:</h2>
            </div>
            <div className='posts-wrap'>
                {
                    posts.map((post) => <Post key={post.id} post={post}/>)
                }
            </div>
        </>
    );
};