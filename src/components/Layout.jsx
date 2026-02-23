import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  return (
    <div className="app-shell">
      <Header />
      <div className="app-shell-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

