import React, { useState } from 'react'


export default function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword , setCofirmPassword] = useState("");

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h1>
                <form className="space-y-4">
                    <div className="form-group">
                        <label className="block text-lg font-medium text-gray-700" htmlFor="username">Username</label>
                        <input 
                            id="username" 
                            name="username" 
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            type="text" 
                            placeholder="Enter your username"
                        />
                        <div className="text-sm text-red-500 mt-1">
                            {/* Display error messages dynamically here */}
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="block text-lg font-medium text-gray-700" htmlFor="email">Email</label>
                        <input 
                            id="email" 
                            name="email" 
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            type="email" 
                            placeholder="Enter your email"
                        />
                        <div className="text-sm text-red-500 mt-1">
                            {/* Display error messages dynamically here */}
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="block text-lg font-medium text-gray-700" htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            name="password" 
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            type="password" 
                            placeholder="Enter your password"
                        />
                        <div className="text-sm text-red-500 mt-1">
                            {/* Display error messages dynamically here */}
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="block text-lg font-medium text-gray-700" htmlFor="confirm_password">Confirm Password</label>
                        <input 
                            id="confirm_password" 
                            name="confirm_password" 
                            className="w-full px-4 py-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                            type="password" 
                            placeholder="Re-enter your password"
                        />
                        <div className="text-sm text-red-500 mt-1">
                            {/* Display error messages dynamically here */}
                        </div>
                    </div>

                    <div className="form-group">
                        <button 
                            type="submit" 
                            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Submit
                        </button>
                    </div>
                </form>

                <p className="mt-4 text-sm text-center text-gray-600">
                    Already have an account?
                    <a className="ml-1 text-blue-500 hover:underline" href="/login">Sign In</a>
                </p>
            </div>
        </div>
    );
}
