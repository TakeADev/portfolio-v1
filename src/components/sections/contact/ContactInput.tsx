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
          value={value}
          required={required}
        />
      </div>
    </div>
  )
}

export default ContactInput
