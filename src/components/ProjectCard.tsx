import { ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

interface ProjectCardProps {
    title: string
    description: string
    techStacks: string[]
    image: string
    link: string
}

// Real Estate Style 3: Modern Listing with Stats
export default function ProjectCard({ title, description, techStacks, image, link }: ProjectCardProps) {
    return (
        <div className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
            <div className="relative h-40 overflow-hidden">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top actions bar */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-center">
                    <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">Live</div>
                    <div className="flex gap-2">

                        <Link
                            to={link}
                            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                        >
                            <ExternalLink className="w-4 h-4 text-gray-600" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="p-4">
                {/* Title and main tech */}
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h3 className="font-bold text-lg line-clamp-1">{title}</h3>
                        <div className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                            {techStacks[0] || "Web Application"}
                        </div>
                    </div>
                </div>

                <p className=" text-sm line-clamp-2 mb-3">{description}</p>

                {/* Stats row */}
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 mb-2">
                </div>

                {/* Compact tech stack */}
                <div className="flex flex-wrap gap-1">
                    {techStacks.slice(0, 4).map((tech, index) => (
                        <span
                            key={index}
                            className="text-xs px-2 py-0.5 border-[1px]  rounded"
                        >
                            {tech}
                        </span>
                    ))}
                    {techStacks.length > 4 && (
                        <span className="text-xs px-2 py-0.5 border rounded">
                            +{techStacks.length - 4}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}
