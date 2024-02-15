import { useContext } from 'react'

import { AnimationContext } from '../../../contexts/AnimationContext'

import ProjectCard from './ProjectCard'

import mnuscScreenshot from '../../../assets/Screenshot 2024-02-05 120853.png'
import blogZoneScreenshot from '../../../assets/Screenshot 2024-02-14 121129.png'

const Projects = () => {
  const { typeAnimationIsPlaying } = useContext(AnimationContext)

  return (
    !typeAnimationIsPlaying && (
      <>
        <h1 className='text-4xl text-center mb-16'>Projects</h1>
        <div className='flex w-3/4 mx-auto'>
          <ProjectCard
            title='MNUFC Social Club'
            imgSrc={mnuscScreenshot}
            imgAlt='Minnesota United Social Club Screenshot'
            linkToCode='https://github.com/TakeADev/mnufc?tab=readme-ov-file'
            linkToPreview='https://minnesotaunitedsocialclub.onrender.com'
          />
          <ProjectCard
            title='Blog Zone'
            imgSrc={blogZoneScreenshot}
            imgAlt='Blog Zone Screenshot'
            linkToCode='https://github.com/TakeADev/blog-app'
            linkToPreview='https://blogzone.onrender.com'
          />
        </div>
      </>
    )
  )
}

export default Projects
