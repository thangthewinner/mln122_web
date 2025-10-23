'use client'

import React, { useState, useEffect, useRef } from 'react'
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
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (isInView && !hasStarted.current) {
      hasStarted.current = true
      
      const timer = setTimeout(() => {
        let startTime: number | null = null
        
        const animateValue = (currentTime: number) => {
          if (!startTime) startTime = currentTime
          const elapsed = currentTime - startTime
          const progress = Math.min(elapsed / duration, 1)
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          
          // Handle decimal numbers properly
          const currentCount = end % 1 !== 0 
            ? parseFloat((easeOutQuart * end).toFixed(1))
            : Math.floor(easeOutQuart * end)
          
          setCount(currentCount)
          
          if (progress < 1) {
            requestAnimationFrame(animateValue)
          } else {
            setCount(end) // Ensure we end at exact value
          }
        }
        
        requestAnimationFrame(animateValue)
      }, startDelay)

      return () => clearTimeout(timer)
    }
  }, [isInView, end, duration, startDelay])

  // Format number based on whether it has decimals
  const formatNumber = (num: number) => {
    if (num % 1 !== 0) {
      return num.toFixed(1)
    }
    return Math.round(num).toLocaleString()
  }

  return (
    <div ref={ref} className={`${className}`}>
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: startDelay / 1000 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tabular-nums inline-block"
      >
        {prefix}{formatNumber(count)}{suffix}
      </motion.span>
    </div>
  )
}

export default Counter
