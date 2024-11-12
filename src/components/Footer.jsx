import React from 'react'
import Button from './Button'

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-[#2A77F7] to-[#1243AA] w-full h-[217px]">
            <div className="container mx-auto h-full ">
                <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center h-full w-full text-center md:text-left">
                    <div>
                        <p className="text-[24px] md:text-[36px]  text-white font-bold">
                            Bizim hosting ilə <br className="hidden md:block" /> serverinizi başlatın.
                        </p>
                    </div>
                    <div className='max-[768px]:pt-[50px]'>
                        <Button Text="Indi başlayın" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
