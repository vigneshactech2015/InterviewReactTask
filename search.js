import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [items, setItems] = useState([]);
  const [search,setSearch] = useState("")
  const[isSearching,setIsSearch] = useState(false)
  const[displaySearch,setDisplaySearch] = useState()

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setItems(res.data));
  }

  function onSearchHandler (e){
   setIsSearch(true)
   setSearch(e.target.value)
  }

  function onSubmitHandler (e){
      e.preventDefault()
    //setDisplaySearch(items.filter((res)=>res?.title.includes(search)))
      setDisplaySearch(items.filter((res)=>res?.title==search))
  }
  return (
    <div>
      <div className="main-container">
      <input type="text" className="search-textfield" onChange={onSearchHandler} value={search} placeholder="Please Enter something to search"/>
      <button type="submit" onClick={onSubmitHandler}>Search</button>
        {!isSearching && items?.map((item) => {
          return (
            <div className="container">
              <input
                className="container_checkbox"
                type="checkbox"
                defaultChecked={item.completed}
              />
              <span className="container_title" key={item.id}>
                {item.title}
              </span>
            </div>
          );
        })}
       
      </div>
      {isSearching &&
      <div>
      {displaySearch?.map((titl)=>{
        return(
          <p>{titl.title}</p>
        )
      })}
    </div>}
    </div>
  );
}

export default App;
