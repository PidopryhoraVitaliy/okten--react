const baseUrl = 'https://dummyjson.com';

export const urls = {
    users: {
        allUsers: baseUrl + '/users',
        getUsers(limit: string, skip: string): string {
            return baseUrl + `/users?limit=${limit}&skip=${skip}`
        },
    },
    posts: {
        allPosts: baseUrl + '/posts',
    },
}