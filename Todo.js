import React,{useState} from 'react'

function Todo() {
    const [tasks,setTasks] = useState('')
    const [totalTasks,setTotalTasks] = useState([])


    const handleSubmit = (e) =>{
        if(!tasks){
            alert("Enter an item")
            return
        }
        const item={
            id:Math.floor(Math.random()*1000),
            value:tasks
        }
        setTotalTasks(oldList=>[...oldList,item])
        setTasks("")
    }

    function deleteItem (id){
        const newArray = totalTasks.filter((item)=>item.id!==id)
        setTotalTasks(newArray)
    }

  return (
    <div>
    <input type="text" onChange={(e)=>setTasks(e.target.value)} value={tasks}/>
    <button type="submit" onClick={()=>handleSubmit()}>Add</button>
   
    <ul>
    {totalTasks.map((item)=>{
        return(
            <li key={item.id}>{item.value} <button onClick={()=>deleteItem(item.id)}>D</button></li>
        )
    })}
    </ul>

    </div>
  )
}

export default Todo
