import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getStoredWishlist } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadlist] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState('');
    const [activeTab, setActiveTab] = useState(0);
    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoredBook();
        const ConvertedStoredBookeData = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => ConvertedStoredBookeData.includes(book.bookId));
        setReadlist(myReadList);

        const storedWishlistData = getStoredWishlist();
        const ConvertedStoredWishlistData = storedWishlistData.map(id => parseInt(id));
        const myWishList = data.filter(book => ConvertedStoredWishlistData.includes(book.bookId));
        setWishList(myWishList);
    }, [data]);

    const handleSort = (type, listType) => {
        setSort(type);

        const list = listType === 'read' ? [...readList] : [...wishList];
        const setList = listType === 'read' ? setReadlist : setWishList;

        if (type === "Pages") {
            const sorted = list.sort((a, b) => a.totalPages - b.totalPages);
            setList(sorted);
        }
        if (type === "Ratings") {
            const sorted = list.sort((a, b) => b.rating - a.rating);
            setList(sorted);
        }
    }

    return (
        <div className='max-w-6xl mx-auto p-6 bg-amber-50 min-h-screen'>
            <div className='flex justify-center items-center w-full mb-6'>
                <details className="dropdown">
                    <summary className="btn btn-primary m-1">Sort By : {sort ? sort : ""} ({activeTab === 0 ? 'Read List' : 'Wish List'})</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("Pages", activeTab === 0 ? 'read' : 'wish')}>Pages</a></li>
                        <li><a onClick={() => handleSort("Ratings", activeTab === 0 ? 'read' : 'wish')}>Ratings</a></li>
                    </ul>
                </details>
            </div>
            <div>
                <Tabs selectedIndex={activeTab} onSelect={index => setActiveTab(index)}>
                    <TabList className="flex justify-center mb-6  rounded-lg p-2   ">
                        <Tab className="px-8 py-3 bg-amber-100 rounded-md cursor-pointer font-serif text-stone-800 hover:bg-amber-200 transition-colors duration-300 border border-amber-300 focus:outline-none" selectedClassName="bg-amber-300 text-stone-900 shadow-inner border-amber-400">Read List</Tab>
                        <Tab className="px-8 py-3 bg-amber-100 rounded-md cursor-pointer font-serif text-stone-800 hover:bg-amber-200 transition-colors duration-300 border border-amber-300 focus:outline-none ml-4" selectedClassName="bg-amber-300 text-stone-900 shadow-inner border-amber-400">Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Read Books - {readList.length}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                            {
                                readList.map(b => <Book key={b.bookId} singleBooks={b} />)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Wish List - {wishList.length}</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
                            {
                                wishList.map(b => <Book key={b.bookId} singleBooks={b} />)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ReadList;