import React, { useState } from 'react'


export default function Register() {
    const [username,setUsername] = useState("");
    
    const [email,setEmail] = useState("");

    const [password,setPassword] = useState("");

    const [confirmpassword , setConfirmPassword] = useState("");

    const [submitted,setSubmitted] = useState(false);
    const [error,setError] = useState(false);

    const handleName = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(username === "" || email === "" || password === "" || confirmpassword === ""){
            setError(true);
        }
        else
        {
            setError(false);
            setSubmitted(true);
        }
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>User {username} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>Please enter all the fields correctl </h1>
            </div>
        );
    };


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-2xl shadow-lg">
                {/* <h1 className="text-3xl font-bold text-center text-white mb-6">Register</h1> */}
                <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
                <form className="space-y-4">
                    <div className="form-group">
                        <label className="block text-lg font-medium text-white" htmlFor="username">Username</label>
                        <input 
                            onChange={handleName}
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
                        <label className="block text-lg font-medium text-white" htmlFor="email">Email</label>
                        <input 
                            onChange={handleEmail}
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
                        <label className="block text-lg font-medium text-white" htmlFor="password">Password</label>
                        <input 
                            onChange={handlePassword}
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
                        <label className="block text-lg font-medium text-white" htmlFor="confirm_password">Confirm Password</label>
                        <input 
                            onChange={handleConfirmPassword}
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
                            onChange={handleSubmit}
                            type="submit" 
                            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Submit
                        </button>
                    </div>
                </form>

                <p className="mt-4 text-sm text-center text-white">
                    Already have an account?
                    <a className="ml-1 text-blue-500 hover:underline" href="/login">Sign In</a>
                </p>
            </div>
        </div>
    );
}
