import React from 'react'

const Accordion = ({ toggleDetail, hostingOptions, hostingIndex }) => {
    return (
        <div className="p-6 md:p-10 lg:p-16 text-gray-800 space-y-8 bg-gray-100 min-h-screen">
            <button onClick={toggleDetail} className="text-blue-700 text-lg hover:text-blue-900 focus:outline-none">
                <i className="fa-solid fa-arrow-left"></i>
            </button>
            <p className="text-3xl md:text-4xl font-bold text-blue-700 text-center">
                {hostingOptions[hostingIndex].title}
            </p>

            {
                hostingOptions[hostingIndex].subtitle.map((options,index) => (
                    <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-lg ">
                        <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">
                           {++index}. {options.heading}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {
                                options.description
                            }
                        </p>
                    </div>
                ))
            }
        </div>

    )
}

export default Accordion 
