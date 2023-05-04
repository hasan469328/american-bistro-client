import React from "react";

const OurFeature = () => {
  return (
    <div className="carousel w-full mt-12">
      <div id="slide1" className="carousel-item relative w-full">
        <div>
          <img
            src="https://i.ibb.co/QYNjgRQ/flat-lay-mushrooms-bisque-condiments-with-copy-space.jpg"
            className="w-full relative"
          />
          <div className="absolute text-white left-10 lg:left-20 top-0 lg:top-32">
            <div className="hero-content flex-col lg:flex-row-reverse">
              
              <div className="max-w-md">
                <h1 className="uppercase xl lg:text-5xl lg:mb-4 text-center underline text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text font-semibold">Our Features</h1>
                
                <p className="font-medium text-sm lg:text-xl lg:mb-4">American cuisine consists of the cooking style and traditional dishes prepared in the United States. It has been significantly influenced by Europeans, indigenous Native Americans, Africans, Asians, Pacific Islanders, and many other cultures and traditions.</p>
              
                <ul className="text-sm lg:text-xl lg:mb-4 ">
                  <li>Regionalism</li>
                  <li>standardization</li>
                  <li>variety</li>
                  <li>traditional dishes</li>
                </ul>
              
                <button className="btn glass block mx-auto">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <div>
          <img
            src="https://i.ibb.co/Pmvw8Br/beef-cotlet-burger-with-sauce-wooden-board.jpg"
            className="w-full relative"
          />
          <div className="absolute text-white left-10 lg:left-20 top-0 lg:top-32">
            <div className="hero-content flex-col lg:flex-row-reverse">
              
              <div className="max-w-md">
                <h1 className="uppercase xl lg:text-5xl lg:mb-4 text-center underline text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text font-semibold">Our Features</h1>
                
                <p className="font-medium text-sm lg:text-xl lg:mb-4">American cuisine consists of the cooking style and traditional dishes prepared in the United States. It has been significantly influenced by Europeans, indigenous Native Americans, Africans, Asians, Pacific Islanders, and many other cultures and traditions.</p>
              
                <ul className="text-sm lg:text-xl lg:mb-4">
                  <li>Regionalism</li>
                  <li>standardization</li>
                  <li>variety</li>
                  <li>traditional dishes</li>
                </ul>
              
                <button className="btn glass">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div>
          <img
            src="https://i.ibb.co/m8TfPgR/diliara-garifullina-p-N-o2r-Iv8q-I-unsplash.jpg"
            className="w-full relative"
          />
          <div className="absolute text-white left-10 lg:left-20 top-0 lg:top-32">
            <div className="hero-content flex-col lg:flex-row-reverse">
              
              <div className="max-w-md">
                <h1 className="uppercase xl lg:text-5xl lg:mb-4 text-center underline text-transparent bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text font-semibold">Our Features</h1>
                
                <p className="font-medium text-sm lg:text-xl lg:mb-4 text-black">American cuisine consists of the cooking style and traditional dishes prepared in the United States. It has been significantly influenced by Europeans, indigenous Native Americans, Africans, Asians, Pacific Islanders, and many other cultures and traditions.</p>
              
                <ul className="text-sm lg:text-xl lg:mb-4 text-black font-medium">
                  <li>Regionalism</li>
                  <li>standardization</li>
                  <li>variety</li>
                  <li>traditional dishes</li>
                </ul>
              
                <button className="btn glass">Get Started</button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default OurFeature;
