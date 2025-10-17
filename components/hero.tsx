"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=junk removal truck loading furniture and debris)",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Professional Junk Removal & Hauling
            </h1>
            <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed">
              Fast, reliable, and affordable junk removal services for Westminster and surrounding areas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all transform hover:scale-105 font-semibold text-lg">
                Get Free Quote
              </button>
              <button className="bg-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/30 transition-all border border-white/40 font-semibold text-lg backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
