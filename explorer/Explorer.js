import React,{useState} from 'react'

function Explorer({explorer}) {
  const[expand , setExpand] = useState(false)

  if(explorer.isFolder){
  return (
    <div style={{marginTop:5}}>

    <div className="folder" onClick={()=>setExpand(!expand)}>
    {/** windows key and semicolon to display emoji */}
    <span>📁{explorer.name}</span>
    </div>

    <div style={{display:expand?"block":"none"}}>
    {explorer.items.map((exp)=>{
        return <Explorer explorer={exp} key={exp.id}/>
    })}
    </div>
    
    </div>
  )
  } else {
    return <span className="file">🗃️{explorer.name}</span>
  }
}

export default Explorer