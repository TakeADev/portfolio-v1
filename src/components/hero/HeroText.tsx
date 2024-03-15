import { useState, useEffect, useContext } from 'react'
import { Link as ScrollLink } from 'react-scroll'

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
    const text4 = 'Full Stack Web Developer'

    loopText(pinkIndex, text1, 'pinkText', 'pinkIndex', 50)
    pinkText === text1 && loopText(whiteIndex, text2, 'whiteText', 'whiteIndex', 50)
    whiteText === text2 && loopText(greenIndex, text3, 'greenText', 'greenIndex', 50)
    greenText === text3 && loopText(greyIndex, text4, 'greyText', 'greyIndex', 20)
    greyText === text4 && setTypeAnimationIsPlaying(false)
  })
  return (
    <div className='mx-auto pt-24 text-center lg:mx-20 lg:pt-[24vh] lg:text-left'>
      <h1 className='text-7xl lg:text-9xl '>
        <span className='text-[#C5A9BE]'>{pinkText}</span>
        <span>{whiteText}</span>
        <br />
        <span className='text-[#A8DB94]'>{greenText}</span>
      </h1>
      <div className='mx-auto w-3/4 lg:w-full'>
        <h2 className='mt-12 text-[27px] text-gray-500 lg:text-4xl'>{greyText}</h2>
      </div>
      {!typeAnimationIsPlaying && (
        <ScrollLink to='contact' smooth={true} duration={200}>
          <div
            className={`fade-in lg:text- mx-auto mt-16 w-64 cursor-pointer border-2 border-[#7390A3] p-4 text-center text-3xl hover:bg-black hover:bg-opacity-10 lg:mx-0 lg:w-96`}
          >
            <span>Contact Me</span>
          </div>
        </ScrollLink>
      )}
    </div>
  )
}

export default HeroText
