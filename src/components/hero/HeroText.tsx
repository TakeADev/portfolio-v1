import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'

import { AnimationContext } from '../../contexts/AnimationContext'

import '../../animations/animations.css'

interface TextValues {
  pinkText: string
  pinkIndex: number
  whiteText: string
  whiteIndex: number
  greenText: string
  greenIndex: number
  greyText: string
  greyIndex: number
}

const HeroText = () => {
  const { typeAnimationIsPlaying, setTypeAnimationIsPlaying } = useContext(AnimationContext)

  const [textValues, setTextValues] = useState<TextValues>({
    pinkText: '',
    pinkIndex: 0,
    whiteText: '',
    whiteIndex: 0,
    greenText: '',
    greenIndex: 0,
    greyText: '',
    greyIndex: 0,
  })

  const { pinkText, pinkIndex, whiteText, whiteIndex, greenText, greenIndex, greyText, greyIndex } =
    textValues

  const loopText = (
    index: number,
    textTarget: string,
    colorText: string,
    colorIndex: string,
    delay: number
  ) => {
    if (index < textTarget.length) {
      const timeout = setTimeout(() => {
        setTextValues({
          ...textValues,
          [colorText]: textValues[colorText as keyof TextValues] + textTarget[index],
          [colorIndex]: +textValues[colorIndex as keyof TextValues] + 1,
        })
      }, delay)
      return () => clearTimeout(timeout)
    }
  }
  useEffect(() => {
    const text1 = 'Hi, '
    const text2 = "I'm "
    const text3 = 'Chance Conway'
    const text4 = 'Front-End React/TypeScript Developer'

    loopText(pinkIndex, text1, 'pinkText', 'pinkIndex', 50)
    pinkText === text1 && loopText(whiteIndex, text2, 'whiteText', 'whiteIndex', 50)
    whiteText === text2 && loopText(greenIndex, text3, 'greenText', 'greenIndex', 50)
    greenText === text3 && loopText(greyIndex, text4, 'greyText', 'greyIndex', 20)
    greyText === text4 && setTypeAnimationIsPlaying(false)
  })
  return (
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
        {!typeAnimationIsPlaying && (
          <div
            className={`fade-in mx-auto lg:mx-0 p-4 border-2 border-[#7390A3] mt-20 w-64 lg:w-96 text-3xl lg:text- text-center hover:bg-black hover:bg-opacity-10`}
          >
            <span>Contact Me</span>
          </div>
        )}
      </Link>
    </div>
  )
}

export default HeroText
