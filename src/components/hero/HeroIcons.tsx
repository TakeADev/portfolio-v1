import { SiTypescript, SiExpress } from 'react-icons/si'
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'

import '../../animations/animations.css'

const HeroIcons = () => {
  return (
    <div className='fade-in mx-auto mt-24 flex w-full flex-col lg:w-3/4 lg:flex-row'>
      <div className='flex w-full lg:w-1/2'>
        <div className='w-1/3 text-center'>
          <SiTypescript className='mx-auto mb-2 text-5xl lg:text-7xl' />
          <span className='text-lg'>TypeScript</span>
        </div>
        <div className='w-1/3  text-center'>
          <FaReact className='mx-auto mb-2 text-5xl lg:text-7xl' />
          <span className='text-lg'>React</span>
        </div>
        <div className='w-1/3 text-center'>
          <SiExpress className='mx-auto mb-2 text-5xl lg:text-7xl' />
          <span className='text-lg'>Express</span>
        </div>
      </div>
      <div className='mt-8 flex w-full lg:mt-0 lg:w-1/2'>
        <div className='w-1/3 text-center'>
          <FaNodeJs className='mx-auto mb-2 text-5xl lg:text-7xl' />
          <span className='text-lg'>Node.js</span>
        </div>
        <div className='w-1/3 text-center'>
          <FaHtml5 className='mx-auto mb-2 text-5xl lg:text-7xl' />
          <span className='text-lg'>HTML</span>
        </div>
        <div className='w-1/3 text-center'>
          <FaCss3Alt className='mx-auto mb-2 text-5xl lg:text-7xl' />
          <span className='text-lg'>CSS</span>
        </div>
      </div>
    </div>
  )
}

export default HeroIcons
