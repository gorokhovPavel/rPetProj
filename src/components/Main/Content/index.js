import React, {useState} from 'react'
import './style.css'

function Content() {
  const [isDark, setDark] = useState(false);
  let menuArr = [ 
    'header', 'content', 'menu', 'sidebar', 'footer'
  ].map((item, index)=>(
    <div key={index} className = {item} >
      <h3>
        {item}
      </h3>
    </div>
  ));

  return (
    <>
      <div className='gridContainer' >
        {menuArr}
      </div>
    </>
  )
}

export default Content;