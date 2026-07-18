import { ComponentType } from "react";
import { MoveUpRight } from "lucide-react";
type AboutInfo = {
    title: string;
    desc: string;
    subdesc?: string;
}
type SkillInfo = {
    title: string;
    skills: string[];
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
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
        subSkills:["Hello World"]
    },
    {
        title: "FRAMEWORKS",
        skills: ["Tailwind CSS", "Bootstrap", "Material-UI"],
        subSkills:["Hello World"]
    },
    {
        title: "BACK-END & DATA",
        skills: ["Node.js", "Express", "MongoDB", "SQL"],
        subSkills:["Hello World"]
    },
    {
        title: "DESIGN & TOOLS",
        skills: ["Figma", "Adobe Photoshop", "Git", "GitHub", "VS Code"],
        subSkills:["Hello World"]
    },
    {
        title: "CONCEPTS",
        skills: ["Responsive Design", "Cross-Browser Compatibility", "Performance Optimization", "Accessibility", "SEO"],
        subSkills:["Hello World"]
    },
    {
        title: "OTHER",
        skills: ["Node.js", "Express", "MongoDB", "Python", "Django"],
        subSkills:["Hello World"]
    },
]

export const featuredProjects = [
    {
        slug:  "shopflow",
        num:   "01",
        label: "Live",
        title: "ShopFlow — E-commerce Platform",
        desc:  "A full-stack e-commerce application built for a local retail brand. Features a dynamic product catalogue, real-time inventory, cart with Stripe checkout, and a custom admin dashboard with sales analytics.",
        tags:  ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind"],
        img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        slug:  "kanbanph",
        num:   "02",
        label: "Live",
        title: "KanbanPH — Task Management App",
        desc:  "A Notion-inspired productivity tool with drag-and-drop kanban boards, real-time collaboration, and team workspaces. Built with Next.js and Supabase for instant data sync.",
        tags:  ["Next.js", "TypeScript", "Supabase", "Tailwind", "Framer Motion"],
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

export const miniProjects = [
    {
        slug:  "hr-system",
        num:   "03",
        title: "Internal HR System",
        desc:  "C# .NET backend with a React frontend for employee management, leave tracking, and payroll reporting across 3 branches.",
        tags:  ["C#", ".NET", "React"],
    },
    {
        slug:  "weather",
        num:   "04",
        title: "Weather Dashboard",
        desc:  "Minimal weather app showing 7-day forecasts, UV index, and air quality using OpenWeather API and Chart.js visualisations.",
        tags:  ["Vue.js", "Chart.js"],
    },
    {
        slug:  "portfolio-template",
        num:   "05",
        title: "Dev Portfolio Template",
        desc:  "Open-source, customisable portfolio template for developers. 300+ GitHub stars, widely forked and adapted.",
        tags:  ["HTML/CSS", "Open Source"],
    },
    {
        slug:  "pos",
        num:   "06",
        title: "POS & Inventory System",
        desc:  "Point-of-sale system with live stock tracking, barcode scanning, receipt printing, and end-of-day sales reporting.",
        tags:  ["Electron", "SQLite"],
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