import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.css";
import leftimg from './about3.jpg'




const Slider = () => {
  return (
    <div>
      <div className="ab-txt2">
        <strong>Why Choose Us</strong>
        <hr></hr>
      </div>
      <div className="photo-slider2">
        <div className="photo-left"><img id="setimg3" src={leftimg} /></div>
        <div className="slider-right">
          <Carousel variant="dark">
            <Carousel.Item>
              <div className="slide1">
                <div className="slider1-text">
                  <h3 className="slide-top">
                    <b>Let's grow your business together</b>
                  </h3>
                  <h4 className="slide-mid">
                    Optio reiciendis accusantium iusto itecto <br/> at quia minima
                    maiores quidem, dolorum.
                  </h4>
                  <p id="slide-end">
                    Lorem ipsum dolor sit amet consectetur adicing elit <br/>
                    Repellendus, ipsam perferendis asperiores explicabo <br/> vel
                    tempore velit totam, natus nesciunt accusantium <br/> dicta quod
                    quibusdam ipsum maiores nobis non, eum. <br/> dignissimos laborum
                    aut, magni voluptatem velit <br/> doloribus quas sapiente optio.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="slide2">
                <div className="slider1-text">
                  <h3 className="slide-top">
                    <b>Unde perspiciatis repellat dolorem</b>
                  </h3>
                  <h4 className="slide-mid">
                    Amet cumque nam sed vuptas doloribus <br/> iusto Dolorem eos
                    aliquam quis
                  </h4>
                  <p id="slide-end">
                    Dolorem quia fuga consectetur voluptatem Earum  <br/>consequatur
                    nulla maxime nectatibus<br/> cum accusamus  Voluptatem
                    dolorem am dolorum<br/> deltus  autem veritatis facilis.
                    Et <br/> ea ut repellat Facere est dolores fugiat dolor.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="slide3">
                <div className="slider1-text">
                  <h3 className="slide-top">
                    <b>Necessitatibus suscipit quibusdam</b>
                  </h3>
                  <h4 className="slide-mid">
                    Tempora quos est ut quia adipisci voluptas. <br/> Deleniti
                    laborum soluta nihil. <br/> Eum similique neque autem ut.
                  </h4>
                  <p id="slide-end">
                    Ut rerum et autem vel. Et rerum molestiae <br/> aut sit vel
                    incidunt sit voluptatem Saepe <br/> dolorem et sed voluptate
                    impedit. <br/> Ad et qui sint at qui animi rerum.
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Slider;
