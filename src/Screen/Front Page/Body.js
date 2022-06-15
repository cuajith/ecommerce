import React from 'react'
import Banner from './banner/Banner'
import FirstCarousel from './Carousel/FirstCarousel'

const Body = () => {
  return (
    <div style={{position:"relative"}}>
        <Banner/>
        <FirstCarousel/>
    </div>
  )
}

export default Body