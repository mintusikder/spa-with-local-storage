import React from "react";

const SingleCard = (props) => {
  const { poster, movieName, description, watchTime, imdbRating } = props.movie;
  const {handelWatchTime} = props
  return (
    <div>
      <div className="movie-card card p-4 text-center w-100 m-auto col-md-6 ">
        <div className="movie-poster w-25 m-auto">
          <img className="w-75" src={poster} alt="" />
        </div>
        <h3>{movieName}</h3>
        <p>{description}</p>
        <div className="timeandrating d-flex justify-content-around ">
          <p>Watch Time : {watchTime}</p>
          <p>Rating : {imdbRating}</p>
        </div>
        <button onClick={()=> handelWatchTime(watchTime)} className="btn btn-info w-75 ">Book Now</button>
      </div>
    </div>
  );
};

export default SingleCard;
