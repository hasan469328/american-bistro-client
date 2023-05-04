import React from 'react';
import NavBar from '../pages/shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer';


const RecipeLayout = () => {
  return (
    <div className='mx-auto  lg:px-8 max-w-7xl'>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RecipeLayout;