import React, { useEffect, useState } from 'react'

const Time = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
      let intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
    
      return () => clearInterval(intervalId)
    }, [])
    
  return (
    <>
    <p>Время: {time.toLocaleTimeString()}</p>
    </>
  )
}

export default Time;