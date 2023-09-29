/* eslint-disable no-unused-vars */
import React from 'react'
import Porfolio from '../assets/porfolio.png'
import { TypeAnimation } from 'react-type-animation'
import { BsGithub } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img src={Porfolio} className='w-full h-screen object-cover md:w-full' alt='/'/>
      <div className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center text-[#001b5e]'>
            <h1 className='sm:text-5xl text-md font-bold'>I’m Aliou Dione </h1>
            <h2 className='flex sm:text-3xl text-l pt-4 font-serif'>
                <TypeAnimation
                sequence={[
                    'Sofware developer',
                    1000,
                    'Tech enthusiast',
                    1000,
                    'Project Manager',
                    1000,
                    'Scrum | Agile',
                    1000
                ]}
                wrapper="div"
                cursor={true}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
                />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] '>
            <a href='https://github.com/Alioudione12' className='m-2 cursor-pointer hover:scale-110 ease-in duration-300'>
            <BsGithub size={30}/>
            </a>
            <a href='https://www.linkedin.com/in/aliou-dione-b77263193/' className='m-2 cursor-pointer hover:scale-110 ease-in duration-300'>
            <FaLinkedinIn size={30}/>
            </a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
