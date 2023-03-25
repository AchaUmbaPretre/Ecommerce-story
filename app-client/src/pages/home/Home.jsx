import React from 'react'
import Categories from '../../components/categories/Categories'
import FeatureProducts from '../../components/featureProducts/FeatureProducts'
import NewLetter from '../../components/newLetter/NewLetter'
import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <div>
      <Slider/>
      <FeatureProducts type='featured Product'/>
      <Categories/>
      <FeatureProducts type='trending Product'/>
      <NewLetter/>
    </div>
  )
}

export default Home