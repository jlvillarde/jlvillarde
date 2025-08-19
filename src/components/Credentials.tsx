import AboutMe from "./AboutMe";
import Journey from "./Journey";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Credentials() {
    return (
        <div className="space-y-14 pt-16 p-2 lg:h-[calc(100%-60px)] text-foreground pb-10">
            {/* About Me */}
            <AboutMe />

            {/* Skills section */}
            <Skills />

            {/* Code Milestones */}
            <Journey />

            {/* Projects */}
            <Projects />
        </div>
    )
}