import largeImg from "./largeImage"
import tinyImg from "./tinyImage"

function App(){

  return(
  <ProgressiveImage
    src={largeImg}
    placeholder={tinyImg}
    height={"450"}
    width={"450"}
/>
  )
}

import {useState,useEffect} from "react"
function ProgressiveImage(props){
  const{src,placeholder,height,width} = props
  const [images,setImages] = useState(placeholder||src)
  
  const customClass = placeholder && images === placeholder ? "loading" : "loaded";
  
  useEffect(()=>{
    const img = new Image()
    img.src = src
    img.onload = () =>{
    setImages(src)
    }
  },[src])
  
  return(
    <img src={images} className={customClass} height={height} width={width}/>
}
  
  //css
  body{
  padding:10px;  
  }

.loading{
 filter:blur(10px) 
}

.loaded{
 filter:blur(0px);
  transition:filter 0.5s linear
}
