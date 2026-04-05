import { createBrowserRouter } from "react-router";
import Books from "../Pages/Books";
import Home from "../Pages/Home";
import Main from "../Templete/Main";


export const router = createBrowserRouter([
  {
    path:"/", Component:Main,
    children:[
      {index:true, Component: Home},
      {path:"books", Component: Books}
    ]
  }
])