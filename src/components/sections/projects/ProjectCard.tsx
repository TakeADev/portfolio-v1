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
        className={`w-full flex flex-col mx-auto lg:mb-8 bg-black bg-opacity-30 border-t border-b lg:border border-[#7390A3] fade-in-fast lg:grid lg:grid-cols-2 lg:items-center lg:py-28 px-5`}
      >
        <div className='flex w-full mx-auto mt-0 '>
          <div className='lg:mr-10'>
            <h2 className='text-4xl lg:text-5xl my-5 lg:mb-16'>{title}</h2>
            <p className='lg:text-lg lg:leading-tight mb-10 lg:mb-0'>{desc}</p>
          </div>
        </div>
        <div className='lg:ml-10'>
          <div className='flex w-full mb-3'>
            <Link to={linkToPreview} target='_blank'>
              <img
                src={imgSrc}
                alt={imgAlt}
                className=' top-0 w-full object-cover border border-[#7390A3] rounded-md'
              />
            </Link>
          </div>
          <div className='w-full flex flex-wrap -mt-2 mb-10 text-black pr-8'>
            {projectTags &&
              projectTags.map((tag: string) => {
                const isActive = activeTags.find((foundTag) => tag === foundTag) ? true : false
                return <Tag tagValue={tag} isActive={isActive} key={tag} />
              })}
          </div>
          <div className='grid grid-cols-2'>
            <Link to={linkToCode} className='text-xl md:text-2xl w-11/12 ' target='_blank'>
              <div className='w-full text-[#262338] mx-auto text-center py-2 mb-6 rounded-lg bg-[#C5A9BE] grow-on-hover'>
                <FaGithub className='inline mr-2 -mt-1' />
                <span className=''>Code</span>
              </div>
            </Link>
            <Link
              to={linkToPreview}
              className='text-xl md:text-2xl w-11/12 ml-auto'
              target='_blank'
            >
              <div className='w-full text-[#262338] mx-auto text-center py-2 mb-6 rounded-lg bg-[#A8DB94] grow-on-hover'>
                <MdPreview className='inline mr-2 -mt-1' />
                <span className=''>Preview</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  )
}

export default ProjectCard
