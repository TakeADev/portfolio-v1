import { Dispatch, MouseEventHandler, SetStateAction, useContext, useEffect, useState } from 'react'

import { AnimationContext } from '../../contexts/AnimationContext'

const About = () => {
  const [tab, setTab] = useState('about')
  const [aboutText, setAboutText] = useState('')
  const [aboutIndex, setAboutIndex] = useState(0)

  const { typeAnimationIsPlaying } = useContext(AnimationContext)

  const aboutContent = `I'm a Front-End React/TypeScript developer with 3+ years experience developing
                personal projects.I love the constant learning and challenges that web development
    provides.I'm hoping to join a team where I can be a valuable asset and collaborate
    with other individuals that share the same level of passion that I do.In my free
    time, I like to play board games, hang out with my dog, and build model kits.`

  const loopText = (
    index: number,
    setIndex: Dispatch<SetStateAction<number>>,
    currentText: string,
    setCurrentText: Dispatch<SetStateAction<string>>,
    textTarget: string
  ) => {
    if (index < textTarget.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentText + textTarget[index])
        setIndex(index + 1)
      }, 10)
      return () => clearTimeout(timeout)
    }
  }

  const tabHandler: MouseEventHandler = (e) => {
    const whichTab = e.target as HTMLElement
    if (whichTab.innerHTML === 'About Me') {
      setTab('about')
      setAboutText('')
      loopText(aboutIndex, setAboutIndex, aboutText, setAboutText, aboutContent)
    }

    whichTab.innerHTML === 'Technologies' && setTab('technologies')
  }
  useEffect(() => { }, [aboutIndex, aboutText, aboutContent])

  return (
    !typeAnimationIsPlaying && (
      <div>
        <div className='mt-40 w-4/5 mx-auto  rounded-lg mb-96'>
          <div className='flex '>
            <h2
              className={`text-3xl text-[#C5A9BE] bg-black bg-opacity-${tab === 'about' ? '30 ' : '10'} border-b border-b-gray-900 -mb-[1px] px-5 py-2 rounded-tl-lg border-t border-l border-r border-[#7390A3]  cursor-pointer`}
              onClick={tabHandler}
            >
              About Me
            </h2>
            <h2
              className={`text-3xl text-[#C5A9BE] bg-black bg-opacity-${tab === 'technologies' ? '30' : '10'} border-b border-b-gray-900 -mb-[1px] px-5 py-2 rounded-tr-lg border-t border-r border-[#7390A3] cursor-pointer`}
              onClick={tabHandler}
            >
              Technologies
            </h2>
          </div>
          <div className='bg-black bg-opacity-30 p-5 border-b border-r border-l border-t border-[#7390A3]'>
            {tab === 'about' && <p className='text-left mx-auto text-xl '>{aboutText}</p>}
            {tab === 'technologies' && (
              <ul>
                <li>TypeScript</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  )
}

export default About
