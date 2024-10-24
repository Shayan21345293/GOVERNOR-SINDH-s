import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      
      
    <div className="flex justify-end bg-[#0a4e87] py-6 " >
      <h1 className='font-semibold text-2xl mr-24 text-cyan-200'>Tuition Free Education Program on Latest Technologies</h1>

      <Link href="/" className="text-base text-white pr-10 hover:text-blue-500">
        Home
      </Link>
      <Link href='/apply' className="text-base text-white pr-10 hover:text-blue-500">
        Apply
      </Link>
      <Link href='/jobs' className="text-base text-white pr-10 hover:text-blue-500">
        Jobs
      </Link>
      <Link href='/result' className="text-base text-white pr-10 hover:text-blue-500">
        Result
      </Link>
      <Link href='/courses' className="text-base text-white pr-10 hover:text-blue-500">
        Courses
      </Link>
      
    </div>
    <div className=' relative'>
    <img src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png" alt="Logo" className="h-30 w-24 absolute -bottom-16 left-6" />
    </div>
    </div>
    
  )
}

export default Navbar;
