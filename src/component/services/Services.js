import React, { useEffect } from "react";
import "./services.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import Choose from "../why-choose-us/Choose";
import { NavLink } from "react-router-dom";
import Cards from "../cards/Cards";
import Card2 from "../card2/Card2";





const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  function scrolltotop() {
    window.scrollTo(0, 0);
  }







  return (
        <>
    <div>
      <div className="bg2">
        <div className="text1">
          <div className="txt12">
            <strong>Services</strong>
          </div>
          <div className="text13">
            <Breadcrumb className="set-text13">
              <Breadcrumb.Item><NavLink to="/"> Home </NavLink></Breadcrumb.Item>
              <Breadcrumb.Item ><NavLink to="/Services"> Services </NavLink></Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <Choose/>
      <Cards/>
      
      <div className="scrolltop" onClick={scrolltotop}>
      <AiOutlineArrowUp />
    </div>
    </div>
    </>
  );
};

export default Services;
