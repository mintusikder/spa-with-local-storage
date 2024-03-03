import React from "react";
import Header from "./assets/components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./assets/components/Home";
import SideCard from "./assets/components/SideCard";

const App = () => {
  return (
    <div>
      <div className="header m-auto mb-3 m-lg-3 ">
        <Header></Header>
      </div>
      <div className="main row d-flex justify-content-around">
        <div className="home-container col-md-8 ">
          <Home></Home>
        </div>
        <div className="side-card col-md-4">
          <SideCard></SideCard>
        </div>
      </div>
    </div>
  );
};

export default App;
