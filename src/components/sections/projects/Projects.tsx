import { useContext } from 'react'

import { AnimationContext } from '../../../contexts/AnimationContext'

import ProjectCard from './ProjectCard'
import Tag from './Tag'

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
        <h1 className='text-4xl text-center mb-16'>Projects</h1>
        <div className='w-full'>
          <div className='w-11/12 flex flex-wrap mb-10 text-black ml-12 '>
            {activeTags.map((tag) => (
              <Tag tagValue={tag} isActive={true} key={tag} />
            ))}
            {inactiveTags.map((tag) => (
              <Tag tagValue={tag} isActive={false} key={tag} />
            ))}
          </div>
        </div>
        <div className='w-11/12 mx-auto grid grid-cols-1 gap-4 lg:grid-cols-2'>
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
