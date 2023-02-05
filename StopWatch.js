import React,{useState,useEffect,useRef} from 'react'

function StopWatch() {
    const [time,setTime] = useState(0)
    let id = useRef()

    useEffect(()=>{
        return ()=>clearInterval(id.current)
    },[])

   
    function handleTime(){
        id.current= setInterval(()=>{
            setTime((prev)=>prev+1)
        },1000)
    }

  return (
    <div style={{color:"white",marginLeft:"-90%"}}>
    <h1>{time}</h1>
    <button onClick={()=>handleTime()}>Start</button>
    <button onClick={()=>clearInterval(id.current)}>Pause</button>
    <button onClick={()=>{
        clearInterval(id.current)
        setTime(0)
    }}>Reset</button>
    </div>
  )
}

export default StopWatch
