const baseJsonplaceholderUrl = 'https://jsonplaceholder.typicode.com';
const baseDummyjsonUrl = 'https://dummyjson.com';

export const urls = {
    jsonplaceholder: {
        users: {
            allUsers: baseJsonplaceholderUrl + '/users',
        },
        posts: {
            allPosts: baseJsonplaceholderUrl + '/posts',
        },
        comments: {
            allComments: baseJsonplaceholderUrl + '/comments',
        },
    },
    dummyjson: {
        users: {
            allUsers: baseDummyjsonUrl + '/users',
        },
        posts: {
            allPosts: baseDummyjsonUrl + '/posts',
        },
        comments: {
            allComments: baseDummyjsonUrl + '/comments',
        },
    },
}