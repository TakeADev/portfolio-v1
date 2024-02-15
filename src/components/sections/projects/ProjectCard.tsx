import { FunctionComponent } from 'react'

import { Link } from 'react-router-dom'

import { FaGithub } from 'react-icons/fa'
import { MdPreview } from 'react-icons/md'

import '../../../animations/animations.css'

interface IProjectCardProps {
  title: string
  imgSrc: string
  imgAlt: string
  linkToCode: string
  linkToPreview: string
}

const ProjectCard: FunctionComponent<IProjectCardProps> = ({
  title,
  imgSrc,
  imgAlt,
  linkToCode,
  linkToPreview,
}) => {
  return (
    <div className='flex flex-col w-4/5 lg:w-1/2 bg-black bg-opacity-30 border border-[#7390A3] mx-auto'>
      <div className='w-full text-center mt-5'>
        <h3 className='text-2xl'>{title}</h3>
      </div>
      <img
        src={imgSrc}
        alt={imgAlt}
        className='mx-auto object-cover w-3/4 mt-5 h-[500px] object-top'
      />
      <Link to={linkToCode} target='_blank' className='text-center w-1/2 mx-auto'>
        <button className='bg-[#7390A3] w-full mx-auto rounded-lg py-1 mt-5 text-lg grow-on-hover'>
          <FaGithub className='inline -mt-1' /> Code
        </button>
      </Link>
      <Link to={linkToPreview} className='text-center w-1/2 mx-auto' target='_blank'>
        <button className='bg-[#C5A9BE] w-full mx-auto rounded-lg py-1 mt-5 mb-5 text-lg grow-on-hover'>
          <MdPreview className='inline -mt-1' /> Preview
        </button>
      </Link>
    </div>
  )
}

export default ProjectCard
