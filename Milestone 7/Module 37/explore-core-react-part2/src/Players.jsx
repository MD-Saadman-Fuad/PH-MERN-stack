import { useState, useEffect } from "react"
// Old way to fetch data
export default function Players({}){

    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    }, [])

    return(
        <div className="card">
            <h4>Players: {players.length}</h4>
            <ol>
                {
                    players.map(player => <li key={player.id}>{player.name}</li>)
                }
            </ol>
        </div>
    )
}