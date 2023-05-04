import React from 'react';
import NavBar from '../pages/shared/NavBar';
import Footer from '../pages/shared/Footer';
import Blog from '../pages/Blog/Blog';

const BlogLaylout = () => {
  return (
    <div className='lg:mx-auto lg:px-8 max-w-7xl'>
      <NavBar></NavBar>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
};

export default BlogLaylout;