import { posts } from "@/data/constant";
import Link from "next/link";
import { MoveRight, MoveUpRight } from "lucide-react";

const blog = () => {
    return (
        <section className="flex flex-col gap-4" id="blog">
            <h2 className="section-title pb-6">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                {posts.map((p) => (
                    <Link key={p.slug} href={p.href} target="_blank"
                        className="flex flex-col gap-2.5 border border-(--border) rounded-xl p-5 bg-(--bg-card)
                                no-underline text-inherit transition-all duration-150 group
                                hover:border-[#C0BAB0] hover:bg-(--text) hover:text-(--tag-text) hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                        <div className="mono-label text-(--text-muted) transition-colors duration-150 group-hover:text-(--text-faint)">{p.category}</div>
                        <div className="project-name">{p.title}</div>
                        <div className="flex items-center justify-between mt-1">
                            <p className="mono-sm text-(--text-muted) transition-colors duration-150 group-hover:text-(--text-faint)">{p.date} • {p.readTime}</p>
                            <MoveUpRight size={16} className="text-(--text-faint) transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>


                    </Link>
                ))}
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                {posts.map((p) => (
                    <Link key={p.slug} href={p.href} target="_blank"
                        className="flex flex-col gap-2.5 border border-(--border) rounded-xl p-5 bg-(--bg-card)
                                no-underline text-inherit transition-all duration-150 group
                                hover:bg-cream-dark hover:border-[#C0BAB0] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                        <div className="flex items-center justify-between mb-1">
                            <p className="mono-label">{p.category}</p>
                            <p className="mono-label">{p.date}</p>
                        </div>
                        
                        <div className="project-name">{p.title}</div>
                        <div className="flex flex-wrap gap-2 mt-1">
                            <p className="mono-sm">{p.readTime}</p>
                            <MoveRight size={16} className="text-(--text-faint) transition-transform group-hover:translate-x-2 group-hover:-translate-y-0.5" />
                        </div>


                    </Link>
                ))}
            </div> */}
        </section>
    )
}

export default blog
