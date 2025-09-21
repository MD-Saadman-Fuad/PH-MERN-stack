import { useState } from 'react'
import Todo from './todo'
import Actor from './actor'
import Singer from './Singers'
import './App.css'

function App() {
  const actors = [ 'Bappa Raj', 'Omar Sunny', 'Shakib Khan', 'Riaz', 'Jashim', 'Alomgir'];
  const singers = [
    { id: 1, name: 'Lata Mangeshkar', age: 92 },
    { id: 2, name: 'Kishore Kumar', age: 58 },
    { id: 3, name: 'Asha Bhosle', age: 88 },
    { id: 4, name: 'Mohammed Rafi', age: 55 },
    { id: 5, name: 'Sonu Nigam', age: 49 }
  ];
  return (
    <>
        
      <h1>Checking</h1>
    {
      actors.map(actor => <Actor actor={actor}></Actor>)
    }
    {
      singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
    }





      {/* <Todo name= "Homework" isDone={true}/>
      <Todo name= "Homework" isDone={false}/>
      <Todo name= "Homework" isDone={true}/>
      <Person />
      <Sports name="Football" />
      <Sports name="Cricket" />
      <Sports name="Basketball" />
      <Student />
      <Player name="Bob" age={30} />
      <Player name="Charlie" age={28} />
      <Player name="David" age={35} />
      <Player name="Mahmudul" /> */}
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
