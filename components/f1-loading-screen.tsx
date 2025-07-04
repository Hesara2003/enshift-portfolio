"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gauge, Zap, Sparkles } from "lucide-react"

interface F1LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function F1LoadingScreen({ onLoadingComplete }: F1LoadingScreenProps) {
  const [isEngineStarted, setIsEngineStarted] = useState(false)
  const [currentPhase, setCurrentPhase] = useState<'waiting' | 'starting' | 'engine-warming' | 'engine-active' | 'engine-ready' | 'complete'>('waiting')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [supportsHaptics, setSupportsHaptics] = useState(false)

  useEffect(() => {
    // Create audio element using the Rev.mp4 video file (browsers can extract audio)
    if (typeof window !== "undefined") {
      audioRef.current = new Audio('/Rev.mp4')
      audioRef.current.volume = 0.7 // Set to 70% volume for better experience
      audioRef.current.preload = 'auto' // Preload the audio for instant playback
      
      // Check for haptic support
      setSupportsHaptics('vibrate' in navigator)
    }
  }, [])

  // F1 Engine Haptic Patterns
  const createF1Haptics = (phase: string) => {
    if (!supportsHaptics || !('vibrate' in navigator)) return

    switch (phase) {
      case 'starting':
        // Engine cranking - short bursts
        navigator.vibrate([100, 50, 100, 50, 200])
        break
      case 'revving':
        // High RPM engine - intense vibration
        navigator.vibrate([300, 100, 400, 150, 500])
        break
      case 'loading':
        // Smooth engine running - gentle pulses
        navigator.vibrate([150, 100, 150, 100, 200])
        break
      default:
        break
    }
  }

  // Continuous haptic feedback during engine run
  const startContinuousHaptics = () => {
    if (!supportsHaptics) return

    const hapticInterval = setInterval(() => {
      if (currentPhase === 'starting') {
        navigator.vibrate([80, 60, 120]) // Engine cranking pattern
      } else if (currentPhase === 'engine-warming') {
        navigator.vibrate([100, 80, 150]) // Engine running pattern
      }
    }, 1000) // Repeat every second

    // Clear haptics when engine stops
    setTimeout(() => {
      clearInterval(hapticInterval)
    }, 8000) // Stop after 8 seconds
  }

  const startEngine = () => {
    if (isEngineStarted) return // Prevent multiple starts
    
    setIsEngineStarted(true)
    setCurrentPhase('starting')
    
    // Trigger initial engine start haptics
    createF1Haptics('starting')
    
    // Play F1 Rev sound from video file
    if (audioRef.current) {
      // Reset audio to beginning and play
      audioRef.current.currentTime = 0
      audioRef.current.play().catch((error) => {
        console.log("Audio playback failed:", error)
        // Handle audio play failure gracefully (browser restrictions)
      })
    }

    // Start continuous haptic feedback
    startContinuousHaptics()

    // Engine revving haptics after 500ms
    setTimeout(() => {
      createF1Haptics('revving')
    }, 500)

    // Engine sequence - timed with the audio
    setTimeout(() => {
      setCurrentPhase('engine-warming')
      
      // Engine warming haptics
      createF1Haptics('loading')
      
      // Engine becomes active after 1 second
      setTimeout(() => {
        setCurrentPhase('engine-active')
        
        // Intense engine haptics
        if (supportsHaptics) {
          navigator.vibrate([200, 100, 300, 100, 400, 100, 500])
        }
        
        // Engine ready phase
        setTimeout(() => {
          setCurrentPhase('engine-ready')
          
          // Final engine haptics
          if (supportsHaptics) {
            navigator.vibrate([100, 50, 200, 50, 400, 50, 600])
          }
          
          // Complete the transition
          setTimeout(() => {
            setCurrentPhase('complete')
            
            // Final completion haptic
            if (supportsHaptics) {
              navigator.vibrate([200, 100, 300, 150, 400]) // Victory vibration
            }
            
            setTimeout(() => {
              // Stop audio before completing
              if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.currentTime = 0
              }
              onLoadingComplete()
            }, 500)
          }, 1000)
        }, 1500)
      }, 1000)
    }, 2000) // 2 seconds for engine start/rev sound
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-950 via-black to-gray-900 flex items-center justify-center overflow-hidden"
      >
        {/* Engine Effect */}
        {(currentPhase === 'engine-warming' || currentPhase === 'engine-active' || currentPhase === 'engine-ready') && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Engine Rings */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`engine-ring-${i}`}
                className="absolute border-2 border-orange-500/40 rounded-full"
                style={{
                  width: `${100 + i * 80}px`,
                  height: `${100 + i * 80}px`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={currentPhase === 'engine-warming' ? {
                  scale: [0, 1, 1.2],
                  opacity: [0, 0.8, 0.4]
                } : currentPhase === 'engine-active' ? {
                  scale: [1.2, 2, 3],
                  opacity: [0.4, 0.8, 0]
                } : {
                  scale: [3, 8, 15],
                  opacity: [0, 0.6, 0]
                }}
                transition={{
                  duration: currentPhase === 'engine-warming' ? 1 : 
                           currentPhase === 'engine-active' ? 1.5 : 1,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
            
            {/* Engine Center */}
            <motion.div
              className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full"
              initial={{ scale: 0 }}
              animate={currentPhase === 'engine-warming' ? {
                scale: [0, 1, 1.5],
                opacity: [0, 1, 0.8]
              } : currentPhase === 'engine-active' ? {
                scale: [1.5, 4, 8],
                opacity: [0.8, 1, 0.2]
              } : {
                scale: [8, 20, 50],
                opacity: [0.2, 0.8, 0]
              }}
              transition={{
                duration: currentPhase === 'engine-warming' ? 1 : 
                         currentPhase === 'engine-active' ? 1.5 : 1,
                ease: "easeOut"
              }}
            />
            
            {/* Engine Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`engine-particle-${i}`}
                className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-orange-400 rounded-full"
                style={{
                  left: `${50 + Math.cos(i * 0.314) * 30}%`,
                  top: `${50 + Math.sin(i * 0.314) * 30}%`,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={currentPhase === 'engine-warming' ? {
                  scale: [0, 1, 1.5],
                  opacity: [0, 1, 0.8]
                } : currentPhase === 'engine-active' ? {
                  scale: [1.5, 0.5, 0],
                  x: [0, Math.cos(i * 0.314) * -200, Math.cos(i * 0.314) * -400],
                  y: [0, Math.sin(i * 0.314) * -200, Math.sin(i * 0.314) * -400],
                  opacity: [0.8, 1, 0]
                } : {
                  scale: [0, 2, 4],
                  x: [Math.cos(i * 0.314) * -400, Math.cos(i * 0.314) * -800],
                  y: [Math.sin(i * 0.314) * -400, Math.sin(i * 0.314) * -800],
                  opacity: [0, 0.8, 0]
                }}
                transition={{
                  duration: currentPhase === 'engine-warming' ? 1 : 
                           currentPhase === 'engine-active' ? 1.5 : 1,
                  delay: i * 0.02,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}

        {/* F1 Background Pattern */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          <div className="grid grid-cols-6 sm:grid-cols-12 h-full gap-px">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-gradient-to-b from-red-600/20 via-transparent to-red-600/20" />
            ))}
          </div>
        </div>

        {/* Dynamic Racing Lines */}
        <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />

        {/* Animated Speed Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-10 sm:opacity-20">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent"
              style={{ top: `${15 + i * 15}%` }}
              animate={isEngineStarted ? {
                x: ["-100%", "100%"],
                opacity: [0, 1, 0]
              } : {}}
              transition={{
                duration: 0.8,
                repeat: isEngineStarted ? Infinity : 0,
                delay: i * 0.1,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Audio Wave Visualization - Shows when F1 sound is playing */}
        {isEngineStarted && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={`audiowave-${i}`}
                className="absolute left-1/2 top-1/2 border border-orange-500/30 rounded-full"
                style={{
                  width: `${40 + i * 20}px`,
                  height: `${40 + i * 20}px`,
                  marginLeft: `${-20 - i * 10}px`,
                  marginTop: `${-20 - i * 10}px`,
                }}
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}

        {/* Corner Racing Accents */}
        <div className="absolute top-2 sm:top-8 left-2 sm:left-8 w-8 h-8 sm:w-16 sm:h-16 border-l-2 border-t-2 sm:border-l-4 sm:border-t-4 border-red-600/60 animate-pulse" />
        <div className="absolute top-2 sm:top-8 right-2 sm:right-8 w-8 h-8 sm:w-16 sm:h-16 border-r-2 border-t-2 sm:border-r-4 sm:border-t-4 border-orange-500/60 animate-pulse" />
        <div className="absolute bottom-2 sm:bottom-8 left-2 sm:left-8 w-8 h-8 sm:w-16 sm:h-16 border-l-2 border-b-2 sm:border-l-4 sm:border-b-4 border-orange-500/60 animate-pulse" />
        <div className="absolute bottom-2 sm:bottom-8 right-2 sm:right-8 w-8 h-8 sm:w-16 sm:h-16 border-r-2 border-b-2 sm:border-r-4 sm:border-b-4 border-red-600/60 animate-pulse" />

        {/* Main Content */}
        <motion.div
          className="relative z-10 text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 md:px-8"
          animate={currentPhase === 'engine-ready' ? {
            scale: [1, 0.8, 0.5],
            opacity: [1, 0.5, 0]
          } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* F1 Logo/Brand */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <div className="relative inline-block">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-full border-2 sm:border-4 border-red-600/30 flex items-center justify-center backdrop-blur-sm">
                <Gauge className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-red-500" />
              </div>
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 border-2 sm:border-4 border-transparent border-t-orange-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-2 sm:mb-4 leading-none">
              <span className="block">ENSHIFT</span>
              <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
                RACING
              </span>
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-mono">
              F1 PERFORMANCE ENGINEERING
            </p>
          </motion.div>

          {/* Engine Status Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-red-600/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-xs sm:max-w-md mx-auto">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-gray-400 text-xs sm:text-sm font-mono uppercase tracking-wider">Engine Status</span>
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  currentPhase === 'waiting' ? 'bg-gray-500' :
                  currentPhase === 'starting' ? 'bg-yellow-500 animate-pulse' :
                  currentPhase === 'engine-warming' ? 'bg-orange-500 animate-pulse' :
                  currentPhase === 'engine-active' ? 'bg-red-500 animate-pulse' :
                  currentPhase === 'engine-ready' ? 'bg-purple-500 animate-pulse' :
                  'bg-green-500'
                }`} />
              </div>
              
              <div className="text-lg sm:text-xl md:text-2xl font-mono font-bold mb-2">
                {currentPhase === 'waiting' && <span className="text-gray-400">STANDBY</span>}
                {currentPhase === 'starting' && <span className="text-yellow-400">IGNITION</span>}
                {currentPhase === 'engine-warming' && <span className="text-orange-400">ENGINE WARMING</span>}
                {currentPhase === 'engine-active' && <span className="text-red-400">ENGINE ACTIVE</span>}
                {currentPhase === 'engine-ready' && <span className="text-purple-400">ENGINE READY</span>}
                {currentPhase === 'complete' && <span className="text-green-400">COMPLETE</span>}
              </div>

              {/* Engine RPM Simulation */}
              {isEngineStarted && (
                <motion.div
                  className="text-red-400 text-sm sm:text-base md:text-lg font-mono font-bold"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                >
                  {currentPhase === 'starting' && `RPM: ${Math.floor(Math.random() * 3000 + 1000)}`}
                  {currentPhase === 'engine-warming' && `RPM: ${Math.floor(Math.random() * 2000 + 8000)}`}
                  {currentPhase === 'engine-active' && `RPM: ${Math.floor(Math.random() * 1000 + 15000)}`}
                  {currentPhase === 'engine-ready' && `RPM: ${Math.floor(Math.random() * 5000 + 20000)}`}
                  {currentPhase === 'complete' && "ENGINE: READY"}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Start Engine Button or Portal Status */}
          {currentPhase === 'waiting' ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col items-center"
            >
              {/* Button Instructions */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mb-4 sm:mb-6 text-center"
              >
                <p className="text-orange-400 text-base sm:text-lg font-mono font-bold mb-2">START ENGINE</p>
                <p className="text-gray-400 text-sm mb-1">Tap to fire up the F1 engine</p>
              </motion.div>

              {/* F1 Start Engine Button */}
              <button
                onClick={startEngine}
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-base sm:text-lg md:text-xl px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50 focus:outline-none touch-manipulation min-h-[60px] sm:min-h-[70px]"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:animate-pulse flex-shrink-0" />
                <span className="whitespace-nowrap">START ENGINE</span>
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:animate-pulse flex-shrink-0" />
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Engine Status */}
              <div className="bg-black/40 backdrop-blur-sm border border-orange-600/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-xs sm:max-w-md mx-auto">
                <div className="text-center">
                  <span className="text-orange-400 text-xs sm:text-sm font-mono uppercase tracking-wider block mb-2">
                    Engine Status
                  </span>
                  <div className="text-lg sm:text-xl font-mono font-bold">
                    {currentPhase === 'starting' && <span className="text-yellow-400">🔥 ENGINE STARTING</span>}
                    {currentPhase === 'engine-warming' && <span className="text-orange-400">🌡️ ENGINE WARMING</span>}
                    {currentPhase === 'engine-active' && <span className="text-red-400">⚡ ENGINE ACTIVE</span>}
                    {currentPhase === 'engine-ready' && <span className="text-purple-400">� ENGINE READY</span>}
                    {currentPhase === 'complete' && <span className="text-green-400">✅ ENGINE COMPLETE</span>}
                  </div>
                </div>
              </div>

              {/* Engine Messages */}
              <motion.div
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-gray-400 text-xs sm:text-sm font-mono px-4 text-center"
              >
                {currentPhase === 'starting' && "🔊 F1 engine firing up... Feel the power!"}
                {currentPhase === 'engine-warming' && "�️ Engine warming... Temperature rising..."}
                {currentPhase === 'engine-active' && "⚡ Engine active... Maximum power!"}
                {currentPhase === 'engine-ready' && "� Engine ready... Let's race!"}
                {currentPhase === 'complete' && "🚀 Engine primed and ready to go!"}
              </motion.div>
            </motion.div>
          )}

          {/* Racing Data Stream */}
          
        </motion.div>

        {/* Particle Effects */}
        {isEngineStarted && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-orange-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
