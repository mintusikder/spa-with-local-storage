// import React from 'react';

import { useEffect, useState } from "react";

const SideCard = ({ watchTime }) => {
//   console.log(watchTime);
const [time , setTime] = useState(watchTime)

  useEffect(()=>{
    const setWatchTime = localStorage.getItem("watchtime")
    setTime(setWatchTime)
  },[watchTime])
  return (
    <div>
      <h1>My Cart</h1>

      <div className="mt-5 text-center">
        <p>total watch time</p>
        <input type="text" value={time} disabled />
      </div>
      <h5 className="mt-5">Add Break time</h5>
      <dutton className="w-25 btn-circle m-1 btn btn-info">15</dutton>
      <dutton className="w-25 btn-circle bg-warning btn btn-info">20</dutton>
      <dutton className="w-25 btn-circle m-1 bg-danger btn btn-info">25</dutton>
      <input type="text" disabled />
      <button className="mt-5 btn btn-info w-100">Complete</button>
    </div>
  );
};

export default SideCard;
