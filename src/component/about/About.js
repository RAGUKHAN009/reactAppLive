import React, { useEffect, useState } from "react";
import "../about/About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import Team from "../team/Team";
import Animated from "../animated/Animated";
import Text from "../text/Text";
import Slider from "../celid/Kos";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";


const About = () => {
  const [nav1, setnav1] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  function scrolltotop() {
    window.scrollTo(0, 0);
  }

  const changebackground = () => {
    if (window.scrollY >= 230) {
      setnav1(true);
    } else {
      setnav1(false);
    }
  };
  window.addEventListener("scroll", changebackground);

  return (
    <div>
      <div className="bg">
        <div className="text1">
          <div className="txt12">
            <strong>About</strong>
          </div>
          <div className="text13">
          <Breadcrumb className="set-text13">
          <Breadcrumb.Item><NavLink to="/"> Home </NavLink></Breadcrumb.Item>
          <Breadcrumb.Item ><NavLink to="/About"> About </NavLink></Breadcrumb.Item>
          </Breadcrumb>
        </div>
        </div>
      </div>
      <Text />
      <Slider/>
      <Animated />
      <Team />
      <div className="scrolltop" onClick={scrolltotop}>
        <AiOutlineArrowUp />
      </div>
    </div>
  );
};

export default About;
