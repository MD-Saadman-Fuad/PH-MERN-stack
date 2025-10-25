import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useState } from 'react';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(data);
    useEffect(() => {
        if (id == 0) {
            setCategoryNews(data);
            return;
        }
        else if (id == 1) {
            const filterNews = data.filter((news) => news.others.is_today_pick == true);
            setCategoryNews(filterNews);
            return;
        }
        else {
            const dataArray = Array.isArray(data) ? data : [];
            const filterNews = dataArray.filter((news) => String(news.category_id) === String(id));
            // console.log('Filtered News for category', id, ':', filterNews);
            setCategoryNews(filterNews);
        }
        // console.log('CategoryNews data loaded:', data);
        // Guard: loader should return an array — if not, treat as empty array to avoid runtime errors

    }, [data, id]);
    return (
        <div>
            {/* Category News Page - {id} */}
            <h1 className='font-bold mb-5'>Total <span className='text-secondary'>{categoryNews.length}</span> News Found </h1>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news} ></NewsCard>)
                }
            </div>

        </div>
    );
};

export default CategoryNews;