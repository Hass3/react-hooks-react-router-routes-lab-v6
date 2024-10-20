import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Directors() {
  const [directors, setDirectors] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/directors')
    .then(r=>r.json())
    .then(data=> setDirectors(data))
  }, [])


 const directorsList = directors.map((director)=>{
  return(
    <article key={director.id}>
      <h2>{director.name}</h2>
      <ul>
        <li>{director.movies[0]}</li>
        <li>{director.movies[1]}</li>
        <li>{director.movies[2]}</li>
      </ul>
    </article>
  )
 })


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorsList}
      </main>
    </>
  );
};

export default Directors;
