import React from 'react'
import slider from '../images/illustration-working.svg'
function Slider() {
  return (
    <>
      <section className='py-10 lg:py-20 lg:pb-40'>
        <div className='mx-w grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center'>
          <div className='text-center md:text-left'>
            <h2 className='lg:leading-tight lg:text-6xl text-5xl font-bold text-slate-800 mb-5 leading-tight '>More than just shorter links</h2>
            <p className='lg:text-lg text-slate-400 mb-10'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <button className='btn-cyan rounded-full'>Get Started</button>
          </div>
          <div className='w-full'>
            <img src={slider} alt="Image" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Slider