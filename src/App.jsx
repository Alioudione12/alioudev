// Desc: This is the main component of the application
import Contact from './components/Contact'
import Education from './components/Education'
import Main from './components/Main'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Work from './components/Work'

function App() {

  return (
    <div className='bg-neutral-100'>
      <Sidenav />
      <Main />
      <Work />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
