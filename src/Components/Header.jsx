import React from 'react'
import { useState, useRef, useEffect } from "react"
import logo from "../assets/logo.svg"

const AvatarMenue = () => {

    const [state, setState] = useState(false)
    const profileRef = useRef()




    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className="relative border-t lg:border-none">
            <div className="">
                <button ref={profileRef} className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
                    onClick={() => setState(!state)}
                >
                    <img
                        src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                        className="w-full h-full rounded-full"
                    />
                </button>
            </div>

        </div>
    )
}

const Header = () => {
    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", path: "javascript:void(0)" },
        { title: "For Parents", path: "javascript:void(0)" },
        { title: "For Providers", path: "javascript:void(0)" },
        { title: "About Us", path: "javascript:void(0)" },
    ]

    const submenuNav = [
        { title: "Overview", path: "javascript:void(0)" },
        { title: "Diagnostic Evaluations", path: "javascript:void(0)" },
        { title: "", path: "javascript:void(0)" },
       
        { title: "", path: "javascript:void(0)" },
        { title: "", path: "javascript:void(0)" },
    ]
    return (
        <header className="text-base lg:text-sm sticky top-0 z-50 bg-white border-b" >
            <div className={`bg-white items-center gap-x-14 px-4 max-w-screen-2xl mx-auto lg:flex lg:px-8 lg:static ${state ? "h-full fixed inset-x-0" : ""}`}>
                <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                    <a href="javascript:void(0)">
                        <img
                            src={logo}
                            width={120}
                            height={50}
                            alt="1Step"
                        />
                    </a>
                    <div className="lg:hidden">
                        <button className="text-gray-500 hover:text-gray-800"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>

                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${state ? "" : "hidden"}`}>
                    <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
                        <form onSubmit={(e) => e.preventDefault()} className='flex-1 items-center justify-start pb-4 lg:flex lg:pb-0'>
                            <div className="flex items-center gap-1 px-2 border rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Find a therapist"
                                    className="w-full px-2 py-2 text-black bg-transparent rounded-md outline-none"
                                />
                            </div>


                        </form>
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <a href={item.path} className="block text-gray-700 hover:text-gray-900">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }

                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                                <a href="javascript:void(0)" className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none">
                                    Sign in
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                    Sign Up
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <nav className="border-b">
                <ul className="flex items-center gap-x-3 max-w-screen-2xl mx-auto px-4 overflow-x-auto lg:px-8">
                    {
                        submenuNav.map((item, idx) => {
                            return (
                                // Replace [idx == 0] with [window.location.pathname == item.path]
                                <li key={idx} className={`py-1 ${idx == 0 ? "border-b-2 border-indigo-600" : ""}`}>
                                    <a href={item.path} className="block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150">
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}


export default Header