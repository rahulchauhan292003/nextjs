"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const page = () => {

    const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  console.log(password,email)

  return (
    <div className="bg-slate-100 h-screen flex items-center justify-center">
      <form action="" >
        <div className="bg-white p-6 rounded-lg shadow-lg w-[380px]">
        <div className="text-center mb-4">
          <Image src="/blue-logo.png" alt="Logo" className=" mx-auto" width={176} height={96}/>
          <a href=""><p className="font-sans text-sm text-gray-400 ">MiniTrunk ADMIN</p></a>
          
        </div>
        <div className="text-center mb-6">
          <p className="font-sans  text-gray-600">Sign in to your account</p>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700"></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
            required
             autoComplete="off"
          />
        </div>
        <div className="text-right mb-6">
          <p className="text-purple-500 cursor-pointer text-lg font-sans">Forgot Password?</p>
        </div>
        <div>
          <button
            type="submit"
            className="w-full  bg-purple-500 text-white py-2 rounded-3xl text-lg font-sans"
          >
            Sign In
          </button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default page
