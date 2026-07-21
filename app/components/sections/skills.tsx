import { skillInfo } from "@/data/constant"


const Skills = () => {
    return (
        <section className="flex flex-col gap-4" id="skills">
            <h2 className="section-title pb-6">Skills</h2>
            <div className="flex items-center gap-4">
                <span className="h-3 w-5 bg-(--text)"></span>
                <span>Proficient</span>
                <span className="h-3 w-5 border border-(--border) bg-(--bg)"></span>
                <span>Familiar</span>
            </div>
            <div className="card-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                { skillInfo.map((s)=>(
                    <div key={s.title} className="card hover:-translate-y-1 border border-(--border) hover:border-[#C0BAB0] hover:shadow-lg transition-all duration-200">
                        <h3 className="label pb-2">{s.title}</h3>
                        <div className="tag-container flex flex-wrap gap-2 mt-2">
                            {s.skills?.map((t)=>(
                                <span key={t} className="tag">{t}</span>
                            ))}
                            {s.subSkills?.map((sub)=>(
                                <span key={sub} className="tag-light">{sub}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
