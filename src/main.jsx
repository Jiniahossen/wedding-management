import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import createdRoutes from './Router/Routes'
import Authprovider from './Provider/Authprovider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={createdRoutes}></RouterProvider>

    </Authprovider>


  </React.StrictMode>,
)
