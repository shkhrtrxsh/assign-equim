import React from 'react';
import Button from '../common/button';
import Image from 'next/image';
import icon from '../../../assets/shared/icon-new-feedback.svg'
interface AddFeedbackProps {
  
}

const AddFeedback: React.FC<AddFeedbackProps> = () => {
  return (
    <div className="static w-[540px] h-[665px] bg-white rounded-[10px] p-10" >
      <div className='absolute top-4'>
        <Image src={icon} alt="" />
      </div>
      
<div className="text-slate-600 text-2xl font-bold pb-10">Create New Feedback</div>
<div className='flex flex-col'>
  <div className="w-[220px] h-[42px] flex-col justify-center items-start gap-0.5 inline-flex pt-10 my-10">
    <div className="text-slate-600 text-sm font-bold">Feedback Title</div>
    <div className="text-slate-500 text-sm font-normal pb-3">Add a short, descriptive headline</div>
    <div className="p-2 w-[456px] h-12 bg-slate-50 text-black rounded-[5px] border border-indigo-600">Add a dark theme option</div>
</div>
<div className="w-[248px] h-[42px] flex-col justify-center items-start gap-0.5 inline-flex pt-10 my-10">
    <div className="text-slate-600 text-sm font-bold">Category</div>
    <div className="text-slate-500 text-sm font-normal pb-3">Choose a category for your feedback</div>
    <div className="p-2 w-[456px] h-12 bg-slate-50 text-black rounded-[5px] border border-indigo-600">Feature</div>
</div>
<div className="w-[220px] h-[42px] flex-col justify-center items-start gap-0.5 inline-flex pt-10 my-10">
    <div className="text-slate-600 text-sm font-bold">Feedback Title</div>
    <div className="text-slate-500 text-sm font-normal pb-3">Add a short, descriptive headline</div>
    <div className="p-2 w-[456px] h-12 bg-slate-50 text-black rounded-[5px] border border-indigo-600">Add a dark theme option</div>
</div>  
</div>
<div className='flex justify-end'> 
<div className="w-[93px] h-10 bg-slate-500 rounded-[10px] flex justify-center items-center m-5 cursor-pointer" >Cancel</div>  
    <div className='flex justify-center items-center cursor-pointer'>
        <Button name='Add Feedback'/>
    </div>
 
</div>

    </div>
  );
}

export default AddFeedback;