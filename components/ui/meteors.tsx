"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const Meteors = ({
  number = 20,
  className,
}: {
  number?: number
  className?: string
}) => {
  const [meteors, setMeteors] = useState<
    Array<{ id: number; size: number; duration: number; delay: number; x: number; y: number }>
  >([])

  useEffect(() => {
    const newMeteors = [...Array(number)].map((_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 30) + 10, // 10-40px
      duration: Math.floor(Math.random() * 8) + 4, // 4-12s
      delay: Math.random() * 10, // 0-10s
      x: Math.floor(Math.random() * 100), // 0-100%
      y: Math.floor(Math.random() * 100), // 0-100%
    }))
    setMeteors(newMeteors)
  }, [number])

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          initial={{
            opacity: 0,
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            scale: 0.2,
          }}
          animate={{
            opacity: [0, 1, 0.8, 0],
            left: [`${meteor.x}%`, `${meteor.x - 30}%`],
            top: [`${meteor.y}%`, `${meteor.y + 30}%`],
            scale: [0.2, 1, 0.8, 0.2],
          }}
          transition={{
            duration: meteor.duration,
            delay: meteor.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 5 + 5, // 5-10s
          }}
          className="absolute h-0.5 w-0.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
          style={{
            boxShadow: "0 0 0 1px #ffffff10",
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-sm"
            style={{
              width: `${meteor.size}px`,
              height: `${meteor.size / 10}px`,
              transform: "translateY(-50%) rotate(-45deg)",
              opacity: 0.4,
            }}
          />
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            style={{
              width: `${meteor.size * 0.8}px`,
              height: `${meteor.size / 15}px`,
              transform: "translateY(-50%) rotate(-45deg)",
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}
