import React,{useState,useEffect} from 'react'
import axios from "axios"

function App() {
  const[todos,setTodos] = useState([])
  const[rowsPerPage,setRowsPerPage] = useState(10)
  const[currentPage,setCurrentPage] = useState(1)

  const numberOfPages = Math.ceil(todos.length/rowsPerPage)
  
  const pages = [...Array(numberOfPages+1).keys()].slice(1)

  const indexOfLastTodo = currentPage * rowsPerPage
  const indexOfFirstTodo = indexOfLastTodo - rowsPerPage

  useEffect(()=>{
    getData()
  },[])

  function getData(){
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res)=>setTodos(res.data)).catch((err)=>console.log(err))
  }

  function prevPageHandler(){
    if(currentPage!==1) setCurrentPage(currentPage-1)
  }

  function nextPageHandler(){
    if(currentPage!==numberOfPages) setCurrentPage(currentPage+1)
  }

  return (
    <div>
    {todos.slice(indexOfFirstTodo,indexOfLastTodo).map((todo)=>{
   return(
    <div>
    <p>{todo.title}</p>
    </div>
   )
    })}

    {/*Pagination */}
    <div>
    <span onClick={prevPageHandler}>Prev</span>
    <p>
    {pages.map((page)=>{
      return(
      <span key={page} onClick={()=>setCurrentPage(page)}>{` ${page} |`}</span>
      )
    })}
    </p>
  <span onClick={nextPageHandler}>Next</span>
  </div>
    </div>
  )
}

export default App
