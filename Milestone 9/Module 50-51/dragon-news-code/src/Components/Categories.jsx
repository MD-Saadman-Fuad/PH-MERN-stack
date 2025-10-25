import React from 'react';
import { use } from 'react';
import { NavLink } from 'react-router-dom';
// Use Vite base URL to ensure fetch hits the static JSON file and parse the response
const categoryPromise = fetch(`${import.meta.env.BASE_URL}categories.json`).then(res => {
    if (!res.ok) throw new Error(`Failed to load categories.json: ${res.status}`);
    return res.json();
});
const Categories = () => {
    const categories = use(categoryPromise);

    return (
        <div>
            <h2 className='font-bold'>All Categories - {categories.length}</h2>
            <div className='grid grid-cols-1 mt-5 text-left gap-3'>
                {
                    categories.map(category => <NavLink className={"btn bg-base-100 border-0 hover:bg-base-200 font-semibold"}
                        key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;