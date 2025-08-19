import { FaGraduationCap, FaLaptopCode, FaPython } from "react-icons/fa"

export default function Journey() {
    return (
        <div id="journey" className="max-w-4xl mx-auto">
            <h2 className="text-2xl mb-4 font-bold text-foreground">My Programming Journey</h2>

            <div className="relative py-4">
                {/* Timeline line */}
                <div className="absolute left-1 top-0 h-full w-[1px] bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500"></div>

                {/* College Milestone */}
                <div className="relative pl-10 pb-8">
                    <div className="absolute -left-0.5 top-2 size-3 rounded-full bg-blue-600 shadow-lg"></div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                            2021 - 2025
                        </span>
                        <FaGraduationCap className="text-blue-600 text-lg" />
                    </div>
                    <h3 className=" font-bold mb-1 text-foreground">
                        Bachelor of Science in Information Systems
                    </h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                        Bago City College - Started my programming journey
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            Developed <strong>Bago City College E-Voting System</strong> (team of 3)
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            Successfully implemented and used college-wide
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            Awarded <strong>Best Programmer</strong>
                        </li>
                    </ul>
                </div>

                {/* OJT/Internship Milestone */}
                <div className="relative pl-10 pb-8">
                    <div className="absolute -left-0.5 top-2 size-3 rounded-full bg-purple-600 shadow-lg"></div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-purple-600 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 rounded-full">
                            February 2025 - Present
                        </span>
                        <FaLaptopCode className="text-purple-600 text-lg" />
                    </div>
                    <h3 className=" font-bold mb-1 text-foreground">
                        OJT/Internship at PAGENET IT Solutions
                    </h3>
                    <p className="mb-3 text-sm text-muted-foreground">
                        Developed computer vision systems for industrial quality control
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            Built a <strong>Vision System</strong> using Python + OpenCV
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-purple-500 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            Specialized in <strong>product defect inspection</strong> (semiconductor-packages)
                        </li>
                    </ul>
                </div>

                {/* Python Training Milestone */}
                <div className="relative pl-10">
                    <div className="absolute -left-0.5 top-2 size-3 rounded-full bg-emerald-600 shadow-lg"></div>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                            June - August 2025
                        </span>
                        <FaPython className="text-emerald-600 text-lg" />
                    </div>
                    <h3 className="text-xl font-bold mb-1 text-foreground">Python Intensive Training</h3>
                    <p className=" mb-3 text-sm text-muted-foreground">
                        2-month program covering design principles and best practices in NOLITC
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            Awarded <strong>Best Capstone Project</strong>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-emerald-500 mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                            Recognized as <strong>Best Collaborator</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
