import React from 'react'
import { useLocation,Link } from 'react-router-dom'
const LinkHeader = () => {

    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <div className={`h-[390px] w-full bg-[url('https://static.tildacdn.com/tild6434-6231-4933-a134-313033643361/COE_HeroSlider_2018_.gif')]
        bg-no-repeat bg-center bg-cover
        `}>
            <div className='w-full h-full bg-[#1F60D4]/50'>
                <div className='flex flex-col justify-center items-center h-full'>
                    <p className='text-[32px] text-white font-semibold'>{pathname.split("/")[1]}</p>
                    <Link className='text-white text-[18px] pt-[30px]' to="/">Ana Səhifə/</Link>
                </div>
            </div>
        </div>
    )
}

export default LinkHeader
