
import { useRef } from "react";
import { flushSync } from "react-dom";
import { Moon, SunDim } from "lucide-react";
import { useTheme } from '../context/ThemeContext';
// import { cn } from "../utils/cn";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const changeTheme = async () => {
        if (!buttonRef.current) return;

        // @ts-ignore
        if (!document.startViewTransition) {
            toggleTheme();
            return;
        }

        // @ts-ignore
        await document.startViewTransition(() => {
            flushSync(() => {
                toggleTheme();
            });
        }).ready;

        const { top, left, width, height } = buttonRef.current.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const right = window.innerWidth - left;
        const bottom = window.innerHeight - top;
        const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRad}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 700,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            },
        );
    };

    return (
        <button
            ref={buttonRef}
            onClick={changeTheme}
            // className={cn(
            //     "p-3 py-2 rounded-full transition-colors duration-200 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100",
            //     className
            // )}
            aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'dark' ? <SunDim /> : <Moon />}
        </button>
    );
};


