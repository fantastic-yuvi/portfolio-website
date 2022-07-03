import React from 'react'
import { FaChevronDown } from 'react-icons/fa';
import ScrollIntoView from 'react-scroll-into-view'


function About() {
  return (
    <div>
     
      <div className="max-w-4xl mt-20 mx-auto">
        <p className="text-2xl text-black  md:text-4xl font-bold text-center">
        Hey 👋  
        </p>
        <p className="text-base text-left md:text-center text-gray-700 leading-relaxed mt-4 justify-center">
           I'm a  Space Pirate lol just Kidding , I'm a passionate Blockchain Developer and Competetive Programmer. Loves New Tech, I also love freelancing and contributing to open-source projects. 

        </p>
        
      
      
      </div>
      
      
      <ScrollIntoView selector = "#tech">

        <div class='mx-auto p-20'>
          
           <FaChevronDown class= "animate-bounce  hover:text-red-500 mx-auto text-3xl text-blue-500"/> 
      
        </div>
       </ScrollIntoView>
    </div>
  )
}

export default About
