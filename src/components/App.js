import React, {useState} from 'react'
import Content from '../components/Main/Content/index.js'
import Footer from '../components/Main/Footer/index.js'
import Header from '../components/Main/Header/index.js'

function App() {
  const [isExist, setExist] = useState(false);
  const footObj = {
    date: new Date().toLocaleTimeString(),
    name: 'rPetProj',
  }
  return (
    <>
      { isExist && <Header /> }
      <Content />
      { isExist && <Footer footerObj={footObj} /> }
    </>
  )
}

export default App
