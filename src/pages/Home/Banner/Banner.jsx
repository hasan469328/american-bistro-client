import React from 'react';

const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/t2dDGnZ/cooking-banner-7166200.jpg")`, backgroundSize: 'contain' }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Get Ready to be Delighted - Delicious Food, Friendly Service, and a True American Experience</p>
      <button className="btn glass">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;