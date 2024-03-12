import { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { BsDash } from 'react-icons/bs'

import '../../../animations/animations.css'

const AboutCarousel = () => {
  const [position, setPosition] = useState(0)
  const [leftOrRight, setLeftOrRight] = useState('carousel-slide-left')

  const slides = [
    { title: 'Languages', list: ['TypeScript', 'Javascript/ECMAScript', 'HTML5', 'CSS3'] },
    {
      title: 'Frontend Frameworks',
      list: ['React', 'Bootstrap', 'TailwindCSS'],
    },
    { title: 'Backend / Databases', list: ['Express', 'Firebase', 'mongoDB'] },
    { title: 'Runtime / Package Managers', list: ['node', 'npm', 'yarn', 'bun'] },
    { title: 'Version Control', list: ['git', 'GitHub'] },
  ]

  const nextSlide = () => {
    setLeftOrRight('carousel-slide-left')
    position < 4 && setPosition(position + 1)
  }

  const previousSlide = () => {
    setLeftOrRight('carousel-slide-right')
    position > 0 && setPosition(position - 1)
  }

  return (
    <div className='h-80 lg:h-full'>
      <div className='flex h-[90%] overflow-x-hidden'>
        <div className='z-10 flex w-1/12 cursor-pointer items-center' onClick={previousSlide}>
          <MdKeyboardArrowLeft className='inline text-3xl' />
        </div>
        <div className='flex w-10/12 flex-col justify-center'>
          <SwitchTransition>
            <CSSTransition key={position} timeout={300} classNames={leftOrRight}>
              <div className={''}>
                <div className='mb-5 text-center text-2xl'>
                  <span>{slides[position].title}</span>
                </div>
                <div className='ml-10 text-lg lg:ml-16'>
                  <ul className='list-disc'>
                    {slides[position].list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className='z-10 flex w-1/12 cursor-pointer items-center' onClick={nextSlide}>
          <MdKeyboardArrowRight className='text-3xl' />
        </div>
      </div>
      <div className='flex h-[10%] items-center justify-center text-xl'>
        {slides.map((_, index) => (
          <BsDash
            key={index}
            id='index'
            className={`inline ${index === position ? 'opacity-100' : 'opacity-50'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default AboutCarousel
