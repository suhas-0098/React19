import { Component } from "react"

export const App = () =>{
  return <>
    <NetflixSeries/>
    <NetflixSeries/>
    <NetflixSeries/>
    
  </>
}

const NetflixSeries = ()=>{
  const name ="Game of Thrones";
  const rating = "8.5";
  const summary ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eum sed autem. Accusantium debitis nemo sequi dolore consequuntur veniam. Sed.";
  const returnGenre = ()=>{
    const genre = "RomCom";
    return genre;
  }
  return(
     <div>
        <div>
          <img src="https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg" alt=""  width= "40%" height="40%"/>
        </div>
      <h2>Name : {name}</h2>
      <h3>Rating: {rating}</h3>
      <p>Summary : {summary}</p>
      <p>Genre : {returnGenre()}</p>
    </div>
  );
}
