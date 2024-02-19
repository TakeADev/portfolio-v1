import { useContext } from 'react'

import { AnimationContext } from '../../../contexts/AnimationContext'

import ProjectCard from './ProjectCard'

import mnuscScreenshot from '../../../assets/Screenshot 2024-02-19 064023.png'
import blogZoneScreenshot from '../../../assets/Screenshot 2024-02-19 064133.png'

const Projects = () => {
  const { typeAnimationIsPlaying } = useContext(AnimationContext)

  return (
    !typeAnimationIsPlaying && (
      <>
        <h1 className='text-4xl text-center mb-16'>Projects</h1>
        <ProjectCard
          title='MNUFC Social Club'
          desc='A social media platform dedicated to fans of Minnesota United Football Club. Users can create a profile, upload images, create posts, and interact with other users through comments, likes, and reposts.'
          imgSrc={mnuscScreenshot}
          imgAlt='Minnesota United Social Club Screenshot'
          linkToCode='https://github.com/TakeADev/mnufc?tab=readme-ov-file'
          linkToPreview='https://minnesotaunitedsocialclub.onrender.com'
        />

        <ProjectCard
          title='Blog Zone'
          desc='Another projcet'
          imgSrc={blogZoneScreenshot}
          imgAlt='Blog Zone Screenshot'
          linkToCode='https://github.com/TakeADev/blog-app'
          linkToPreview='https://blogzone.onrender.com'
        />
      </>
    )
  )
}

export default Projects
