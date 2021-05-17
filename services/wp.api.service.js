import { normalizePosts } from "../models/blog.models"

// const POST_FIELDS = [
//     ID, title, slug, content, date, author 
// ]

export const fecthPosts = async () => {
    const response = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/inesmaio.wordpress.com/posts');
    const jsonResponse = await response.json();
    return normalizePosts(jsonResponse.posts)
}

export const fetchPost = async (post_slug) => {
    const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/inesmaio.wordpress.com/posts/slug:${post_slug}`);
    const jsonRes = await response.json();
    return jsonRes
}

export const fetchComments = async (post_ID) => {
    const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/inesmaio.wordpress.com/posts/${post_ID}/replies/`);
    const jsonRes = await response.json()
    return jsonRes
}

