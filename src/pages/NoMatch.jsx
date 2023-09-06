import React from 'react'

const NoMatch = () => {
  return (
    
        <div className="h-55 w-55 flex flex-col justify-center items-center">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-[#14b0dd] px-2 text-sm rounded rotate-12 absolute text-white">
                Page Not Found
            </div>
            <button className="mt-5">
                <a className="relative inline-block text-sm font-medium text-[#14b0dd] group active:text-orange-500 focus:outline-none focus:ring">
                    <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#14b0dd] group-hover:translate-y-0 group-hover:translate-x-0"></span>

                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current text-white">
                        <router-link to="/">Go Home</router-link>
                    </span>
                </a>
            </button>
        </div>
  )
}

export default NoMatch