import { Component } from "react"
// default import
// import NetflixSeries from "./components/NetflixSeries"

//named import
import { NetflixSeries } from "./components/NetflixSeries"

import "./components/Netflix.css";
export const App = () =>{
  return(

     <section className="container">

 <h1 className="card-heading">List of Best Netflix Series</h1>
    <NetflixSeries/>
   
    
  </section>
  )
  
 
}


