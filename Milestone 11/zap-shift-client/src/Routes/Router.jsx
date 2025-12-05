import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/HomePage/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Error from "../Pages/Error/Error";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Rider from "../Pages/Rider/Rider.jsx";
import SendParcel from "../Pages/SendParcel/SendParcel.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/aboutus",
                Component: AboutUs,
            },
            {
                path: "/coverage",
                Component: Coverage,
                loader: () => fetch('/serviceCenters.json').then(res => res.json()),
            },
            {
                path: "/rider",
                element: <PrivateRoutes><Rider /></PrivateRoutes>,
            },{
                path: "/send-parcel",
                element: <PrivateRoutes><SendParcel /></PrivateRoutes>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json()),
            },

            {
                path: "*",
                Component: Error,
            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
               path: 'login', 
               Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            }
        ]
    }

]);