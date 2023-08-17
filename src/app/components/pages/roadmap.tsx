import React from 'react';
import Image from 'next/image';
import left from '../../../assets/shared/icon-arrow-left.svg'
import Button from '../common/button';
import Card2 from '../common/cardroadmap';
interface RoadMapProps {
  
}

const RoadMap: React.FC<RoadMapProps> = () => {
  return (
    <div className='bg-white'>
      <div className='w-[1200px] h-[76px] bg-[#373F68] rounded p-3'>
      <div className='flex flex-row justify-between items-center'>
  <div className='left flex flex-col'>
    <div className='flex flex-row items-center pl-5'>
      <div>
        <Image src={left} alt="" />
      </div>
      <div className="w-[75.67px] h-5 justify-center items-center gap-[15.67px] inline-flex">
        <div className="text-white text-sm font-bold underline">Go Back</div>
      </div>
      
    </div>
    <div className="text-white text-2xl font-bold pl-3">Roadmap</div>
  </div>
  <div className='right'>
    <Button name='+ Add Feedback'/>
  </div>
</div>
    </div>
    <div className='flex flex-row justify-center items-center pt-4'>
        <div className="1 w-1/3">
        <div className=" py-4 w-[250px] h-[53px] pr-1 flex-col justify-center items-start gap-1 inline-flex">
    <div className="text-slate-600 text-lg font-bold">Planned (4)</div>
    <div className="text-slate-500 text-base font-normal">Ideas prioritized for research</div>
</div>
<div className='py-4'>
    <Card2/>
</div>
<div className='py-4'>
<Card2/>
</div>
        </div>
        <div className="4 w-1/3">
        <div className=" py-4 w-[197px] h-[53px] pr-1 flex-col justify-center items-start gap-1 inline-flex">
    <div className="text-slate-600 text-lg font-bold">Planned (4)</div>
    <div className="text-slate-500 text-base font-normal">Ideas prioritized for research</div>
</div>
<div className='py-4'>
    <Card2/>
</div>
<div className='py-4'>
<Card2/>
</div>
        </div>
        <div className="3 w-1/3">
        <div className=" py-4 w-[197px] h-[53px] pr-1 flex-col justify-center items-start gap-1 inline-flex">
    <div className="text-slate-600 text-lg font-bold">Planned (4)</div>
    <div className="text-slate-500 text-base font-normal">Ideas prioritized for research</div>
</div>
<div className='py-4'>
    <Card2/>
</div>
<div className='py-4'>
<Card2/>
</div>
        </div>
    </div>

    </div>
  );
}

export default RoadMap;