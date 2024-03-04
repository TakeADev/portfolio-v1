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
      <div className='mt-40 w-full lg:w-3/4 2xl:w-3/5 mx-auto mb-48 rounded-lg '>
        <div className='flex'>
          <h2
            className={`text-xl lg:text-2xl text-[#C5A9BE] bg-${tab === 'about' ? 'black' : 'gray-900'} bg-opacity-30 border-b border-b-gray-900 -mb-[1px] px-5 py-2 rounded-tl-lg border-t border-l border-r border-[#7390A3]  cursor-pointer ${tab !== 'about' && 'hover:bg-black hover:bg-opacity-10'}`}
            onClick={tabHandler}
          >
            About Me
          </h2>
          <h2
            className={`text-xl lg:text-2xl text-[#C5A9BE] bg-${tab === 'technologies' ? 'black' : 'gray-900'} bg-opacity-30 border-b border-b-gray-900 -mb-[1px] px-5 py-2 rounded-tr-lg border-t border-r border-[#7390A3] cursor-pointer ${tab !== 'technologies' && 'hover:bg-black hover:bg-opacity-10'}`}
            onClick={tabHandler}
          >
            Technologies
          </h2>
        </div>
        <div className='overflow-y-hidden h-fit  mx-auto'>
          {tab && tab === 'about' && (
            <div
              className={`bg-black bg-opacity-30 px-5 py-3 border-b lg:border-r lg:border-l border-t border-[#7390A3] expand-down lg:grid lg:grid-cols-2 items-center`}
              onClick={expandHandler}
            >
              <div>
                <img src={webDeveloperImage} alt='Web Developer' className='p-10' />
              </div>
              <div>
                <p className='text-left mx-auto text-lg leading-snug '>
                  I'm a Front-End React/TypeScript developer with 3+ years experience developing
                  personal projects. I love the constant learning and challenges that web
                  development provides. I'm hoping to join a team where I can be a valuable asset
                  and collaborate with experienced developers that share the same level of passion
                  that I do. In my free time, I like to play board games, hang out with my dog, and
                  build model kits.
                </p>
              </div>
            </div>
          )}
          {tab === 'technologies' && (
            <div
              className={`bg-black bg-opacity-30 px-5 py-3 border-b lg:border-r lg:border-l border-t border-[#7390A3] expand-down lg:grid lg:grid-cols-2`}
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