import React from 'react'
import HomeImg from "../assets/img/HomeImg.svg"
import HomeImg2 from "../assets/img/HomeImg2.svg"
import HomeImg3 from "../assets/img/HomeImg3.svg"
import HomeImg4 from "../assets/img/ssss.svg"

import Button from './Button'

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';



// import required modules

const Header = () => {
    return (


        <div className="bg-gradient-to-r from-[#2A77F7] to-[#1243AA] w-full pt-10 lg:pt-12 h-auto lg:h-[630px] max-[1024px]:pb-[30px]">
            <div className="container mx-auto px-4">
                <Swiper
                    spaceBetween={30}
                    className="mySwiper"
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}

                >

                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            {/* Sol Bölüm */}
                            <div className="lg:basis-1/2 text-center lg:text-left">

                                <h1 className='text-white text-[46px] font-bold max-[1024px]:text-[32px] max-[768px]:text-[26px]'>Çoxşaxəli və Güclü Texnologiya Dəstəyi!</h1>

                                <p className="text-white text-base md:text-lg lg:text-[18px] font-medium mt-6 lg:mt-8 lg:mb-6 leading-relaxed">
                                    Node.js, PHP, Laravel, ASP.NET və daha çoxunu dəstəkləyən Hosting!
                                </p>
                                <div className="mt-6">
                                    <Button Text="Indi Başla" />
                                </div>
                            </div>

                            {/* Sağ Bölüm - Görsel */}
                            <div className="lg:basis-1/2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                                <img
                                    className="w-3/4 md:w-2/3 lg:w-full max-w-sm lg:max-w-full " src={HomeImg2} alt="Hosting Image" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            {/* Sol Bölüm */}
                            <div className="lg:basis-1/2 text-center lg:text-left">

                                <h1 className='text-white text-[32px] md:text-[46px] font-bold text-left'>
                                    Niyə Bizi Seçməlisiniz?
                                </h1>

                                <p className="text-white text-sm md:text-base lg:text-lg font-medium mt-4 lg:mt-6 leading-relaxed text-left">
                                    Bizi seçdiyinizdə müasir texnologiyalarla güclü, təhlükəsiz və sürətli hosting həlləri əldə edirsiniz.
                                    Yüksək performans, etibarlılıq və mükəmməl müştəri dəstəyi ilə xidmətinizdəyik.
                                </p>
                                <p className="text-white text-sm md:text-base lg:text-lg font-medium mt-4 lg:mt-6 leading-relaxed text-left">
                                    Müasir texnologiyalarla — <span className="text-[#EF7F3C]">Node.js</span>,
                                    <span className="text-[#EF7F3C]">React</span>, <span className="text-[#EF7F3C]">C#</span>,
                                    <span className="text-[#EF7F3C]">ASP.NET</span> — layihələriniz üçün tam uyğun həllər təqdim edirik.
                                    <br />
                                    <span className="text-[#EF7F3C]">MSSQL</span> və <span className="text-[#EF7F3C]">MySQL</span> dəstəyi ilə güclü performans təmin edirik.
                                </p>
                                <div className="mt-6">
                                    <Button Text="Indi Başla" />
                                </div>
                            </div>

                            {/* Sağ Bölüm - Görsel */}
                            <div className="lg:basis-1/2 mt-8 lg:mt-0 flex justify-center h-[450px] max-[991px]:h-full lg:justify-end">
                                <img className="w-3/4 md:w-2/3 lg:w-full max-w-sm lg:max-w-full" src={HomeImg3} alt="Hosting Image" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                            {/* Sol Bölüm */}
                            <div className="lg:basis-1/2 text-center lg:text-left">

                                <h1 className='text-white text-[46px] font-bold max-[1024px]:text-[32px] max-[768px]:text-[26px]'>Hər Kəs Üçün Etibarlı Hosting Həlləri!</h1>

                                <p className="text-white text-base md:text-lg lg:text-[18px] font-medium mt-6 lg:mt-8 lg:mb-6 leading-relaxed">
                                    Sizin üçün hazırladığımız
                                    <span className="text-[#EF7F3C]"> VDS</span>,
                                    <span className="text-[#EF7F3C]"> VPS</span> və
                                    <span className="text-[#EF7F3C]"> Hosting</span> həlləri ilə texnologiyaya bir addım daha yaxın olun !
                                </p>
                                <div className="mt-6">
                                    <Button Text="Indi Başla" />
                                </div>
                            </div>

                            {/* Sağ Bölüm - Görsel */}
                            <div className="lg:basis-1/2 mt-8 lg:mt-0 flex justify-center h-[450px] max-[991px]:h-full lg:justify-end">
                                <img className="w-3/4 md:w-2/3 lg:w-full max-w-sm lg:max-w-full" src={HomeImg4} alt="Hosting Image" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Header