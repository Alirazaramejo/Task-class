import React from 'react';

function GapCard({ para, rightText, LeftText, para2 }) {
  return (
    <div className='mt-4 max-w-[1200px] mx-auto flex flex-col md:flex-row text-white'>
     <div className='w-full lg:w-[280px] md:w-[190px]'></div>

      <div className='w-full md:w-[500px]'>
        <p className="gap1 mt-3">{para}</p>
        <div className='flex flex-col md:flex-row justify-between md:items-center'>
          <div>{LeftText}</div>
          <div>{rightText}</div>
        </div>
        <p className='mt-2 text-gray-500 md:max-w-[500px] font-medium'>
          {para2}
        </p>
        <div className='mt-5 border border-gray-600'></div>
      </div>
    </div>
  );
}

export default GapCard;

