
import './App.css'
import { Suspense } from 'react';
import AvailablePlayers from './components/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers';
import Navbar from './components/Navbar';

const fetchPlayers = async () => {
  const res = await fetch('./players.json')
  return res.json()
}

function App() {

  // const data = fetch('https://raw.githubusercontent.com/MD-Saadman-Fuad/ElClasicoRoster/refs/heads/main/players.json').then(res => res.json()).then(data => console.log(data))

  // console.log(data);
  
  const playerspromise  = fetchPlayers()
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span class="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers playersPromise={playerspromise}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
