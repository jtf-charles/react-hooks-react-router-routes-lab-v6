import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies,SetMovies]=useState([])

  useEffect(()=>{
    fetch("http://localhost:4000/movies")
    .then((res)=> res.json())
    .then((data)=>SetMovies(data))
  },[])
  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
        {movies.map(movie =>{
          return <MovieCard key={movie.id} id={movie.id} title={movie.title} />
        })}
      </main>
    </>
  );
};

export default Home;
