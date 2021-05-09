import { normalizePosts } from "../models/blog.models"

export const fecthPosts = async () => {
    const response = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/inesmaio.wordpress.com/posts');
    const jsonResponse = await response.json();
    return normalizePosts(jsonResponse.posts)
}