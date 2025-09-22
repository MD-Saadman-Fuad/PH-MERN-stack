import { useState } from "react"

export default function Batsman(){
    const [run, setRun] = useState(0);
    const [sixes, setSices] = useState(0);

    const handleSingles = () => {
        const updatedRuns = run + 1;
        setRun(updatedRuns);
    }
    const handleDoubles = () => {
        const updatedRuns = run + 2;
        setRun(updatedRuns);
    }
    const handleTriples = () => {
        const updatedRuns = run + 3;
        setRun(updatedRuns);
    }
    const handleFour = () => {
        const updatedRuns = run + 4;
        setRun(updatedRuns);
    }
    const handleSix = () => {
        const updatedRuns = run + 6;
        setRun(updatedRuns);
        const updatedSixes = sixes + 1;
        setSices(updatedSixes);
    }
    return(
        <div>
            <h3>Name: Bangla Batsman </h3>
            {
                run >= 50 && <p>You scored half Century</p>
            }
            {
                run >= 100 && <p>You scored  Century</p>
            }
            
            <h1>Score: {run}</h1>
            <h4>Sixes: {sixes}</h4>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleDoubles}>Double</button>
            <button onClick={handleTriples}>Triple</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}