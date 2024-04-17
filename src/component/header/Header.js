import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./header.css";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Signup from "../signup/Signup";

const Header = () => {
  const [nav1, setnav1] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const changebackground = () => {
    if (window.scrollY >= 90) {
      setnav1(true);
    } else {
      setnav1(false);
    }
  };
  window.addEventListener("scroll", changebackground);

  return (
    <div>
      <div className={nav1 ? "nav1 active" : "nav1"}>
        <div className="logo1">Nova</div>
        <div className="list1">
          <ul>
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <strong>
                <NavLink to="/About">About</NavLink>
              </strong>
            </li>
            <li>
              <strong>
                <NavLink to="/Services">Services</NavLink>
              </strong>
            </li>
            <li>
              <strong>
                <NavLink to="/Portfolio">Portfolio</NavLink>
              </strong>
            </li>
            {/* <li>
              <strong>
                <NavLink to="/Signup">Signup
                </NavLink>
              </strong>
            </li> */}
            <li>
              <strong>
                <NavLink to="/Team1">Team</NavLink>
              </strong>
            </li>
            <li>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="secondary"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                  <Dropdown.Item >Action</Dropdown.Item>
                  <Dropdown.Item >
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    Separated link
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <strong>
                <NavLink to="/Contact">Contact</NavLink>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
