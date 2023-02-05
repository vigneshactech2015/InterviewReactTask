import { useState } from "react";
export default function MyCalculator() {
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClear = () => {
    setResult("");
  };

  const handleResult = () => {
    setResult(eval(result).toString());
  };
  return (
    <div className="App">
      <form>
        <input type="text" value={result} />
      </form>
      <div className="container">
        <div>
        <button name="9" onClick={handleChange}>
          9
        </button>
        <button name="8" onClick={handleChange}>
          8
        </button>
        <button name="7" onClick={handleChange}>
          7
        </button>
        </div>
        <div>
        <button name="6" onClick={handleChange}>
          6
        </button>
        <button name="5" onClick={handleChange}>
          5
        </button>
        <button name="4" onClick={handleChange}>
          4
        </button>
        </div>
        <div>
        <button name="3" onClick={handleChange}>
          3
        </button>
        <button name="2" onClick={handleChange}>
          2
        </button>
        <button name="1" onClick={handleChange}>
          1
        </button>
        </div>
        <div>
        <button name="0" onClick={handleChange}>
          0
        </button>
        <button name="+" onClick={handleChange}>
          +
        </button>
        <button name="-" onClick={handleChange}>
          -
        </button>
        </div>
        <div>
        <button name="*" onClick={handleChange}>
          *
        </button>
        <button name="/" onClick={handleChange}>
          /
        </button>
        <button name="=" onClick={handleResult}>
          =
        </button>
        </div>
        <button name="clear" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}
