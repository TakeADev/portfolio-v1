import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

import { AnimationContext } from '../../../contexts/AnimationContext'

import ContactInput from './ContactInput'
import { MdEmail } from 'react-icons/md'

interface IFormFeilds {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  message: string
}

const defaultFormFeilds: IFormFeilds = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: '',
}

const Contact = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [textAreaValue, setTextAreaValue] = useState('')
  const [formFeilds, setFormFeilds] = useState<IFormFeilds>(defaultFormFeilds)
  const [emailSent, setEmailSent] = useState(false)

  const { typeAnimationIsPlaying } = useContext(AnimationContext)

  const focusHandler = () => {
    setIsFocused(!isFocused)
    textAreaValue.length > 0 && setIsFocused(true)
  }

  const textAreaChangeHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.currentTarget.value)
  }

  const setFormFeild = (feild: string, value: string) => {
    setFormFeilds({ ...formFeilds, [feild]: value })
  }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormFeilds(defaultFormFeilds)
    setTextAreaValue('')
    setEmailSent(true)
    fetch('/', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify(formFeilds),
    })
  }

  useEffect(() => {
    setFormFeild('message', textAreaValue)
  }, [textAreaValue])

  return (
    !typeAnimationIsPlaying && (
      <div className='w-full mb-48'>
        <div className='mx-auto w-full 2xl:w-4/5 text-lg '>
          <form
            className='w-full lg:w-3/4 mx-auto mt-40 bg-black bg-opacity-30 p-10 border border-[#7390a3]'
            onSubmit={submitHandler}
          >
            <h2 className='text-3xl mb-10'>Send Me an Email</h2>

            {emailSent && (
              <div className='mb-10'>
                <span className='text-xl text-[#c5a9be] mb-10'>Email was sent.</span>
              </div>
            )}
            <div className='w-full flex flex-col lg:flex-row'>
              <ContactInput
                feild='firstName'
                setFormFeild={setFormFeild}
                label='First Name (required)'
                required={true}
                value={formFeilds.firstName}
              />
              <ContactInput
                feild='lastName'
                setFormFeild={setFormFeild}
                label='Last Name'
                value={formFeilds.lastName}
              />
            </div>
            <div className='w-full flex flex-col lg:flex-row'>
              <ContactInput
                feild='email'
                setFormFeild={setFormFeild}
                label='Email Address (required)'
                required={true}
                value={formFeilds.email}
              />
              <ContactInput
                feild='phoneNumber'
                setFormFeild={setFormFeild}
                label='Phone Number'
                value={formFeilds.phoneNumber}
              />
            </div>
            <div>
              <div
                className={`absolute transition ease-in-out ${isFocused && 'text-[#7390a3] -translate-y-[3%] -translate-x-[10%] scale-75'} `}
              >
                <label className='ml-2'>Message</label>
              </div>
              <textarea
                rows={10}
                className='w-full bg-[#262338] border border-[#7390a3] pt-5 pl-2'
                onFocus={focusHandler}
                onBlur={focusHandler}
                onChange={textAreaChangeHandler}
                value={textAreaValue}
              />
            </div>
            <div className='w-full mb-10 lg:mb-0 text-right'>
              <button
                type='submit'
                className='mt-7 p-2 border-2 text-2xl border-[#7390A3] lg:-ml-2 hover:bg-black hover:bg-opacity-10 grow-on-hover'
              >
                Submit
              </button>
            </div>
          </form>
          <div className='flex flex-col md:flex-row w-11/12 lg:w-3/4 mx-auto relative'>
            <div className='flex'>
              <Link to={'https://www.linkedin.com/in/chance-conway-5b687828b/'} target='_blank'>
                <div className='bg-[#7390a3] mr-10 mt-7 p-3 rounded-full grow-on-hover bg-opacity-50 w-14'>
                  <FaLinkedinIn className='text-3xl mx-auto' />
                </div>
              </Link>
              <Link to={'https://github.com/TakeADev'} target='_blank'>
                <div className='bg-[#7390a3] mr-10 mt-7 p-3 rounded-full grow-on-hover bg-opacity-50 w-14'>
                  <FaGithub className='text-3xl mx-auto' />
                </div>
              </Link>
            </div>
            <Link to={'mailto:chanceconwaydev@gmail.com'} className=' w-full text-right'>
              <div className='mt-10 w-full text-lg hover:text-[#7390a3] break-all'>
                <MdEmail className='inline mr-3 text-2xl' />
                <span className=''>chanceconwaydev[at]gmail.com</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  )
}

export default Contact
