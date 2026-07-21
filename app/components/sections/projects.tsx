import { featuredProjects, miniProjects } from "@/data/constant";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
const Projects = () => {
    const statusClasses = {
    emerald: {
        ping: "bg-emerald-400",
        dot: "bg-emerald-500",
    },
    orange: {
        ping: "bg-orange-400",
        dot: "bg-orange-500",
    },
    gray: {
        ping: "bg-gray-400",
        dot: "bg-gray-500",
    },
    } as const;

    return (
    <section className="flex flex-col gap-4" id="projects">
        <h2 className="section-title pb-6">Projects</h2>

        {featuredProjects.map((p) => {
        const colors =
            statusClasses[p.statusColor as keyof typeof statusClasses] ??
            statusClasses.gray;

        return (
            <Link
            key={p.slug}
            href={p.href}
            target="_blank" 
            rel="noopener noreferrer"
            className="block border border-(--border) rounded-2xl overflow-hidden mb-3
            no-underline text-inherit transition-all duration-200 group
            hover:border-[#C0BAB0] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] z-0"
            >
            {/* Thumb */}
            <div className="h-[180px] flex items-center justify-center relative overflow-hidden bg-(--tag-bg)">
                {p.img && (
                <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-103"
                    priority={p.num === "01"}
                />
                )}

                <span className="font-serif text-[48px] tracking-[-0.04em] text-(--text-muted) select-none">
                {p.title.split(" — ")[0]}
                </span>

                <span className="absolute top-4 left-5 font-mono text-[11px] text-(--text-muted)">
                {p.num}
                </span>

                <span className="flex items-center gap-2 absolute top-3.5 right-4 bg-(--accent) border border-white/10 rounded-full px-2.5 py-0.5 text-[10px] text-(--tag-text) font-mono tracking-[0.06em]">
                <span className="relative flex h-2 w-2">
                    <span
                    className={`absolute inline-flex h-full w-full rounded-full animate-ping opacity-75 ${colors.ping}`}
                    />
                    <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${colors.dot}`}
                    />
                </span>

                {p.label}
                </span>
            </div>

            {/* Body */}
            <div className="p-6 bg-(--bg-card)">
                <div className="project-name mb-2">{p.title}</div>

                <p className="project-desc mb-4">{p.desc}</p>

                <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                    {p.tags.map((t) => (
                    <span key={t} className="tag">
                        {t}
                    </span>
                    ))}
                </div>

                <MoveUpRight
                    size={16}
                    className="text-(--text-muted) transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
                </div>
            </div>
            </Link>
        );
        })}

        {/* Mini grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
        {miniProjects.map((p) => (
            <Link
            key={p.slug}
            href={p.href}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col gap-2.5 border border-(--border) rounded-xl p-5 bg-(--bg-card)
            no-underline text-inherit transition-all duration-150 group
            hover:bg-cream-dark hover:border-[#C0BAB0] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
            <div className="font-mono text-[10px] text-(--text-muted)">
                {p.num}
            </div>

            <div className="font-serif text-[16px] text-(--text)">
                {p.title}
            </div>

            <p className="text-[12px] text-(--text-muted) flex-1">
                {p.desc}
            </p>

            <div className="flex items-center justify-between mt-1">
                <div className="flex gap-1">
                {p.tags.map((t) => (
                    <span key={t} className="tag">
                    {t}
                    </span>
                ))}
                </div>

                <MoveUpRight
                size={16}
                className="text-(--text-muted) transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
            </div>
            </Link>
        ))}
        </div>
    </section>
    );
}

export default Projects
