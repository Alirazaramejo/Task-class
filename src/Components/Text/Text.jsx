import React from 'react';

function Text({text}) {
  return (
    <div className='pt-2 w-full md:w-3/4 py-4 mx-auto'>
      <h2 className="text-white text-5xl md:text-6xl text-center font-bold leading-none">
        {text}
      </h2>
    </div>
  );
}

export default Text;
