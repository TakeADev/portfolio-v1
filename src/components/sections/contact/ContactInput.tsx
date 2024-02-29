import { useState } from 'react'

interface IContactInputProps {
  label: string
  required?: boolean
}

const ContactInput: React.FunctionComponent<IContactInputProps> = ({ label, required }) => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const focusHandler = () => {
    setIsFocused(!isFocused)
    inputValue.length > 0 && setIsFocused(true)
  }

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <div className='w-full relative mb-5 mr-10'>
      <div
        className={`absolute transition ease-in-out ${isFocused && 'text-[#7390a3] -translate-y-[3%] -translate-x-[10%] scale-75'} `}
      >
        <label className='ml-2'>{label}</label>
      </div>
      <div className='w-full'>
        <input
          type='text'
          className='w-full bg-[#262338] border border-[#7390a3] pt-4 pl-2'
          onFocus={focusHandler}
          onBlur={focusHandler}
          onChange={changeHandler}
          value={inputValue}
          required={required}
        />
      </div>
    </div>
  )
}

export default ContactInput
