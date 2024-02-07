import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SiTypescript } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { FaChevronDown } from 'react-icons/fa'

const Hero = () => {
  const [pinkText, setPinkText] = useState('')
  const [pinkIndex, setPinkIndex] = useState(0)
  const [whiteText, setWhiteText] = useState('')
  const [whiteIndex, setWhiteIndex] = useState(0)
  const [greenText, setGreenText] = useState('')
  const [greenIndex, setGreenIndex] = useState(0)
  const [greyText, setGreyText] = useState('')
  const [greyIndex, setGreyIndex] = useState(0)

  const loopText = (
    index: number,
    indexSetter: Dispatch<SetStateAction<number>>,
    textTarget: string,
    currentText: string,
    textSetter: Dispatch<SetStateAction<string>>
  ) => {
    if (index < textTarget.length) {
      const timeout = setTimeout(() => {
        textSetter(currentText + textTarget[index])
        indexSetter(index + 1)
      }, 50)
      return () => clearTimeout(timeout)
    }
  }
  useEffect(() => {
    const text1 = 'Hi, '
    const text2 = "I'm "
    const text3 = 'Chance Conway'
    const text4 = 'Front End React/TypeScript Developer'

    loopText(pinkIndex, setPinkIndex, text1, pinkText, setPinkText)
    pinkText === text1 && loopText(whiteIndex, setWhiteIndex, text2, whiteText, setWhiteText)
    whiteText === text2 && loopText(greenIndex, setGreenIndex, text3, greenText, setGreenText)
    greenText === text3 && loopText(greyIndex, setGreyIndex, text4, greyText, setGreyText)
  }, [pinkIndex, pinkText, whiteIndex, whiteText, greenText, greenIndex, greyText, greyIndex])

  return (
    <div className='w-full h-screen '>
      <div className='pt-24 lg:pt-[20vh] mx-auto text-center lg:mx-20 lg:text-left'>
        <h1 className='text-7xl lg:text-9xl '>
          <span className='text-[#C5A9BE]'>{pinkText}</span>
          <span>{whiteText}</span>
          <br />
          <span className='text-[#A8DB94]'>{greenText}</span>
        </h1>
        <div className='w-3/4 mx-auto lg:w-full'>
          <h2 className='text-gray-500 text-2xl lg:text-4xl mt-10'>{greyText}</h2>
        </div>
        <Link to={`#`}>
          <div
            className={`mx-auto lg:mx-0 p-4 border-2 border-[#7390A3] mt-20 w-64 lg:w-96 text-3xl lg:text- text-center`}
          >
            <span>Contact Me</span>
          </div>
        </Link>
      </div>
      <div className='mt-20 w-full flex flex-col lg:flex-row'>
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
            <span className='text-lg'>Node.js</span>2
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
      <FaChevronDown className='sticky bottom-0 text-7xl mx-auto mt-36 animate-bounce' />
    </div>
  )
}

export default Hero
