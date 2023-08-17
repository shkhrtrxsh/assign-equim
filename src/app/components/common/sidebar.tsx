import React from 'react';
import Image from 'next/image';
import iimage from '../../../assets/suggestions/desktop/background-header.png';

interface SidebarProps {
  // Define your props here
}

const Sidebar: React.FC<SidebarProps> = ({ /* Destructure your props here */ }) => {
  return (
    <div>
       <div className=" m-2 flex flex-grow">
      <div className="relative w-64 h-28 rounded overflow-hidden">
        <Image src={iimage} alt="" layout="fill" objectFit="cover" />
        <div className="absolute inset-2 flex flex-col items-start justify-end">
          <p className="text-white text-xl font-bold">Eqaim</p>
          <p className="text-white">Feedback Board</p>
        </div>
      </div>
    </div> 
    <div className=' bg-white m-2 rounded p-2'>
        <div>
        <div className='flex flex-col'>
            <div className='flex flex-row px-1'>
            <button className="bg-indigo-600  text-white font-bold py-2 px-4 rounded m-1">
      All
    </button>
    <button className="bg-violet-50  text-indigo-600 font-bold py-2 px-4 rounded m-1">
      UI
    </button>
    <button className="bg-violet-50  text-indigo-600 font-bold py-2 px-4 rounded m-1">
      UX
    </button>     
            </div>
    <div className='flex flex-row'>
    <button className="bg-violet-50  text-indigo-600 font-bold py-2 px-4 roundedm-1">
      Enhancements
    </button>
    <button className="bg-violet-50  text-indigo-600 font-bold py-2 px-4 rounded m-1">
      Bugs
    </button>
    </div>
    
  </div>
        </div>
    
    </div> 
    <div className='bg-white p-4 rounded m-2'>
<div className='flex flex-row justify-between'>
  <div className='font-bold text-black'>
Roadmap
  </div>
  <div className='text-blue-400 underline cursor-pointer'>
  view
  </div>
</div>
<div className='flex flex-row justify-between'>
  <div className='flex flex-col justify-center'>
<div className='flex flex-row items-center'>
<div className="w-2 h-2 bg-orange-300 rounded-full mr-2" />
<div className="text-slate-500 text-base font-normal">Planned</div>
</div>
<div className='flex flex-row items-center'>
<div className="w-2 h-2 bg-fuchsia-600 rounded-full mr-2" />
<div className="text-slate-500 text-base font-normal">In- Progress</div>
</div>
<div className='flex flex-row items-center'>
<div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
<div className="text-slate-500 text-base font-normal">Live</div>
</div>
</div>
<div className='flex flex-col'>
  <div className='font-bold text-slate-500'>
  2
</div>
<div className='font-bold text-slate-500'>
  3
</div>
<div className='font-bold text-slate-500'>
  1
</div>
</div>
</div>
    </div>
    </div>
   
  );
}

export default Sidebar;


