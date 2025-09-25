import userLogo from '../assets/user-1.png'
import flag from '../assets/vector.png'
// import { toast } from 'react-toastify';



const PlayerCard = ({ player, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    
    const isSelected = purchasedPlayers.some(p => p['player-name'] === player['player-name']);

    const handleSelected =()=>{
    console.log(availableBalance);
    if (availableBalance < player['player-price']) {
        alert('You do not have enough balance to select this player.');
        return;
    }
    if( purchasedPlayers.length >= 6 ){
        // toast.error('You can select up to 6 players only.');
        alert('You can select up to 6 players only.');
        return;
    }
    setAvailableBalance(prev => prev - player['player-price'])
    setPurchasedPlayers([...purchasedPlayers, player]);
    alert(`${player['player-name']} has been added to your team.`);
    
    // or pass AvailableBalance and setAvailableBalance as props from App.jsx to here and use it like below
    // setAvailableBalance(AvailableBalance - player['player-price'])

};
    return (
        <div class="card bg-base-100 w-96 shadow-sm p-4 rounded-2xl">
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
                    <button disabled={isSelected} onClick={() => {
                        handleSelected();
                        }} class="btn ">{isSelected === true? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;