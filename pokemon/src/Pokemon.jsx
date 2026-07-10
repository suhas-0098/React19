import { useState } from "react";
import { useEffect } from "react";
import { PokemonCards } from "./PokemonCards";

export const Pokemon = () =>{

  const [pokemon,setPokemon] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search,setSearch] = useState("");


   const API = "https://pokeapi.co/api/v2/pokemon?limit=200";

   const fetchData = async() =>{
     try{
        const res =  await fetch(API);
        const data = await res.json();

        const detailedPokemonData = data.results.map(async (ele)=>{
          const res = await fetch(ele.url)
          const data = await res.json();
          return data;
        });
        const detailedResponse = await Promise.all(detailedPokemonData);
        console.log(detailedResponse)
        setPokemon(detailedResponse)
        setLoading(false);

     }catch(error){
      console.log(error);
       setLoading(false);
       setError(error);
     }
   }
   useEffect(()=>{
    fetchData();
   },[])

  //  const searchData = pokemon.filter((ele)=>ele.name.toLowercase().includes(search.toLowerCase()));

    const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  if(loading){
    return<>
    <h1>Loading....</h1>
    </>
  } 
  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  
    return <>
   <section className="container">
    <header>
      <h1>Lets Catch Pokemon</h1>
    </header>
    <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
    <div>
      <ul className="cards">
        {/* { pokemon.map((ele)=>( */}
         { searchData.map((ele)=>(
            <PokemonCards key={ele.id} pokemonData={ele}/>
          ))
        }

      </ul>
    </div>
   </section>
  
  </>
  
 
      }