import React,{useState} from 'react'

function Timer() {
    const[time,setTime] = useState({ms:0,s:0,m:0,h:0})
   const[inter,setInter] = useState()
    var updatedms = time.ms,updateds = time.s,updatedm = time.m,updatedh = time.h
    function startHandler(){
        run()
        setInter(setInterval(run,10))
    }

    function run(){
        if(updatedm == 60){
            updatedm = 0
            updatedh++
        }
        if(updateds == 60){
            updatedm++
            updateds = 0
        }
        if(updatedms == 100){
            updatedms = 0;
            updateds++
        }
        updatedms++
        setTime({ms:updatedms,s:updateds,m:updatedm,h:updatedh})
    }

    function pauseHandler (){
      clearInterval(inter)
    }

    function resetHandler(){
        clearInterval(inter)
        setTime({ms:0,s:0,m:0,h:0})
    }
  return (
    <div>
    <div>
    {time.h>=10?time.h:"0"+time.h} : {time.m>=10?time.m:"0"+time.m} : {time.s>=10?time.s:"0"+time.s} : {time.ms>=10?time.ms:"0"+time.ms}
    </div>
    <button onClick={startHandler}>Start</button>
    <button onClick={pauseHandler}>Pause</button>
    <button onClick={resetHandler}>Reset</button>
    </div>
  )
}

export default Timer
