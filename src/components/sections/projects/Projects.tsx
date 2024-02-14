import ProjectCard from './ProjectCard'
import mnuscScreenshot from '../../../assets/Screenshot 2024-02-05 120853.png'

const Projects = () => {
  return (
    <>
      <h1 className='text-3xl text-center mb-10'>Projects</h1>
      <div className='flex'>
        <ProjectCard
          title='MNUFC Social Club'
          imgSrc={mnuscScreenshot}
          imgAlt='Minnesota United Social Club Screenshot'
          linkToCode='https://github.com/TakeADev/mnufc?tab=readme-ov-file'
          linkToPreview='https://minnesotaunitedsocialclub.onrender.com'
        />
      </div>
    </>
  )
}

export default Projects
