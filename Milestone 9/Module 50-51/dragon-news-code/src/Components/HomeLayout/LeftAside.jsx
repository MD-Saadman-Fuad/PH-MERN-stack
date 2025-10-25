import React from 'react';
import Categories from '../Categories.jsx';
import { Suspense } from 'react';
const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;