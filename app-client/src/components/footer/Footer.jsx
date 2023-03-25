import React from 'react'
import './footer.scss'
import { Link } from 'react-router-dom'
import america from './../../assets/america.jpg'
import master from './../../assets/master.jpg'
import visa from './../../assets/visa.jpg'
import western from './../../assets/western.jpg'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="footer-left">
            <h2>Categories</h2>
            <ul>
              <Link><li>Women</li></Link>
              <Link><li>Men</li></Link>
              <Link><li>Shoes</li></Link>
              <Link><li>Accessoiries</li></Link>
              <Link><li>New arrivals</li></Link>
            </ul>
          </div>
          <div className="footer-center1">
            <h2>Links</h2>
            <ul>
              <Link><li>Faq</li></Link>
              <Link><li>Pages</li></Link>
              <Link><li>Stores</li></Link>
              <Link><li>Compare</li></Link>
              <Link><li>Cookies</li></Link>
            </ul>
          </div>
          <div className="footer-center2">
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ullam laudantium laborum dolores accusamus inventore laboriosam veritatis qui sed quo molestiae, fuga minima, libero alias ipsa commodi voluptas repellat quisquam?

            </p>
          </div>
          <div className="footer-right">
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, ullam laudantium laborum dolores accusamus inventore laboriosam veritatis qui sed quo molestiae, fuga minima, libero alias ipsa commodi voluptas repellat quisquam?
              
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left">
            <h2 className="footer-h2">AchaStore</h2>
            <span>Copyright 2023. All Rights Reserved</span>
          </div>
          <div className="footer-right">
            <img src={america} alt="" />
            <img src={visa} alt="" />
            <img src={western} alt="" />
            <img src={master} alt="" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer