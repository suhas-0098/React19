import { useReducer } from "react"

export const Index = () =>{

  const reducer = (state,action) =>{

    if(action.type==="INC"){
     return state +1;

    }
    if(action.type==="DEC"){
      return state-1;
    }

  }

  const [count,dispatch] = useReducer(reducer,0);

  return <>
    <div  className=" p-4 h-lvh flex flex-col justify-center items-center ">
      <h1>Hello from useReducer</h1>
   <h1>Count : {count}</h1>
   <button onClick={()=>dispatch({type:"INC"})}>Increment</button>
   <button onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
    </div>
  </>
}