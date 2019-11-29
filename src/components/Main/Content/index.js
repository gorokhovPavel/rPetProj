import React, { useState, useEffect } from 'react'
import './style.css'

function Content() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `${count} times`
  }, [count])
  return (
    <div className="content">
      <button onClick={() => setCount(count + 1)}>Click</button>
      <div>{count}</div>
    </div>
  )
}

export default Content
