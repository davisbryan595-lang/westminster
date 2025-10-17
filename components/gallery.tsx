"use client"

import type React from "react"

import { useState } from "react"

const beforeAfterPairs = [
  {
    id: 1,
    title: "Garage Cleanout",
    before: "/cluttered-garage-full-of-junk-and-boxes.jpg",
    after: "/clean-empty-garage-after-junk-removal.jpg",
  },
  {
    id: 2,
    title: "Yard Cleanup",
    before: "/overgrown-yard-with-debris-and-dead-plants.jpg",
    after: "/clean-landscaped-yard-after-cleanup.jpg",
  },
  {
    id: 3,
    title: "Furniture Removal",
    before: "/room-full-of-old-furniture-and-clutter.jpg",
    after: "/empty-clean-room-after-furniture-removal.jpg",
  },
  {
    id: 4,
    title: "Basement Cleanout",
    before: "/basement-full-of-boxes-and-old-items.jpg",
    after: "/clean-organized-basement-after-cleanout.jpg",
  },
]

export default function Gallery() {
  const [sliderPositions, setSliderPositions] = useState<Record<number, number>>({})

  const handleMouseMove = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPositions((prev) => ({ ...prev, [id]: Math.max(0, Math.min(100, x)) }))
  }

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Before & After</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformation we deliver for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beforeAfterPairs.map((pair) => (
            <div key={pair.id} className="group">
              <div
                className="relative w-full aspect-square rounded-xl overflow-hidden cursor-col-resize bg-muted border-2 border-border hover:border-primary transition-colors"
                onMouseMove={handleMouseMove.bind(null, pair.id)}
                onMouseLeave={() => setSliderPositions((prev) => ({ ...prev, [pair.id]: 50 }))}
              >
                {/* After image (background) */}
                <div className="absolute inset-0">
                  <img
                    src={pair.after || "/placeholder.svg"}
                    alt={`${pair.title} after`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Before image (overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden transition-all"
                  style={{ width: `${sliderPositions[pair.id] ?? 50}%` }}
                >
                  <img
                    src={pair.before || "/placeholder.svg"}
                    alt={`${pair.title} before`}
                    className="w-full h-full object-cover"
                    style={{ width: `${100 / ((sliderPositions[pair.id] ?? 50) / 100)}%` }}
                  />
                </div>

                {/* Slider handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-primary transition-all"
                  style={{ left: `${sliderPositions[pair.id] ?? 50}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
                    <div className="flex gap-1">
                      <div className="w-1 h-4 bg-primary-foreground rounded-full" />
                      <div className="w-1 h-4 bg-primary-foreground rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  After
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground mt-4">{pair.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
