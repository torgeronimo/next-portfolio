import Link from "next/link";
import { certifications } from "@/data/constant";

const Certification = () => {
    return (
        <section className="flex flex-col gap-4" id="certification">
            <h2 className="section-title pb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                
                {/* {certifications.map((c) => (
                    <div key={c.title} className="flex flex-col gap-2.5 border border-(--border) rounded-xl p-5 bg-(--bg-card)">
                        <div className="mono-label">{c.subtitle}</div>
                        <div className="project-name">{c.title}</div>
                        <div className="flex items-center justify-between mt-1">
                            <p className="mono-sm">{c.date}</p>
                            {c.icon && <c.icon size={16} className="text-(--text-faint) transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                        </div>
                    </div>
                ))} */}
    
                {certifications.map((c) => {
                    const CardContent = (
                        <div className="flex flex-col gap-2.5 border border-(--border) rounded-xl p-5 bg-(--bg-card) hover:bg-opacity-80 transition-all hover:-translate-y-1 hover:shadow-md duration-150">
                            <div className="mono-label text-(--text-muted) transition-colors duration-150 group-hover:text-(--text-faint)">{c.subtitle}</div>
                            <div className="project-name">{c.title}</div>
                            <div className="flex items-center justify-between mt-1">
                                <p className="mono-sm text-(--text-muted) transition-colors duration-150 group-hover:text-(--text-faint)">{c.issuer} • {c.date}</p>
                                {c.icon && <c.icon size={16} className="text-(--text-faint) transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                            </div>
                        </div>
                    );

                    if (c.href) {
                        return (
                            <Link key={c.title} href={c.href} target="_blank" rel="noopener noreferrer">
                                {CardContent}
                            </Link>
                        );
                    }

                    return (
                        <div key={c.title}>
                            {CardContent}
                        </div>
                    );
                })}


            </div>
        </section>
    )
}

export default Certification
