import React, { useState } from 'react'
import desktopBackground from '../images/bg-shorten-desktop.svg'
import mobileBackground from '../images/bg-shorten-mobile.svg'


function Short() {
  const [text, setText] = useState('')
  const [buttonText, setButtonText] = useState("Copy")

  const handleSubmit = async (e) => {
  e.preventDefault()

  if(!text) {
    alert("Please add a link to shorten")
  } else {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://cleanuri.com/api/v1/shorten'
    const res = await fetch(proxyUrl + targetUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: `url=${encodeURIComponent(text)}`
})

if (!res.ok) {
  console.error(`API request failed with status ${res.status}`)
  const text = await res.text()
  console.error(`Response text: ${text}`)
  return
}

const data = await res.json()
console.log(data)
setText(data.result_url)
  }
}
  const handleCopy = () => {
  navigator.clipboard.writeText(text)
    .then(() => {
      alert('Copied to clipboard!');
      setButtonText('Copied!');
      setTimeout(() => setButtonText("Copy"), 2000);
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy text: ' + err.message);
    });
}

  return (
    <>
      <section className='mx-w shortener relative'>
        <picture>
          <source media='(min-width: 768px)' srcSet={desktopBackground} />
          <img src={mobileBackground} alt="Background for link shortener" />
        </picture>

        <form className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2' onSubmit={handleSubmit}>
          <div className='flex flex-col md:flex-row'>
            <input type="url" placeholder='Shorten a link here' className='w-full py-2 rounded-lg mb:mb-0 mb-2 md:mb-2/3 text-center' value={text} onChange={(e) => setText(e.target.value)}/>
            <button type='submit' className='btn-cyan rounded-lg w-full md:w-40 md:ml-5 mb-2'onClick={handleSubmit}>Shorten It!</button>
          </div>
        </form>
        <div className='flex flex-col items-center justify-center bg-white text-center md:flex-row md:justify-between mt-3 mb-3'>
          <article>
            <h5 className='mb-3 md:mb-0 md:items-center'>{text}</h5>
          </article>
          <article>
            <ul className='md:flex'>
              <li>
                <button className='btn-cyan rounded-lg text-sm focus:bg-slate-800 mb-3"' onClick={handleCopy}>{buttonText}</button>
                </li>
            </ul>
          </article>
        </div>
      </section> 
    </> 
  )
}

export default Short