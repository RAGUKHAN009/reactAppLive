import React, { useEffect, useState } from "react";
import PortfoData from "./ProjectData";
import "./portfolio.css";
import AOS from "aos";
import { NavLink } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { BsLink45Deg } from "react-icons/bs";
import { BsZoomIn } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

const ProjectCards = () => {
  const [listName, setListName] = useState("");

  useEffect(() => {
    AOS.init();
  });

  function scrolltotop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="bg13">
        <div className="text1">
          <div className="txt12">
            <strong>Portfolio</strong>
          </div>
          <div className="text13">
            <Breadcrumb className="set-text13">
              <Breadcrumb.Item>
                <NavLink to="/"> Home </NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/Portfolio">Portfolio </NavLink>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="portfolio-list">
        <ul>
          <li onClick={() => setListName("")}>All</li>
          <li onClick={() => setListName("App")}>App</li>

          <li onClick={() => setListName("Product")}>product</li>
          <li onClick={() => setListName("Branding")}>Branding</li>
          <li onClick={() => setListName("Book")}>Books</li>
        </ul>
      </div>
      <div className="project-card">
        {PortfoData.filter((fil) => {
          if (listName != "") {
            return fil.category == listName;
          } else if (listName == "") {
            return fil;
          }
        }).map((el) => {
          return (
            <>
              <div
                key={el.img}
                id={el.img}
                data-aos="fade-up"
                className="portfolio-card"
              >
                <img src={el.img} />
                <h4>{el.category}</h4>

                <div className="hover-container">
                  <div className="hover-main">
                    <div className="hover-text">
                      <h4>{el.category}</h4>
                      <p>
                        Lorem ipsum, dolor sit amet <br />
                        consectetur
                      </p>
                    </div>
                    <div className="hover-icns">
                      
                      <NavLink to="/portfolio-detail">
                        <BsZoomIn fontSize={22} id="link-in"/>
                      </NavLink>
                      <NavLink to="/portfolio-detail">
                        <BsLink45Deg id="link-in" />
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="scrolltop" onClick={scrolltotop}>
        <AiOutlineArrowUp />
      </div>
    </>
  );
};

export default ProjectCards;
