import React from 'react';
import { use } from 'react';
import PlayerCard from './PlayerCard';

// "player-image": "https://i.ibb.co.com/vCVFZV3j/daviidmiller.jpg",
//     "player-name": "David Miller",
//     "player-country": "South Africa",
//     "player-role": "Batsman",
//     "player-rating": 89,
//     "player-batting-style": "Left-hand Bat",
//     "player-bowing-style": "Right-arm Offbreak",
//     "player-price": 100000

const AvailablePlayers = ({ playersPromise, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers }) => {

    const AvailablePlayers = use(playersPromise);
    // console.log(AvailablePlayers);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                AvailablePlayers.map(player => <PlayerCard 
                    key = {player['player-name']}
                    availableBalance={availableBalance} 
                    setAvailableBalance={setAvailableBalance} 
                    purchasedPlayers={purchasedPlayers} 
                    setPurchasedPlayers={setPurchasedPlayers}
                    player={player}></PlayerCard>)
            }
            
        </div>
    );
};

export default AvailablePlayers;