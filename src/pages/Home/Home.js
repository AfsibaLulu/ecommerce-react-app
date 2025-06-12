import React from 'react'
import Banner from '../Home/Banner'
import Categories from './Categories'
import FeaturedProducts from './FeaturedProducts'
import Offer from './Offer'
import TopElectronics from './TopElectronics'

function Home() {
  return (
    <div>
      <Banner/>
      <Categories/>
      <FeaturedProducts/>
      <Offer/>
      <TopElectronics/>
    </div>
  )
}

export default Home
