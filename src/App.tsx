import { BrowserRouter as Router } from 'react-router-dom'
import { Element } from 'react-scroll'

import AnimationContextProvider from './contexts/AnimationContext'
import TagsContextProvider from './contexts/TagsContext'

import Navigation from './components/nav/Navigation'
import Hero from './components/hero/Hero'
import About from './components/sections/about/About'
import Projects from './components/sections/projects/Projects'
import Contact from './components/sections/contact/Contact'

import './App.css'

function App() {
  return (
    <Router>
      <AnimationContextProvider>
        <TagsContextProvider>
          <Navigation />
          <Hero />
          <Element name='about'>
            <About />
          </Element>
          <Element name='projects'>
            <Projects />
          </Element>
          <Element name='contact'>
            <Contact />
          </Element>
        </TagsContextProvider>
      </AnimationContextProvider>
    </Router>
  )
}

export default App
