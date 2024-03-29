import React, { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Header from "./assets/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./assets/components/Home";
import SideCard from "./assets/components/SideCard";

const App = () => {
  const [watchTime, setWatchTime] = useState("")
  const handelWatchTime = (time) => {
    const previousWatchTime = JSON.parse(localStorage.getItem("watchtime"));
    if (previousWatchTime) {
      const sum = previousWatchTime + time
      localStorage.setItem("watchtime", sum);
      setWatchTime(sum)
    } else {
      localStorage.setItem("watchtime", time);
      setWatchTime(time)
    }
  };
  return (
    <div>
      <div className="header m-auto mb-3 m-lg-3 ">
        <Header></Header>
      </div>
      <div className="main row d-flex justify-content-around">
        <div className="home-container col-md-8 ">
          <Home handelWatchTime={handelWatchTime}></Home>
        </div>
        <div className="side-card col-md-4">
          <SideCard watchTime={watchTime}></SideCard>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
