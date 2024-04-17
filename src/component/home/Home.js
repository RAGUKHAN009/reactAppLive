import React, { useEffect } from "react";
import Animated from "../animated/Animated";
import "./Home.css";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Choose from "../why-choose-us/Choose";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import Slider from "../celid/Kos";
import Iphone from "../iphone/Iphone";
import Card2 from "../card2/Card2";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  function scrolltotop() {
    window.scrollTo(0, 0);
  }

  return (
    <div>
      <div className="home-top">
        <div className="home-left">
          <div className="home-left-heading" data-aos="fade-up">
            <p>
              <b>
                Focus On What <br /> Matters
              </b>
            </p>
          </div>
          <div className="home-left-detail" data-aos="fade-up">
            <p>
              Lorem ipsum dolor, sit amet consectetur
              <br /> adipisicing elit. Perspiciatis cum recusandae <br /> eum
              laboriosamvoluptatem repudiandae odio, <br />
              vel exercitationem officiis provident minima.
            </p>
          </div>
          <div className="home-left-butons" data-aos="fade-up">
            <div className="get-started">
              <button id="set-get-started">Get started</button>
              <a
                href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <AiOutlinePlayCircle id="set-play-icon" />
                <i className="bi bi-play-circle"></i>
                <span>
                  <p id="watch"> Watch Video</p>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="home-right">
          <div className="bg3"></div>
        </div>
      </div>
      <Slider />
      <Choose />
      <Animated />
      {/* <Iphone/> */}
      <div className="blog-top">
        <strong>Recent Blog Posts</strong>
        <hr />
      </div>
      <Card2 />
      <div className="scrolltop" onClick={scrolltotop}>
        <AiOutlineArrowUp />
      </div>
    </div>
  );
};

export default Home;
