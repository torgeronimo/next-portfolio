"use client";
import {useState, useEffect} from 'react';
import Image from "next/image";
import {ButtonDark, ButtonLight} from "./ui/button";
import { MoveRight, SendHorizontal} from "lucide-react";


const Hero = () => {
    const [src, setSrc] = useState("/avatar_normal.svg");
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Clean up the event listener on unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="hero" className="flex flex-col justify-center pb-20">
            <div className="grid md:grid-cols-2">
                <div className="grid-span-1 flex flex-col justify-center items-center md:items-start gap-4 order-2 md:order-1">
                    {/* Heading */}
                    <span className="text-3xl font-bold hidden md:block">&lt;/&gt;</span>
                    <h1 className="hero-title">
                        Victor Geronimo
                    </h1>
                    <p className="mono text-[1rem]">Web Developer | Frontend Specialist</p>
                    {/* Sub */}
                    <p className="text-[16px] max-w-130 leading-[1.75] mb-11 text-center md:text-start">
                        {/* Building modern web applications with a focus on performance, accessibility, and user experience */}
                        I design and build fast, accessible, and scalable web applications that combine clean code with thoughtful user experiences.
                    </p>
                    <div className="flex gap-6">
                        <ButtonDark text="View my work" href="#projects" icon={MoveRight}/>
                        <ButtonLight text="Get in touch" href="#contact" />
                    </div>
                </div>
                <div className="grid-span-1 flex items-center justify-center order-1 md:order-2">

                    <div className="img-wrapper relative" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>

                        {/* <Image src={src} alt="hire me" height={100} width={100} className="md:w-125 w-90 object-contain" onMouseEnter={(()=> setSrc("/avatar_working.svg"))} onMouseLeave={()=> setSrc("/avatar_normal.svg")}/> */}
                        <Image src={src} alt="hire me" height={100} width={100} className="md:w-125 w-90 object-contain" onMouseEnter={(()=> setSrc("/avatar_working.svg"))} onMouseLeave={()=> setSrc("/avatar_normal.svg")}/>
                        <div className="absolute top-[50%] right-[15%] -translate-y-1/2 translate-x-1/2 pointer-events-none w-20"> 
                            {isHovered ? <p className='text-(--accent) font-bold'>Hire me</p> : <p className='text-(--accent) font-bold'>Hover me</p> }
                            <Image src="./arrow.svg" alt="pointer" height={100} width={100} className='w-8 md:w-12 lg:w-16'/>

                        </div>
                    
                        
                    </div>
                    
                
                </div>
            </div>
            {/* <div className="mx-auto pt-30 md:flex flex-col items-center gap-2 hidden">
                <p className="label animate-pulse">Scroll</p>
                <div className="h-30 w-px bg-(--border) animate-pulse"></div>
            </div> */}
            <div className={`mx-auto pt-30 md:flex flex-col items-center gap-2 hidden transition-opacity duration-300 ${isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <p className="label animate-pulse">Scroll</p>
                <div className="h-30 w-px bg-(--border) animate-pulse"></div>
            </div>
        </section>
    )
}

export default Hero
