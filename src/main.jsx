import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sign_in from './page/Sign_in';
import Sign_up from './page/Sign_up';
import Forgot_your_password from './page/Forgot_your_password';
import Reset_password from './page/Reset_password';
import Dashboard from './page/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Sign_up/>
  },
  {
    path: "/sign-in",
    element: <Sign_in/>
  },
  {
    path: "/sign-up",
    element: <Sign_up/>
  },
  {
    path: "/forgot-your-password",
    element: <Forgot_your_password/>
  },
  {
    path: "/reset-password",
    element: <Reset_password/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
