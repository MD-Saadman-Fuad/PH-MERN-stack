import './App.css'

export default function Singers ({singer}) {
    return (
        <div className="student">
            <h2>Name: {singer.name}</h2>
            <p>Age: {singer.age}</p>
        </div>
    )
}