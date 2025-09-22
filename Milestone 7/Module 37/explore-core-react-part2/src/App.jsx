import { Suspense, useState } from 'react'
import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'
import Players from './Players'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

const fetchFriends = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

const fetchPosts = async() => {
  const res =await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
  const friendsPromise = fetchFriends();
  const postPromise = fetchPosts();

  function handleClick(){
    alert("I am Clicked")
  }
  const handleClick3 = () =>{
    alert("I am Clicked3")
  }
  const handleClick5 = (num) =>{
    let newNum = Number(num) + 5;
    alert("New Number: " + newNum)
  }
  return (
    <>
      
      <h3>Vite + React</h3>
      <Players></Players>
      <Suspense fallback={<h2>Loading Posts...</h2>}>
        <Posts postPromise={postPromise} />
      </Suspense>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Users fetchUser={fetchUsers} />
      </Suspense>

      <Suspense fallback={<h2>Loading Friends...</h2>}>
        <Friends fetchFriends={friendsPromise} />
      </Suspense>

      <Batsman />
      <Counter />
      
      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){
        alert('I am Clicked2')
      }}>Click Me</button>
      <button onClick={handleClick3}>Click Me</button>
      <button onClick={() => {alert('I am Clicked4')}}>Click Me</button>
      <button onClick={() => {handleClick5(10)}}>Click Me</button>
    </>
  )
}

export default App
