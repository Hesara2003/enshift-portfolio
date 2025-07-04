"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Gauge, Zap, Sparkles } from "lucide-react"

interface F1LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function F1LoadingScreen({ onLoadingComplete }: F1LoadingScreenProps) {
  const [isEngineStarted, setIsEngineStarted] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState<'waiting' | 'starting' | 'loading' | 'complete'>('waiting')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [supportsHaptics, setSupportsHaptics] = useState(false)

  useEffect(() => {
    // Create audio element using the Rev.mp4 video file (browsers can extract audio)
    if (typeof window !== "undefined") {
      audioRef.current = new Audio('/Rev.mp4')
      audioRef.current.volume = 0.7 // Set to 70% volume for better experience
      audioRef.current.preload = 'auto' // Preload the audio for instant playback
      
      // Enhanced haptic support detection
      const checkHapticSupport = () => {
        // Check for vibrate API support
        const hasVibrate = 'vibrate' in navigator
        
        // Additional check for mobile devices
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        
        // Some browsers support vibrate but don't actually vibrate
        const isChrome = navigator.userAgent.toLowerCase().includes('chrome')
        const isFirefox = navigator.userAgent.toLowerCase().includes('firefox')
        const isSafari = navigator.userAgent.toLowerCase().includes('safari') && !isChrome
        
        console.log('Haptic Support Check:', {
          hasVibrate,
          isMobile,
          isChrome,
          isFirefox,
          isSafari,
          userAgent: navigator.userAgent
        })
        
        return hasVibrate && isMobile
      }
      
      setSupportsHaptics(checkHapticSupport())
    }
  }, [])

  // F1 Engine Haptic Patterns - Enhanced with error handling
  const createF1Haptics = (phase: string) => {
    if (!supportsHaptics || !('vibrate' in navigator)) {
      console.log('Haptics not supported or not available')
      return
    }

    try {
      let pattern: number[] = []
      
      switch (phase) {
        case 'starting':
          // Engine cranking - short bursts
          pattern = [100, 50, 100, 50, 200]
          break
        case 'revving':
          // High RPM engine - intense vibration
          pattern = [300, 100, 400, 150, 500]
          break
        case 'loading':
          // Smooth engine running - gentle pulses
          pattern = [150, 100, 150, 100, 200]
          break
        case 'complete':
          // Victory celebration
          pattern = [200, 100, 300, 150, 400]
          break
        default:
          console.log('Unknown haptic phase:', phase)
          return
      }

      console.log(`Triggering haptic feedback for ${phase}:`, pattern)
      const result = navigator.vibrate(pattern)
      console.log('Vibrate result:', result)
      
      // For iOS Safari and other browsers that might not support patterns
      if (!result && 'vibrate' in navigator) {
        console.log('Pattern failed, trying simple vibration')
        // Try multiple simple vibrations instead of pattern
        const simpleVibrations = async () => {
          for (let i = 0; i < pattern.length; i += 2) {
            if (pattern[i]) {
              navigator.vibrate(pattern[i])
              await new Promise(resolve => setTimeout(resolve, pattern[i] + (pattern[i + 1] || 0)))
            }
          }
        }
        simpleVibrations()
      }
      
    } catch (error) {
      console.error('Haptic feedback error:', error)
    }
  }

  // Continuous haptic feedback during engine run - Enhanced
  const startContinuousHaptics = () => {
    if (!supportsHaptics) {
      console.log('Continuous haptics not supported')
      return
    }

    console.log('Starting continuous haptics...')
    
    const hapticInterval = setInterval(() => {
      try {
        if (currentPhase === 'starting') {
          console.log('Continuous haptic: starting phase')
          navigator.vibrate([80, 60, 120]) // Engine cranking pattern
        } else if (currentPhase === 'loading') {
          console.log('Continuous haptic: loading phase')
          navigator.vibrate([100, 80, 150]) // Engine running pattern
        }
      } catch (error) {
        console.error('Continuous haptic error:', error)
        clearInterval(hapticInterval)
      }
    }, 1000) // Repeat every second

    // Clear haptics when engine stops
    setTimeout(() => {
      console.log('Stopping continuous haptics')
      clearInterval(hapticInterval)
    }, 8000) // Stop after 8 seconds
  }

  const startEngine = () => {
    if (isEngineStarted) return // Prevent multiple starts
    
    console.log('🏎️ Starting F1 Engine Sequence...')
    console.log('Haptic support:', supportsHaptics)
    
    setIsEngineStarted(true)
    setCurrentPhase('starting')
    
    // Test vibration first to ensure user interaction unlocks haptics
    if (supportsHaptics) {
      console.log('Testing initial haptic feedback...')
      try {
        // Simple test vibration to "unlock" haptics on user interaction
        const testResult = navigator.vibrate(50)
        console.log('Test vibration result:', testResult)
        
        // Then trigger the actual engine start haptics
        setTimeout(() => {
          createF1Haptics('starting')
        }, 100)
      } catch (error) {
        console.error('Initial haptic test failed:', error)
      }
    }
    
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

    // Engine start sequence - timed with the audio
    setTimeout(() => {
      setCurrentPhase('loading')
      
      // Loading phase haptics
      createF1Haptics('loading')
      
      // Simulate loading progress with more realistic F1 timing
      const interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setCurrentPhase('complete')
            
            // Final completion haptic
            createF1Haptics('complete')
            
            setTimeout(() => {
              // Stop audio before completing
              if (audioRef.current) {
                audioRef.current.pause()
                audioRef.current.currentTime = 0
              }
              onLoadingComplete()
            }, 1000)
            return 100
          }
          return prev + Math.random() * 12 + 4 // Slightly faster loading
        })
      }, 180) // Faster intervals to match F1 pace
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
        {/* F1 Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full gap-px">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-gradient-to-b from-red-600/20 via-transparent to-red-600/20" />
            ))}
          </div>
        </div>

        {/* Dynamic Racing Lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />

        {/* Animated Speed Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent"
              style={{ top: `${10 + i * 10}%` }}
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
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`audiowave-${i}`}
                className="absolute left-1/2 top-1/2 border border-orange-500/30 rounded-full"
                style={{
                  width: `${80 + i * 40}px`,
                  height: `${80 + i * 40}px`,
                  marginLeft: `${-40 - i * 20}px`,
                  marginTop: `${-40 - i * 20}px`,
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
        <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-red-600/60 animate-pulse" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-orange-500/60 animate-pulse" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-orange-500/60 animate-pulse" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-red-600/60 animate-pulse" />

        {/* Main Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          {/* F1 Logo/Brand */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-full border-4 border-red-600/30 flex items-center justify-center backdrop-blur-sm">
                <Gauge className="w-16 h-16 text-red-500" />
              </div>
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 border-4 border-transparent border-t-orange-600 rounded-full"
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
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 leading-none">
              <span className="block">ENSHIFT</span>
              <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
                RACING
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-mono">
              F1 PERFORMANCE ENGINEERING
            </p>
          </motion.div>

          {/* Engine Status Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-black/40 backdrop-blur-sm border border-red-600/30 rounded-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 text-sm font-mono uppercase tracking-wider">Engine Status</span>
                <div className={`w-3 h-3 rounded-full ${
                  currentPhase === 'waiting' ? 'bg-gray-500' :
                  currentPhase === 'starting' ? 'bg-yellow-500 animate-pulse' :
                  currentPhase === 'loading' ? 'bg-orange-500 animate-pulse' :
                  'bg-green-500'
                }`} />
              </div>
              
              <div className="text-2xl font-mono font-bold mb-2">
                {currentPhase === 'waiting' && <span className="text-gray-400">STANDBY</span>}
                {currentPhase === 'starting' && <span className="text-yellow-400">IGNITION</span>}
                {currentPhase === 'loading' && <span className="text-orange-400">TURBOCHARGED</span>}
                {currentPhase === 'complete' && <span className="text-green-400">READY</span>}
              </div>

              {/* Engine RPM Simulation */}
              {isEngineStarted && (
                <motion.div
                  className="text-red-400 text-lg font-mono font-bold"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.2, repeat: Infinity }}
                >
                  RPM: {currentPhase === 'starting' ? Math.floor(Math.random() * 3000 + 1000) :
                        currentPhase === 'loading' ? Math.floor(Math.random() * 2000 + 8000) :
                        9500}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Start Engine Button or Loading Progress */}
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
                className="mb-6 text-center"
              >
                <p className="text-orange-400 text-lg font-mono font-bold mb-2">START THE ENGINE</p>
                <p className="text-gray-400 text-sm mb-1">Click to start with authentic F1 sound</p>
                <div className="flex items-center justify-center gap-2 text-xs">
                  <span className="text-gray-500">🔊 Real F1 rev audio included</span>
                  {supportsHaptics && (
                    <span className="text-purple-400">📱 Haptic feedback enabled</span>
                  )}
                </div>
              </motion.div>

              {/* F1 Start Engine Button */}
              <button
                onClick={startEngine}
                className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-bold text-xl px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50 focus:outline-none"
              >
                <Zap className="w-8 h-8 group-hover:animate-pulse" />
                START ENGINE
                <Sparkles className="w-8 h-8 group-hover:animate-pulse" />
                
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              </button>

              {/* Audio & Haptic Indicator */}
              <motion.div
                className="mt-4 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-mono">F1 AUDIO READY</span>
                  <div className="flex gap-1 ml-2">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-3 bg-orange-500/60 rounded-full"
                        animate={{
                          height: [12, 20, 12],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {supportsHaptics && (
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-purple-400 text-xs font-mono">HAPTIC FEEDBACK READY</span>
                    <motion.div
                      className="text-purple-400 text-xs"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      📱
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Loading Progress Bar */}
              <div className="bg-black/40 backdrop-blur-sm border border-orange-600/30 rounded-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm font-mono uppercase tracking-wider">
                    {currentPhase === 'starting' ? 'Engine Starting...' :
                     currentPhase === 'loading' ? 'Loading Systems...' :
                     'Ready to Race!'}
                  </span>
                  <span className="text-orange-400 text-sm font-mono font-bold">
                    {Math.floor(loadingProgress)}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </div>
              </div>

              {/* F1 Loading Messages */}
              <motion.div
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-gray-400 text-sm font-mono"
              >
                {currentPhase === 'starting' && (
                  <span>
                    F1 engine revving... 🔊 Audio active...
                    {supportsHaptics && " 📱 Haptics active..."}
                  </span>
                )}
                {currentPhase === 'loading' && loadingProgress < 25 && "Initializing ERS systems..."}
                {currentPhase === 'loading' && loadingProgress >= 25 && loadingProgress < 50 && "Calibrating turbo hybrid unit..."}
                {currentPhase === 'loading' && loadingProgress >= 50 && loadingProgress < 75 && "Loading telemetry systems..."}
                {currentPhase === 'loading' && loadingProgress >= 75 && loadingProgress < 95 && "Synchronizing DRS activation..."}
                {currentPhase === 'loading' && loadingProgress >= 95 && "Final system validation..."}
                {currentPhase === 'complete' && "All F1 systems operational - Ready to race!"}
              </motion.div>
            </motion.div>
          )}

          {/* Racing Data Stream */}
          <div className="absolute bottom-8 left-0 right-0 overflow-hidden">
            <motion.div
              className="text-xs font-mono text-red-500/60 whitespace-nowrap"
              animate={isEngineStarted ? { x: ["-100%", "100%"] } : {}}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              ENGINE_STATUS: {currentPhase.toUpperCase()} | TURBO: {isEngineStarted ? 'ACTIVE' : 'STANDBY'} | 
              AUDIO: {isEngineStarted ? 'F1_REV_PLAYING' : 'F1_AUDIO_READY'} | 
              HAPTICS: {supportsHaptics ? (isEngineStarted ? 'VIBRATING' : 'READY') : 'UNSUPPORTED'} | 
              SYSTEM: ENSHIFT_F1 | PERFORMANCE: {currentPhase === 'complete' ? 'MAXIMUM' : 'OPTIMIZING'} | 
              READY_STATE: {currentPhase === 'complete' ? 'CONFIRMED' : 'PREPARING'}
            </motion.div>
          </div>
        </div>

        {/* Particle Effects */}
        {isEngineStarted && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-orange-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100],
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

        {/* Haptic Test Button (for debugging) */}
        {supportsHaptics && (
          <motion.button
            onClick={() => {
              console.log('🧪 Testing haptic feedback...')
              createF1Haptics('starting')
              setTimeout(() => createF1Haptics('revving'), 500)
              setTimeout(() => createF1Haptics('complete'), 1000)
            }}
            className="mb-4 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-400 text-sm font-mono hover:bg-purple-600/30 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🧪 TEST HAPTICS
          </motion.button>
        )}

        {/* Haptic Debug Info */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-4 p-3 bg-gray-900/50 border border-gray-600/30 rounded-lg">
            <div className="text-xs font-mono text-gray-400 space-y-1">
              <div>🔍 Haptic Debug Info:</div>
              <div>• Supports Haptics: {supportsHaptics ? '✅ Yes' : '❌ No'}</div>
              <div>• Vibrate API: {'vibrate' in navigator ? '✅ Available' : '❌ Not Available'}</div>
              <div>• User Agent: {typeof window !== 'undefined' ? navigator.userAgent.slice(0, 50) + '...' : 'N/A'}</div>
              <div>• Mobile Detected: {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(typeof window !== 'undefined' ? navigator.userAgent : '') ? '✅ Yes' : '❌ No'}</div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
