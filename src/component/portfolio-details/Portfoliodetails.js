import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import portfolioimg1 from "./product-1.jpg";
import portfolioimg2 from "./branding-1.jpg";
import portfolioimg3 from "./app-1.jpg";
import portfolioimg4 from "./books-1.jpg";
import { NavLink } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "./portfoliodetails.css";

const Portfoliodetails = () => {
  return (
    <div>
      <div className="bg7">
        <div className="text1">
          <div className="txt12">
            <strong>Portfolio Details</strong>
          </div>
          <div className="text13">
            <Breadcrumb className="set-text13">
              <Breadcrumb.Item>
                <NavLink to="/Home"> Home </NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/"> Portfolio Details </NavLink>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="portfolio-mid">
        <div className="portfolio-slide">
          <Carousel className="slsd" variant="dark">
            <Carousel.Item>
              <img id="set-img1" src={portfolioimg1} />
            </Carousel.Item>
            <Carousel.Item>
              <img id="set-img1" src={portfolioimg2} />
            </Carousel.Item>
            <Carousel.Item>
              <img id="set-img1" src={portfolioimg3} />
            </Carousel.Item>
            <Carousel.Item>
              <img id="set-img1" src={portfolioimg4} />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="portfolio-details">
          <div className="box">
            <div className="box1">
              <div id="pad" className="box-head">
                <h5>
                  <b>Project Information</b>
                </h5>
              </div>{" "}
              <div id="pad" className="category">
                <p>
                  <b>Category:</b>Web Design
                </p>
              </div>
              <div id="pad" className="Clint">
                <p>
                  <b>Clint:</b>USA Copany
                </p>
              </div>
              <div id="pad" className="Project">
                <p>
                  <b>Project Date:</b>01, March 2020
                </p>
              </div>
              <div id="pad" className="url">
                <p>
                  <b>Project URL:</b>www.example.com
                </p>
              </div>
            </div>
          </div>
          <div className="example">
            <div className="example-l">
              <h3 >
                <b>This is an example of  portfolio detail</b>
              </h3>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                itaque inventore commodi labore quia quia. Exercitationem
                repudiandae officiis neque suscipit non officia eaque itaque
                enim. Voluptatem officia accusantium nesciunt est omnis tempora
                eius.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfoliodetails;
