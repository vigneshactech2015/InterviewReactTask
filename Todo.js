import { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([{ name: "" }]);
  const [idx, setIdx] = useState(null);

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    const item = {
      value: search,
      id: Math.floor(Math.random() * 1000)
    };
    setItems((prev) => [...prev, item]);
    setSearch("");
  }

  function deleteHandler(id) {
    let filteredItem = items.filter((item) => item.id !== id);
    setItems(filteredItem);
  }

  function editHandler(ite, i) {
    setSearch(ite.value);
    setIdx(i);
  }
  function editSubmit(e) {
    e.preventDefault();
    const copy = [...items];
    copy[idx]["value"] = search;
    setItems(copy);
    setSearch("");
    setIdx(null);
  }

  return (
    <div className="App">
      <input type="text" value={search} onChange={searchHandler} />
      {idx === null ? (
        <button type="submit" onClick={(e) => submitHandler(e)}>
          Add
        </button>
      ) : (
        <button type="submit" onClick={(e) => editSubmit(e)}>
          Edit
        </button>
      )}
      {items.map((item, index) => {
        return (
          <li key={item.id}>
            {item.value} <span onClick={() => deleteHandler(item.id)}>X</span>
            &nbsp;&nbsp;{" "}
            <span onClick={() => editHandler(item, index)}>Edit</span>
          </li>
        );
      })}
    </div>
  );
}

