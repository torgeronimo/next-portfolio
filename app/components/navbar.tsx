import { TextAlignJustify } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="w-full h-16 text-gray-800 bg-white shadow-md">
            <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4">
                <a href="#" className="logo select-none">VG.</a>
                <TextAlignJustify className='md:hidden'></TextAlignJustify>
                <ul className="space-x-4 hidden md:flex">
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#certification">CERTIFICATION</a></li>
                    <li><a href="#blog">BLOG</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar
