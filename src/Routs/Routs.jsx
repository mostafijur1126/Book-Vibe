import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Main from "../Templete/Main";
import ErrorPage from "../Pages/Error Page/ErrorPage";
import BookDetails from "../Pages/BookDetails";
import ListedBooks from "../Pages/ListedBooks";


export const router = createBrowserRouter([
  {
    path:"/", Component:Main,
    children:[
      {index:true, Component: Home},
      {path:"/listedBooks", Component: ListedBooks},
      {path:"/bookDetails/:bookId" , Component: BookDetails,
        loader: () => fetch("/booksData.json")
      }
    ],
    errorElement:<ErrorPage></ErrorPage>
  }
])