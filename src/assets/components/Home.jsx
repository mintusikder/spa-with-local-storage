import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";


// import React from 'react';

const Home = () => {
    const [movies , setMovies] = useState([])
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (

      <div className="movie-container">
   {
    movies.map(movie=> <SingleCard
    key={movie.id}
    movie={movie}
    ></SingleCard>)
   }
      </div>

  );
};

export default Home;
