import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import image from '../../assets/world.png'

const HeroSection = () => {
  return (
    <main className='hero-section main'>
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className='heading-xl'>
            Explore the World, One Country at a Time.
          </h1>
          <p className='paragaph'>
            Discover the History, Culture, and beauty of evvery nation. Sort,
            Search, and filter through contries to find the details you
          </p>
          <button className='btn btn-darken btn-inline bg-white-box'>
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
      <div className="hero-image">
        <img src={image} alt="world beauty" className='banner-image' />
      </div>
      </div>
    </main>
  )
}

export default HeroSection
