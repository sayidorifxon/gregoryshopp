import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import AdminPage from './pages/Admin';
import AdminCategory from './components/AdminCategory';
import AdminProducts from './pages/AdminProducts';
import AdminPLP from './pages/AdminPLP';
import PLPPage from './pages/PLPPage';
import PDPPage from './pages/PDPPage';
import Register from './components/Register';
import User from './pages/User';
import Product from './pages/Product';
import Login from './components/Login';
const appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/plp",
      element:<PLPPage/>,
    },
    {
      path:"/pdp",
      element:<PDPPage/>,
    },
    {
      path:"/register",
      element:<Register/>,
    },
    {
      path:"/login",
      element:<Login/>,
    },
    {
      path:"/user/:ID",
      element:<User/>,
    },
    {
      path:"/product/:ID",
      element:<Product/>,
    },
  ],
},
{
  path:"/admin",
  element:<AdminPage/>
},
{
  path:"/adminCategory",
  element:<AdminCategory/>,
},
{
  path:"/adminProducts",
  element:<AdminProducts/>,
},
{
  path:"/adminPlp",
  element:<AdminPLP/>,
},

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);


