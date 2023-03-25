import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'
import image8 from './../../assets/image8.jpg'
import image7 from './../../assets/image7.jpg'

const Card = ({item}) => {

  console.log(item)

  return (
    <> 
    <Link to={`products/${item.id}`}>
        <div className="card">
          <div className="cardImg">
          {item.isNew && <span>New Season</span> }
            <img src={image8} alt="" className="cardImg1" />
            { item.img2 && <img src={image7} alt="" className="cardImg2" />}
          </div>
          <h2 className="cardH2">{item.title}</h2>
          <div className="cardPrices">
            <h3 className='cardH3'>${item.oldPrice}</h3>
            <h3>${item.price}</h3>
          </div>
        </div>
    </Link>
    </>
  )
}

export default Card