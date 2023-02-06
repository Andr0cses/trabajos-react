import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import FotoPf from "../assets/MIA.jpeg"

const Home = () => {
  return (
    <div name ="home" className='h-screen w-full bg-gradient-to-b from-slate-300 to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div>

          <h2> Hi I´m Andrés </h2>

          <p>
            texto aleatorio
          </p>

          <div>
            <button>
               Project
               <span>
                <MdOutlineKeyboardArrowRight />
               </span>
            </button>
          </div>

        </div>

        <div>
          <img src={FotoPf} alt= "" />
        </div>

      </div>
    </div>
  )
}

export default Home