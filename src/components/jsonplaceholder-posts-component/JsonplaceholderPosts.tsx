import './JsonplaceholderPosts.css';
import {useEffect, useState} from "react";
import type {JsonplaceholderPostModel} from "../../models/JsonplaceholderPostModel.ts";
import {loadPosts} from "../../services/jsonplaceholder.api.service.ts";
import {JsonplaceholderPost} from "../jsonplaceholder-post-component/JsonplaceholderPost.tsx";

export const JsonplaceholderPosts = () => {
    const [posts, setPosts] = useState<JsonplaceholderPostModel[]>([]);

    useEffect(() => {
        loadPosts().then(data => setPosts(data));
    }, []);

    return (<>
            <div className='title-wrap'>
                <h2>jsonplaceholder posts:</h2>
            </div>
            <div className='jsonplaceholder-posts-wrap'>
                {
                    posts.map((post) => <JsonplaceholderPost key={post.id} post={post}/>)
                }
            </div>
        </>
    );
};