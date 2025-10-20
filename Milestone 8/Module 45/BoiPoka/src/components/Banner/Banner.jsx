import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/bannerImg.png';

const Banner = () => {
  return (
    <div className="hero bg-gradient-to-r from-amber-50 to-stone-100 min-h-[70vh] py-12">
      <div className="hero-content p-10 flex-col lg:flex-row-reverse max-w-6xl">
        <img
          src={bannerImage}
          className="max-w-sm rounded-lg shadow-2xl border border-amber-200"
          alt="Books collection"
        />
        <div className="lg:pr-12">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-stone-800 mb-6">
            Discover Your Next Great Read
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed mb-8">
            Immerse yourself in a world of stories, from timeless classics to contemporary gems.
            Explore curated collections, find your favorite genres, and let the pages transport you
            to new adventures. Your literary journey starts here.
          </p>
          <Link to="/" className="btn btn-primary bg-amber-600 hover:bg-amber-700 border-0 px-8 py-3 text-lg font-semibold shadow-lg">
            Explore Books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;