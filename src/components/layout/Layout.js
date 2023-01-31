import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../nav/Nav';
import Footer from '../footer/Footer';

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
