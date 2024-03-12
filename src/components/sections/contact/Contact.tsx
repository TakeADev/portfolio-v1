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
      <div className='mb-48 w-full'>
        <div className='mx-auto w-full text-lg 2xl:w-4/5 '>
          <form
            className='mx-auto mt-40 w-full border border-[#7390a3] bg-black bg-opacity-30 p-10 lg:w-3/4'
            onSubmit={submitHandler}
          >
            <h2 className='mb-10 text-3xl'>Send Me an Email</h2>

            {emailSent && (
              <div className='mb-10'>
                <span className='mb-10 text-xl text-[#c5a9be]'>Email was sent.</span>
              </div>
            )}
            <div className='flex w-full flex-col lg:flex-row'>
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
            <div className='flex w-full flex-col lg:flex-row'>
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
                className={`absolute transition ease-in-out ${isFocused && '-translate-x-[10%] -translate-y-[3%] scale-75 text-[#7390a3]'} `}
              >
                <label className='ml-2'>Message</label>
              </div>
              <textarea
                rows={10}
                className='w-full border border-[#7390a3] bg-[#262338] pl-2 pt-5'
                onFocus={focusHandler}
                onBlur={focusHandler}
                onChange={textAreaChangeHandler}
                value={textAreaValue}
              />
            </div>
            <div className='mb-10 w-full text-right lg:mb-0'>
              <button
                type='submit'
                className='grow-on-hover mt-7 border-2 border-[#7390A3] p-2 text-2xl hover:bg-black hover:bg-opacity-10 lg:-ml-2'
              >
                Submit
              </button>
            </div>
          </form>
          <div className='relative mx-auto flex w-11/12 flex-col md:flex-row lg:w-3/4'>
            <div className='flex'>
              <Link to={'https://www.linkedin.com/in/chance-conway-5b687828b/'} target='_blank'>
                <div className='grow-on-hover mr-10 mt-7 w-14 rounded-full bg-[#7390a3] bg-opacity-50 p-3'>
                  <FaLinkedinIn className='mx-auto text-3xl' />
                </div>
              </Link>
              <Link to={'https://github.com/TakeADev'} target='_blank'>
                <div className='grow-on-hover mr-10 mt-7 w-14 rounded-full bg-[#7390a3] bg-opacity-50 p-3'>
                  <FaGithub className='mx-auto text-3xl' />
                </div>
              </Link>
            </div>
            <Link to={'mailto:chanceconwaydev@gmail.com'} className=' w-full text-right'>
              <div className='mt-10 w-full break-all text-lg hover:text-[#7390a3]'>
                <MdEmail className='mr-3 inline text-2xl' />
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
