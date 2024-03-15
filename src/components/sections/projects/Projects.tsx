import { useContext } from 'react'

import { AnimationContext } from '../../../contexts/AnimationContext'

import ProjectCard from './ProjectCard'
import Tag from './Tag'

import portfolioScreenshot from '../../../assets/Screenshot 2024-03-15 110604.png'
import mnuscScreenshot from '../../../assets/Screenshot 2024-02-19 064023.png'
import blogZoneScreenshot from '../../../assets/Screenshot 2024-02-19 064133.png'
import crwnClotingScreenshot from '../../../assets/Screenshot 2024-02-22 115353.png'
import forYouNewsScreenshot from '../../../assets/Screenshot 2024-02-22 120624.png'
import { TagsContext } from '../../../contexts/TagsContext'

const Projects = () => {
  const { typeAnimationIsPlaying } = useContext(AnimationContext)
  const { activeTags, inactiveTags } = useContext(TagsContext)

  return (
    !typeAnimationIsPlaying && (
      <>
        <h2 className='mb-16 text-center text-4xl'>Projects</h2>
        <div className='mx-auto w-full lg:w-3/4 2xl:w-3/5'>
          <div className='mb-10 flex w-full flex-wrap justify-start px-5 text-black'>
            {activeTags.map((tag) => (
              <Tag tagValue={tag} isActive={true} key={tag} />
            ))}
            {inactiveTags.map((tag) => (
              <Tag tagValue={tag} isActive={false} key={tag} />
            ))}
          </div>
        </div>
        <div className='mx-auto w-full lg:w-3/4 2xl:w-3/5'>
          <ProjectCard
            title='Portfolio'
            desc='Personal portfolio website showcasing various projects and contact information. Features a sleek design with full mobile responsiveness, custom animations, a custom tag/filter feature for the projects section, and a contact form.'
            projectTags={['full-stack', 'typescript', 'react', 'tailwindcss', 'express']}
            imgSrc={portfolioScreenshot}
            imgAlt='Portfolio Website Screenshot'
            linkToCode='https://github.com/TakeADev/portfolio-v1'
            linkToPreview='/'
          />
          <ProjectCard
            title='MNUFC Social Club'
            desc='A social media platform dedicated to fans of Minnesota United Football Club. Users can create a profile, upload images, create posts, and interact with other users through comments, likes, and reposts.'
            projectTags={['front-end', 'typescript', 'react', 'tailwindcss', 'firebase']}
            imgSrc={mnuscScreenshot}
            imgAlt='Minnesota United Social Club Screenshot'
            linkToCode='https://github.com/TakeADev/mnufc?tab=readme-ov-file'
            linkToPreview='https://minnesotaunitedsocialclub.onrender.com'
          />

          <ProjectCard
            title='Blog Zone'
            desc='A blog website for users to create and comment on blog posts. Users can use HTML to format their articles and categorize them by different genres.'
            projectTags={['full-stack', 'javascript', 'bootstrap', 'express', 'mongodb', 'jquery']}
            imgSrc={blogZoneScreenshot}
            imgAlt='Blog Zone Screenshot'
            linkToCode='https://github.com/TakeADev/blog-app'
            linkToPreview='https://blogzone.onrender.com'
          />
          <ProjectCard
            title='CRWN Clothing'
            desc='A demo eCommerce website. Complete with products, categories, and a shopping cart where users can add products and modify product quantities. Users can authenticate with email/password or using Google.'
            projectTags={['front-end', 'javascript', 'react', 'styled-components', 'firebase']}
            imgSrc={crwnClotingScreenshot}
            imgAlt='CRWN Clothing Screenshot'
            linkToCode='https://https://github.com/TakeADev/crwn-clothing'
            linkToPreview='http://takeacrwn.netlify.app'
          />

          <ProjectCard
            title='For You News'
            desc='A news article collection website leveraging NewsAPI. Users will see the latest top articles around the web on the home page. Users can also filter news articles based on categories and search for articles using the search box.'
            projectTags={['full-stack', 'javascript', 'api', 'tailwindcss', 'express']}
            imgSrc={forYouNewsScreenshot}
            imgAlt='For You News Screenshot'
            linkToCode='https://github.com/TakeADev/foryounews'
            linkToPreview='https://for-you-news.onrender.com'
          />
        </div>
      </>
    )
  )
}

export default Projects
