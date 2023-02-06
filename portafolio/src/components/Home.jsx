import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import FotoPf from "../assets/MIA.jpeg"

const Home = () => {
  return (
    <div name ="home" className='h-screen w-full bg-gradient-to-b from-cyan-500 to-blue-500'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full'>

          <h2 className='text-4xl sm:text-7xl font-bold text-white'> Hi I´m a Junior Developer </h2>

          <p className='text-gray-300 py-4 max-w-md'>
            texto aleatorio
          </p>

          <div>
            <button className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-800' >
               Project
               <span>
                <MdOutlineKeyboardArrowRight />
               </span>
            </button>
          </div>

        </div>

        <div>
          <img src={FotoPf} alt= "my picture" className='
          rounded-2x1 mx-auto w-2/3 md:w-full' />
        </div>

      </div>
    </div>
  )
}

export default Home