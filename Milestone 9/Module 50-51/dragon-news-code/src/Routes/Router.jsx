import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Page/Home.jsx";
import CategoryNews from "../Page/CategoryNews.jsx";
import Login from "../Page/Login.jsx";
import Register from "../Page/Register.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import NewsDetails from "../Page/NewsDetails.jsx";
import PrivateRoute from "../provider/PrivateRoute.jsx";
import Loading from "../Page/Loading.jsx";
export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <Loading></Loading>,
            children: [
                {
                    path: '',
                    element: <Home></Home>
                },
                {
                    path: '/category/:id',
                    element: <CategoryNews></CategoryNews>,
                    // Return parsed JSON from the loader so useLoaderData() receives the actual data array
                    loader: () => fetch(`${import.meta.env.BASE_URL}news.json`).then(res => {
                        if (!res.ok) throw new Error(`Failed to load news.json: ${res.status}`);
                        return res.json();
                    }),
                    hydrateFallbackElement: <Loading></Loading>
                }
            ]
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    // use relative child paths so these render inside AuthLayout's <Outlet />
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element: <Register></Register>
                }
            ]
        },
        {
            path: '/news-details/:id',
            element: <PrivateRoute><NewsDetails /></PrivateRoute>,
            loader: () => fetch("/news.json"),
            hydrateFallbackElement: <Loading></Loading>
        },
        {
            path: '/*',
            element: <h1 className="text-4xl font-bold">404 Not Found</h1>
        }
    ]
)

export default router;

