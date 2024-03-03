import React from 'react';

const SingleCard = (props) => {
    console.log(props)
    const {movie} = props
    console.log(movie)
    return (
        <div>
            {/* <div className="movie-card card p-4 text-center w-100 m-auto ">
          <div className="movie-poster w-25 m-auto">
            <img
              className="w-75"
              src="https://c8.alamy.com/comp/C2WJYB/the-dark-knight-poster-display-at-the-arclight-theater-los-angeles-C2WJYB.jpg"
              alt=""
            />
          </div>
          <h3>Dark Movie</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            sit asperiores! Nisi soluta aliquid perspiciatis exercitationem, et
            magni minus voluptate.
          </p>
          <div className="timeandrating d-flex justify-content-around ">
            <p>Watch Time</p>
            <p>Rating</p>
          </div>
          <button className="btn btn-info w-75 ">Book Now</button>
        </div> */}
        </div>
    );
};

export default SingleCard;