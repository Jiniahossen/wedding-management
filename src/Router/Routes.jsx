
import About from "../Pages/About";
import Home from "../Pages/Home";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Venue from "../Pages/Venue";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Mainlayout from "../Layout/Mainlayout";




const createdRoutes= createBrowserRouter([
    {
      path:'/',
      element:<Mainlayout></Mainlayout>,
      children:[{
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/',
        element:<Venue></Venue>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
    }
])

export default createdRoutes;