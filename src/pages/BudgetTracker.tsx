"use client"

import budgetTrackerLanding from "/budget-tracker-landing.png"
import btDaily from "/bt-daily.png"
import btDayOfWeek from "/bt-day-of-week.png"
import btExpense from "/bt-expense.png"
import btInsights from "/bt-insights.png"
import btMonthly from "/bt-monthly.png"
import btSettings from "/bt-settings.png"
import btSummary from "/bt-summary.png"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, BarChart3, Calendar, Smartphone } from "lucide-react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"

export default function BudgetTracker() {
    const images = [budgetTrackerLanding, btSummary, btDaily, btDayOfWeek, btExpense, btInsights, btMonthly, btSettings]
    const imageNames = [
        "Landing Page",
        "Budget Summary",
        "Daily Analytics",
        "Day of Week Analysis",
        "Expense Tracking",
        "Budget Insights",
        "Monthly Overview",
        "Settings Panel",
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isAutoPlay, setIsAutoPlay] = useState(true)

    useEffect(() => {
        if (!isAutoPlay) return

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isAutoPlay, images.length])

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    const toggleAutoPlay = () => {
        setIsAutoPlay(!isAutoPlay)
    }

    return (
        <div className="max-w-6xl mx-auto py-20 p-4 space-y-4">
            <Button asChild variant="outline" size="sm" className="gap-2 mb-2 bg-transparent">
                <Link to="/">
                    <ChevronLeft className="size-4" />
                    Back
                </Link>
            </Button>

            <div className="text-center space-y-2 py-4">
                <Badge variant="secondary" className="gap-1">
                    <BarChart3 className="size-3" />
                    Full-Stack App
                </Badge>
                <h1 className="text-2xl font-bold">Budget Tracker</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                {/* Image Section */}
                <Card className="overflow-hidden">
                    <CardContent className="p-0">
                        <div className="relative">
                            <div className="aspect-[5/3] overflow-hidden bg-muted">
                                <img
                                    src={images[currentImageIndex] || "/placeholder.svg"}
                                    alt={`Budget Tracker Screenshot ${currentImageIndex + 1}`}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 flex items-center justify-between p-3 opacity-0 hover:opacity-100 transition-opacity">
                                    <Button
                                        onClick={prevImage}
                                        variant="secondary"
                                        size="icon"
                                        className="bg-background/90 backdrop-blur-sm"
                                    >
                                        <ChevronLeft className="size-4" />
                                    </Button>
                                    <Button
                                        onClick={nextImage}
                                        variant="secondary"
                                        size="icon"
                                        className="bg-background/90 backdrop-blur-sm"
                                    >
                                        <ChevronRight className="size-4" />
                                    </Button>
                                </div>

                                <div className="absolute top-3 right-3">
                                    <Button
                                        onClick={toggleAutoPlay}
                                        variant="secondary"
                                        size="icon"
                                        className="bg-background/90 backdrop-blur-sm"
                                    >
                                        {isAutoPlay ? <Pause className="size-3" /> : <Play className="size-3" />}
                                    </Button>
                                </div>

                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`h-1.5 w-6 rounded-full transition-all ${index === currentImageIndex ? "bg-primary" : "bg-background/60"
                                                }`}
                                        />
                                    ))}
                                </div>

                                <div className="absolute bottom-3 left-3">
                                    <div className="px-2 py-1 rounded bg-background/90 backdrop-blur-sm text-xs font-medium">
                                        {imageNames[currentImageIndex]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="space-y-6">
                    {/* Description */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">About This Project</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            A full-stack expense tracking application that provides interactive charts to analyze spending by
                            category, month, week, day, and day of the week. Built with modern API principles and a responsive
                            frontend, the app is installable on both desktop and mobile for convenient access. It helps users gain
                            insights into their spending patterns and manage budgets effectively.
                        </p>
                    </div>

                    {/* Live Demo Button */}
                    <div>
                        <Button asChild className="gap-2 w-full sm:w-auto">
                            <a href="https://fastapi-budget-tracker.onrender.com/" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="size-4" />
                                View Live Demo
                            </a>
                        </Button>
                    </div>

                    {/* Tech Stack and Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold">Tech Stack</h3>
                            <div className="flex flex-wrap gap-1">
                                {["Python", "React", "TypeScript", "Material-UI", "FastAPI", "PostgreSQL", "Supabase"].map((tech) => (
                                    <Badge key={tech} variant="outline" className="text-xs px-2 py-0.5">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold">Key Features</h3>
                            <div className="space-y-1 text-xs text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <BarChart3 className="size-3" />
                                    Interactive spending analytics
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="size-3" />
                                    Time-based reports & insights
                                </div>
                                <div className="flex items-center gap-2">
                                    <Smartphone className="size-3" />
                                    PWA installable on all devices
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
