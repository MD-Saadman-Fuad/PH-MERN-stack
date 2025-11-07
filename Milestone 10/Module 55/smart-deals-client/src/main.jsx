import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Layouts/RootLayout.jsx'
import Home from './Components/Home/Home.jsx'
import AllProducts from './Components/AllProducts/AllProducts.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import Register from './Components/Register/Register.jsx'
import MyProducts from './Components/MyProducts/MyProducts.jsx'
import MyBids from './Components/MyBids/MyBids.jsx'
import PrivateRoute from './Routes/PrivateRoutes.jsx'
import Login from './Components/Login/Login.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        Component: AllProducts,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "myProducts",
        element: <PrivateRoute><MyProducts /></PrivateRoute>,
      },
      {
        path: "myBids",
        element: <PrivateRoute><MyBids /></PrivateRoute>,
      },
      {
        path: "productDetails/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductDetails,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
