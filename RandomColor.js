import React,{useState} from 'react'

function RandomColor() {
  const [count,setCount] = useState(0)

    function getRandomColor(){
        let colors = ["red","blue","green","yellow","orange"]
        let index = Math.floor(Math.random()*colors.length)
        return colors[index]
    }

    const Btstyle = {
        backgroundColor : getRandomColor(),
        color:"white",
        padding:"10px",
        borderRadius:"5px",
        fontWeight:"bold"
    }

    function clickHandler(){
        setCount(prevCount=>prevCount+3)
    }

  return (
    <div>
   <button style={Btstyle} onClick={clickHandler}>{count}</button>
    </div>
  )
}

export default RandomColor
