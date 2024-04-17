import React from "react";
import "./team1.css";
import Team from "./Team";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { NavLink } from "react-router-dom";

const Team1 = () => {
  return (
    <div>
      <div className="bg">
        <div className="text1">
          <div className="txt12">
            <strong>Team</strong>
          </div>
          <div className="text13">
            <Breadcrumb className="set-text13">
            <Breadcrumb.Item><NavLink to="/Home"> Home </NavLink></Breadcrumb.Item>
            <Breadcrumb.Item ><NavLink to="/"> Team </NavLink></Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
        <Team/>
    </div>
  );
};

export default Team1;
