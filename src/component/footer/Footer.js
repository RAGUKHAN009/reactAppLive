import React from "react";
import "./footer.css";
import { FiTwitter } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-list1">
          <div className="footer-sublist1">
            <h3>
              <b>Nova</b>
            </h3>
            <p id="set-footer-text">
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <div className="footer-icons">
              <button id="icn-btn">
                {" "}
                <FiTwitter id="set-icons1" />
              </button>
              <button id="icn-btn">
                <CiFacebook id="set-icons1" />{" "}
              </button>
              <button id="icn-btn">
                <AiOutlineInstagram id="set-icons1" />
              </button>
              <button id="icn-btn">
                <AiOutlineLinkedin id="set-icons1" />
              </button>
            </div>
          </div>
        </div>
        <div className="footer-list2">
          <h6 id="set-title">
            <strong>Useful links</strong>
          </h6>
          <div className="list2">
            <ul>
              <li>
                <a href="#">
                  <AiOutlineLine id="set-footer-icon" /> Home
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineLine id="set-footer-icon" /> About
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineLine id="set-footer-icon" /> Services
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineLine id="set-footer-icon" /> Tearms and Services
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineLine id="set-footer-icon" /> privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-list3">
          <h6 id="set-title">
            <strong>Our Services</strong>
          </h6>
          <div className="list2">
            <ul>
              <li>
                <a href="#">
                  <AiOutlineLine id="set-footer-icon" /> Web Design
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineLine id="set-footer-icon" /> Web Development
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineLine id="set-footer-icon" /> Product Managment
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineLine id="set-footer-icon" /> Marketing
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineLine id="set-footer-icon" /> Griphic Design
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-list4">
          <h6 id="set-title">
            <strong>Contect Us</strong>
          </h6>
          <div className="list4">
            <ul>
              <li>
                <p id="last-tit">
                  A108 Adam Street
                  <br />
                  New York, NY 535022
                  <br />
                  United States
                </p>
              </li>
              <li>
                <strong>
                  <b>Phone:</b>
                </strong>{" "}
                +1 5589 55488 55
                <br />
                <strong>
                  <b>Email:</b>
                </strong>{" "}
                info@example.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="last-part">
        <div className="section1">
          © Copyright<b> Nova</b>. All Rights Reserved
        </div>
        <div className="section2">
          Designed by<b> Rashid Lateef</b>
        </div>
      </div>
    </div>
  );
};

export default Footer;
