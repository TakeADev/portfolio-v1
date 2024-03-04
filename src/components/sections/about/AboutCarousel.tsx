import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { BsDash } from 'react-icons/bs'

import '../../../animations/animations.css'

const AboutCarousel = () => {
  return (
    <div className='mt-10 relative overflow-x-hidden'>
      <div className='flex w-full'>
        <div className='mt-32 text-4xl text-gray-600 cursor-pointer w-1/12 h-10'>
          <MdKeyboardArrowLeft />
        </div>
        <div className='flex-col'>
          <div className='text-center mb-5'>
            <span className='text-3xl '>Languages</span>
          </div>
          <div className='w-10/12 '>
            <ul className='list-disc text-xl leading-loose ml-16 '>
              <li>Typescript</li>
              <li>Javascript/ECMAScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
        </div>
        <div className='mt-32 ml-5 text-4xl text-gray-600 cursor-pointer w-1/12 h-10'>
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className='absolute bottom-0 text-center w-full'>
        <div className='mx-auto w-1/4 text-3xl'>
          <BsDash className='inline ' />
          <BsDash className='inline text-gray-600' />
          <BsDash className='inline text-gray-600' />
        </div>
      </div>
    </div>
  )
}

export default AboutCarousel
