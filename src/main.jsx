import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Sign_in from './component/Sign_in';
import Sign_up from './component/Sign_up';
import Forgot_your_password from './component/Forgot_your_password';
import Reset_password from './component/Reset_password';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter ([
  {
    path: "/",
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
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
