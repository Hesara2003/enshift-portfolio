"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollVideoProps {
  src: string
  className?: string
  poster?: string
  onVideoComplete?: (isComplete: boolean) => void
}

export default function ScrollVideo({ src, className = "", poster, onVideoComplete }: ScrollVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [videoError, setVideoError] = useState(false)
  const [videoDuration, setVideoDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [isVideoComplete, setIsVideoComplete] = useState(false)
  const { scrollY } = useScroll()

  // Parallax effect for the video
  const y = useTransform(scrollY, [0, 1000], ["0%", "-20%"])

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    // Set video properties
    video.muted = true
    video.playsInline = true
    video.preload = "metadata"
    
    let lastScrollY = window.scrollY

    // Handle video load error
    const handleError = () => {
      console.warn("Video failed to load:", src)
      setVideoError(true)
    }

    // Handle video metadata loaded
    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration)
    }

    // Handle scroll-based video progress
    const handleScroll = () => {
      if (videoError || !video || videoDuration === 0) return

      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate scroll progress through the video section
      const elementTop = rect.top
      const elementHeight = rect.height
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)))
      
      // Set video time based on scroll progress
      const targetTime = scrollProgress * videoDuration
      video.currentTime = targetTime
      setCurrentTime(targetTime)
      
      // Check if video is complete (95% threshold to account for precision)
      const videoComplete = (targetTime / videoDuration) >= 0.95
      const wasComplete = isVideoComplete
      setIsVideoComplete(videoComplete)
      
      // Notify parent component of completion status
      if (onVideoComplete && videoComplete !== wasComplete) {
        onVideoComplete(videoComplete)
      }
      
      // Prevent scrolling beyond video section until complete
      if (!videoComplete && scrollProgress >= 0.9) {
        // If trying to scroll down past the video section before completion
        if (window.scrollY > lastScrollY) {
          window.scrollTo({
            top: lastScrollY,
            behavior: 'auto'
          })
          return
        }
      }
      
      // Update last scroll position only when video is complete or scrolling up
      if (videoComplete || window.scrollY <= lastScrollY) {
        lastScrollY = window.scrollY
      }
      
      // Play video when in view and scrolling
      if (scrollProgress > 0 && scrollProgress < 1) {
        video.play().catch(console.error)
      } else {
        video.pause()
      }
    }

    video.addEventListener('error', handleError)
    video.addEventListener('loadedmetadata', handleLoadedMetadata)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial scroll check
    handleScroll()

    // Cleanup
    return () => {
      video.removeEventListener('error', handleError)
      video.removeEventListener('loadedmetadata', handleLoadedMetadata)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [src, videoError, videoDuration, isVideoComplete])

  // Calculate progress percentage
  const progressPercent = videoDuration > 0 ? (currentTime / videoDuration) * 100 : 0
  const isPlaying = currentTime > 0 && currentTime < videoDuration

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Scroll lock overlay when video is not complete */}
      {!isVideoComplete && !videoError && (
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 bg-red-600/90 backdrop-blur-sm px-6 py-3 rounded-full border border-red-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-mono uppercase tracking-wider">
                COMPLETE VIDEO TO CONTINUE
              </span>
            </div>
          </div>
        </div>
      )}
      {/* Racing overlay effects */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Racing corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-500 opacity-60"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-red-500 opacity-60"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-red-500 opacity-60"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-red-500 opacity-60"></div>
        
        {/* Racing data overlay */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-red-500 text-sm font-mono uppercase tracking-wider opacity-80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span>{videoError ? "VIDEO UNAVAILABLE" : "SCROLL TO PLAY"}</span>
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </div>
        </div>
        
        {/* Racing scan lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="racing-scan-lines"></div>
        </div>
      </div>

      {/* Video with parallax effect or fallback */}
      <motion.div
        style={{ y }}
        className="relative w-full h-full"
      >
        {videoError ? (
          // Fallback animated background
          <div className="w-full h-full bg-gradient-to-br from-gray-900 via-red-900/20 to-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.jpg')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60"></div>
            
            {/* Animated racing lines */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="racing-lines-animation"></div>
            </div>
            
            {/* Racing grid pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="racing-grid-pattern"></div>
            </div>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              className="w-full h-full object-cover"
              preload="metadata"
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40"></div>
          </>
        )}
      </motion.div>
      
      {/* Video progress bar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 z-20">
        <div className="bg-black/60 backdrop-blur-sm rounded-full p-2 border border-red-500/30">
          <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all duration-100 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-white mt-1 font-mono">
            <span>{Math.floor(currentTime)}s</span>
            <span>{Math.floor(videoDuration)}s</span>
          </div>
        </div>
      </div>
      
      {/* Racing status indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/30">
          <div className={`w-2 h-2 rounded-full ${
            videoError ? 'bg-yellow-500' : 
            isPlaying ? 'bg-green-500 animate-pulse' : 'bg-red-500'
          }`}></div>
          <span className="text-white text-sm font-mono uppercase tracking-wider">
            {videoError ? 'DEMO MODE' : isPlaying ? 'PLAYING' : progressPercent >= 95 ? 'COMPLETE - SCROLL TO CONTINUE' : 'PAUSED'}
          </span>
        </div>
      </div>
    </div>
  )
}
