import seriesData  from '../api/seriesData.json'
import { SeriesCard } from './Lists';
export const NetflixSeries = ()=>{
  return(
    <>
    <ul>
      {seriesData.map((series)=>(
        <SeriesCard key={series.id} series={series}/>
))}
     
    </ul>
    </>
  );
}

// default export
// export default NetflixSeries;