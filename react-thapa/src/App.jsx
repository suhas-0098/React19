import { Component } from "react"

export const App = () =>{
  return <div>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    
  </div>
}

const NetflixSeries = ()=>{
  return(
     <div>
        <div>
          <img src="https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg" alt=""  width= "40%" height="40%"/>
        </div>
      <h2>Name : Game of Thrones </h2>
      <h3>Rating:8.2</h3>
      <p>Summary : Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum sed autem. Accusantium debitis nemo sequi dolore consequuntur veniam. Sed.</p>
    </div>
  );
}
