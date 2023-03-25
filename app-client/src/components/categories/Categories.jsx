import React from 'react'
import './categories.scss'
import image2S from './../../assets/image2S.jpg'
import image3S from './../../assets/image3S.jpg'
import image7 from './../../assets/image7.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <>
        <div className="categories">
            <div className="catLeft">
                <div className="catLeftTop">
                    <img src={image7} alt="" />
                    <Link className='catLink'>SALE</Link>
                </div>
                <div className="catLeftTop">
                    <img src={image7} alt="" />
                    <Link className='catLink'>WOMEN</Link>
                </div>
            </div>
            <div className="catCenter">
                <img src={image7} alt="" />
                <Link className='catLink'>NEW SEASON</Link>
            </div>
            <div className="catRight">
                <div className="catTop">
                    <div className="catTopLeft">
                        <img src={image7} alt="" />
                        <Link className='catLink'>MEN</Link>
                    </div>
                    <div className="catTopRight">
                        <img src={image7} alt="" />
                        <Link className='catLink'>ACCESSORIES</Link>
                    </div>
                </div>
                <div className="catBottom">
                    <img src={image2S} alt="" />
                    <Link className='catLink'>SHOES</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Categories