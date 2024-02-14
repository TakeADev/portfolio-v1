import { useState, useContext } from 'react'

import { MdOutlineMenu } from 'react-icons/md'

import { NavLink } from 'react-router-dom'

import { AnimationContext } from '../../contexts/AnimationContext'

import '../../animations/animations.css'

const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [toggleSlide, setToggleSlide] = useState(false)

  const { typeAnimationIsPlaying } = useContext(AnimationContext)

  const menuClickHandler = () => {
    setMenuIsOpen(!menuIsOpen)
    setToggleSlide(!toggleSlide)
  }

  return (
    !typeAnimationIsPlaying && (
      <div className={`fade-in fixed right-0 top-0 flex text-2xl bg-[#262338] bg-opacity-70`}>
        <MdOutlineMenu
          className={`w-12 text-5xl mr-5 mt-2 lg:hidden ml-3 mb-2 ${menuIsOpen && ' rotate-left -rotate-90'}`}
          onClick={menuClickHandler}
        />
        <nav
          className={`${!menuIsOpen && 'hidden '} ${toggleSlide && 'slide-left '}flex flex-col text-right bg-[] lg:flex lg:flex-row `}
        >
          <NavLink to={`#`} className={`mr-10 mt-10`}>
            <span>Projects</span>
          </NavLink>
          <NavLink to={`#`} className={`mr-10 mt-10`}>
            <span>About</span>
          </NavLink>
          <NavLink
            to={`#`}
            className={`mr-10 mt-8 mb-10 ml-10 p-2 border-2 border-[#7390A3] lg:-ml-2`}
          >
            <span>Contact Me</span>
          </NavLink>
        </nav>
      </div>
    )
  )
}
export default Navigation
