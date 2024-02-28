import { FunctionComponent, useContext } from 'react'

import { Link } from 'react-router-dom'

import { FaGithub } from 'react-icons/fa'
import { MdPreview } from 'react-icons/md'

import { TagsContext } from '../../../contexts/TagsContext'

import Tag from './Tag'

import '../../../animations/animations.css'

interface IProjectCardProps {
  title: string
  desc: string
  projectTags: Array<string>
  imgSrc: string
  imgAlt: string
  linkToCode: string
  linkToPreview: string
  addedClasses?: string
}

const ProjectCard: FunctionComponent<IProjectCardProps> = ({
  title,
  desc,
  projectTags,
  imgSrc,
  imgAlt,
  linkToCode,
  linkToPreview,
}) => {
  const { activeTags } = useContext(TagsContext)

  const checkTags = (active: string[], project: string[]) => {
    if (active.length < 1) return true
    type TagMapValue = {
      [key: string]: string
    }
    const projectTagMap: TagMapValue = {}

    for (const tag of project) {
      projectTagMap[tag] = tag
    }

    let hasTags = false

    for (const tag of active) {
      if (projectTagMap[tag]) {
        hasTags = true
      } else return (hasTags = false)
    }
    return hasTags
  }

  return (
    checkTags(activeTags, projectTags) && (
      <div
        className={`w-full flex flex-col mx-auto bg-black bg-opacity-30 border border-[#7390A3] fade-in-fast`}
      >
        <div className='flex w-full mx-auto mt-10'>
          <div className='mx-10'>
            <h2 className='text-4xl my-5'>{title}</h2>
            <p className='text-lg'>{desc}</p>
          </div>
        </div>
        <div className='flex w-full p-10'>
          <Link to={linkToPreview} target='_blank'>
            <img
              src={imgSrc}
              alt={imgAlt}
              className=' top-0 w-full object-cover border border-[#7390A3] rounded-md'
            />
          </Link>
        </div>
        <div className='w-full flex flex-wrap -mt-2 mb-10 text-black ml-8 pr-8'>
          {projectTags &&
            projectTags.map((tag: string) => {
              const isActive = activeTags.find((foundTag) => tag === foundTag) ? true : false
              return <Tag tagValue={tag} isActive={isActive} key={tag} />
            })}
        </div>
        <div>
          <div className='w-1/2 text-[#262338] mx-auto text-center py-2 mb-10 rounded-lg bg-[#C5A9BE] grow-on-hover'>
            <Link to={linkToCode} className='text-xl md:text-3xl w-1/2' target='_blank'>
              <FaGithub className='inline mr-5 -mt-1' />
              <span className=''>Code</span>
            </Link>
          </div>
          <div className='w-1/2 text-[#262338] mx-auto text-center py-2 mb-10 rounded-lg bg-[#A8DB94] grow-on-hover'>
            <Link to={linkToPreview} className='text-xl md:text-3xl' target='_blank'>
              <MdPreview className='inline mr-5 -mt-1' />
              <span className=''>Preview</span>
            </Link>
          </div>
        </div>
      </div>
    )
  )
}

export default ProjectCard
