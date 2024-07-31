import React, { useEffect, useState } from 'react'
import Post from "./post.json"

function App() {

  const rows = 5

  const [post, setPost] = useState([...Post.slice(0,5)])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    setPost([...Post.slice(0,page*rows)])
  },[page])

  const handlescroll = () => {
    
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
      setPage(prev=>prev+1)
    }
  }

  useEffect(()=>{
    window.addEventListener('scroll',handlescroll)
// prevent the memory leak by removing the listener on component unmount 
return () => {
    window.removeEventListener('scroll', handlescroll);
  };
  },[])

  return (
    <>
      <section>
        {
          post.map((val,index)=>{
            return (
              <section className='center' key={index}>
                <h1>{val.name} {index}</h1>
                <img src={val.dp} alt={val.name} />
                <p>{val.description}</p>
              </section>
            )
          })
        }
      </section>
    </>
  )
}

export default App
