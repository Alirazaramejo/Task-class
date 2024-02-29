import React from 'react';

function Image({img}) {
  return (
    <div className="text-center">
      <img src={img} alt="" className="w-[40%] md:w-1/2 lg:w-40 xl:w-1/2 py-4 mx-auto  rounded-[50px]" />
    </div>
  );
}

export default Image;
