import React from 'react'
import smcd from "./blogsmallcard";
import { BiSearch } from "react-icons/bi";
import './blogcomponent.css';

const blogcomponent1 = () => {
  return (
    <div>
    <div className="searchbar">
    <div className="search">Search</div>
    <div className="search-input">
      <input id="inout-in" />
      <button id="search-button">
        <BiSearch />
      </button>
    </div>
  </div>
  <div className="categories">
    <div className="catogories-detail">Categories</div>
    <div className="list">General (25)</div>
    <div className="list">Lifestyle (12)</div>
    <div className="list">Travel (5)</div>
    <div className="list">Design (22)</div>
    <div className="list">Creative (8)</div>
    <div className="list">Education (14)</div>
  </div>
  <div className="reacent-post">Recent Posts</div>
  <div className="small-cards">
    {smcd.map((el) => {
      return (
        <>
          <div className="cardmb-3">
            <div className="row1 g-0">
              <div className="col-md-4">
                <img id="set-mpimg" src={el.img2}  />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title3">{el.cds}</h5>
                  <p className="card-text">
                  <i> {el.cdd}</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    })}
  </div>
  <div className="tags" >
    <h4>Tags</h4>
  </div>
  <div className="tag-icns" >
    <button className='asd' id="">App</button>
    <button className='asd' id="">IT</button>
    <button className='asd' id="">Business</button>
    <button className='asd' id="">Mac</button>
    <button className='asd' id="">Office</button>
    <button className='asd' id="">Design</button>
    <button className='asd' id="">Office</button>
    <button className='asd' id="">Creative</button>
    <button className='asd' id="">Studio</button>
    <button className='asd' id="">smart</button>
    <button className='asd' id="">Tips</button>
    <button className='asd' id="">Marketing</button>
  </div>
    </div>
  )
}

export default blogcomponent1
