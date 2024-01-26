import React from 'react'
import Skills from './Skills'

const AboutMe = () => {
  return (
    <div>
      <div className='flex justify-between mb-48 mx-44'>

        <div className='flex items-start'><h3 className='text-white text-[100px] z-40 absolute left-[630px] top-[640px] font-title-family leading-none text-start'>Sobre <br />mí</h3></div>
        <div className='flex flex-row'>
          <div className="w-[780px] h-[700px] bg-blue-metal/50 backdrop-blur-[10px] " style={{ clipPath: 'circle(40%)' }}></div>
          <div className='flex flex-col'>
            <div className="flex mb-9 opacity-65 items-baseline mt-40 ml-64">
              <span className="w-[90px] h-3.5 bg-blue-metal relative">
                <span className="w-[53px] rotate-45 absolute h-3.5 -end-3.5 -top-3.5 bg-blue-metal" style={{ clipPath: 'polygon(26% 0%, 100% 0%, 100% 100%, 0% 100%)' }}></span>
                <span className="w-[53px] -rotate-45 absolute h-3.5 -end-3.5 top-3.5 bg-blue-metal" style={{ clipPath: 'polygon(100% 0%, 100% 100%, 26% 100%, 0% 0%)' }}></span>
              </span>
            </div>
            <div className='max-w-96 mt-12'>
              <p className='text-left font-subtitle-family text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quasi fugiat excepturi inventore! Voluptas esse porro repellat blanditiis, inventore labore minima quisquam necessitatibus delectus impedit alias culpa enim eaque fugiat rem a fuga ullam, omnis nisi voluptate dolore. Nesciunt deleniti dolorem expedita quisquam cum ea. Error odit itaque necessitatibus voluptatum vel modi ab! Repudiandae laborum facilis voluptatibus facere nobis sequi!</p>
            </div>
            <div className='max-w-96 mt-12 flex'>
              <button className='bg-blue-metal py-4 px-12 rounded-full text-white text-lg font-bold font-subtitle-family'>Contáctame</button>
            </div>
          </div>

        </div>

      </div>
      <section id='skills'>
        <Skills></Skills>
      </section>

    </div>
  )
}

export default AboutMe
