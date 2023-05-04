import React from 'react';
import NavBar from '../pages/shared/NavBar';
import Banner from '../pages/Home/Banner/Banner';
import ChefCard from '../pages/ChefSection/ChefCard';
import Footer from '../pages/shared/Footer';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import OurFeature from '../pages/Home/Banner/OurFeature';
import RegionalDishes from '../pages/Home/Banner/RegionalDishes';



const HomeLayout = () => {
  const {loader} = useContext(AuthContext);
  
  return (
    <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
      <NavBar></NavBar>
      <Banner></Banner>
      <ChefCard></ChefCard>
      <OurFeature></OurFeature>
      <RegionalDishes></RegionalDishes>
      
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;