import React from 'react'
import HostingorImg from "../assets/img/HostingorImg.svg"
import CheckIcon from '../assets/img/CheckIcon.svg'
const Hostingor = () => {
    return (
        <div className='flex flex-col justify-between items-center py-[60px] h-[100%]'>
            <div className='flex flex-col justify-center items-center pb-[30px] max-[768px]:pb-[0px]'>
                <p className='text-[32px] font-bold pb-[10px] w-[400px] max-[768px]:w-[350px] max-[768px]:text-[26px] text-center'>Limitsiz Güc və Sürət ilə Hosting Təcrübəsi</p>
                <span className='text-slate-500 w-[500px] text-center max-[768px]:w-[300px] '>Sürətli, Güvənli və Yüksək Performanslı Hosting ilə tanış olun. İstənilən layihə üçün ideal platforma!</span>
            </div>
            <div>
                <img src={HostingorImg} alt="" />
            </div>
            <div className='flex flex-wrap pt-[30px] space-x-6 max-[768px]:flex-col max-[768px]:space-x-0'>
                <div className='flex-1'>
                    <div className='flex py-[20px]'>
                        <img src={CheckIcon} alt="" />
                        <p className='pl-[10px]'>Yüksək sürət və etibarlı performans.</p>
                    </div>
                    <div className='flex py-[20px]'>
                        <img src={CheckIcon} alt="" />
                        <p className='pl-[10px]'>Təhlükəsiz SSL sertifikatları ilə qorunma.</p>
                    </div>
                    <div className='flex py-[20px]'>
                        <img src={CheckIcon} alt="" />
                        <p className='pl-[10px]'>7/24 texniki dəstək.</p>
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='flex py-[20px]'>
                        <img src={CheckIcon} alt="" />
                        <p className='pl-[10px]'>Avtomatik backup və sürətli yükləmə.</p>
                    </div>
                    <div className='flex py-[20px]'>
                        <img src={CheckIcon} alt="" />
                        <p className='pl-[10px]'>Hər növ layihə üçün mükəmməl uyum.</p>
                    </div>
                    <div className='flex py-[20px]'>
                        <img src={CheckIcon} alt="" />
                        <p className='pl-[10px]'>Asan və sürətli qurulum, idarəetmə paneli ilə rahatlıq.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hostingor
