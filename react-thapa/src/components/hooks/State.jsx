import { useState } from "react"

export const State = () =>{

  const [value,setValue]=useState(0);

  const handleIncrement =()=>{
     setValue(()=>value+1);
  }
   const handleDecrement =()=>{
     setValue(()=>value-1);
  }

  return (
    <>
      <h1>{value}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}