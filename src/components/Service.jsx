import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
const Service = () => {
    return (


        <div className=' py-[30px]'>
            <div className='flex justify-center items-center flex-col'>
                <p className='text-[#2163d9] text-[32px] font-semibold'>Xidmətlərimiz</p>
                <p className='w-[200px] mt-[10px] border border-[#2163d9]'></p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 px-4 pt-[30px]">
                <div>
                    {/* header */}
                    <div className='flex justify-evenly items-center'>
                        <div className='w-[100px]'>
                            <img className='w-full' src="https://www.poyrazhosting.com.tr/templates/poyrazz/assets/img/icons/Host-icon-blue.svg" alt="" />
                        </div>
                        <div className='text-center text-[17px] text-slate-500 font-semibold'>
                            <h3 className='text-[18px] text-[#2163d9] font-bold'>Hostinq</h3>
                            <p>Minimum hostinq qiymətləri</p>
                        </div>
                    </div>
                    {/* old price */}
                    <div className='flex justify-center items-center py-[10px]'>
                        <p className='line-through text-slate-400'>79.99₼ /yerine</p>
                    </div>
                    {/* Price */}
                    <div className='flex justify-center items-center py-[10px]'>
                        <p className='text-[32px] text-[#2163d9] font-bold'>3,92₼ <span className='text-[22px]'>/Ayliq</span></p>
                    </div>
                    {/* parametr */}
                    <div className='py-[10px] px-[40px]'>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i className="far fa-hdd mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>1</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Veb sayt hostinqi</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i className="fa-solid fa-wifi mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>3 GB</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Veb sahəsi</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-headset mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>30 GB</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Trafik</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-memory mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>2 GB</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Ram</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-microchip mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>2 CORE</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Prosessor</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-gauge mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>2 MB</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Io</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-regular fa-hard-drive mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>SSD</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Disk</span>
                        </div>
                    </div>

                    {/* card footer  */}

                    <div className='pt-[30px] mx-auto flex flex-col justify-center items-center'>
                        <Link className='pb-[20px] text-[#2163d9]'>Bütün Paketlər <i className="fa-solid fa-arrow-right pl-[10px]"></i></Link>
                        <Button Text="Indi Al" />
                    </div>
                </div>

                <div>
                    {/* header */}
                    <div className='flex justify-evenly items-center'>
                        <div className='w-[100px]'>
                            <img className='w-full' src="https://www.poyrazhosting.com.tr/templates/poyrazz/assets/img/icons/Host-icon-green.svg" alt="" />
                        </div>
                        <div className='text-center text-[17px] text-slate-500 font-semibold'>
                            <h3 className='text-[18px] text-[#2163d9] font-bold'>VDS</h3>
                            <p>Minimum VDS qiymətləri</p>
                        </div>
                    </div>
                    {/* old price */}
                    <div className='flex justify-center items-center py-[10px]'>
                        <p className='line-through text-slate-400'>129.99₼ /yerine</p>
                    </div>
                    {/* Price */}
                    <div className='flex justify-center items-center py-[10px]'>
                        <p className='text-[32px] text-[#2163d9] font-bold'>6,37₼ <span className='text-[22px]'>/Ayliq</span></p>
                    </div>
                    {/* parametr */}
                    <div className='py-[10px] px-[40px]'>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-headset mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>Limitsiz</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Trafik</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i className="fa-solid fa-wifi mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>Format</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Paneli</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-headset mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>Limitsiz</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Trafik</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-memory mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>2</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Ram</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-microchip mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>2</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Cpu</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-regular fa-hard-drive mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>SSD</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Disk</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-regular fa-hard-drive mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>40 GB</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Disk</span>
                        </div>
                    </div>

                    {/* card footer  */}

                    <div className='pt-[30px] mx-auto flex flex-col justify-center items-center'>
                        <Link className='pb-[20px] text-[#2163d9]'>Bütün Paketlər <i className="fa-solid fa-arrow-right pl-[10px]"></i></Link>
                        <Button Text="Indi Al" />
                    </div>
                </div>

                <div>
                    {/* header */}
                    <div className='flex justify-evenly items-center'>
                        <div className='w-[100px]'>
                            <img className='w-full' src="https://www.poyrazhosting.com.tr/templates/poyrazz/assets/img/icons/Host-icon-blue.svg" alt="" />
                        </div>
                        <div className='text-center text-[17px] text-slate-500 font-semibold'>
                            <h3 className='text-[18px] text-[#2163d9] font-bold'>VPS</h3>
                            <p>Minimum VPS qiymətləri</p>
                        </div>
                    </div>
                    {/* old price */}
                    <div className='flex justify-center items-center py-[10px]'>
                        <p className='line-through text-slate-400'>95.70₼ /yerine</p>
                    </div>
                    {/* Price */}
                    <div className='flex justify-center items-center py-[10px]'>
                        <p className='text-[32px] text-[#2163d9] font-bold'>4,69₼ <span className='text-[22px]'>/Ayliq</span></p>
                    </div>
                    {/* parametr */}
                    <div className='py-[10px] px-[40px]'>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-headset mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>Limitsiz</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Trafik</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i className="fa-solid fa-wifi mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>Format</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Paneli</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-headset mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>Limitsiz</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Trafik</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-memory mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>3</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Ram</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-solid fa-microchip mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>3</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Cpu</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-regular fa-hard-drive mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>SSD</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Disk</span>
                        </div>
                        <div className='py-[15px] border-b text-[15px] border-b-black flex items-center'>
                            <i class="fa-regular fa-hard-drive mr-2"></i>
                            <p className='px-[3px] text-black font-bold'>25 GB</p>
                            <span className='px-[3px] text-slate-400 font-medium'>Disk</span>
                        </div>
                    </div>

                    {/* card footer  */}

                    <div className='pt-[30px] mx-auto flex flex-col justify-center items-center'>
                        <Link className='pb-[20px] text-[#2163d9]'>Bütün Paketlər <i className="fa-solid fa-arrow-right pl-[10px]"></i></Link>
                        <Button Text="Indi Al" />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Service
