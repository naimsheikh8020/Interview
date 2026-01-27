import React, { useEffect, useState } from 'react'
import './DigitalClock.css'
const DigitalClock = () => {
  const [count, setCount] = useState(0)
  const date = new Date();
  useEffect(()=>{
    setInterval(()=>{
      setCount(prevCount => prevCount + 1)
    },1000)
  })
  return (
    <div>{date.toLocaleTimeString()}</div>
  )
}

export default DigitalClock