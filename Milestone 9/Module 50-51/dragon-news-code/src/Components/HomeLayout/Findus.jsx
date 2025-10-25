import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
const Findus = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>
            <div className=''>
                <div className="join join-vertical w-full ">
                    <button className="btn bg-base-100 justify-start join-item"> <FaFacebook></FaFacebook> Facebook</button>
                    <button className="btn bg-base-100 justify-start join-item"> <FaTwitter></FaTwitter> Twitter</button>
                    <button className="btn bg-base-100 justify-start join-item"> <FaLinkedin></FaLinkedin> LinkedIn</button>
                </div>
            </div>
        </div>
    );
};

export default Findus;