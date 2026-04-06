import { createBrowserRouter } from "react-router";
import Books from "../Pages/Books";
import Home from "../Pages/Home";
import Main from "../Templete/Main";
import ErrorPage from "../Pages/Error Page/ErrorPage";
import BookDetails from "../Pages/BookDetails";


export const router = createBrowserRouter([
  {
    path:"/", Component:Main,
    children:[
      {index:true, Component: Home},
      {path:"/books", Component: Books},
      {path:"/bookDetails/:bookId" , Component: BookDetails,
        loader: () => fetch("/booksData.json")
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  }
])