import { useState } from "react";

export default function Form() {
  const [value, setvalue] = useState("0");

  return (
    <>
      <h1>COUNTER</h1>
      <h1 onChange={(e) => setvalue(e.target.value)}>{value}</h1>
      <button className="btn1" onClick={() => setvalue(value + 1)}>+</button>
      <button className="btn2" onClick={() => setvalue(0)}>reset</button>

      <button className="btn3" onClick={() => setvalue(value - 1)}>-</button>
    </>
  );
}
