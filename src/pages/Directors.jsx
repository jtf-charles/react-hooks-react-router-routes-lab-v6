import { useEffect, useState } from "react";

function Directors() {
  const [directors, setDirectors] = useState([]);

useEffect(()=>{
    fetch("http://localhost:4000/directors")
    .then((res)=> res.json())
    .then((data)=>setDirectors(data))
  },[])

  return (
    <>
      <header>
         <h1>Directors Page</h1>
      </header>

      <main>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
}

export default Directors;


// function Directors() {
//   return (
//     <>
//       <header>
//         {/* What component should go here? */}
//       </header>
//       <main>
//         {/* Director info here! */}
//       </main>
//     </>
//   );
// };

// export default Directors;
