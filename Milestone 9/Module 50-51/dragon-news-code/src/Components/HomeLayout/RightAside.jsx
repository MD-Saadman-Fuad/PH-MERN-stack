import React from 'react';
import SocialLogin from './SocialLogin';
import Findus from './Findus';
import Qzone from './Qzone';
const RightAside = () => {
    return (
        <div className='text-left space-y-8'>
            <SocialLogin></SocialLogin>
            <Findus></Findus>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;