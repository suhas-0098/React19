//named export
export const NetflixSeries = ()=>{
  let age = 16;
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
      <button>{age>18 ? "Watch Now":"Not Available"}</button>

    </div>
  );
}

// default export
// export default NetflixSeries;