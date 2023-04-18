import React,{useState} from 'react'
import explorer from "./data"
import Explorer from './Explorer'
import "./App.css";

function App() {
  const[explorerData,setExplorerData] = useState(explorer)
  
  return (
    <div>
    <Explorer explorer={explorerData}/>  
    </div>
  )
}

export default App