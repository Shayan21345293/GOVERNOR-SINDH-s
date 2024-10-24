'use client'
import React, { lazy, useState } from 'react';
import { useRouter } from 'next/navigation';
function Hero() {
  const router = useRouter(); // Initialize the router
  const [count, setCount] = useState(0);  // Count for button clicks
  const [clicks, setClicks] = useState(0); // Count for tracking clicks

  // Function to increment both counts and navigate to "apply" after 2 clicks
  const handleClick = () => {
    setCount(count + 1);
    setClicks(clicks + 1);

    if (clicks + 1 === 2) {
      router.push('/apply'); // Navigate to the 'apply' page after 2 clicks
    }
  };
  return (
    <div className="flex justify-start bg-neutral-100 pt-28  px-5">
      <div className="mb-8">
        <h1 className="text-[#174c78] font-extrabold text-6xl">
          Governor Sindh
        </h1>
        <h1 className="text-[#174c78] font-medium text-5xl mt-2">
          Kamran Tessori
        </h1>
        <h1 className='text-cyan-500 text-5xl font-extrabold mt-4'>
          Certified Cloud <br />
          Applied Generative AI <br />
          Engineer (GenEng)
        </h1>
        <h1 className='text-[#174c78] font-extrabold text-2xl mt-4'>
          Earn up to $5,000 / month
        </h1>

        {/* Button and counter layout */}
        <div className="flex items-center mt-6">
          

          <button
            onClick={handleClick}
            
            className='bg-[#0a4e87] font-semibold rounded-md py-3 text-sm tracking-widest text-center text-white hover:translate-y-1 sm:py-4 sm:text-base md:w-52'
            >
            APPLY NOW
          </button>
            
          <div className="ml-4 text-2xl font-extrabold text-[#0a4e87]">
            562,1{count} Applied
          </div>
        </div>
      </div>

      <div className='ml-10'>
        <img 
          src="https://www.governorsindh.com/_next/static/media/cover.1d863e39.png" 
          alt="Governor Sindh" 
          className='h-[500px] w-auto' 
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        
           {/* Certified Cloud Text Justified and Positioned Below Both */}
      {/* <div className='mt-10 w-full flex justify-center'>
        <h1 className='font-bold text-justify text-[#0a4e87] leading-relaxed w-3/4'>
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h1>
      </div> */}
        
      </div>
    </div>
  );
}

export default Hero;
