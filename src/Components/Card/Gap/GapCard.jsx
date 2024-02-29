import React from 'react';

function GapCard({para, rightText, LeftText, para2}) {
  return (
    <div className='mt-4 max-w-[1200px] mx-auto flex text-white'>
      <div className='w-[390px]'></div>
      <div className='w-[788px] h-[151px]'>
        <p className="gap1 mt-3">{para}</p>
        <div className='flex justify-between'>
          <div>{LeftText}</div>
          <div>{rightText}</div>
        </div>
        <p className='mt-2 text-gray-500 w-[500px] font-medium'>
          {para2}
        </p>
        <div className='mt-5 border border-gray-600'></div>
      </div>
    </div>
  );
}

export default GapCard;
