"use client"

import { useEffect, useRef } from "react"

interface ScrollLockProps {
  isLocked: boolean
  lockPosition?: number
  children: React.ReactNode
}

export default function ScrollLock({ isLocked, lockPosition, children }: ScrollLockProps) {
  const lockPositionRef = useRef<number>(0)

  useEffect(() => {
    if (isLocked) {
      // Store the position where we want to lock
      lockPositionRef.current = lockPosition || window.scrollY

      const handleScroll = () => {
        if (isLocked) {
          // Prevent scrolling beyond the lock position
          if (window.scrollY > lockPositionRef.current) {
            window.scrollTo({
              top: lockPositionRef.current,
              behavior: 'auto'
            })
          }
        }
      }

      // Add scroll listener
      window.addEventListener('scroll', handleScroll, { passive: false })

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isLocked, lockPosition])

  return <>{children}</>
}
