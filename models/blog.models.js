export const normalizePosts = (posts) => posts.map(post => ({
    title: post.title,
    date: post.date,
    author: post.author,
    content: post.content,
    id: post.id,
}))