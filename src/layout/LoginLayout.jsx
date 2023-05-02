import React from 'react';
import NavBar from '../pages/shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const LoginLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;