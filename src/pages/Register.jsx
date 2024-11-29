import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='flex items-center justify-center h-full py-[50px] bg-blue-50'>
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-blue-600">
                    Hesabınızı Yaradın
                </h2>
                <p className="text-sm text-center text-gray-600">
                    Qeydiyyatdan keçmək üçün məlumatlarınızı daxil edin
                </p>
                <div className='space-y-6'>
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Tam adı
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required=""
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                        />
                    </div>
                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            E-poçt ünvanı
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required=""
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                        />
                    </div>
                    {/* Password Input */}
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            parol
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required=""
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                        />
                    </div>
                    {/* Confirm Password Input */}
                    <div>
                        <label
                            htmlFor="confirm_password"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Şifrəni təsdiqləyin
                        </label>
                        <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            required=""
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                        />
                    </div>
                    
                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Qeydiyyatdan keçin
                    </button>
                </div>
                {/* Login Link */}
                <p className="text-sm text-center text-gray-600">
                    Artıq hesabınız var?
                    <Link to="/Login" className="font-medium text-blue-600 hover:text-blue-800">
                        Daxil ol
                    </Link>
                </p>
            </div>

        </div>
    )
}

export default Register