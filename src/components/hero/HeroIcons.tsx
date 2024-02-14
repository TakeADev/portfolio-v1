import { SiTypescript, SiExpress } from 'react-icons/si'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'

import '../../animations/animations.css'

const HeroIcons = () => {
  return (
    <div className='fade-in mt-20 w-full lg:w-3/4 mx-auto flex flex-col lg:flex-row'>
      <div className='flex w-full lg:w-1/2'>
        <div className='w-1/3 text-center'>
          <SiTypescript className='text-5xl lg:text-7xl mb-2 mx-auto' />
          <span className='text-lg'>TypeScript</span>
        </div>
        <div className='w-1/3  text-center'>
          <FaReact className='text-5xl lg:text-7xl mb-2 mx-auto' />
          <span className='text-lg'>React</span>
        </div>
        <div className='w-1/3 text-center'>
          <SiExpress className='text-5xl lg:text-7xl mb-2 mx-auto' />
          <span className='text-lg'>Express</span>
        </div>
      </div>
      <div className='flex mt-8 w-full lg:mt-0 lg:w-1/2'>
        <div className='w-1/3 text-center'>
          <FaNodeJs className='text-5xl lg:text-7xl mb-2 mx-auto' />
          <span className='text-lg'>Node.js</span>
        </div>
        <div className='w-1/3 text-center'>
          <FaHtml5 className='text-5xl lg:text-7xl mb-2 mx-auto' />
          <span className='text-lg'>HTML</span>
        </div>
        <div className='w-1/3 text-center'>
          <FaCss3Alt className='text-5xl lg:text-7xl mb-2 mx-auto' />
          <span className='text-lg'>CSS</span>
        </div>
      </div>
    </div>
  )
}

export default HeroIcons
