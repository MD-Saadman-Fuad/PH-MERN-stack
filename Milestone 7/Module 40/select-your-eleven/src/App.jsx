import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, useState } from 'react';
import AvailablePlayers from './components/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers';
import Navbar from './components/Navbar';
import Banner from './components/Banner'; 
import Footer from './components/Footer';
// import { ToastContainer, toast } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch('./players.json')
  return res.json()
}
const playerspromise = fetchPlayers()
const totalPlayers = 6;
function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  // console.log(purchasedPlayers);

  // const data = fetch('https://raw.githubusercontent.com/MD-Saadman-Fuad/ElClasicoRoster/refs/heads/main/players.json').then(res => res.json()).then(data => console.log(data))

  // console.log(data);


  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <Banner></Banner>
      <div className='max-w-[1200px] mx-auto flex justify-between gap-4 my-4 font-bold'>
        <h1 className='text-2xl font-bold'>{
          toggle === true ? 'Available Players' : `Selected Players (${purchasedPlayers.length}/${totalPlayers})`
        }
        </h1>
        <div className=''>
          <button onClick={() => {
            setToggle(true)

          }} className={`px-4 py-3 border-1 border-r-0 border-gray-300 rounded-l-2xl ${toggle ? 'bg-[#E7FE29]' : ''}`}>Available</button>
          <button onClick={() => {
            setToggle(false)

          }} className={`px-4 py-3 border-1 border-l-0 border-gray-300 rounded-r-2xl ${!toggle ? 'bg-[#E7FE29]' : ''}`}>Selected <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<div className='flex justify-center items-center h-[80vh]'><span className="loading loading-spinner loading-xl"></span></div>}>
          <AvailablePlayers
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            playersPromise={playerspromise}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          >

          </AvailablePlayers>
        </Suspense> : <SelectedPlayers 
        purchasedPlayers={purchasedPlayers}
        setPurchasedPlayers={setPurchasedPlayers}
        availableBalance={availableBalance}
        setAvailableBalance={setAvailableBalance}
        setToggle={setToggle}
        ></SelectedPlayers>
      }
      {/* <ToastContainer /> */}
      <Footer></Footer>
    </>
  )
}

export default App
