import './DummyjsonPosts.css';
import {useEffect, useState} from "react";
import type {DummyjsonPostModel} from "../../models/DummyjsonPostModel.ts";
import {loadPosts} from "../../services/dummyjson.api.service.ts";
import {Post} from "../dummyjson-post-component/DummyjsonPost.tsx";

export const DummyjsonPosts = () => {
    const [posts, setPosts] = useState<DummyjsonPostModel[]>([]);

    useEffect(() => {
        loadPosts().then(data => setPosts(data));
    }, []);

    return (<>
            <div className='title-wrap'>
                <h2>dummyjson post:</h2>
            </div>
            <div className='dummyjson-posts-wrap'>
                {
                    posts.map((post) => <Post key={post.id} post={post}/>)
                }
            </div>
        </>
    );
};