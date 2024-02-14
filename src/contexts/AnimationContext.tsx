import { useState, createContext, Dispatch, SetStateAction } from 'react'

interface IAnimationContext {
  typeAnimationIsPlaying: boolean
  setTypeAnimationIsPlaying: Dispatch<SetStateAction<boolean>>
}

export const AnimationContext = createContext<IAnimationContext>({
  typeAnimationIsPlaying: true,
  setTypeAnimationIsPlaying: () => {},
})

const AnimationProvider = ({ children }) => {
  const [typeAnimationIsPlaying, setTypeAnimationIsPlaying] = useState(true)
  return (
    <AnimationContext.Provider value={{ typeAnimationIsPlaying, setTypeAnimationIsPlaying }}>
      {children}
    </AnimationContext.Provider>
  )
}

export default AnimationProvider
