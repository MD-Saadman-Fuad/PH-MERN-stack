// import React, { useState, useEffect } from 'react';
import Book from '../Book/Book';
import { Suspense } from 'react';
const Books = ({ data }) => {
    // const [books, setAllBooks] = useState([]);

    // useEffect(() => {
    //     // ph link https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data));
    // }, []);
    // const bookPromise = fetch('./booksData.json').then(res => res.json());
    return (
        <div>
            <h1 className='text-3xl text-center p-6 font-bold'>Books</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
                    {
                        data.map((singleBooks) => <Book key={singleBooks.bookId} singleBooks={singleBooks}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;