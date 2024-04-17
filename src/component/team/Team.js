import React from "react";
import "./team.css";
import Teamcardsdetails from "./Teamcardsdetail";
import Card from "react-bootstrap/Card";
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa' 
import { AiOutlineArrowUp } from "react-icons/ai";




const Team = () => {

  function scrolltotop() {
    window.scrollTo(0, 0);
  }



  return (
    <div>
      <div className="our-team">
        <h1>
          <strong data-aos="fade-up">Our Team</strong>
          <hr></hr>
        </h1>
      </div>
      <div data-aos="fade-up" className="our-team-cards">
        <div className="team-card-set" >
        {Teamcardsdetails.map((el) => {
          return (
            <>
              <Card id="teamcard2" >
                <Card.Img variant="top" src={el.teamimg1} />
                <div className="hover-container3">
                  <div className="hover-main3">
                    <div className="hover-icns3">
                        <BsTwitter id="link-in3" /><BsFacebook id="link-in3" /><FiInstagram id="link-in3" /><FaLinkedin id="link-in3" />
                    </div>
                  </div>
                </div>
                  <Card.Body id="team-txt">
                    <div className="team-title" >
                  <Card.Title><b>{el.teamname}</b></Card.Title>
                    </div>
                    <div className="team-job" >

                  <Card.Text>
                  {el.job}
                  </Card.Text>
                    </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
      </div>
      <div className="scrolltop" onClick={scrolltotop}>
        <AiOutlineArrowUp />
      </div>
    </div>
  );
};

export default Team;
