import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post.jsx';
const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>These are my posts {posts.length}</h2>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;