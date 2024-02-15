import { useState, useContext } from 'react'

import { MdOutlineMenu } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

import { NavLink, Link } from 'react-router-dom'

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
          <NavLink to={`#`} className={`mr-10 mt-10 ml-10 grow-on-hover`}>
            <span>Projects</span>
          </NavLink>
          <NavLink to={`#`} className={`mr-10 mt-10 grow-on-hover`}>
            <span>About</span>
          </NavLink>
          <NavLink
            to={`#`}
            className={`mr-10 mt-8 mb-10 ml-10 p-2 border-2 border-[#7390A3] lg:-ml-2 hover:bg-slate-900`}
          >
            <span>Contact Me</span>
          </NavLink>
          <Link to={'https://www.linkedin.com/in/chance-conway-5b687828b/'} target='_blank'>
            <div className='bg-[#7390a3] mr-10 mt-7 p-3 rounded-full grow-on-hover bg-opacity-50'>
              <FaLinkedinIn className='text-4xl ' />
            </div>
          </Link>
          <Link to={'https://github.com/TakeADev'} target='_blank'>
            <div className='bg-[#7390a3] mr-10 mt-7 p-3 rounded-full grow-on-hover bg-opacity-50'>
              <FiGithub className='text-4xl ' />
            </div>
          </Link>
        </nav>
      </div>
    )
  )
}
export default Navigation
