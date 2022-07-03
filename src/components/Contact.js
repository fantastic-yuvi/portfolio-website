import { FaArrowRight } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <div className="max-w-lg w-full text-center m-auto pt-36 pb-10">
      <h1 className="text-4xl">Interested in working together?</h1>
      <a href="mailto:me.ysgangwarfbd2001@gmail.com">
        <span className="mt-10 inline-block w-auto rounded-full hover:animate-pulse bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
          <div className="flex flex-row  items-center">
            <span className="mr-3 ">Get in touch* Not the physical one😳</span>
            <FaArrowRight color="white" />
          </div>
        </span>
      </a>
    </div>
  );
}