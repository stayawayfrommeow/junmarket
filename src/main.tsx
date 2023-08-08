import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login.tsx';
import Market from './pages/market/Market.tsx';
import Cart from './pages/cart/Cart.tsx';
import { CssBaseline } from '@mui/material';
import Header from './shared/header/Header.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        element: <Header />,
        children: [
          {
            path: '/market',
            element: <Market />,
          },
          {
            path: '/Cart',
            element: <Cart />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>
);
