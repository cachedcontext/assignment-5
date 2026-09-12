import { useState } from 'react';

const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact']

    return (
        <div>
            <header className='bg-white sticky top-0 z-50 border-b border-slate-100'>
                <nav className='flex justify-between items-center mx-auto h-16 px-4 sm:px-6 lg:px-8 max-w-7xl'>
                    <button className='p-2 md:hidden' onClick={() => setMenu(!menu)}>
                        <div className='space-y-1.5'>
                            <div className='bg-slate-700 h-0.5 w-6'></div>
                            <div className='bg-slate-700 h-0.5 w-6'></div>
                            <div className='bg-slate-700 h-0.5 w-6'></div>
                        </div>
                    </button>

                    <a href="#" className='flex items-center'>
                        <img src="/logo-text.png" alt="logo" className='h-9'/>
                    </a>
                    <ul className='hidden md:flex items-center gap-8'>
                        {links.map((link) => (
                            <li key={link}>
                                {link === 'Home' ? (
                                    <a href="#" className='font-medium text-sm text-pink-600 hover:text-pink-600'>
                                        {link}
                                    </a>) : (
                                        <a href="#" className='font-medium text-sm text-slate-600 hover:text-pink-600'>
                                            {link}
                                        </a>
                                    )}
                            </li>
                        ))}
                    </ul>

                    <div className='flex items-center gap-3'>
                        <a href="#" className='text-xs font-semibold text-slate-700 hover:text-pink-600'>
                            Sign In
                        </a>
                        <a href="#" className='bg-[#D91B7E] text-sm font-semibold text-white rounded-full px-5 py-2 hover:bg-[#b01565]'>
                            Sign Up
                        </a>
                    </div>
                </nav>

                {menu && (
                    <ul className='bg-white md:hidden border-t border-slate-100 px-4 py-3'>
                        {links.map((link) => (
                            <li key={link}>
                                <a href="#" className='block text-sm font-medium text-slate-700 py-2 hover:text-pink-600'>{link}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </header>
        </div>
    );
};

export default Navbar;