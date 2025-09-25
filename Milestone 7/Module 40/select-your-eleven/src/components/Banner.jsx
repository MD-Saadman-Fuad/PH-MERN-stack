import React from 'react';
import bannerBG from '../assets/bannerBG.png';
import bannerLogo from '../assets/bannerLogo.png';

const Banner = () => {
  return (
    <div
      className="p-4 rounded-2xl bg-center h-[400px] text-center gap-6 flex flex-col justify-center items-center  mb-8"
      style={{
        backgroundImage: `url(${bannerBG})`,
        backgroundSize: 'cover',
      }}
    >
      <img 
        src={bannerLogo}
        alt="Banner Logo"
        className="w-[200px] h-auto rounded-xl shadow-lg"
      />
      <div>
        <h1 className="text-2xl font-bold">Welcome to the Player Selection</h1>
        <p className="mt-2">
          Select your favorite players and build your dream team!
        </p>
      </div>
      <div className='text-center border-2 border-[#E7FE29] p-2 rounded-lg'>
        <button className=" px-6 py-2 bg-[#E7FE29] text-black rounded-lg shadow-md hover:bg-[#D6E700]">
        Claim Your Credit
      </button>
      </div>
    </div>
  );
};

export default Banner;
