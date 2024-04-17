import React from 'react'
import desktop from '../images/bg-boost-desktop.svg'
import mobile from '../images/bg-boost-mobile.svg'
function Hero() {
  return (
    <>
    <section className="hero relative">
      <picture>
        <source media="(min-width: 768px )" srcSet={desktop} />
        <img src={mobile} alt="background" />
      </picture>
      <div className='flex items-center justify-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <h2 className='mb-5 font-bold text-center text-white text-3xl md:text-4xl'>Boost your links today</h2>
        <button className='btn-cyan rounded-full'>Get Started</button>
      </div>
    </section>
    </>
  )
}

export default Hero