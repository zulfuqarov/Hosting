import React from 'react'
import HomeImg from "../assets/img/HomeImg.svg"
import Button from './Button'
const Header = () => {
    return (


        <div className="bg-gradient-to-r from-[#2A77F7] to-[#1243AA] w-full pt-10 lg:pt-12 h-auto lg:h-[630px] max-[1024px]:pb-[30px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Sol Bölüm */}
                    <div className="lg:basis-1/2 text-center lg:text-left">
                    
                        <h1 className='text-white text-[46px] font-bold max-[1024px]:text-[32px] max-[768px]:text-[26px]'>Sürətli və Güvənli VDS, VPS və Hosting Xidmətləri</h1>

                        <p className="text-white text-base md:text-lg lg:text-[18px] font-medium mt-6 lg:mt-8 lg:mb-6 leading-relaxed">
                            Maksimum Performans, Minumum Gecikmə ilə
                            <span className="text-[#EF7F3C]"> VDS</span>,
                            <span className="text-[#EF7F3C]"> VPS</span> və
                            <span className="text-[#EF7F3C]"> Hosting</span> Həllərimizlə Tanış Olun.
                        </p>
                        <div className="mt-6">
                            <Button Text="Indi Başla" />
                        </div>
                    </div>

                    {/* Sağ Bölüm - Görsel */}
                    <div className="lg:basis-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <img className="w-3/4 md:w-2/3 lg:w-full max-w-sm lg:max-w-full" src={HomeImg} alt="Hosting Image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header