import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {

    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme')
            return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark'
        }
        return 'dark'
    })

    useEffect(() => {
        const root = document.documentElement
        root.classList.remove('light', 'dark')
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev: Theme) => (prev === 'light' ? 'dark' : 'light'))
    }


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }

    return context
}