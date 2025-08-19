import {
    // Backend
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiFastapi,
    SiPhp,
    // Frontend
    SiReact,
    SiTailwindcss,
    SiHtml5,
    SiCss3,
    // Database
    SiMysql,
    SiPostgresql,
    // Languages
    SiJavascript,
    SiTypescript,
    SiPython,
    // Tools
    SiGit,
    SiGithub,
    SiVercel,
    SiRender,
    SiSupabase,
} from "react-icons/si"

export default function Skills() {
    const skillCategories = [
        {
            title: "Backend",
            skills: [
                { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
                { name: "Express", icon: SiExpress, color: "foreground" },
                { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
                { name: "FastAPI", icon: SiFastapi, color: "#009688" },
                { name: "PHP", icon: SiPhp, color: "#777BB4" },
            ],
        },
        {
            title: "Frontend",
            skills: [
                { name: "React", icon: SiReact, color: "#61DAFB" },
                { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
                { name: "HTML", icon: SiHtml5, color: "#E34F26" },
                { name: "CSS", icon: SiCss3, color: "#1572B6" },
            ],
        },
        {
            title: "Database",
            skills: [
                { name: "MySQL", icon: SiMysql, color: "#4479A1" },
                { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            ],
        },
        {
            title: "Languages",
            skills: [
                { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
                { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
                { name: "Python", icon: SiPython, color: "#3776AB" },
            ],
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git", icon: SiGit, color: "#F05032" },
                { name: "GitHub", icon: SiGithub, color: "foreground" },
                { name: "Vercel", icon: SiVercel, color: "foreground" },
                { name: "Render", icon: SiRender, color: "#46E3B7" },
                { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
            ],
        },
    ]

    return (
        <div id="skills" className="">
            <h2 className="text-2xl mb-4 font-bold">Skills</h2>

            <div className="flex flex-col gap-3">
                {skillCategories.map((category, categoryIndex) => (
                    <div
                        key={categoryIndex}
                    // className="backdrop-blur-md bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                        <h3 className="text-lg">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => {
                                const IconComponent = skill.icon
                                return (
                                    <div
                                        key={skillIndex}
                                        className="group border backdrop-blur-md flex items-center gap-2 px-2 py-1 bg-white/30 dark:bg-gray-800/30 hover:bg-white/30 dark:hover:bg-gray-700/40 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md"
                                    >
                                        <IconComponent
                                            className="w-4 h-4 transition-transform group-hover:scale-110"
                                            style={{ color: skill.color }}
                                        />
                                        <span className="text-sm font-medium">{skill.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
