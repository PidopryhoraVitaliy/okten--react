export interface PostModel {
    userId: number;
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
}

export type PostsResponseModel = {
    posts: PostModel[];
    total: number;
    skip: number;
    limit: number;
}