import { createBrowserRouter } from "react-router";
import Books from "../Pages/Books";
import Home from "../Pages/Home";
import Main from "../Templete/Main";
import ErrorPage from "../Pages/Error Page/ErrorPage";


export const router = createBrowserRouter([
  {
    path:"/", Component:Main,
    children:[
      {index:true, Component: Home},
      {path:"/books", Component: Books}
    ],
    errorElement:<ErrorPage></ErrorPage>
  }
])