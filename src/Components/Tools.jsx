import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaSquareJs } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
const Tools = () => {
  return (
    <>
    <div className='bg-black text-white pl-12'>

    <p className='text-center text-5xl font-bold'>
        TOOLS IM USING
    </p>
    <div>
        <p className='my-16 text-3xl'>
            FRONTEND
        </p>
        <p className='flex gap-12 text-6xl my-6  '>
        <FaHtml5 className='hover:border-2 hover:text-orange-700 border-orange-700 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl' />
        <FaCss3 className='hover:border-2 border-blue-500 hover:text-blue-500 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl' />
        <FaReact className='hover:border-2 border-blue-400 hover:text-blue-400 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl' />
        <FaSquareJs className='hover:border-2 border-yellow-500 hover:text-yellow-500 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl' />
        </p>
    </div>
    <div>
        <p className='my-16 text-3xl'>
           Backend
        </p>
        <p  className='flex gap-12 text-6xl my-6 '>
        <FaNode className='hover:border-2 border-green-700 hover:text-green-700 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl' />
        <SiMongodb className='hover:border-2 border-green-900 hover:text-green-900 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl' />
        <FaSquareJs className='hover:border-2 border-yellow-500 hover:text-yellow-500 p-2 rounded-lg transition-all duration-100 ease-in-out hover:text-7xl' />
        </p>
    </div>
    <div>
        <p className='my-16 text-3xl'>
            Other
        </p>
        <p className='flex gap-6 text-5xl my-6'>
        <i className="bi bi-github hover:border-2 hover:text-6xl border-white p-2 rounded-lg transition-all duration-100 ease-in-out"></i>
        <i className="bi bi-git hover:border-2 hover:text-6xl border-white p-2 rounded-lg transition-all duration-100 ease-in-out"></i>
        </p>
    </div>
    
    </div>
    </>
  )
}

export default Tools
