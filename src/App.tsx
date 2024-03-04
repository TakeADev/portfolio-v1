import { BrowserRouter as Router } from 'react-router-dom'

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
          <About />
          <Projects />
          <Contact />
        </TagsContextProvider>
      </AnimationContextProvider>
    </Router>
  )
}

export default App
