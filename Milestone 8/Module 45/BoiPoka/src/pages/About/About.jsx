import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="bg-amber-50  py-12">
            
            <section className="about max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md border border-amber-200">
  <h1 className="text-3xl font-serif font-bold mb-4 text-stone-800">About Boi Poka</h1>
  <p className="mb-4 text-stone-700">
    Boi Poka is a curated online bookstore and community where readers discover great books and support independent authors. We spotlight diverse voices,
    surface hidden gems, and make it easy to find your next favorite read.
  </p>
  <p className="mb-4 text-stone-700">
    Join our community to share recommendations, read honest reviews, and stay updated on author features and new releases.
  </p>
  <Link to={'/'} className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-0">Browse Books</Link>
</section>
        </div>
    );
};

export default About;