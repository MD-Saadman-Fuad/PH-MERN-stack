import React from 'react';
import SelectedCard from './SelectedCard';
const SelectedPlayers = ({ setToggle, purchasedPlayers, setPurchasedPlayers, availableBalance, setAvailableBalance  }) => {
    // console.log(purchasedPlayers)
    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                purchasedPlayers.map(player => <SelectedCard 
                    player={player} 
                    key={player['player-name']}
                    purchasedPlayers={purchasedPlayers}
                    setPurchasedPlayers={setPurchasedPlayers}
                    availableBalance={availableBalance}
                    setAvailableBalance={setAvailableBalance}
                    ></SelectedCard>)
            }
            <button onClick={() => setToggle(true)} className={`mt-4 px-4 py-3 border-1 border-gray-300 rounded-2xl bg-[#E7FE29]`}>Add More players</button>
        </div>
    );
};

export default SelectedPlayers;