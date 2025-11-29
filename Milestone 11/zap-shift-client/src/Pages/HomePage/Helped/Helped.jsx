import React from 'react';
import image1 from '../../../assets/brands/amazon.png';
import image2 from '../../../assets/brands/casio.png';
import image3 from '../../../assets/brands/moonstar.png';
import image4 from '../../../assets/brands/randstad.png';
import image5 from '../../../assets/brands/star.png';
import image6 from '../../../assets/brands/start_people.png';

const images = [image1, image2, image3, image4, image5, image6];
const Helped = () => {
    return (
        <div className='border-b border-dotted'>
            <div className='my-8'>
                <h1 className="text-2xl text-secondary font-bold text-center">We helped Thousands of sales team</h1>
            </div>
            <div className=' grid grid-cols-3 md:grid-cols-6 my-5'>
                {
                    images.map((img, index) => (
                        <div key={index} className='inline-block m-4'>
                            <img src={img} alt={`brand-${index}`} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Helped;