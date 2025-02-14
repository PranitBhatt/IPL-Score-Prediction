import React from 'react'

export default function Layout({title, messages, children}) {
  return (
    <div className="min-h-screen bg-[#0d2040] font-verdana text-white">
      {/* Navigation Bar */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <img
            src="/static/images.png" // Replace with your image path
            alt="Cricket Logo"
            className="h-16 w-16 rounded-full"
          />
          <ul className="flex space-x-4">
            {title !== 'Login' && (
              <li>
                <a href="/login" className="px-4 py-2 text-white hover:text-red-500 hover:bg-black">
                  Login
                </a>
              </li>
            )}
            {title !== 'Register' && (
              <li>
                <a href="/register" className="px-4 py-2 text-white hover:text-red-500 hover:bg-black">
                  Register
                </a>
              </li>
            )}
            {title !== 'Home' && (
              <li>
                <a href="/home" className="px-4 py-2 text-white hover:text-red-500 hover:bg-black">
                  Home
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Flashed Messages */}
      <div className="container mx-auto mt-8">
        {messages &&
          messages.map((message, index) => (
            <div
              key={index}
              className={`alert alert-${message.category} p-4 mb-4 rounded-lg`}
            >
              {message.text}
            </div>
          ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-8">
        This is where the main content will be injected
        {children}
      </div>
    </div>
  );
};
