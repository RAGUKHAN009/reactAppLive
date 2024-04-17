import React from "react";
import "./iphone.css";
import iphone from "./iphone.png";
import { BiStoreAlt } from "react-icons/bi";
import { BsCalendarWeek } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import { CiSquareMinus } from "react-icons/ci";
import { TbActivityHeartbeat } from "react-icons/tb";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { RxTarget } from "react-icons/rx";
import { GoRadioTower } from "react-icons/go";

const Iphone = () => {
  return (
    <div>
      <div className="iphone-top">
        <div className="powerful-features-left">
          <div className="powerful-features-top">
            <h1>
              <b>
                powerful features for <br /> your Business
              </b>
            </h1>
          </div>
          <div className="powerful-features-bottom">
            <div className="powerful-features-bottom-left">
              <div className="powerful-features-bottom-left-flx">
                <div className="powerful-features-bottom-left-icons">
                  <p id="set-text1">
                    <BiStoreAlt id="set-icon1" />
                    Easy Carts Features
                  </p>
                </div>
                <div className="powerful-features-bottom-left-icons">
                  <p id="set-text1">
                    <BsCalendarWeek id="set-icon2" />
                    Ipsum Rem Explabo
                  </p>
                </div>
                <div className="powerful-features-bottom-left-icons">
                  <p id="set-text1">
                    <BiCoinStack id="set-icon3" />
                    Easy Cart of Features
                  </p>
                </div>
                <div className="powerful-features-bottom-left-icons">
                  <p id="set-text1">
                    <CiSquareMinus id="set-icon4" />
                    Ipsum Rerm Explibo
                  </p>
                </div>
              </div>
            </div>
            <div className="powerful-features-bottom-right">
              <div className="powerful-features-bottom-left-flx2">
                <div className="powerful-features-bottom-left-icons">
                  <p id="set-text1">
                    <TbActivityHeartbeat id="set-icon1" />
                    Sit amet consectetur adipisicing
                  </p>
                </div>
                <div className="powerful-features-bottom-left-icons">
                  <p id="set-text1">
                    <AiOutlineFormatPainter id="set-icon2" />
                    Easy Cart Features
                  </p>
                </div>
                <div className="powerful-features-bottom-left-icons">
                  <p id="set-text1">
                    <RxTarget id="set-icon3" />
                    Sit amet consectetur adipisicing
                  </p>
                </div>
                <div className="powerful-features-bottom-left-icons">
                  <p id="set-text1">
                    <GoRadioTower id="set-icon4" />
                    Easy Cart Features
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="iphone-top-right">
          <img id="set-iphone" src={iphone} />
        </div>
      </div>
      <div className="iphone-bottom">
      <div className="iphone-center" >
        <div className="iphone-bottom-text">
          <div className="iphone-bottom-top">
            <b>
              Labore Sdio Lidui
              <br />
              Bonde Naruto
            </b>
          </div><br/>
          <div className="iphone-bottom-mid">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              nostrum <br /> molestias doloremque quae delectus odit minima
              corrupti blanditiis quo <br /> animi!
            </p>
          </div>
          <div className="iphone-bottom-end">
            <button id="set-iphone-button">Get started</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Iphone;
