
import About from "../Pages/About";
import Home from "../Pages/Home";
import {
    createBrowserRouter,
  } from "react-router-dom";
import Venue from "../Pages/Venue";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Mainlayout from "../Layout/Mainlayout";
import CardDetails from "../Components/CardDetails";
import Errorpage from "../Pages/Errorpage";
import Privaterouter from "../Provider/Privaterouter";




const createdRoutes= createBrowserRouter([
    {
      path:'/',
      element:<Mainlayout></Mainlayout>,
      errorElement:<Errorpage></Errorpage>,
      children:[{
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/data.json')
      },
      {
        path:'/about',
        element:<Privaterouter><About></About></Privaterouter>
      },
      {
        path:'/venue',
        element:<Privaterouter><Venue></Venue></Privaterouter>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/details/:id',
        element:<Privaterouter><CardDetails></CardDetails></Privaterouter>,
        loader:()=>fetch('/data.json')
      }
    ]
    }
])

export default createdRoutes;