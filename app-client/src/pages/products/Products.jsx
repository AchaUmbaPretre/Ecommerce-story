import React from 'react'
import Card from '../../components/card/Card'
import FeatureProducts from '../../components/featureProducts/FeatureProducts'
import './products.scss'

function Products() {
  return (
    <>
      <div className="products">
        <div className="productsLeft">
          <div className="productsItems">
            <h3>Product Categories</h3>
            <div className="productsRowItems">
              <input type="checkbox" id='1' value={1}/>
              <label htmlFor="1">hat</label>
            </div>
            <div className="productsRowItems">
              <input type="checkbox" id='1' value={2} />
              <label htmlFor="2">t-shirt</label>
            </div>
          </div>
          <div className="productsItems">
            <h3>Filter by price</h3>
            <div className="productsRowItems">
              <span>0</span>
              <input type="range" min={0} max={1000} id='' />
              <span>1000</span>
            </div>
            
          </div>
          <div className="productsItems">
            <h3>Sort by</h3>
            <div className="productsRowItems">
              <input type="radio" id='asc' name='price' />
              <label htmlFor="asc">Price (Lowest first)</label>
            </div>
            <div className="productsRowItems">
              <input type="radio" id='desc'name='price'/>
              <label htmlFor="desc">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div className="productsRight">
          <FeatureProducts/>
        </div>
      </div>
    </>
  )
}

export default Products