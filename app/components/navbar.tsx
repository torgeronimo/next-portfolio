"use client";

import { useEffect, useState } from "react";
import { TextAlignJustify, X } from "lucide-react";

const sections = [
    "about",
    "skills",
    "projects",
    "certification",
    "blog",
    "contact",
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')

        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
            }
            })
        },
        {
            rootMargin: '-40% 0px -45% 0px',
            threshold: 0,
        }
        )

        sections.forEach((section) => observer.observe(section))

        return () => {
        observer.disconnect()
        }
    }, [])

    // Active section tracking
    // useEffect(() => {
    //     const handleScroll = () => {
    //     const scrollPosition = window.scrollY + 100;

    //     sections.forEach((section) => {
    //         const element = document.getElementById(section);
    //         if (!element) return;

    //         const offsetTop = element.offsetTop;
    //         const height = element.offsetHeight;

    //         if (
    //         scrollPosition >= offsetTop &&
    //         scrollPosition < offsetTop + height
    //         ) {
    //         setActiveSection(section);
    //         }
    //     });
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
            <div className="relative max-w-7xl mx-auto h-16 flex items-center justify-between px-4">
                
                {/* Logo */}
                <a href="#" className="select-none logo">
                VG.
                </a>
                
                {/* Mobile Icon */}
                <div className="md:hidden">
                {menuOpen ? (
                    <X
                    className="cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                    />
                ) : (
                    <TextAlignJustify
                    className="cursor-pointer"
                    onClick={() => setMenuOpen(true)}
                    />
                )}
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6">
                {sections.map((section) => (
                    <li key={section}>
                    <a
                        href={`#${section}`}
                        className={`transition-colors ${
                        activeSection === section
                            ? "text-black font-semibold"
                            : "text-gray-500 hover:text-black"
                        }`}
                    >
                        {section.toUpperCase()}
                    </a>
                    </li>
                ))}
                </ul>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                
                <ul className="absolute left-0 w-full md:hidden flex flex-col bg-white shadow-md border-t z-50 overflow-hidden transition-all duration-300 ease-in-out">
                {sections.map((section) => (
                    <li key={section}>
                    <a
                        href={`#${section}`}
                        onClick={() => setMenuOpen(false)}
                        className={`block px-4 py-3 transition-colors ${
                        activeSection === section
                            ? "text-black font-semibold"
                            : "text-gray-500"
                        }`}
                    >
                        {section.toUpperCase()}
                    </a>
                    </li>
                ))}
                </ul>

            )}
        </nav>
    );
    };

export default Navbar;