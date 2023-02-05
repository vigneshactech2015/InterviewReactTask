import React,{useState,useEffect} from 'react'

function DigitalClock() {
  const [time,setTime] = useState()

  useEffect(()=>{
    setInterval(()=>{
        let date = new Date()
        setTime(date.toLocaleTimeString())
    },1000)
  },[])
  return (
    <div>
    <h1>{time}</h1>
    </div>
  )
}

export default DigitalClock
