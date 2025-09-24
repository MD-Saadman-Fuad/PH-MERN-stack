import React from 'react';
import { use } from 'react';
import userLogo from '../assets/user-1.png'
import flag from '../assets/vector.png'

// "player-image": "https://i.ibb.co.com/vCVFZV3j/daviidmiller.jpg",
//     "player-name": "David Miller",
//     "player-country": "South Africa",
//     "player-role": "Batsman",
//     "player-rating": 89,
//     "player-batting-style": "Left-hand Bat",
//     "player-bowing-style": "Right-arm Offbreak",
//     "player-price": 100000

const AvailablePlayers = ({ playersPromise }) => {

    const AvailablePlayers = use(playersPromise);
    console.log(AvailablePlayers);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                AvailablePlayers.map(player => <div class="card bg-base-100 w-96 shadow-sm p-4 rounded-2xl">
                <figure>
                    <img className='w-full h-60 object-cover'
                        src={player['player-image']}
                        alt="Shoes" />
                </figure>
                <div class="mt-4">
                    <div className='flex items-center'>
                        <img src={userLogo} alt="" />
                        <h2 class="card-title ml-2">{player['player-name']}</h2>
                    </div>
                    <div className='flex justify-between mt-4 border-b-1 border-gray-300 pb-4'>
                        <div>
                            <img className='inline' src={flag} alt="flag" />
                            <p className='inline ml-2'>{player['player-country']}</p>
                        </div>
                        <button className='btn'>{player['player-role']}</button>
                    </div>
                    <div className='flex justify-between mt-4 font-bold'>
                        <span>Rating</span>
                        <span>{player['player-rating']}</span>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <span className='font-bold'>{player['player-batting-style']}</span>
                        <span >{player['player-bowing-style']}</span>
                    </div>
                    <div class="card-actions justify-between mt-4 items-center">
                        <div>
                            <span className='font-bold '>Price: ${player['player-price']}</span>
                        </div>
                        <button class="btn ">Choose Player</button>
                    </div>
                </div>
            </div>)
            }
            
        </div>
    );
};

export default AvailablePlayers;