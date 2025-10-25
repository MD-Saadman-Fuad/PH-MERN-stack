import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Root from './Pages/Root/Root.jsx'
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { AuthProvider } from './contexts/AuthContext/AuthProvider.jsx';
// export const AuthContext = createContext(null);

// const userInfo = {
//   email: 'saadmanfuad@gmail.com',
// }


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      }

    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AuthContext value={userInfo}> */}

    {/* </AuthContext> */}

    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </StrictMode>,
)
