"use client"

import eVotingLanding from "/e-voting-landing.png"
import eVotingAnalytics from "/e-voting-analytics.png"
import eVotingDashboard from "/e-voting-dashboard.png"
import eVotingVoter from "/e-voting-voter.png"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft, ChevronRight, Play, Pause, ExternalLink, Shield, BarChart3, Users } from "lucide-react"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"

export default function Evoting() {
  const images = [eVotingLanding, eVotingDashboard, eVotingAnalytics, eVotingVoter]
  const imageNames = ["Landing Page", "Admin Dashboard", "Analytics Overview", "Voter Portal"]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const id = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(id)
  }, [isAutoPlay, images.length])

  const nextImage = () => setCurrentImageIndex((p) => (p + 1) % images.length)
  const prevImage = () => setCurrentImageIndex((p) => (p - 1 + images.length) % images.length)
  const toggleAutoPlay = () => setIsAutoPlay((v) => !v)

  return (
    <div className="max-w-6xl mx-auto py-20 p-4 space-y-4">
      <Button asChild variant="outline" size="sm" className="gap-2">
        <Link to="/">
          <ChevronLeft className="size-4" />
          Back
        </Link>
      </Button>

      <div className="text-center space-y-2 py-4">
        <Badge variant="secondary" className="gap-1">
          <Shield className="size-3" />
          Full-Stack App
        </Badge>
        <h1 className="text-2xl font-bold">E-Voting System</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Image Section */}
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative">
              <div className="aspect-[5/3] overflow-hidden bg-muted">
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`E-Voting Screenshot ${currentImageIndex + 1}`}
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
              A secure, transparent online voting platform with real-time analytics and comprehensive admin controls, developed as a
              capstone project by a team of three (I served as the lead developer). Recognized by our school and implemented for
              actual school-wide elections. {" "}
              <a
                href="https://www.facebook.com/share/p/1AfjJX99td/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-primary/80"
                aria-label="Opens a Facebook post about the school-wide election conducted using this system"
              >
                Official Facebook election post (using this system)
              </a>
              .
            </p>
          </div>


          {/* Tech Stack and Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-1">
                {["TypeScript", "Tailwind CSS", "Node.js", "Express", "MySQL"].map((tech) => (
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
                  <Shield className="size-3" />
                  Secure voting system
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="size-3" />
                  Real-time analytics
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-3" />
                  Admin controls & management
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
