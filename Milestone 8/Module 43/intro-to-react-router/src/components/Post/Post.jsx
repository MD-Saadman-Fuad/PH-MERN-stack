import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/posts/${post.id}`);
    }
    return (
        <div style={{border: '1px solid red', margin: '10px', padding: '10px'}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigate}>Details of: {post.id}

            </button>
        </div>
    );
};

export default Post;