import React from "react";
import "./contact1.css";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="bg10">
        <div className="text1">
          <div className="txt12">
            <strong>Contact</strong>
          </div>
          <div className="text13">
            <Breadcrumb className="set-text13">
              <Breadcrumb.Item>
                <NavLink to="/"> Home </NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to="/contact"> Contact </NavLink>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="contact-form-inner">
          <div className="form-icons">
            <div className="form-icons-div">
              <div className="form-icon-sec">
                <div className="for-icon-radius">
                  <CiLocationOn />
                </div>
              </div>
              <div className="form-text-sec">
                <p>
                  <span>Location: </span>
                  <br></br>
                  <p id="detllss"> A108 Adam Street, New York, NY 535022</p>
                </p>
              </div>
            </div>
            <div className="form-icons-div">
              <div className="form-icon-sec">
                <div className="for-icon-radius">
                  <AiOutlineMail />
                </div>
              </div>
              <div className="form-text-sec">
                <p>
                  <span>Email: </span>
                  <br></br>
                  <p id="detllss">info@example.com </p>
                </p>
              </div>
            </div>
            <div className="form-icons-div">
              <div className="form-icon-sec">
                <div className="for-icon-radius">
                  <BsPhone />
                </div>
              </div>
              <div className="form-text-sec">
                <p>
                  <span>Call: </span>
                  <br></br>
                  <p id="detllss">+1 5589 55488 55s</p>
                </p>
              </div>
            </div>
          </div>
          <div className="form-inputs">
            <div className="form-input-inner">
              <div className="inp-one">
                <input type="text" placeholder="Your Name"></input>
                <input type="text" placeholder="Your Email"></input>
              </div>
              <div className="inp-one">
                <input id="inp2" type="text" placeholder="Subject"></input>
              </div>
              <div className="inp-one">
                <input id="inp3" type="text" placeholder="Massage"></input>
              </div>
              <div className="inp-btn">
                <button>Send Massage</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
