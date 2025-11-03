import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h2>All Phones Here</h2>
            <ul>
                {phones.map(phone => (
                    <li key={phone.id}>
                        <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Phones;