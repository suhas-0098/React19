import { Component } from "react"
// default import
// import NetflixSeries from "./components/NetflixSeries"

//named import
import { NetflixSeries } from "./components/NetflixSeries"

// import "./components/Netflix.css";
// import './components/Netflix.module.css';

import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";
import { State } from "./components/hooks/State";
import { DerivedState } from "./components/DerivedState";
import { LiftStateUp } from "./components/LiftStateUp";
import { Todo } from "./projects/Todo/Todo";
export const App = () =>{
  return(

     <section>

      <Todo/>
   {/* <LiftStateUp/>
   <br />
   <br />

  <DerivedState/>
  <br />
  <br />

      <State/>
   <br />

 <h1 className="card-heading">List of Best Netflix Series</h1>
   

    <NetflixSeries/>
    <EventHandling/>
    <br />
    <EventProps/> */}
    
  </section>
  )
  
 
}


