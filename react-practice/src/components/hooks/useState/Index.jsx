import { useState } from "react";
import "./Index.css";

export const Index = ()=>{
  const [value,setValue]=useState(0);
  const [inputValue,setinputValue] = useState(1);
  const handleIncrement = (inputValue) =>{
    setValue(value+Number(inputValue));
  }
  const handleDecrement = (inputValue) =>{
   setValue(value-inputValue);
  }
  const handleReset =  () =>{
    setValue(0)
    setinputValue(1)
  }
  const handleOnChange = (stepValue) =>{
    setinputValue(stepValue)
  }
  return <>
   <div className="container state-container" style={{textAlign:"center"}}>
    <h1>Hello from index.jsx useState</h1>
    <br />
    <p>
    {value}
    </p>
     <div>
      <label htmlFor="step">step : </label>
      <input type="number" value={inputValue} onChange={(e)=>handleOnChange(e.target.value)} />
     </div>
    <button onClick={()=>handleIncrement(inputValue)} disabled={value>=100}>Increment</button>
    <button onClick={()=>handleDecrement(inputValue)}disabled={value<=0}>Decrement</button>
    <button onClick={handleReset}>Reset</button>

   </div>
  </>
}