import React from 'react'
import './animated.css';

const Animated = () => {
  return (
    <div>
    <div className="animated">
    <div className="animated-text" data-aos="fade-up">
      <h1 id="set-animated-text-top">Ut fugiat aliquam aut non</h1>
      <p id="set-animated-text-top" data-aos="fade-up">
        {" "}
        <strong>
          {" "}
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident.
        </strong>
      </p>
      <button data-aos="fade-up" id="set-animated-btn">
        <strong>Call To Action</strong>
      </button>
    </div>
  </div>
    </div>
  )
}

export default Animated
