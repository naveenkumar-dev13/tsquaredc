import React from "react";
import "./index.css";
import { hero1 } from "../../assets/images";
import Button from "../button";

function Hero() {
  return (
    <div className=" ">
      <div className="hero">
        <div className="hero_left">
          <h1 className="heading">
            The Future of Tech <span>Starts Here</span>
          </h1>
          <p className="hero_para">
            From concept to market, TSquaredC supercharges your tech journey
            with top-tier talent, cutting-edge tools, and rapid execution. Let's
            build groundbreaking solutions that define tomorrow.
          </p>
          <a href="#contact">
            {" "}
            <button className="btn">
              Let's Build Something Extraordinary{" "}
            </button>
          </a>
        </div>
        <div>
          <img src={hero1} alt="hero_img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
