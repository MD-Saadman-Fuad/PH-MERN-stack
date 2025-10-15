import React from 'react';
import { Link } from 'react-router-dom';
const Book = ({ singleBooks }) => {
    // const data = use(bookPromise); //destructure bookPromise first to use
    // console.log(data);
    console.log(singleBooks);
    const { bookName, author, image, category, rating, review, tags, yearOfPublishing
    } = singleBooks;
    return (
        <Link to={`/bookDetails/${singleBooks.bookId}`} className="no-underline">
            <div className="card bg-base-100 w-96 shadow-sm border border-gray-300 p-6">
                <figure className='p-5 rounded-5xl bg-gray-100 w-2/3 mx-auto'>
                    <img className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body flex items-start">
                    <div className='flex gap-2'>
                        {
                            tags.map(tag => <button className="btn btn-xs btn-outline">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <h3>by {author}</h3>
                    <p>{review}</p>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">📇 {category}</div>
                        <div className="badge badge-outline">⭐ {rating}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;