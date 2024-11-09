import React from 'react'

const Card = ({ titile, subtitle, toggleDetail, keys }) => {
    return (
        <div key={keys} className="max-w-sm bg-white shadow-lg rounded-lg mx-auto max-[768px]:my-[10px]">
            <div className="bg-blue-500 p-6 rounded-t-lg text-center">
                <p className="text-2xl font-semibold text-white">{titile}</p>
            </div>

            <div className="p-6 space-y-4">
                {
                    subtitle.map((option, index) => (
                        <div key={index} className="flex items-start space-x-3 text-left">
                            <div className='w-full'>
                                <p className="text-[16px] font-medium h-[50px] text-slate-600">{++index}. {option.heading}</p>
                                {/* <p className="text-sm text-gray-400">{option.description}</p> */}
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Detay Linki */}
            <div className="bg-gray-100 p-4 text-center rounded-b-lg">
                <button onClick={() => toggleDetail(keys)} href="#" className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-all">
                    Ətraflı Məlumat
                </button>
            </div>
        </div>

    )
}

export default Card
