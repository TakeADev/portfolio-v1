import { useState, useContext, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

import { MdOutlineMenu } from 'react-icons/md'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import { AnimationContext } from '../../contexts/AnimationContext'

import '../../animations/animations.css'

const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [toggleSlide, setToggleSlide] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { typeAnimationIsPlaying } = useContext(AnimationContext)

  const menuClickHandler = () => {
    setMenuIsOpen(!menuIsOpen)
    setToggleSlide(!toggleSlide)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY !== 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    })
  })

  return (
    !typeAnimationIsPlaying && (
      <div
        className={`fade-in fixed right-0 top-0 z-20 mr-3 flex bg-[#262338] bg-opacity-70 text-xl xl:text-2xl ${scrolled ? 'transition lg:py-3' : 'lg:py-8'} `}
      >
        <MdOutlineMenu
          className={`mb-2 ml-3 mr-3 mt-2 w-12 cursor-pointer text-5xl lg:hidden ${menuIsOpen && ' rotate-left -rotate-90 '}`}
          onClick={menuClickHandler}
        />
        <nav
          className={`${!menuIsOpen && 'hidden '} ${toggleSlide && 'slide-left '}flex flex-col bg-[] text-right lg:flex lg:flex-row `}
        >
          <ScrollLink
            to='projects'
            smooth={true}
            duration={200}
            className={`grow-on-hover ml-10 mr-10 mt-[42px] cursor-pointer lg:mt-[13px]`}
          >
            <span>Projects</span>
          </ScrollLink>
          <ScrollLink
            to='about'
            smooth={true}
            duration={200}
            className={`grow-on-hover mr-10 mt-[42px] cursor-pointer lg:mt-[13px]`}
          >
            <span>About</span>
          </ScrollLink>
          <ScrollLink
            to='contact'
            smooth={true}
            duration={200}
            className={`grow-on-hover mb-10 ml-10 mr-10 mt-8 cursor-pointer border-2 border-[#7390A3] px-2 py-3 hover:bg-black hover:bg-opacity-10 lg:-ml-2 lg:mb-0 lg:mt-0`}
          >
            <span>Contact Me</span>
          </ScrollLink>
          <div className='mb-10 ml-auto flex lg:mb-0'>
            <Link to={'https://www.linkedin.com/in/chance-conway-5b687828b/'} target='_blank'>
              <div className='grow-on-hover mr-10 mt-7 w-14 rounded-full bg-[#7390a3] bg-opacity-50 p-3 lg:mt-0'>
                <FaLinkedinIn className='mx-auto text-3xl' />
              </div>
            </Link>
            <Link to={'https://github.com/TakeADev'} target='_blank'>
              <div className='grow-on-hover mr-10 mt-7 w-14 rounded-full bg-[#7390a3] bg-opacity-50 p-3 lg:mt-0'>
                <FaGithub className='mx-auto text-3xl' />
              </div>
            </Link>
          </div>
        </nav>
      </div>
    )
  )
}
export default Navigation
