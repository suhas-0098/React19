import seriesData  from '../api/seriesData.json'
import { SeriesCard } from './Lists';
export const NetflixSeries = ()=>{
  return(
    <>
    <ul className="grid grid-three-cols">
      {seriesData.map((series)=>(
        <SeriesCard key={series.id} series={series}/>
))}
     
    </ul>
    </>
  );
}

// default export
// export default NetflixSeries;