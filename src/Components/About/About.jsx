import React from "react";
import AboutCss from "../../Components/About/About.css";
import ImageFood from "../../Assets/images.jpg";
import ImageFood2 from "../../Assets/image2.jpg";
import ImageFood3 from "../../Assets/image3.jpg";
import ImageFood4 from "../../Assets/image4.jpg";
const About = () => {
  return (
    <div className="about-container mt-5">
      <h1 className="text-center">WHY CHOOSE US?</h1>
      <p className="text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non architecto
        adipisci sunt doloremque voluptatem eaque harum esse minima odit. Quidem
        dolor laborum eum debitis ad minima pariatur, quos alias tempore?
      </p>
      <div className="row"></div>

      <div className=" about-main-content mt-5">
        <div className="about-main-card-left">
          <div className="discound">
            <h1 className="text-warning">
              <b>50%</b>
            </h1>
            <p className="text-white"></p>
            <h1 className="text-warning">PRODUCTS</h1>
          </div>
          <div className="about-main-card-image-left">
            <img src={ImageFood2} alt="" />
          </div>
        </div>
        <div className="about-image-card-center">
          <div className="about-image-card-center-sub">
            <div className="about-image-card-center-image">
              <img src={ImageFood3} alt="" />
            </div>
          </div>
          <div className="about-image-card-center-sub mt-3">
            <div className="about-image-card-center-image">
              <img src={ImageFood4} alt="" />
            </div>
          </div>
        </div>

        <div className="about-main-card">
        <div className="discound">
            
            <p className="text-white"></p>
            <p className="text-warning">PRODUCTS</p>
          </div>
          <div className="about-main-card-image-rigth">
            <img src={ImageFood} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
