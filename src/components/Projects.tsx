import ProjectCard from "./ProjectCard"

export default function Projects() {
    const projects = [
        {
            title: "BCC Web-based E-Voting",
            description: "A secure online voting system with real-time results dashboard",
            techStacks: ["Node.js", "TypeScript", "Express", "Tailwind CSS"],
            images: ["/e-voting-landing.png", "/e-voting-dashboard.png", "/e-voting-analytics.png", "/e-voting-voter.png"],
            link: "/projects/e-voting",
        },
        {
            title: "Budget Tracker",
            description: "Personal finance management application with expense insights",
            techStacks: ["Python", "FastAPI", "React", "TypeScript", "Supabase", "Postgres", "Render"],
            images: ["/budget-tracker-landing.png", "/bt-daily.png", "/bt-monthly.png", "/bt-expense.png", "/bt-summary.png"],
            link: "/projects/budget-tracker",
        },
    ]

    return (
        <section id="projects" className="w-full mx-auto py-6">
            <h2 className="text-2xl mb-4 font-bold">Featured Projects</h2>
            <div className="max-w-6xl mx-auto">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            techStacks={project.techStacks}
                            image={project.images[0]}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
