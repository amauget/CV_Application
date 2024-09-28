import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Heading from './components/Heading.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import References from './components/References.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Heading />
    
    <div className='sideBar'>
      <Skills></Skills>
      <Education></Education>
    </div> */}
    <References></References>
    {/* <App /> */}
  </StrictMode>,
)
