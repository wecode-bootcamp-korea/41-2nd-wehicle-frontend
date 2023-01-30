import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
import NotFound from './pages/notFound/NotFound';
import ProductDetail from './pages/productDetail/ProductDetail';
import ProductList from './pages/productList/ProductList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: '/login', element: <Login /> },
      { path: '/productDetail', element: <ProductDetail /> },
      { path: '/productList', element: <ProductList /> },
    ],
  },
]);

export default router;
