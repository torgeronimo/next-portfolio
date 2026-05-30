"use client";
import {useState} from 'react';
import Image from "next/image";
import {ButtonDark, ButtonLight} from "./ui/button";
import { MoveRight, SendHorizontal, Home} from "lucide-react";

const Hero = () => {
    const [src, setSrc] = useState("/avatar_normal.svg");
    const [isHovered, setIsHovered] = useState(false);
    return (
        // <section className="flex flex-col gap-4" id="hero">
        //     <h2 className="section-title pb-6">Hero</h2>
        // </section>
        <section id="hero" className="flex flex-col justify-center">
        <div className="grid md:grid-cols-2">
            <div className="grid-span-1 flex flex-col justify-center items-center md:items-start gap-4 order-2 md:order-1">
                {/* Heading */}
                <h1 className="hero-title">
                    Victor Geronimo
                </h1>

                {/* Sub */}
                <p className="text-[16px] max-w-130 leading-[1.75] mb-11 text-center md:text-start">
                    Building modern web applications with a focus on performance, accessibility, and user experience
                </p>
                <div className="flex gap-6">
                    <ButtonDark text="View my work" icon={MoveRight}/>
                    <ButtonLight text="Get in touch" />
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
                    {/* <div className='content-wrapper border'>
                        <div className='absolute flex flex-col items-center top-[50%] right-[15%] -translate-y-1/2 translate-x-1/2 pointer-events-none whitespace-nowrap font-normal font-serif text-sm md:text-lg lg:text-2xl'>
                            {isHovered ? "Hire me" : "Hover me"}
                            <Image src={src} alt="hire me" height={100} width={100} className="w-8 md:w-12 lg:w-16 object-contain" onMouseEnter={(()=> setSrc("/avatar_normal.svg"))} onMouseLeave={()=> setSrc("/avatar_working.svg")}/>
                            <Image src="./arrow.svg" alt="pointer" height={100} width={100} className='w-8 md:w-12 lg:w-16'/>                    
                        </div>

                    </div> */}
                </div>
                
            
            </div>
        </div>
        {/* Badge */}
        
        </section>
    )
}

export default Hero
