import { useEffect, useState } from 'react'

interface IContactInputProps {
  feild: string
  setFormFeild: (feild: string, value: string) => void
  label: string
  required?: boolean
  value: string
}

const ContactInput: React.FunctionComponent<IContactInputProps> = ({
  feild,
  setFormFeild,
  label,
  required,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const focusHandler = () => {
    setIsFocused(!isFocused)
    value.length > 0 && setIsFocused(true)
  }

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  useEffect(() => {
    setFormFeild && setFormFeild(feild, inputValue)
  }, [inputValue])

  return (
    <div className='relative mb-5 mr-10 w-full'>
      <div
        className={`absolute transition ease-in-out ${isFocused && '-translate-x-[10%] -translate-y-[3%] scale-75 text-[#7390a3]'} `}
      >
        <label className='ml-2'>{label}</label>
      </div>
      <div className='w-full'>
        <input
          type='text'
          className='z-10 w-full border border-[#7390a3] bg-[#262338] pl-2 pt-5'
          onFocus={focusHandler}
          onBlur={focusHandler}
          onChange={changeHandler}
          value={value}
          required={required}
        />
      </div>
    </div>
  )
}

export default ContactInput
