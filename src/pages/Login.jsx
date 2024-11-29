import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex items-center justify-center h-screen py-[60px] bg-blue-50'>
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-blue-600">Xoş gəlmisiniz</h2>
                <p className="text-sm text-center text-gray-600">
                    Zəhmət olmasa hesabınıza daxil olun
                </p>
                <form className="space-y-6">
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
                            Parol
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required=""
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
                        />
                    </div>
                    {/* Remember Me Checkbox */}
                    <div className="flex items-center justify-between">
                        <a
                            href="#"
                            className="text-sm font-medium text-blue-600 hover:text-blue-800"
                        >
                            Şifrəni unutmusunuz?
                        </a>
                    </div>
                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Daxil ol
                    </button>
                </form>
                {/* Sign Up Link */}
                <p className="text-sm text-center text-gray-600">
                    Hesabınız yoxdur?
                    <Link to="/Register" className="font-medium text-blue-600 hover:text-blue-800">
                        Qeydiyyatdan keçin
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
