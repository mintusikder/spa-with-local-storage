import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";


// import React from 'react';

const Home = ({handelWatchTime}) => {
    const [movies , setMovies] = useState([])
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (

      <div className="main-cntainer row">
   {
    movies.map(movie=> <SingleCard
    key={movie.id}
    movie={movie}
    handelWatchTime={handelWatchTime}
    ></SingleCard>)
   }
      </div>

  );
};

export default Home;
