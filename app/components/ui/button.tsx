import {LucideIcon} from "lucide-react";

interface ButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    icon?: LucideIcon;
    
}



const ButtonLight = ({text, href, onClick, icon:Icon}: ButtonProps) => {
    const className = "cta px-6 py-3 bg-white text-(--text) border border-gray-300 rounded hover:bg-(--bg-card) transition-colors duration-300";

    if (href) {
        return (
            <a href={href} className={className}>
                {text} {Icon && <Icon size={16}/>}  
            </a>
        );
    }

    return (
        <button className={className} onClick={onClick}>
            {text} {Icon && <Icon size={16}/>}  
        </button>
    );
}


const ButtonDark = ({text, href, onClick, icon:Icon }: ButtonProps) => {
    const className = "cta w-fit gap-2 px-6 py-3 bg-(--text) text-white rounded hover:bg-(--bg-card) hover:text-(--text) border border-(--text-muted) transition-colors duration-150 inline-flex items-center justify-center";

    if (href) {
        return (
            <a href={href} className={className}>
                {text} {Icon && <Icon size={16}/>}  
            </a>
        );
    }

    return (
        <button className={className} onClick={onClick}>
            {text} {Icon && <Icon size={16}/>}
        </button>
    );
}

export { ButtonLight, ButtonDark }
