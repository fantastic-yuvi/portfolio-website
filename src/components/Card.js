import React from "react";
import profile from '../images/boy4.jpg';
import { FaGithub } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaRegEnvelope } from 'react-icons/fa';

function Card() {
    return(
        <div className="w-full">
             <div className='flex flex-col justify-center shadow-pink-500/50 hover:shadow-cyan-500/50 max-w-xs mx-auto bg-white shadow-2xl rounded-xl p-5'>
                <div className = "">
                    <img className="w-32 mx-auto shadow-xl shadow-zinc-600/60 rounded-full drop-shadow-sm" src={profile} alt="profile face" />

                </div>
                <div className="text-center mt-5">
                    <p className='text-xl sm:text-2xl font-semibold text-gray-900 hover:text-pink-600'>
                        Yuvraj Singh Gangwar
                    </p>
                    <p className='text-xs sm:text-base hover:text-pink-600  pt-2 pb-4 px-5 w-auto inline-block border-b-2'>
                       Blockchain Developer Competetive Programmer

                    </p>
                    <div className="flex align-center justify-center mt-4">
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/fantastic-yuvi">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.instagram.com/fantastic_yuvi/">
              <BsInstagram />
              <span class="sr-only">Instagram</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/yuvraj-singh-gangwar-b614a822b/">
              <BsLinkedin />
              <span class="sr-only">Linkedin</span>  
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mailto:ysgangwarfbd2001@gmail.com">
              <FaRegEnvelope />
              <span class="sr-only">Email</span>  
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card; 