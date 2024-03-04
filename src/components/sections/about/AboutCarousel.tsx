import { useEffect, useRef, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { BsDash } from 'react-icons/bs'

import '../../../animations/animations.css'

const AboutCarousel = () => {
  const [position, setPosition] = useState(0)
  const [leftOrRight, setLeftOrRight] = useState('carousel-slide-left')

  const nodeRef = useRef(null)

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

  useEffect(() => {
    console.log(position)
  }, [position])

  return (
    <div className='h-full'>
      <div className='flex h-[90%] overflow-x-hidden'>
        <div className='w-1/12 flex items-center z-10 cursor-pointer' onClick={previousSlide}>
          <MdKeyboardArrowLeft className='inline text-3xl' />
        </div>
        <div className='w-10/12 flex flex-col justify-center'>
          <SwitchTransition>
            <CSSTransition key={position} timeout={300} classNames={leftOrRight}>
              <div className={''} ref={nodeRef}>
                <div className='text-center text-2xl mb-5'>
                  <span>{slides[position].title}</span>
                </div>
                <div className='ml-10 lg:ml-16 text-lg'>
                  <ul className='list-disc'>
                    {slides[position].list.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className='w-1/12 flex items-center cursor-pointer z-10' onClick={nextSlide}>
          <MdKeyboardArrowRight className='text-3xl' />
        </div>
      </div>
      <div className='h-[10%] text-xl flex items-center justify-center'>
        <BsDash className='inline' />
        <BsDash className='inline' />
        <BsDash className='inline' />
      </div>
    </div>
  )
}

export default AboutCarousel
