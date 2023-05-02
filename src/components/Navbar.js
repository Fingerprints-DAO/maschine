import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const [activePage, setActivePage] = useState(null);

    const links = [
        { page: 'about', label: 'about' },
        { page: 'register', label: 'register' },
        { page: 'FAQ', label: 'FAQ' },
    ];

    useEffect(() => {
        const currentPath = window.location.pathname;
        const currentLink = links.find((link) => currentPath.includes(link.page));
        setActivePage(currentLink ? currentLink.page : null);
    }, []);


    return (
        <div className="relative">
            <div className='md:hidden p-6 flex flex-row'>
                <a id='target' href="/" className="">
                    <img src="FP logo.svg" alt="" className='w-16'/>
                </a>

                <div className='flex-grow'></div>

                <button className={`${showMobileMenu ? 'z-30' : ''}`} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24">
                        {showMobileMenu ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            <div id='mobile' className={`bg-white text-black w-[60%] flex flex-col gap-8 py-10 px-8 text-left z-30 fixed min-h-full top-0 ${showMobileMenu ? '' : 'hidden'}`}>
                <a href="/" className="">
                    <img src="FP logo black.svg" alt="" className='w-16'/>
                </a>
                {links.map((link) => (
                    <a
                        key={link.page}
                        href={`/${link.page}`}
                        className={`font-aktiv-bold text-xl ${activePage === link.page ? 'text-goldyellow' : ''}`}
                        onClick={() => setActivePage(link.page)}
                    >
                        {link.label}
                    </a>
                ))}
                <a className='font-aktiv-bold' href='#'>
                    <button className="text-white bg-black rounded-md px-4 py-1">
                        Connect
                    </button>
                </a>
            </div>

            <div id='mobile fade' className={`bg-black/50 z-20 w-1/2 min-h-full fixed top-0 right-0 ${showMobileMenu ? '' : 'hidden'}`}>

            </div>

            <div className="md:flex flex-row gap-12 py-8 items-center hidden">
                <a href="/">
                    <img src="FP logo.svg" alt="" className='w-16'/>
                </a>
                <div className="flex-grow"></div>
                {links.map((link) => (
                    <a
                        key={link.page}
                        href={`/${link.page}`}
                        className={`font-aktiv-bold text-xl ${activePage === link.page ? 'text-goldyellow' : ''}`}
                        onClick={() => setActivePage(link.page)}
                    >
                        {link.label}
                    </a>
                ))}
                <a className='font-aktiv-bold' href='#'>
                    <button className="text-black bg-white rounded-md px-4 py-1">
                        Connect
                    </button>
                </a>
            </div>
        </div>
    );
}
