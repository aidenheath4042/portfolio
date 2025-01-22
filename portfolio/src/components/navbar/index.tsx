import {useEffect, useState} from 'react';


export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return(
        <>
        
        {isMobile ? (
            <>
                <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
                    <div className="text-lg font-bold">
                        <a href="/" className="hover:text-accent transition-colors">
                            LOGO
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            {/* Hamburger icon */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </nav>
                <div className={`flex gap-4  ${isOpen ? 'block' : 'hidden'} md:flex md:flex-row md:h-8`}>
                    <div className='relative w-screen gap-4 block md:flex md:flex-row md:h-8 bg-gray-700 '>
                        <div className='flex flex-col justify-center'>
                            <a href="/" className="py-2 w-full hover:text-accent transition-colors">
                                Home
                            </a>
                            <a href="/projects" className="py-2  mt-2 w-full hover:text-accent transition-colors">
                                My Projects
                            </a>
                            <a href="/about" className="py-2  mt-2 w-full hover:text-accent transition-colors">
                                About Me
                            </a>
                            <a href='/contact' className="py-2  mt-2 w-full hover:text-accent transition-colors">
                                Contact
                            </a>
                        </div>  
                    </div>
                </div>
            </>
        ) : (
            <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">
            <div className="text-lg font-bold">
                <a href="/" className="hover:text-accent transition-colors">
                    LOGO
                </a>
            </div>
            <div className="flex gap-4">
                <a href="/projects" className="hover:text-accent transition-colors">
                    My Projects
                </a>
                <a href="/about" className="hover:text-accent transition-colors">
                    About Me
                </a>
            </div>
            <a href='/contact' className="border-4 border-fuchsia-700 px-4 py-2 rounded-xl">
                Contact
            </a>
        </nav>
        )
    }
    </>
)}