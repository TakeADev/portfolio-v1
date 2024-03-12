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
        className={`fade-in-fast mx-auto flex w-full flex-col border-b border-t border-[#7390A3] bg-black bg-opacity-30 px-5 lg:mb-8 lg:grid lg:grid-cols-2 lg:items-center lg:border lg:py-28`}
      >
        <div className='mx-auto mt-0 flex w-full '>
          <div className='lg:mr-10'>
            <h3 className='my-5 text-4xl lg:mb-16 lg:text-5xl'>{title}</h3>
            <p className='mb-10 lg:mb-0 lg:text-lg lg:leading-tight'>{desc}</p>
          </div>
        </div>
        <div className='lg:ml-10'>
          <div className='mb-3 flex w-full'>
            <Link to={linkToPreview} target='_blank'>
              <img
                src={imgSrc}
                alt={imgAlt}
                className=' top-0 w-full rounded-md border border-[#7390A3] object-cover'
              />
            </Link>
          </div>
          <div className='-mt-2 mb-10 flex w-full flex-wrap pr-8 text-black'>
            {projectTags &&
              projectTags.map((tag: string) => {
                const isActive = activeTags.find((foundTag) => tag === foundTag) ? true : false
                return <Tag tagValue={tag} isActive={isActive} key={tag} />
              })}
          </div>
          <div className='grid grid-cols-2'>
            <Link to={linkToCode} className='w-11/12 text-xl md:text-2xl ' target='_blank'>
              <div className='grow-on-hover mx-auto mb-6 w-full rounded-lg bg-[#C5A9BE] py-2 text-center text-[#262338]'>
                <FaGithub className='-mt-1 mr-2 inline' />
                <span className=''>Code</span>
              </div>
            </Link>
            <Link
              to={linkToPreview}
              className='ml-auto w-11/12 text-xl md:text-2xl'
              target='_blank'
            >
              <div className='grow-on-hover mx-auto mb-6 w-full rounded-lg bg-[#A8DB94] py-2 text-center text-[#262338]'>
                <MdPreview className='-mt-1 mr-2 inline' />
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
