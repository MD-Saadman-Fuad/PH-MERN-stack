import React from 'react';
import Grandpa from './Grandpa';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';
import './FamilyTree.css'
const FamilyTree = () => {
    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>
            <Grandpa></Grandpa>
            
        </div>
    );
};

export default FamilyTree;