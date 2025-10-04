import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/root.jsx';
import { Outlet } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Users from './components/users/Users.jsx';
import { Suspense } from 'react';
import Users2 from './components/Users2/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
const usersPromise = fetch ('https://jsonplaceholder.typicode.com/users').then(res => res.json());
let router = createBrowserRouter([
  
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true, Component: Home
      },
      {
        path: "mobiles", Component: Mobiles
      },
      {
        path: "users", 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: "users2",
        element: <Suspense fallback={<div>Loading...</div>}>
          <Users2 usersPromise={usersPromise} />
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({ params }) => {
          console.log(params.userId);
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            .then(res => res.json());
        },
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => {
          return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json());
        },
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({ params }) => {
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
            .then(res => res.json());
        },
        Component: PostDetails
      },
      
    ]
  },
  {
    path: "/about",
    element: <div>
      <h1 className='text-7xl font-bold'>About Page</h1>

    </div>,
  },
  {
    path: "/blogs",
    element: <div>
      <h1 className='text-7xl font-bold'>Blogs Page</h1>

    </div>,
  },

  {
    path: "/app2",
    Component: App,
  },
  {
        path: '*',
        element: <h3>Not found: 404</h3>
      },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
