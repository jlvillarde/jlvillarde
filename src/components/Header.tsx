import { ThemeToggle } from './ThemeToggle';
import { type ReactNode } from 'react';

interface HeaderProps {
    children?: ReactNode
}


export default function Header({ children }: HeaderProps) {


    return (
        <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto h-full max-w-5xl px-4">
                <div className="flex h-full items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-xl font-bold">Portfolio</h1>
                    </div>

                    {children}

                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}