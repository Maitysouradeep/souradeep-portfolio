'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";


const navItems =[
    {label: 'Home', href: '#home'},
    {label: 'About', href: '#about'},
    {label: 'Skills', href: '#skills'},
    {label: 'Projects', href: '#projects'},
    {label: 'Contact', href: '#contact'},
];


export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

       return(
        <nav
        className={` fixed top-0 w-full z-50 transition-all duration-100${ 
            scrolled
            ?  'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items items-center h-16">
                {/* Logo */}
                <Link href="#home" className="text-2xl font-bold gradient-text">
                    Portfolio
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                        key={item.label}
                        href={item.href}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* Theme Toggle & Mobile Menu Button */}
                <div className="flex items-center space-x-4">
                    <ThemeToggle/>
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg bg-gray-200 dark:bg-gray-800"
                    >
                        {isOpen ? '✕' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden pb-4 space-x-2">
                    {navItems.map((item) =>(
                        <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
            </div>
        </nav>
       );
}