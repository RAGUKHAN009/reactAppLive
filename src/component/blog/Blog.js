import React from "react";
import "./blog.css";
import { NavLink } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineArrowRight } from "react-icons/ai";
import bldata from "./Blogcard4";
import Blogcomponent1 from "./Blogcomponent1";
import Blogdetails3 from "./Blogdetails3";
import { AiOutlineArrowUp } from "react-icons/ai";

const Blog = () => {


  function scrolltotop() {
    window.scrollTo(0, 0);
  }



  return (
    <div>
      <div className="bg8">
        <div className="text1">
          <div className="txt12">
            <strong>Blog</strong>
          </div>
          <div className="text13">
            <Breadcrumb className="set-text13">
              <Breadcrumb.Item>
                <NavLink to="/"> Home </NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/Blog"> Blog </NavLink>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="blog-md">
        <div className="left-card">
          {bldata.map((el) => {
            return (
              <>
                <Card id="set-bcard" style={{ width: "44%" }}>
                  <Card.Img variant="top" src={el.image1} />
                  <Card.Body>
                    <Card.Title>{el.heading1}</Card.Title>
                    <Card.Text>{el.date1}</Card.Text>
                    <Card.Text>{el.detail1}</Card.Text>
                  </Card.Body>
                  <Card.Body id="icns">
                    <Card.Link id="det2" >                      
                <NavLink to="/blog-detail">Read More</NavLink>
                      <AiOutlineArrowRight />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
        <div className="right-side">
          <Blogcomponent1/>
        </div>
      </div>
      <div className=" b-arrows">
        <button  className="bth" id="one">1</button>
        <button id="two">2</button>
        <button className="bth" id="one">3</button>
      </div>
      <div className="scrolltop" onClick={scrolltotop}>
        <AiOutlineArrowUp />
      </div>
    </div>
  );
};

export default Blog;
