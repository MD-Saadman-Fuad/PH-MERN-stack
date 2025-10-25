import React from 'react';
import swimming from '../../assets/swimming.png';
import Classroom from '../../assets/class.png'
import Playground from '../../assets/playground.png';
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold mb-5'>QZone</h1>
            <div className='space-y-5'>
                <img src={swimming} alt="Swimming" />
                <img src={Classroom} alt="Classroom" />
                <img src={Playground} alt="Playground" />
            </div>

        </div>

    );
};

export default Qzone;