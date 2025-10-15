// import React, { use } from 'react';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router-dom';
import { addToStoreDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
 import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)
const BookDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    // console.log(singleBook);
    // console.log(data);

    const { bookName, image } = singleBook

const handleMarkAsRead = id => {

//     MySwal.fire({
//   title: "Good job!",
//   text: "You clicked the button!",
//   icon: "success"
// });
toast("Successsfully Marked as Read!");
addToStoreDB(id);
}

    return (
        <div className='w-2/3 mx-auto'>
            <h1>Book Details</h1>
            <h2>{bookName}</h2>
            <img className='w-48' src={image} alt={bookName} />
            <ToastContainer />
            <button onClick={() => handleMarkAsRead(id)} className="btn btn-accent m-2">Mark as Read</button>
            <button className="btn btn-info m-2">Add to Wishlist</button>
        </div>
    );
};

export default BookDetails;