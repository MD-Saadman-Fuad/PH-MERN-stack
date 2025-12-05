

import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../components/BookDetails/BookDetails";
import ReadList from "../pages/ReadList/ReadList";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: async () => {
          try {
            const res = await fetch('/booksData.json');
            if (!res.ok) throw new Error('Failed to fetch books');
            return res.json();
          } catch (error) {
            console.error(error);
            return []; // Return empty array to avoid error page
          }
        },
        Component: Home,
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/readlist',
        loader: async () => {
          try {
            const res = await fetch('/booksData.json');
            if (!res.ok) throw new Error('Failed to fetch books');
            return res.json();
          } catch (error) {
            console.error(error);
            return [];
          }
        },
        Component: ReadList
      },
      {
        path: '/bookDetails/:id',
        loader: async () => {
          try {
            const res = await fetch('/booksData.json');
            if (!res.ok) throw new Error('Failed to fetch books');
            return res.json();
          } catch (error) {
            console.error(error);
            return [];
          }
        },
        Component: BookDetails
      }
    ]
  },
]);