import { createBrowserRouter } from "react-router-dom";
import About from "./About";
import BookDetails from "./BookDetails";
import Books from "./Books";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Main from "./Main";

export const router = createBrowserRouter([
    {
      path: "",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "home",
          element: <Home/>,
        },
        {
          path: "book",
          loader: () => fetch("https://api.itbook.store/1.0/new"),
          element: <Books/>,
        },
        { path: "about", element: <About/> },
        {
          path: "book/:bookID",
          loader: async ({ params }) => {
            return fetch(`https://api.itbook.store/1.0/books/${params.bookID}`);
          },
          element: <BookDetails/>,
        },
        { index: true, element: <Home/> },
      ],
    },
  ]);