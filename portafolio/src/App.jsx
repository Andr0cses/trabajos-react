import React from 'react'
import AboutMe from './components/AboutMe'
import Home from './components/Home'

/*Componentes Nuevos*/
import NavBar from './components/NavBar'
import SocialLinks from './components/SocialLinks'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <AboutMe />

      <SocialLinks/>
    </div>
  )
}
export default App