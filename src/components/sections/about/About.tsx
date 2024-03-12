import { MouseEventHandler, useContext, useState } from 'react'

import { AnimationContext } from '../../../contexts/AnimationContext'

import webDeveloperImage from '../../../assets/webdeveloper.png'
import programmingImage from '../../../assets/programming.png'

import '../../../animations/animations.css'
import AboutCarousel from './AboutCarousel'

const About = () => {
  const [tab, setTab] = useState<string | null>('about')
  const [toggleExpand, setToggleExpand] = useState(false)

  const { typeAnimationIsPlaying } = useContext(AnimationContext)

  const tabHandler: MouseEventHandler = (e) => {
    const whichTab = e.target as HTMLElement
    if (whichTab.innerHTML === 'About Me') {
      setTab('about')
    }
    whichTab.innerHTML === 'Technologies' && setTab('technologies')
  }

  const expandHandler = () => {
    setToggleExpand(!toggleExpand)
  }

  return (
    !typeAnimationIsPlaying && (
      <div className='mx-auto mb-48 mt-40 w-full rounded-lg lg:w-3/4 2xl:w-3/5'>
        <div className='flex'>
          <h2
            className={`text-xl text-[#C5A9BE] lg:text-2xl bg-${tab === 'about' ? 'black' : 'gray-900'} -mb-[1px] cursor-pointer rounded-tl-lg border-b border-l border-r border-t border-[#7390A3] border-b-gray-900 bg-opacity-30 px-5  py-2 ${tab !== 'about' && 'hover:bg-black hover:bg-opacity-10'}`}
            onClick={tabHandler}
          >
            About Me
          </h2>
          <h2
            className={`text-xl text-[#C5A9BE] lg:text-2xl bg-${tab === 'technologies' ? 'black' : 'gray-900'} -mb-[1px] cursor-pointer rounded-tr-lg border-b border-r border-t border-[#7390A3] border-b-gray-900 bg-opacity-30 px-5 py-2 ${tab !== 'technologies' && 'hover:bg-black hover:bg-opacity-10'}`}
            onClick={tabHandler}
          >
            Technologies
          </h2>
        </div>
        <div className='mx-auto h-fit overflow-y-hidden'>
          {tab && tab === 'about' && (
            <div
              className={`expand-down items-center border-b border-t border-[#7390A3] bg-black bg-opacity-30 px-5 py-3 lg:grid lg:grid-cols-2 lg:border-l lg:border-r`}
              onClick={expandHandler}
            >
              <div>
                <img src={webDeveloperImage} alt='Web Developer' className='p-10' />
              </div>
              <div className='mb-5 lg:mb-0'>
                <p className='mx-auto text-left text-lg leading-snug '>
                  I'm a Front-End React/TypeScript developer with 3+ years of experience developing
                  personal projects. I love the solvable challenges that web development provides,
                  along with the ability to constantly learn and improve my skill set. I believe I
                  am a valuable asset to any team and look forward to collaborating with experienced
                  developers that share my level of passion for web development. When I'm not coding
                  projects, I enjoy playing board games, building model kits, and spending time with
                  my dog.
                </p>
              </div>
            </div>
          )}
          {tab === 'technologies' && (
            <div
              className={`expand-down border-b border-t border-[#7390A3] bg-black bg-opacity-30 px-5 py-3 lg:grid lg:grid-cols-2 lg:border-l lg:border-r`}
              onClick={expandHandler}
            >
              <div>
                <img src={programmingImage} alt='Web Developer' className='p-10' />
              </div>
              <AboutCarousel />
            </div>
          )}
        </div>
      </div>
    )
  )
}

export default About
