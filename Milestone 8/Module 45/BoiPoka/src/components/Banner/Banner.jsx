import React from 'react';
import bannerImage from '../../assets/bannerImg.png';
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content p-10 flex-col lg:flex-row-reverse">
        <img
          src={bannerImage}
          className="max-w-sm rounded-lg shadow-2xl bg-base-200"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;