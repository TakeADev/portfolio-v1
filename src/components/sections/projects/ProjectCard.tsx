import { FunctionComponent } from 'react'

import { Link } from 'react-router-dom'

import { FaGithub } from 'react-icons/fa'
import { MdPreview } from 'react-icons/md'

import '../../../animations/animations.css'

interface IProjectCardProps {
  title: string
  desc: string
  imgSrc: string
  imgAlt: string
  linkToCode: string
  linkToPreview: string
}

const ProjectCard: FunctionComponent<IProjectCardProps> = ({
  title,
  desc,
  imgSrc,
  imgAlt,
  linkToCode,
  linkToPreview,
}) => {
  // TODO: Impliment tags. Each product is tagged with technologies. User able to filter by tag
  return (
    <div className='w-full lg:w-3/4 flex flex-col mx-auto bg-black bg-opacity-30 border border-[#7390A3]'>
      <div className='flex w-full mx-auto'>
        <div>
          <h2 className='text-4xl my-5'>{title}</h2>
          <p className='text-lg'>{desc}</p>
        </div>
      </div>
      <div className='flex w-full p-10'>
        <img
          src={imgSrc}
          className=' top-0 w-full object-cover border border-[#7390A3] rounded-md'
        />
      </div>
      <div>
        <div className='w-1/2 text-[#262338] mx-auto text-center py-2 mb-10 rounded-lg bg-[#C5A9BE]'>
          <Link to={linkToCode} className='text-3xl' target='_blank'>
            <FaGithub className='inline mr-5 -mt-1' />
            <span className=''>Code</span>
          </Link>
        </div>
        <div className='w-1/2 text-[#262338] mx-auto text-center py-2 mb-10 rounded-lg bg-[#A8DB94]'>
          <Link to={linkToPreview} className='text-3xl' target='_blank'>
            <MdPreview className='inline mr-5 -mt-1' />
            <span className=''>Preview</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
