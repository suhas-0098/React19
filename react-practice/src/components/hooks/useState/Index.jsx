import { useState } from "react";
import "./Index.css";

export const Index = ()=>{
  const [value,setValue]=useState(0);
  const handleIncrement = () =>{
    setValue(value+1)
  }
  return <>
   <div className="container state-container" style={{textAlign:"center"}}>
    <h1>Hello from index.jsx useState</h1>
    <br />
    <p>
    {value}
    </p>
    <button onClick={handleIncrement}>Increment</button>

   </div>
  </>
}