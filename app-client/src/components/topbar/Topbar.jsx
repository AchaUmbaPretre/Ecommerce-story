import React from 'react'
import './topbar.scss'
import { Link } from 'react-router-dom'
import rdc from './../../assets/rdc.jpg'

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="top-left">
          <div className="top-items">
            <img src={rdc} alt="" className="top-logo-img" />
            <i className="fas fa-chevron-down down"></i>
          </div>
          <div className="top-items">
            <Link>USD</Link>
            <i className="fas fa-chevron-down down"></i>
          </div>
          <div className="top-items">
              <Link>Men</Link>
          </div>
          <div className="top-items">
              <Link>Women</Link>
          </div>
          <div className="top-items">
              <Link>Children</Link>
          </div>
          <div className="top-items">
              <Link>Accessories</Link>
          </div>
        </div>
        <div className="top-center">
          <h2 className="top-center-h2">ACHASTORE</h2>
        </div>
        <div className="top-right">
          <div className="top-items">
              <Link>Homepage</Link>
          </div>
          <div className="top-items">
              <Link>About</Link>
          </div>
          <div className="top-items">
              <Link>Contact</Link>
          </div>
          <div className="top-items">
              <i className="fas fa-search"></i>
              <i className="fa-regular fa-user"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar