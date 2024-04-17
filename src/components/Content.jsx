import React from 'react'
import brandicon from '../images/icon-brand-recognition.svg'
import detailedicon from '../images/icon-detailed-records.svg'
import customizableicon from '../images/icon-fully-customizable.svg'

const data = [
  {
    icon: brandicon,
    title: 'Brand Recognition',
    text: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
  },
  {
    icon: detailedicon,
    title: 'Detailed Records',
    text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
  },
  {
    icon: customizableicon,
    title: 'Fully Customizable',
    text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
  }
]

function Content() {
  return (
    <>
      <section className='bg-gray-100 py-10 lg:py-20 lg:pb-40'>
        <div className='mx-w'>
          <h2 className='text-center text-4xl font-bold text-slate-800 mb-3'>Advanced Statistics</h2>
          <p className='text-center text-slate-400 w-full md:w-1/2 lg:w-1/3 mx-auto mb-3 lg:mb-20'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
          <div className=' relative grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 card'>
            <div className="line"></div>
            {data.map((item, index) => (
              <article key={index} className={`bg-white p-5 rounded relative ${index !== 0 ? `md:mt-${index*7}` : ''}`}>
                <img src={item.icon} alt="" className='p-3 bg-slate-800 rounded-full -mt-12' />
                <h3 className='text-slate-800 mb-2 mt-5 text-lg font-bold'>{item.title}</h3>
                <p className='text-slate-400 text-sm'>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Content