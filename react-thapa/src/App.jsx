import { Component } from "react"
// default import
// import NetflixSeries from "./components/NetflixSeries"

//named import
import { NetflixSeries } from "./components/NetflixSeries"

// import "./components/Netflix.css";
import './components/Netflix.module.css';
import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";
import { State } from "./components/hooks/State";
import { DerivedState } from "./components/DerivedState";
export const App = () =>{
  return(

     <section className="container">

  <DerivedState/>
  <br />
  <br />

      <State/>
   <br />

 <h1 className="card-heading">List of Best Netflix Series</h1>
   

    <NetflixSeries/>
    <EventHandling/>
    <br />
    <EventProps/>
    
  </section>
  )
  
 
}


