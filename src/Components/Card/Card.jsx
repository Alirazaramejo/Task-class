import React from 'react';

function Card({ num, heading, para }) {
  return (
    <div className='mt-6 flex flex-col sm:flex-row justify-center items-center sm:items-start'>
      <div className="card flex flex-col gap-5 m-3 text-center sm:text-left">
        <p className="text-white">{num}</p>
        <h3 className="head text-white text-lg md:text-xl lg:text-2xl xl:text-3xl">{heading}</h3>
        <p className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl">{para}</p>
      </div>
    </div>
  );
}

export default Card;
