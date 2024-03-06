import { useContext, useState } from 'react'

import { FaChevronDown } from 'react-icons/fa'

import { AnimationContext } from '../../contexts/AnimationContext'

import HeroText from './HeroText'
import HeroIcons from './HeroIcons'

import '../../animations/animations.css'

const Hero = () => {
  const { typeAnimationIsPlaying } = useContext(AnimationContext)

  const [fadingIn, setFadingIn] = useState(true)

  const queueBounce = () => {
    setFadingIn(false)
  }

  return (
    <div className='w-full'>
      <HeroText />
      {!typeAnimationIsPlaying && (
        <>
          <HeroIcons />
          <FaChevronDown
            className={`fade-in-half sticky bottom-0 text-7xl mx-auto mt-36 ${!fadingIn && 'better-bounce'} opacity-50`}
            onAnimationEnd={queueBounce}
          />
        </>
      )}
    </div>
  )
}

export default Hero
