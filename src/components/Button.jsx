import React from 'react'

const Button = ({Text}) => {
  return (
    <button className='w-[200px] h-[50px] bg-[#EF7F3C] text-white text-[18px] font-normal rounded-[20px]'>
        {Text}
    </button>
  )
}

export default Button
