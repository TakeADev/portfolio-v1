import { useState, createContext, Dispatch, SetStateAction, useEffect } from 'react'

interface ITagsContext {
  activeTags: Array<string>
  setActiveTags: Dispatch<SetStateAction<string[]>>
  inactiveTags: Array<string>
  setInactiveTags: Dispatch<SetStateAction<string[]>>
  isTagMatch: boolean
  setIsTagMatch: Dispatch<SetStateAction<boolean>>
}

interface ITagsContextProviderProps {
  children: React.ReactNode
}

export const TagsContext = createContext<ITagsContext>({
  activeTags: [],
  setActiveTags: () => {},
  inactiveTags: [],
  setInactiveTags: () => {},
  isTagMatch: false,
  setIsTagMatch: () => {},
})

const defaultTags = [
  'front-end',
  'full-stack',
  'typescript',
  'javascript',
  'react',
  'tailwindcss',
  'bootstrap',
  'firebase',
  'express',
  'mongodb',
  'jquery',
  'styled-components',
  'api',
]

const TagsContextProvider: React.FunctionComponent<ITagsContextProviderProps> = ({ children }) => {
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [inactiveTags, setInactiveTags] = useState<string[]>([])
  const [isTagMatch, setIsTagMatch] = useState(false)

  useEffect(() => {
    setInactiveTags(defaultTags)
  }, [])

  return (
    <TagsContext.Provider
      value={{
        activeTags,
        setActiveTags,
        inactiveTags,
        setInactiveTags,
        isTagMatch,
        setIsTagMatch,
      }}
    >
      {children}
    </TagsContext.Provider>
  )
}

export default TagsContextProvider
