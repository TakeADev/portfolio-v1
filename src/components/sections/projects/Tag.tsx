import { useContext } from 'react'

import { FaTag } from 'react-icons/fa'

import { TagsContext } from '../../../contexts/TagsContext'

interface ITagProps {
  tagValue: string
  isActive: boolean
}

const Tag: React.FunctionComponent<ITagProps> = ({ tagValue, isActive }) => {
  const { activeTags, setActiveTags, inactiveTags, setInactiveTags } = useContext(TagsContext)

  const toggleTag = (clickedTag: string) => {
    if (inactiveTags.includes(clickedTag)) {
      setInactiveTags(
        inactiveTags.filter((tag) => {
          return tag !== clickedTag
        })
      )
      setActiveTags([...activeTags, clickedTag])
    }
    if (activeTags.includes(clickedTag)) {
      setActiveTags(
        activeTags.filter((tag) => {
          return tag !== clickedTag
        })
      )
      setInactiveTags([clickedTag, ...inactiveTags])
    }
  }

  const tagClickHandler = () => {
    toggleTag(tagValue)
  }

  return (
    <div
      className={`${isActive ? 'bg-[#C5A9BE]' : 'bg-[#7390A3]'} mt-2 rounded-lg pl-2 pr-3 grow-on-hover hover:cursor-pointer mr-3 md:text-lg`}
      onClick={tagClickHandler}
    >
      <FaTag className='inline mr-2 p-0.5' />
      <span>{tagValue}</span>
    </div>
  )
}

export default Tag
