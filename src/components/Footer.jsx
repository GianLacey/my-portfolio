import React from 'react'

const Footer = () => {
    return (
        <div className="p-4 mt-72">

            <div className='flex items-center justify-center mb-20'>
                <div className='flex flex-col'>
                    <h4 className="text-8xl text-white font-title-family mr-32">Sígueme</h4>
                    <div className="flex mt-12">
                        <div className="flex items-center space-x-4">
                            <div className="w-4 h-4 bg-blue-metal rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/95 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/80 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/70 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/65 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/60 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/50 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/45 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/40 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/35 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/30 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/25 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/20 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/15 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/10 rounded-full"></div>
                            <div className="w-4 h-4 bg-blue-metal/5 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row relative space-x-9 ml-20 mt-10">
                    <div className='flex flex-col items-center justify-center space-y-7'>
                        <div className="w-[55px] h-[55px]">
                            <img src="icons/instagram_2111463.ico" alt="Instagram" />
                        </div>
                        <div className="w-[55px] h-[55px]">
                            <img src="icons/linkedin_3536505.ico" alt="Linkedin" />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-7'>
                        <div className="w-[55px] h-[55px]">
                            <img src="icons/whatsapp_3536445.ico" alt="WhatsApp" />
                        </div>
                        <div className="w-[55px] h-[55px]">
                            <img src="icons/386727_telegram.ico" alt="Telegram" />
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex flex-row justify-center mb-20 mt-36'>
                <div className='bg-blue-metal/60 w-[880px] h-[2px]'></div>
            </div>

        </div>
    )
}

export default Footer
