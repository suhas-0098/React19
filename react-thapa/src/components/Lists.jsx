export const SeriesCard = ({key,series}) =>{
  return(
    <li >
          <div>
        <div>
          <img src={series.img_url} alt=""  width= "40%" height="40%"/>
        </div>
      <h2>Name : {series.name}</h2>
      <h3>Rating: {series.rating}</h3>
      <p>Summary : {series.description}</p>
      <p>Genre : {series.genre}</p>
      <p>Cast : {series.cast}</p>
      <a href={series.watch_url} target='_blank'>
       <button>Watch Now</button>
       </a>
    </div>
        </li>
  )
}