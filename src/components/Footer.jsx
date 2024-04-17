import React from 'react'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'
import logo from '../images/logo2.svg'

function Footer() {
  return (
    <footer className='bg-slate-900 py-10 lg:py-20'>
      <div className='mx-w grid grid-cols-1 gap-5'>
        <article>
          <img src={logo} alt="" />
        </article>
        <article>
          <h3 className='text-white text-lg font-bold tracking-wide'>Features</h3>
          <ul>
            <li>
              <a className="text-slate-200 text-sm mt-1" href='#'>Link Shortening</a>
            </li>
            <li>
              <a className="text-slate-200 text-sm mt-1" href='#'>Branded Links</a>
            </li>
            <li>
              <a className="text-slate-200 text-sm mt-1" href='#'>Analytics</a>
            </li>
            </ul>
        </article>
        <article>
          <h3 className='text-white text-lg font-bold tracking-wide'>Resources</h3>
          <ul>
            <li>
              <a className="text-slate-200 text-sm mt-1" href='#'>Blog</a>
            </li>
            <li>
              <a className="text-slate-200 text-sm mt-1" href='#'>Developers</a>
            </li>
            <li>
              <a className="text-slate-200 text-sm mt-1" href='#'>Support</a>
            </li>
            </ul>
        </article>
        <article>
          <h3 className='text-white text-lg font-bold tracking-wide'>Company</h3>
          <ul>
            <li>
              <a className="text-slate-200 text-sm mt-1"  href='#'>About</a>
            </li>
            <li>
              <a className="text-slate-200 text-sm mt-1" href='#'>Our Team</a>
            </li>
            <li>
              <a className="text-slate-200 text-sm mt-1" href='#'>Careers</a>
            </li>
            <li>
              <a className="text-slate-200 text-sm mt-1" href='#'>Contact</a>
            </li>
            </ul>
        </article>
        <article>
          <ul className='flex items-center'>
            <li>
              <img src={facebook} alt="" />
            </li>
            <li className='ml-4'>
              <img src={twitter} alt="" />
            </li>
            <li className='mx-5'>
              <img src={pinterest} alt="" />
            </li>
            <li>
              <img src={instagram} alt="" />
            </li>
          </ul>
        </article>
        
        </div>  

    </footer>
  )
}

export default Footer