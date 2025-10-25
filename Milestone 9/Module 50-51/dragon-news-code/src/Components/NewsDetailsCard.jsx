import React from 'react';
import { Link } from 'react-router-dom';
const NewsDetailsCard = ({ news }) => {
    return (
        <div>
            <img src={news.image_url} alt={news.title} className='w-full h-auto mb-4' />
            <h2 className='text-2xl font-bold mb-4'>{news.title}</h2>

            <p className='text-gray-700'>{news.details}</p>
            <Link className='btn btn-secondary font-bold text-end' to={`/category/${news.category_id}`}>Back To Category </Link>
        </div>
    );
};

export default NewsDetailsCard;