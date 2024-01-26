import React from 'react'

const Contact = () => {

  return (
    <div className="p-4 mt-44 z-50 overflow-hidden">

      <div className='flex items-center justify-center mb-28'>
        <h4 className="text-8xl text-white font-title-family">Contáctame</h4>
      </div>

      <div className='flex flex-row justify-center'>

        <div className='flex flex-col '>
          <div class="w-96 h-96 relative -mt-80 -z-10 ">
            <div class="absolute w-full h-full border-[90px] border-solid border-transparent rounded-full"></div>
            <div class="absolute w-full h-full border-[90px] border-solid border-transparent rounded-full border-l-blue-metal transform -rotate-45"></div>

            <div class="w-[1152px] h-[1152px] -mt-96 -ml-96 relative">
              <div class="absolute w-full h-full border-[250px] border-solid border-transparent rounded-full"></div>
              <div class="absolute w-full h-full border-[250px] border-solid border-transparent rounded-full border-l-blue-metal transform -rotate-45"></div>
            </div>

          </div>
        </div>


        <form action="" className='text-left w-[450px] flex flex-col space-y-6 text-base font-subtitle-family font-semibold leading-6 text-white'>
          <div className="">
            <label htmlFor="first-name" className="block ml-4">
              Nombre *
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-full h-14 border-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block ml-4">
              Email *
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-full h-14 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="about" className="block ml-4">
              Mensaje *
            </label>
            <div className="mt-2">
              <textarea
                id="about"
                name="about"
                rows={3}
                className="block w-full min-h-44 rounded-[24px] border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-transparent focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <div className="flex items-center justify-center">

            <button
              type="submit"
              className="rounded-full bg-blue-metal px-16 py-3 text-lg font-extrabold text-white shadow-sm hover:bg-blue-metal/50 focus-visible:outline focus-visible:outline-2 focus-visi mt-8 ble:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar
            </button>
          </div>
        </form>
        <div className='flex flex-col'>
          <div className='flecha mt-[355px] flex'>
            <div className="flex relative ml-24 opacity-65">
              <span className="w-[120px] h-3.5 bg-blue-metal relative">
                <span className="w-[53px] rotate-45 absolute h-3.5 -start-3.5 top-3.5 bg-blue-metal" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 74% 100%, 0% 100%)' }} ></span>
                <span className="w-[53px] -rotate-45 absolute h-3.5 -start-3.5 -top-3.5 bg-blue-metal" style={{ clipPath: 'polygon(74% 0%, 100% 100%, 0% 100%, 0% 0%)' }} ></span>
              </span>
            </div>
          </div>
        </div>
        <div className='flex flex-col -mr-64'>

          <div className='puntitos rotate-90 mt-[185px]'>
            <div className="mb-9 flex ">
              <div className="flex items-center space-x-7">
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
              </div>
            </div>
            <div className="mb-9 flex ">
              <div className="flex items-center space-x-7">
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
              </div>
            </div>
            <div className="flex ">
              <div className="flex items-center space-x-7">
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
                <div className="w-2 h-2 backdrop-blur-[10px] bg-blue-metal/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact
