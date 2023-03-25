import React from 'react'
import Card from '../card/Card'
import './featureProducts.scss'

const FeatureProducts = ({type}) => {

    const FeatureImg = [
        {
            id: 1,
            img: '',
            img1: "",
            img2:true,
            title: 'Long Sleeve Graphic T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            id: 2,
            img: '',
            title: 'Coat',
            isNew: true,
            oldPrice: 19,
            price: 13,

        },
        {
            id: 3,
            img: '',
            img1: "",
            img2:true,
            title: 'Skirt',
            oldPrice: 19,
            price: 12,

        },
        {
            id: 4,
            img: '',
            title: 'Hat',
            oldPrice: 19,
            price: 12,

        }
    ]
  return (
    <>
        <div className="featureProducts">
            <div className="featureLeft">
                <div className="featureTitle">
                    <h3 className="featureH3">{type}</h3>
                    <span className="featureSpan">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tempora beatae molestiae ipsam id eum minima, voluptatibus debitis asperiores ipsa rerum animi in corporis facilis fuga unde quam quis laudantium.
                    </span>
                </div>
            </div>
            <div className="featureRight">
                {
                    FeatureImg.map(Feature =>{
                       return <Card item={Feature}/>
                    })
                }
            </div>

        </div>
    </>
  )
}

export default FeatureProducts