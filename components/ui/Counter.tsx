'use client'

import React, { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

interface CounterProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  startDelay?: number
}

const Counter: React.FC<CounterProps> = ({ 
  end, 
  prefix = '', 
  suffix = '', 
  duration = 2000, 
  className = '',
  startDelay = 0
}) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        let startTime: number | null = null
        const animateValue = (currentTime: number) => {
          if (!startTime) startTime = currentTime
          const progress = Math.min((currentTime - startTime) / duration, 1)
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const currentCount = Math.floor(easeOutQuart * end)
          
          setCount(currentCount)
          
          if (progress < 1) {
            requestAnimationFrame(animateValue)
          }
        }
        
        requestAnimationFrame(animateValue)
      }, startDelay)

      return () => clearTimeout(timer)
    }
  }, [inView, isVisible, end, duration, startDelay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6, delay: startDelay / 1000 }}
      className={`${className}`}
    >
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold tabular-nums">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    </motion.div>
  )
}

export default Counter
