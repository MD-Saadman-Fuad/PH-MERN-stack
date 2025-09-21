import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        
      <h1>Checking</h1>
      <Person />
      <Sports name="Football" />
      <Sports name="Cricket" />
      <Sports name="Basketball" />
      <Student />
      <Player name="Bob" age={30} />
      <Player name="Charlie" age={28} />
      <Player name="David" age={35} />
      <Player name="Mahmudul" />
    </>
  )
}

function Person(){
  const age = 25, name = "John";
  const personStyle = {
    border: '2px solid blue',
    margin: '10px',
    padding: '10px',
    borderRadius: '10px'
  }
  return (
    <p style={personStyle}>This is a component named {name} and it is {age} years old</p>
  )
}

function Player ({name, age = 'unknown'}) {
  return (
    <div className="student">
      <p>I am {name} and I am {age} years old</p>
    </div>
  )
}

function Sports (props){
  return (
    <div style={{
      border: '2px solid green', margin: '10px', padding: '10px', borderRadius: '10px'
      }}>
    <h1>Sports Component</h1>
    <p>Play {props.name}</p>
    </div>
    
  )
}

function Student(){
  const name = "Alice";
  const age = 22;
  return (
    <div className='student'>
      <p>I am {name} and I am {age} years old</p>
    </div>
  )
} 

export default App
