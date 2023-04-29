//custom hooks return value(not jsx)

import Chat from "./Chat"
export default function App(){

return(
  <div>
  <Chat/>
  </div>
  )
}

import useOnline from "./useOnline"
export default function Chat(){
const isOnline = useOnline(3000)
return isOnline ? "User is online" : "User is offline"
}

import {useState,useEffect} from "react"

export default function useOnline(delay){
const[online,setOnline] = useState(false)
useEffect(()=>{
 
 setTimeout(()=>{
 setOnline(true)
 },delay)
 
},[])


return online
}
