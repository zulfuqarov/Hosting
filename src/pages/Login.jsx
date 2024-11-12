import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='flex items-center justify-center h-full py-[60px] bg-blue-50'>
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center text-blue-600">Welcome Back</h2>
                <p className="text-sm text-center text-gray-600">
                    Please login to your account
                </p>
                <form className="space-y-6">
                    {/* Email Input */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email Address
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
                            Password
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
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        <a
                            href="#"
                            className="text-sm font-medium text-blue-600 hover:text-blue-800"
                        >
                            Forgot password?
                        </a>
                    </div>
                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Sign In
                    </button>
                </form>
                {/* Sign Up Link */}
                <p className="text-sm text-center text-gray-600">
                    Don't have an account?
                    <Link to="/Register" className="font-medium text-blue-600 hover:text-blue-800">
                        Sign up
                    </Link>
                </p>
            </div>

        </div>
    )
}

export default Login
