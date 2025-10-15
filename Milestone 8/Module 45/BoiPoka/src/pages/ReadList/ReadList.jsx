import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    const [readList, setReadlist] = useState([]);
    const [sort, setSort] = useState('');
    const data = useLoaderData();
    // console.log(data);

    useEffect(() => {

        const storedBookData = getStoredBook();
        // console.log(storedBookData);
        const ConvertedStoredBookeData = storedBookData.map(id => parseInt(id));
        // console.log(ConvertedStoredBookeData);
        const myReadList = data.filter(book => ConvertedStoredBookeData.includes(book.bookId));
        setReadlist(myReadList);

    }, []);

    const handleSort = (type) =>{
        setSort(type);

        if(type==="Pages"){
            const sortedByPages = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadlist(sortedByPages);
        }
        if(type==="Ratings"){
            const sortedByRatings = [...readList].sort((a,b) => b.rating - a.rating);
            setReadlist(sortedByRatings);
        }

    }

    return (
        <div className=''>
            <div className='flex justify-center items-center w-full mx-auto '>
                <details className="dropdown">
                <summary className="btn m-1">Sort By : {sort?sort:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={()=> handleSort("Pages")}>Pages</a></li>
                    <li><a onClick={()=> handleSort("Ratings")}>Ratings</a></li>
                </ul>
            </details>
            </div>
            <div>
                <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Your Read Books - {readList.length}</h2>
                    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
                        {
                            readList.map(b => <Book key={b.bookId} singleBooks={b}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Your Wish List</h2>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    );
};

export default ReadList;