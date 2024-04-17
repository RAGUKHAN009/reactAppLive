import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./card2.css";
import Rashid from "./Data";
import { NavLink } from "react-router-dom";
import {AiOutlineArrowRight } from 'react-icons/ai'

const Card2 = () => {
  return (
    <>
      <div className="card3">

        <div className="blog-cards2">
          {Rashid.map((el) => {
            return (
              <>
                <Card id="set-card123">
                <div className="imghover" >
                  <Card.Img variant="top" src={el.image} />
                  </div>
                  <Card.Body>
                    <ListGroup.Item>{el.date}</ListGroup.Item>
                    <Card.Title>{el.heading}</Card.Title>
                    <Card.Text>{el.detail}</Card.Text>
                    <Card.Link id="set-link" ><NavLink to="/blog-detail"><p id="read-more" >Read More</p></NavLink><AiOutlineArrowRight id="set-link"/></Card.Link>
                  </Card.Body>
                </Card>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card2;
