import React from 'react';

function Card({num, heading, para}) {
  return (
    <div className='flex flex-row'>
      <div className="card flex flex-col gap-5 m-3">
        <p className="text-white">({num})</p>
        <h3 className="head text-white">{heading}</h3>
        <p className="text-gray-500 text-1xl">{para}</p>
      </div>
    </div>
  );
}

export default Card;
