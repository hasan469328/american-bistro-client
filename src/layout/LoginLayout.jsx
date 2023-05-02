import React from 'react';
import NavBar from '../pages/shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';

const LoginLayout = () => {
  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;