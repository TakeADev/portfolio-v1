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
    window.addEventListener('scroll', (e) => {
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
        className={`fade-in fixed right-0 top-0 flex text-xl xl:text-2xl bg-[#262338] bg-opacity-70 mr-3 z-20 ${scrolled ? 'transition lg:py-3' : 'lg:py-8'} `}
      >
        <MdOutlineMenu
          className={`w-12 cursor-pointer text-5xl mr-3 mt-2 lg:hidden ml-3 mb-2 ${menuIsOpen && ' rotate-left -rotate-90 '}`}
          onClick={menuClickHandler}
        />
        <nav
          className={`${!menuIsOpen && 'hidden '} ${toggleSlide && 'slide-left '}flex flex-col text-right bg-[] lg:flex lg:flex-row `}
        >
          <ScrollLink
            to='projects'
            smooth={true}
            duration={200}
            className={`ml-10 mr-10 mt-[42px] lg:mt-[13px] grow-on-hover cursor-pointer`}
          >
            <span>Projects</span>
          </ScrollLink>
          <ScrollLink
            to='about'
            smooth={true}
            duration={200}
            className={`mr-10 mt-[42px] lg:mt-[13px] grow-on-hover cursor-pointer`}
          >
            <span>About</span>
          </ScrollLink>
          <ScrollLink
            to='contact'
            smooth={true}
            duration={200}
            className={`mr-10 mt-8 lg:mt-0 mb-10 lg:mb-0 ml-10 px-2 py-3 border-2 border-[#7390A3] lg:-ml-2 hover:bg-black hover:bg-opacity-10 grow-on-hover cursor-pointer`}
          >
            <span>Contact Me</span>
          </ScrollLink>
          <div className='flex ml-auto mb-10 lg:mb-0'>
            <Link to={'https://www.linkedin.com/in/chance-conway-5b687828b/'} target='_blank'>
              <div className='bg-[#7390a3] mr-10 mt-7 lg:mt-0 p-3 rounded-full grow-on-hover bg-opacity-50 w-14'>
                <FaLinkedinIn className='text-3xl mx-auto' />
              </div>
            </Link>
            <Link to={'https://github.com/TakeADev'} target='_blank'>
              <div className='bg-[#7390a3] mr-10 mt-7 lg:mt-0 p-3 rounded-full grow-on-hover bg-opacity-50 w-14'>
                <FaGithub className='text-3xl mx-auto' />
              </div>
            </Link>
          </div>
        </nav>
      </div>
    )
  )
}
export default Navigation
