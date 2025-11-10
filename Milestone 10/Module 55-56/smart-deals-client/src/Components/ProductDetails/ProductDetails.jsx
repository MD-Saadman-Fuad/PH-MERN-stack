import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useRef } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { use } from 'react';
import Swal from 'sweetalert2';
import { useState } from 'react';
const ProductDetails = () => {
    const { _id: productId } = useLoaderData();
    const bidModalRef = useRef(null);
    const { user } = use(AuthContext);
    const [bids, setBids] = useState([]);
    // console.log(productDetails);

    useEffect(() => {
        fetch(`http://localhost:3000/bids/byProduct/${productId}`, {
            headers: {
                authorization: `Bearer ${user?.accessToken}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log('bids for this product', data);
                setBids(data);
            })
            .catch(err => {
                console.error(err);
            })
    }, [productId, user?.accessToken]);

    const handleBidModalOpen = () => {
        bidModalRef.current.showModal();
    }

    const handleBidSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        const bid = event.target.bid.value;
        console.log(productId, name, email, bid);
        const newBid = {
            product: productId,
            buyer_name: name,
            buyer_email: email,
            buyer_image: user?.photoURL,
            bid_price: bid,
            status: 'pending',
        }

        fetch('http://localhost:3000/bids', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBid)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // alert('Bid placed successfully');
                    event.target.reset();
                    bidModalRef.current.close();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Bid has been Placed",
                        showConfirmButton: false,
                        timer: 1500
                    });

                    //insert new data to bid list
                    newBid._id = data.insertedId;
                    const newBids = [...bids, newBid];
                    newBids.sort((a, b) => b.bid_price - a.bid_price);
                    setBids(newBids);
                }
            })
            .catch(err => {
                console.error(err);
            })
    }


    return (
        <div>
            <div>
                {/* Product Detail */}
                <div>
                    {/* left column */}
                </div>
                <div>
                    {/* right column */}
                    <button
                        onClick={handleBidModalOpen}
                        className="btn btn-primary">I want to Buy this Product</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Give the Best Offer!!!</h3>
                            <p className="py-4">Offer Something Seller Can Not Resist</p>
                            <form onSubmit={handleBidSubmit}>
                                <fieldset className="fieldset">
                                    {/* name */}
                                    <label className="label">Name</label>
                                    <input type="text" name='name' className="input" readOnly defaultValue={user?.displayName} />
                                    {/* email */}
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" readOnly defaultValue={user?.email} />
                                    {/* bid amount */}
                                    <label className="label">Bid Amount</label>
                                    <input type="number" name='bid' className="input" placeholder="Enter your bid" required />
                                    {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                    <button className="btn btn-primary mt-4">Place Bid</button>
                                </fieldset>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
            <div>
                {/* Bid Detail */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">Bids for this Product <span className='text-primary'>{bids.length}</span></h2>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>SL No.</th>
                                    <th>Buyer Name</th>
                                    <th>Buyer Email</th>
                                    <th>Bid Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    bids.map((bid, index) => (<tr>
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                            alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{bid.buyer_name}</div>
                                                    {/* <div className="text-sm opacity-50">United States</div> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {bid.buyer_email}
                                            <br />
                                            {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                        </td>
                                        <td>{bid.bid_price}</td>
                                        <th className='gap-2 flex items-center'>
                                            <button className="btn  btn-xs">Accept</button>
                                            <button className="btn  btn-xs">Reject</button>
                                        </th>
                                    </tr>))
                                }
                                {/* row 2 */}

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;