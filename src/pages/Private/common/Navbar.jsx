import React from 'react'
// import { logout } from '../../../commonjs/auth'

const Navbar = () => {
  return (
        <div className="z-10 top-0 h-20 border-b bg-white lg:py-2.5">
            <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
                <h5 hidden className="text-2xl text-gray-600 font-medium lg:block"></h5>
                <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className="flex space-x-4">
                    {/* <!--search bar --> */}
                    <div hidden className="md:block">
                        <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                              
                        </div>
                    </div>      
                        
                    {/* <button onClick={logout} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="group-hover:text-gray-700">Déconnexion</span>
                    </button> */}
            
                </div>
            </div>
        </div>
    )
}

export default Navbar