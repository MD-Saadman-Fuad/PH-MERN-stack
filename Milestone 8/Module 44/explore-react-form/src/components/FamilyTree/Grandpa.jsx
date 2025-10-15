import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';
const Grandpa = () => {
    return (
        <div className='family-tree'>
            <h2>Grandpa</h2>
            <Dad></Dad>
            <Uncle></Uncle>
            <Aunt></Aunt>
        </div>
    );
};

export default Grandpa;