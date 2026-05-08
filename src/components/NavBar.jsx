import { useEffect, useState } from "react";
import { navLinks } from "../constants/index.js";


const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10; // Adjust the scroll threshold as needed
            setScrolled(isScrolled);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'} animate-nav-down`}>
        <div className="inner">
            <a className="logo" href="#hero">
                Arbin Bhasima (ZionTan)
            </a>
            <nav className="desktop">
                <ul className="flex items-center gap-8">
                    {navLinks.map(({ id, href, name }) => (
                        <li key={id} className="nav-li">
                        <a 
                            href={href} 
                            className="text-cyan-400 hover:text-zinc-400 transition-colors duration-300 text-lg font-medium"
                            onClick={() => {}} // Useful for closing mobile menus
                        >
                            {name}
                        </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <a href="#contact" className="contact-btn group">
                <div className="inner">
                    <span> Contact me </span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar