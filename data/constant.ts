import { ComponentType } from "react";
import { MoveUpRight } from "lucide-react";
type AboutInfo = {
    title: string;
    desc: string;
    subdesc?: string;
}
type SkillInfo = {
    title: string;
    skills?: string[];
    subSkills?:string[];
}

type CertificationInfo = {
    title: string;
    subtitle: string;
    issuer: string;
    date: string;
    icon?: ComponentType<{ size?: number; className?: string }>;
    href?: string;
};


export const aboutInfo: AboutInfo[] =[
    {
        title: "EDUCATION",
        desc: "B.S Information Technology",
        subdesc: "Mapua Malayan Colleges Laguna"
    },
    {
        title: "LOCATION",
        desc: "Calamba, Laguna — Philippines"
    },
    {
        title: "FOCUS",
        desc: "Front-end development, React / Next.js, UI implementation"
        
    },
    {
        title: "CONTACT",
        desc: "Email: victorgeronimod@gmail.com",
        subdesc: "Phone: +63 966-123-4567"
    }
    
]

export const skillInfo: SkillInfo[] =  [
    {
        title: "CORE",
        skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
        subSkills:["C#", ".NET", "Python"]
    },
    {
        title: "FRONT-END & LIBRARIES",
        skills: ["React", "NextJS", "SCSS", "Tailwind", "Bootstrap", "React Hook Form", "ZOD"],
        subSkills:["Framer","GSAP"]
    },
    {
        title: "BACK-END & DATABASE",
        skills: ["Node.js", "Express","Supabase", "MongoDB", "SQL","PostgreSQL"],

    },
    {
        title: "DESIGN & DEV TOOLS",
        skills: ["Figma", "Git", "GitHub", "VS Code", "Postman", "Lighthouse","Vercel","Claude"],

    },
    {
        title: "WEB DEVELOPMENT CONCEPTS",
        skills: ["REST API","Responsive Design","SEO",  "Performance Optimization", "Agile Methodology", "DRY"]
    },
    {
        title: "LEARNING & EXPLORING",
        subSkills: ["Webflow", "WordPress", "Shopify", "Three.js"],
    },
]

export const featuredProjects = [
    {
        slug:  "emeraldsprings",
        num:   "01",
        href:"https://www.emeraldsprings.online/",
        label: "Live",
        statusColor: "emerald",
        title: "Emerald Springs",
        desc:  " is a modern website for a luxury resort showcase. It features a clean design, smooth animations, and an interactive layout that lets clients browse the resort's premium features, amenities, and rooms.",
        tags:  ["Next.js", "Typescript", "Tailwind", "GSAP", "Resend"],
        img: "/images/emeraldsprings.png"
        
    },
    {
        slug:  "ymshoecleaning",
        num:   "02",
        href:"https://www.ymshoecleaning.store/",
        label: "Live",
        statusColor: "emerald",
        title: "YM Shoe Cleaning",
        desc:  "YM Shoe Cleaning is a business showcase website for a professional footwear care service. It allows customers to explore available cleaning packages, find physical store branches, and book appointments directly through the platform.",
        tags:  ["Next.js", "TypeScript","Tailwind","GSAP","ZOD", "React Hook Form","Resend"],
        img: "/images/ymshoeclean.png"
    },
    {
        slug:  "AptSys",
        num:   "03",
        href:"https://www.aptsys.online/login",
        label: "Ongoing | Open Beta",
        statusColor: "orange",
        title: "Apartment Management System",
        desc:  "AptSys is my personal project, a cloud-based apartment management system designed for landlords. It simplifies property management by allowing landlords to register, input tenant records, and track monthly bills for easy management anytime and anywhere.",
        tags:  ["React", "TypeScript","Nodejs","Tailwind", "Supabase", "Chartjs", "OAuth"],
        img: "/images/aptsys.png"
    },
];

export const miniProjects = [
    {
        slug:  "rickandmortyexplorer",
        num:   "04",
        href:"https://www.rickandmortyexplorer.space/",
        title: "Rick and Morty Explorer",
        desc:  "Rick and Morty Explorer is a web application that allows users to browse and search characters, episodes, and locations from the Rick and Morty universe. This project focuses on efficient data fetching, dynamic routing, and presenting deep lore in a clean, easily searchable interface.",
        tags:  ["Nextjs", "Typescript","Tailwind","TanStack","NodeJs"],
    },
    {
        slug:  "Bloc",
        num:   "05",
        href:"https://bloc-landing-two.vercel.app",
        title: "Bloc",
        desc:  "BLOC is a personal portfolio project designed as a fast, no-nonsense project management app for teams that ship. This simulation combines Kanban boards, sprint planning, and time tracking into a loud, distraction-free workspace concept built to show how modern product teams manage workflow.",
        tags:  ["Nextjs", "Typescript", "Tailwind"],
    },
    {
        slug:  "Brutehaus",
        num:   "06",
        href:"https://brutehaus.vercel.app/",
        title: "Brutehaus",
        desc:  "Brutehaus is a professional company profile landing website designed to showcase a modern brand's identity, services, and creative work. Built as a design-forward personal project, it focuses on striking visual hierarchy and smooth user journeys to present corporate capabilities effectively.",
        tags:  ["Nextjs", "Typescript", "Tailwind"],
    },
    {
        slug:  "Blooms",
        num:   "07",
        href:"https://blooms-project-five.vercel.app",
        title: "Blooms",
        desc:  "Blooms is a boutique flower shop website built to convert a high-fidelity Figma design into a pixel-perfect web application. This showcase platform allows users to browse seasonal floral arrangements, explore custom bouquets, and easily contact the shop for orders.",
        tags:  ["NextJS", "Typescript","Tailwind"],
    },
];

export const posts = [
    { 
        slug: "useeffect-data-fetching", 
        category: "Medium", 
        date: "May 2026", 
        title: "Honeypot Protection: The Simplest Way to Stop Spam Bots From Your Forms", 
        readTime: "3 min read", 
        href:"https://medium.com/p/b4e83928936d" 
    },
    { 
        slug: "react-performance", 
        category: "Medium", 
        date: "May 2026", 
        title: "The Difference Between “div Soup” and Clean HTML Structure", 
        readTime: "2 min read", 
        href:"https://medium.com/@victorgeronimod/the-difference-between-div-soup-and-clean-html-structure-e884df7dc3a7" },


];

export const certifications: CertificationInfo[] = [
    {
        title: "ComnpTIA A+ Certification",
        subtitle: "COMPTIA",
        issuer: "Fit Academy",
        date: "2022",
    },
    {
        title: "CCNA Routing and Switching",
        subtitle: "CISCO NETWORKING ACADEMY",
        issuer: "Cisco",
        date: "2022",
    },
    {
        title: "AWS Backup Support for Amazon S3",
        subtitle: "AWS SIKLAB",
        issuer: "AWS",
        date: "2022",
    },
    {
        title: "More on my LinkedIn profile",
        subtitle: "LINKEDIN",
        issuer: "LinkedIn Certifications",
        date: "2022",
        icon: MoveUpRight,
        href: "https://www.linkedin.com/in/vgmdelacruz/details/certifications/",
    }
]

export const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        })
    }
}