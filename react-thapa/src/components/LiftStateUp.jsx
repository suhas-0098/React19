import { useState } from "react";

export const LiftStateUp = () =>{
const [inputValue,setInputValue] = useState("");
 
  return(
    <>
     <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
     <DisplayComponent inputValue={inputValue}  />
    </>
  )
};

const InputComponent = ({inputValue,setInputValue}) =>{
  
  return (
    <>
    <input type="text" placeholder="enter your name" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
    </>
  )

}

const DisplayComponent = ({inputValue}) =>{

  return(
    <>
     <h1>The current input value is : {inputValue} </h1>
    </>
  )

}