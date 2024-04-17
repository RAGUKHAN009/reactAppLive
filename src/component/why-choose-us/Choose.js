import React from 'react'
import './choose.css';
import { BsBriefcase } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { AiFillSignal } from "react-icons/ai";
import { BsBinoculars } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { BsCalendarWeek } from "react-icons/bs";

const Choose = () => {
  return (
    <div>
    <div className="ab-txt3" data-aos="fade-up">
    <strong>Our Services</strong>
    <hr1></hr1> 
  </div>
  <div className="service-top">
    <div className="serice-1" data-aos="fade-up" data-aos-delay="100">
      <button id="set-fa">
        <BsBriefcase id="set-icn2" />
      </button>
    </div>
    <div className="serice-2" data-aos="fade-up" data-aos-delay="100">
      <h4 className="title">
        <p href="#" className="stretched-link">
          <b>Dolor Sitema</b>
        </p>
      </h4>
      <p className="description" data-aos="fade-up" data-aos-delay="100">
        Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat tarad limino ata
      </p>
    </div>
    <div className="serice-3" data-aos="fade-up" data-aos-delay="100">
      <button id="set-fa">
        <FaTasks id="set-icn1" />
      </button>
    </div>
    <div className="serice-4" data-aos="fade-up" data-aos-delay="100">
      <div>
        <h4 className="title">
          <p href="#" class="stretched-link">
            <strong> Dolor Sitema</strong>
          </p>
        </h4>
        <p className="description" data-aos="fade-up" data-aos-delay="100">
          Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat tarad limino ata
        </p>
      </div>
    </div>
    <div className="serice-5" data-aos="fade-up" data-aos-delay="100">
      <button id="set-fa">
        <AiFillSignal id="set-icn3" />
      </button>
    </div>
    <div className="serice-6" data-aos="fade-up" data-aos-delay="100">
      <div>
        <h4 className="title">
          <p href="#" class="stretched-link">
            <strong>Sed ut perspiciatis</strong>
          </p>
        </h4>
        <p className="description" data-aos="fade-up" data-aos-delay="100">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur
        </p>
      </div>
    </div>
  </div>
  <div className="service-mid">
    <div className="serice-1" data-aos="fade-up" data-aos-delay="100">
      <button id="set-fa">
        <BsBinoculars id="set-icn4" />
      </button>
    </div>
    <div className="serice-2" data-aos="fade-up" data-aos-delay="100">
      <h4 className="title">
        <p href="#" class="stretched-link">
          <strong>Dolor Sitema</strong>
        </p>
      </h4>
      <p className="description" data-aos="fade-up" data-aos-delay="100">
        Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat tarad limino ata
      </p>
    </div>
    <div className="serice-3" data-aos="fade-up" data-aos-delay="100">
      <button id="set-fa">
        <BsSun id="set-icn5" />
      </button>
    </div>
    <div className="serice-4" data-aos="fade-up" data-aos-delay="100">
      <div>
        <h4 className="title">
          <p href="#" class="stretched-link">
            <strong> Dolor Sitema</strong>
          </p>
        </h4>
        <p className="description" data-aos="fade-up" data-aos-delay="100">
          Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat tarad limino ata
        </p>
      </div>
    </div>
    <div className="serice-5" data-aos="fade-up" data-aos-delay="100">
      <button id="set-fa">
        <BsCalendarWeek id="set-icn6" />
      </button>
    </div>
    <div className="serice-6" data-aos="fade-up" data-aos-delay="100">
      <div>
        <h4 className="title">
          <p href="#" class="stretched-link">
            <strong>Sed ut perspiciatis</strong>
          </p>
        </h4>
        <p className="description" data-aos="fade-up" data-aos-delay="100">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur
        </p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Choose
