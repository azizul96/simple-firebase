import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

import Register from './pages/Register/Register';
import EmailLogin from './pages/EmailLogin/EmailLogin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/loginWithGoogle",
        element: <Login></Login>
      },
      {
        path: "/login",
        element: <EmailLogin></EmailLogin>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
    
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
