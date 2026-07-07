export const SeriesCard = ({key,series}) =>{

  const btn_style ={
    padding: "1.2rem 2.4rem",
    border:"none",
    fontSize:"1.6rem",
    backgroundColor:`${series.rating>=8.5 ? "#7DCEA0":"#f7dc6f"}`,
    color:"var(--bg-color)",
    fontWeight:"bold",
    cursor:"pointer"
  }
  const ratingClass = series.rating>=8.5 ? "super_hit":"average";
  return(
    <li className="card">
          <div>
        <div>
          <img src={series.img_url} alt=""  width= "40%" height="40%"/>
        </div>
         <div className="card-content">
          <h2>Name : {series.name}</h2>
      <h3>Rating: <span className={`rating ${ratingClass}`}>{series.rating}</span> </h3>
      <p >Summary : {series.description}</p>
      <p>Genre : {series.genre}</p>
      <p>Cast : {series.cast}</p>
      <a href={series.watch_url} target='_blank'>
       <button style={ btn_style}>Watch Now</button>
       </a>

         </div>
    </div>
        </li>
  )
}