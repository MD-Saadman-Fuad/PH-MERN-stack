import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserDetail from './Components/UserDetail.jsx'
import UpdateUser from './Components/UpdateUser.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/users/:id',
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`).then(res => res.json()),
    element: <UserDetail />,
  },
  {
    path: '/update/:id',
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`).then(res => res.json()),
    element: <UpdateUser />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
