import React from 'react';
import { Link } from 'react-router-dom';
const Book = ({ singleBooks }) => {
    const { bookName, author, image, rating, review, tags, yearOfPublishing, totalPages, publisher } = singleBooks;
    return (
        
            <div className="card bg-amber-50 w-96 shadow-lg border border-amber-200 p-6 hover:shadow-xl transition-shadow">
                <figure className='p-5 rounded-2xl bg-stone-200 w-2/3 mx-auto'>
                    <img className='h-[166px] rounded-lg'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body flex items-start">
                    <div className='flex gap-2 mb-3'>
                        {
                            tags.map(tag => <button key={tag} className="btn btn-xs btn-outline btn-primary">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title text-gray-800">
                        {bookName}
                        <div className="badge badge-neutral">{yearOfPublishing}</div>
                    </h2>
                    <h3 className="text-gray-600">by {author}</h3>
                    <p className="text-sm text-gray-500 mb-2">{publisher} • {totalPages} pages</p>
                    <p className="text-gray-700">{review}</p>

                    <div className="card-actions flex justify-start mt-4 ">
                        <div className="badge badge-success p-4 font-semibold"><Link to={`/bookDetails/${singleBooks.bookId}`} className="no-underline">Show More</Link></div>
                        <div className="badge badge-warning p-4">⭐ {rating}</div>
                    </div>
                </div>
            </div>
        
    );
};

export default Book;