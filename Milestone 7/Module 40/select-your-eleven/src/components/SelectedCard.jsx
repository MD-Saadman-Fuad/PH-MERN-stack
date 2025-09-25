import React from 'react';
import bin from '../assets/bin.png'
const SelectedCard = ({player, purchasedPlayers, setPurchasedPlayers, availableBalance, setAvailableBalance}) => {
    console.log(purchasedPlayers);
    const handleRemove = () => {
        // console.log(player['player-name']);
        setAvailableBalance(availableBalance+ player['player-price'])
        setPurchasedPlayers(purchasedPlayers.filter(p => p['player-name'] !== player['player-name']));
    }
    return (
        <div className='border-2 border-gray-300 flex justify-between items-center p-4 mt-4 rounded-2xl'>
            <div className='flex items-center gap-4'>
                <img className='w-[70px] rounded-2xl' src={player['player-image']} alt="" />
                <div>
                    <h1 className='font-bold text-2xl'>{player['player-name']}</h1>
                    <h1 className='font-light'>{player['player-role']}</h1>
                </div>
            </div>
            <div>
                <img onClick={()=> handleRemove(player['player-name'])} src={bin} alt="" />
            </div>

        </div>
    );
};

export default SelectedCard;