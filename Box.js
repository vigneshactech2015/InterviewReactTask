import { useState, useEffect } from "react";

export default function Box() {
  const [squares, setSquares] = useState(Array(60).fill("black"));

  useEffect(() => {
    let randomIndex=-1
    const interval = setInterval(() => {
      // make one black square white
      //const randomIndex = Math.floor(Math.random() * 60);
      randomIndex ++ 
      setSquares(prevSquares => {
        const newSquares = [...prevSquares];
        newSquares[randomIndex] = "white";
        return newSquares;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // turn all squares back to black
      setSquares(Array(60).fill("black"));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {squares.map((color, i) => (
        <div
          key={i}
          style={{
            backgroundColor: color,
            width: "120px",
            height: "60px",
            display: "inline-block",
            margin: "3px",
          }}
        ></div>
      ))}
    </div>
  );
}
