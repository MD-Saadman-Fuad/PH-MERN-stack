// import React, { use } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { addToStoreDB, addToWishlistDB } from '../../utility/addToDB';
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);

    if (!singleBook) {
        return <div className="text-center py-10">Book not found.</div>;
    }

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;

    const handleMarkAsRead = (id) => {
        toast("Successfully Marked as Read!");
        addToStoreDB(id);
    };

    const handleAddToWishlist = (id) => {
        toast("Successfully Added to Wishlist!");
        addToWishlistDB(id);
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-amber-50 ">
            <div className="mb-6">
                <Link to="/" className="btn btn-outline btn-primary">← Back to Books</Link>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-amber-200">
                <div className="md:flex">
                    {/* Book Image */}
                    <div className="md:w-1/3 p-6 bg-stone-200 flex items-center justify-center">
                        <img className="w-full max-w-xs rounded-lg shadow-md" src={image} alt={`${bookName} cover`} />
                    </div>

                    {/* Book Details */}
                    <div className="md:w-2/3 p-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">{bookName}</h1>
                        <p className="text-lg text-gray-600 mb-1">by <span className="font-medium">{author}</span></p>
                        <p className="text-sm text-gray-500 mb-4">
                            {publisher} • {yearOfPublishing} • {totalPages} pages
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="badge badge-success text-sm">📇 {category}</span>
                            <span className="badge badge-warning text-sm">⭐ {rating}</span>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {tags && tags.map((tag, index) => (
                                <span key={index} className="badge badge-outline badge-primary text-xs">{tag}</span>
                            ))}
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Review</h3>
                            <p className="text-gray-700 leading-relaxed">{review}</p>
                        </div>

                        <div className="flex gap-4">
                            <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent">Mark as Read</button>
                            <button onClick={() => handleAddToWishlist(id)} className="btn btn-info">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default BookDetails;