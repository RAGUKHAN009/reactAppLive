import React from "react";
import "./contact.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="bg6">
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
                <NavLink to="/Contact"> Contact </NavLink>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="column justify-content-center" data-aos="fade-up">
            <div className="col-lg-10">
              <div className="info-wrap">
                <div className="row">
                  <div className="col-lg-4 info">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>
                      A108 Adam Street
                      <br />
                      New York, NY 535022
                    </p>
                  </div>

                  <div className="col-lg-4 info mt-4 mt-lg-0">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>
                      info@example.com
                      <br />
                      contact@example.com
                    </p>
                  </div>

                  <div className="col-lg-4 info mt-4 mt-lg-0">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>
                      +1 5589 55488 51
                      <br />
                      +1 5589 22475 14
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="column mt-5 justify-content-center" data-aos="fade-up">
            <div className="col-lg-10">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={5}
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
              <div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
