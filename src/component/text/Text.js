import React from 'react'
import './text.css';
import abimg from "./about.jpg";
import { TiTick } from "react-icons/ti";

const Text = () => {
  return (
    <div>
    <div className="volup">
    <div className="about-image" data-aos="fade-up">
      <img id="set-abimg" src={abimg} />
    </div>
    <div className="ab-text" data-aos="fade-up">
      <div className="ab-top">
         <b> Voluptatem dignissimos provident <br /> quasi{" "}</b>
      </div>
      <div className="ab-mid">
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident
        <br /> quasi
      </div>
      <div className="ab-bottom">
        <strong>
          <TiTick id="tick" /> Ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </strong>
        <strong>
          <TiTick id="tick" /> Duis aute irure dolor in reprehenderit in
          voluptate velit.
        </strong>
        <strong>
          <TiTick id="tick" /> Ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </strong>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Text
