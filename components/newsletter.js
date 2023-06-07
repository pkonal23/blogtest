import { Input } from 'postcss'
import React from 'react'

export default function newsletter() {
  return (
    <section className='bg-gray-50 mt-20'>
        <div className='py-5 flex flex-col items-center'>
            <h1 className='font-bold text-3xl' >Subscribe Newsletter</h1>
        </div>
            <div className='py-4 flex flex-col items-center' >
                <input type = "text" className='shadow border rounded flex w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline' placeholder='Enter Your Email' ></input>
                <button className='bg-orange-400 mt-10 rounded-full text-gray-50 text-2xl w-1/6 h-12 '>
                    Subscribe
                </button>
            </div>
    </section>
  )
}
