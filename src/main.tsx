import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login/Login.tsx';
import Market from './pages/market/Market.tsx';
import Cart from './pages/cart/Cart.tsx';
import { CssBaseline } from '@mui/material';
import Header from './shared/header/Header.tsx';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';

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
    <Provider store={store}>
      <CssBaseline />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
