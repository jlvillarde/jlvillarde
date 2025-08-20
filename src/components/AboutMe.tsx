// import { Highlighter } from "../components/magicui/highlighter";

export default function AboutMe() {
    const techHighlight = "text-emerald-400 font-semibold underline";

    return (
        <div id="about" className="text-lg py-6 leading-relaxed">
            {/* <h2 className="text-2xl font-semibold mb-5">About Me</h2> */}
            <h2 className="text-2xl mb-4 font-bold">About Me</h2>

            <p className="text-foreground">
                While my main focus and expertise lie in backend development,
                building high-performance APIs with <span className={techHighlight}>Node.js</span> and <span className={techHighlight}>Python</span>,
                I am also a proficient frontend developer. I can confidently implement and deliver frontend tasks,
                using <span className={techHighlight}>React</span> and <span className={techHighlight}>Tailwind CSS</span> to create complete,
                full-stack solutions.
            </p>
        </div>
    )
}