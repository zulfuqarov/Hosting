import React from 'react'
import LuckImg from '../assets/img/LuckImg.svg'
const Happy = () => {
    return (
        <div className='happy-bg-img h-[500px] flex justify-center items-center bg-gradient-to-r from-[#2A77F7] to-[#1243AA] bg-cover bg-center'>
            <div className='flex flex-col items-center'>
                <div className='mb-6'>
                    <img src={LuckImg} alt="Luck Image" className='w-[200px] md:w-[250px] lg:w-[300px]' />
                </div>
                <div className='text-center px-4 md:px-8 lg:px-16'>
                    <p className='text-white text-[22px] md:text-[28px] font-semibold mb-4'>
                        Tək kliklə quraşdırma – layihənizi asanlıqla başlatmaq üçün hər şey hazırdır!
                    </p>
                    <span className='text-white text-[14px] md:text-[16px]'>
                        Sadəcə bir kliklə WordPress, Node.js, Laravel və daha çoxunu quraşdırın. Kod yazmağa və inkişaf etdirməyə daha çox vaxt ayırın – texniki detalları bizə buraxın. İstənilən layihəyə dərhal başlayın və hosting təcrübənizi daha asan və effektiv edin!
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Happy
