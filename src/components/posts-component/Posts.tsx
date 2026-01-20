import './Posts.css';
import {useEffect, useState} from "react";
import {Post} from "../post-component/Post.tsx";
import type {PostModel} from "../../models/PostModel.ts";
import {loadPosts} from "../../service/api.service.ts";

export const Posts = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        loadPosts().then(data => setPosts(data));
    }, []);

    return (
        <div className='wrap'>
            {
                posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};