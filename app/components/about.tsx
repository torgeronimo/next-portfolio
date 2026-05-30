import {aboutInfo} from "@/data/constant"
const About = () => {
    return (
        <section className="flex flex-col gap-4" id="about">
                <h2 className="section-title pb-6">About</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
                    <div className="grid-span 1 order-2 md:order:1">
                        <p className="text-body">
                            I&apos;m a versatile web developer with hands-on experience building websites and web applications from the ground up. I take pride in translating Figma designs into pixel-perfect, fully functional products.<br/><br/>
                            I&apos;ve worked within cross-functional teams using Agile methodologies, and I&apos;m always staying current with the latest in the industry. I leverage AI tools to enhance my workflow while staying grounded in solid fundamentals.
                        </p>
                    </div>
                    
                    <div className="grid-span 1 order-2 md:order:1">
                        {aboutInfo.map((a)=>(
                            <div key={a.title} className="border-t border-gray-300 py-4">
                                <h3 className="label pb-2">{a.title}</h3>
                                <p className="text-(--text) text-[0.9em]">{a.desc}</p>
                                {a.subdesc && <p className="text-(--text) text-[0.9em]">{a.subdesc}</p>}
                            </div>
                        ))}
                    </div>
                </div>
        
            
            
        </section>
    )
}

export default About
