import { useState } from 'react'

import ContactInput from './ContactInput'

const Contact = () => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const focusHandler = () => {
    setIsFocused(!isFocused)
    inputValue.length > 0 && setIsFocused(true)
  }

  const changeHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setInputValue(e.currentTarget.value)
    console.log(inputValue)
  }
  return (
    <div className='w-full mb-48'>
      <div className='mx-auto w-11/12 text-lg '>
        <form className='w-full lg:w-3/4 mx-auto mt-40 bg-black bg-opacity-30 p-10 border border-[#7390a3]'>
          <h2 className='text-3xl mb-10'>Send Me an Email</h2>
          <div className='w-full flex flex-col lg:flex-row'>
            <ContactInput label='First Name (required)' required={true} />
            <ContactInput label='Last Name' />
          </div>
          <div className='w-full flex flex-col lg:flex-row'>
            <ContactInput label='Email Address (required)' required={true} />
            <ContactInput label='Phone Number' />
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
              onChange={changeHandler}
              value={inputValue}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
