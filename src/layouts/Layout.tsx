import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Calculate position accounting for header height
            const offset = 80; // Match your header height
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <main>
            <Header >
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <button
                        onClick={() => scrollToSection('about')}
                        className="transition-colors hover:text-primary"
                    >
                        About
                    </button>
                    <button
                        onClick={() => scrollToSection('skills')}
                        className="transition-colors hover:text-primary"
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => scrollToSection('journey')}
                        className="transition-colors hover:text-primary"
                    >
                        Journey
                    </button>
                    <button
                        onClick={() => scrollToSection('projects')}
                        className="transition-colors hover:text-primary"
                    >
                        Projects
                    </button>
                </nav>
            </Header>

            <Outlet />

        </main>
    )
}