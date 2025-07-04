"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Users,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ChevronLeft,
  ChevronRight,
  Play,
  Wrench,
  Settings,
  Star,
  Clock,
  Gauge,
  Trophy,
  Home,
  User,
  FileText,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import ScrollVideo from "@/components/scroll-video"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function EnshiftPortfolio() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const heroBgRef = useRef(null)
  const heroContentRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([])
  const portfolioRef = useRef(null)
  const testimonialsRef = useRef(null)
  const pitCrewCarouselRef = useRef(null)
  const pitCrewTrackRef = useRef(null)
  const pitCrewCardsRef = useRef<(HTMLDivElement | null)[]>([])
  const contactRef = useRef(null)
  const footerRef = useRef(null)
  const footerTrackRef = useRef(null)
  const footerContentRef = useRef(null)
  const footerSocialRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0)
  const pitCrewTimelineRef = useRef<gsap.core.Timeline | null>(null)
  const [isVideoComplete, setIsVideoComplete] = useState(false)

  // Enhanced scroll triggers with more precise control
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.2 })
  const servicesInView = useInView(servicesRef, { once: true, amount: 0.1 })
  const portfolioInView = useInView(portfolioRef, { once: true, amount: 0.2 })
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  // Parallax effects for different sections (reduced intensity)
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "10%"])
  const aboutY = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-5%"])
  const servicesY = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "-7%"])
  const portfolioY = useTransform(scrollYProgress, [0.5, 0.8], ["0%", "-8%"])
  const testimonialsY = useTransform(scrollYProgress, [0.6, 0.9], ["0%", "-10%"])
  const contactY = useTransform(scrollYProgress, [0.8, 1], ["0%", "-12%"])
  
  // Additional parallax effects for F1 backgrounds (reduced intensity)
  const heroParallaxY = useTransform(scrollYProgress, [0, 0.3], ["0%", "15%"])
  const aboutParallaxY = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-8%"])
  const servicesParallaxY = useTransform(scrollYProgress, [0.3, 0.6], ["0%", "-10%"])
  const portfolioParallaxY = useTransform(scrollYProgress, [0.5, 0.8], ["0%", "-12%"])
  const testimonialsParallaxY = useTransform(scrollYProgress, [0.6, 0.9], ["0%", "-15%"])
  const contactParallaxY = useTransform(scrollYProgress, [0.8, 1], ["0%", "-18%"])

  // GSAP animations setup
  useEffect(() => {
    // Hero racing animations
    // Racing corner accents animation
    gsap.fromTo(".racing-corner-accent",
      {
        opacity: 0,
        scale: 0,
        rotation: 45,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 0.3,
      }
    )

    // Racing data stream scrolling animation
    gsap.to(".racing-data-stream", {
      transform: "translateX(-100%)",
      duration: 15,
      ease: "none",
      repeat: -1,
      delay: 0.5,
    })

    // Racing HUD container glow effect
    gsap.to(".racing-hud-glow", {
      boxShadow: "0 0 40px rgba(225, 6, 0, 0.6), 0 0 80px rgba(225, 6, 0, 0.4), inset 0 0 40px rgba(225, 6, 0, 0.2)",
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      delay: 0.8,
    })

    // Racing system status animation
    gsap.fromTo(".racing-system-status",
      {
        opacity: 0,
        y: -30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      }
    )

    // Racing title sequence animation
    gsap.fromTo(".racing-hero-title",
      {
        opacity: 0,
        y: 60,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.8,
      }
    )

    // Racing subtitle animation
    gsap.fromTo(".racing-hero-subtitle",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 1.3,
      }
    )

    // Racing HUD status bar animation
    gsap.fromTo(".racing-hud-status-bar",
      {
        width: 0,
      },
      {
        width: "16rem",
        duration: 2,
        ease: "power2.out",
        delay: 1.6,
      }
    )

    // Racing controls animation
    gsap.fromTo(".racing-controls",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1.8,
      }
    )

    // Racing performance indicators staggered animation
    gsap.fromTo(".racing-indicator",
      {
        opacity: 0,
        y: 40,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: 2.0,
      }
    )

    // Racing indicator values count-up animation
    const racingIndicatorValues = document.querySelectorAll(".racing-indicator-value")
    racingIndicatorValues.forEach((indicator, index) => {
      const text = indicator.textContent || ""
      const match = text.match(/\d+/)
      const target = match ? parseInt(match[0]) : 0
      const suffix = text.replace(/\d+/, "")
      
      gsap.fromTo(indicator, 
        { textContent: 0 },
        {
          textContent: target,
          duration: 2,
          delay: 2.2 + (index * 0.3),
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function() {
            const currentValue = Math.floor(this.targets()[0].textContent)
            indicator.textContent = currentValue + suffix
          },
        }
      )
    })

    // Racing title glow animation
    gsap.to(".racing-title-glow", {
      textShadow: "0 0 20px rgba(225, 6, 0, 0.8), 0 0 40px rgba(225, 6, 0, 0.6)",
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      delay: 2.5,
    })

    // Racing speed lines animation
    gsap.to(".hero-speed-lines", {
      backgroundPosition: "200% 0",
      duration: 3,
      ease: "none",
      repeat: -1,
      delay: 1,
    })

    // Racing scan lines animation
    gsap.to(".racing-scan-lines", {
      backgroundPosition: "0 100%",
      duration: 2,
      ease: "none",
      repeat: -1,
      delay: 1.5,
    })

    // Racing line animation
    gsap.fromTo(".racing-line-animation",
      {
        width: "0%",
      },
      {
        width: "100%",
        duration: 2,
        ease: "power2.out",
        delay: 0.2,
      }
    )

    // Hero background parallax animation
    gsap.to(heroBgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    // Hero content fade in and rise animation
    gsap.fromTo(
      heroContentRef.current,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Services section F1 garage animation
    gsap.fromTo(
      serviceCardsRef.current,
      {
        x: -100,
        opacity: 0,
        rotation: -5,
      },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // About section F1 Racing Cards animations
    // Card entrance animations with sliding effect
    gsap.fromTo(".f1-racing-card",
      {
        x: (index) => index % 2 === 0 ? -100 : 100,
        y: 50,
        opacity: 0,
        scale: 0.9,
        rotationY: (index) => index % 2 === 0 ? -15 : 15,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Card scan line animation
    gsap.fromTo(".f1-card-scan-line",
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // F1 performance bars animation
    gsap.fromTo(".f1-progress-fill",
      {
        scaleX: 0,
        transformOrigin: "left center",
      },
      {
        scaleX: 1,
        duration: 2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // F1 status lights animation
    gsap.to(".f1-status-light", {
      scale: 1.2,
      opacity: 0.8,
      duration: 1,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    })

    // F1 data stream animation
    gsap.to(".f1-data-stream", {
      transform: "translateX(-100%)",
      duration: 20,
      ease: "none",
      repeat: -1,
    })

    // F1 card hover effects
    const racingCards = document.querySelectorAll(".f1-racing-card")
    racingCards.forEach((card, index) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        })
        gsap.to(card.querySelector(".f1-card-inner"), {
          boxShadow: "0 20px 40px rgba(225, 6, 0, 0.3)",
          duration: 0.3,
          ease: "power2.out",
        })
      })
      
      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        })
        gsap.to(card.querySelector(".f1-card-inner"), {
          boxShadow: "0 0 0 rgba(225, 6, 0, 0)",
          duration: 0.3,
          ease: "power2.out",
        })
      })
    })

    // Championship summary animation
    gsap.fromTo(".f1-championship-summary",
      {
        y: 100,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".f1-championship-summary",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // F1 summary stats counter animation
    const summaryCounters = document.querySelectorAll(".f1-summary-stat .text-4xl")
    summaryCounters.forEach((counter, index) => {
      const text = counter.textContent || ""
      const match = text.match(/\d+/)
      const target = match ? parseInt(match[0]) : 0
      const suffix = text.replace(/\d+/, "")
      
      gsap.timeline({
        scrollTrigger: {
          trigger: ".f1-championship-summary",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(counter, 
        { 
          textContent: 0,
          scale: 0.8,
          opacity: 0,
        },
        {
          textContent: target,
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: index * 0.2,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function() {
            const currentValue = Math.floor(this.targets()[0].textContent)
            counter.textContent = currentValue + suffix
          },
        }
      )
    })

    // F1 metrics counter animation
    const f1Counters = document.querySelectorAll(".f1-metric .text-3xl, .f1-stat-item .text-3xl")
    f1Counters.forEach((counter, index) => {
      const text = counter.textContent || ""
      const match = text.match(/\d+/)
      const target = match ? parseInt(match[0]) : 0
      const suffix = text.replace(/\d+/, "")
      
      gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(counter, 
        { 
          textContent: 0,
          scale: 0.8,
          opacity: 0,
        },
        {
          textContent: target,
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: index * 0.1,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function() {
            const currentValue = Math.floor(this.targets()[0].textContent)
            counter.textContent = currentValue + suffix
          },
        }
      )
    })

    // Enhanced telemetry gridlines with wave effect
    gsap.timeline({
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
    .to(".telemetry-grid-pulse", {
      backgroundImage: `
        linear-gradient(rgba(0, 255, 0, 0.6) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 0, 0.6) 1px, transparent 1px)
      `,
      duration: 1.5,
      ease: "power2.inOut",
    })
    .to(".telemetry-grid-pulse", {
      backgroundImage: `
        linear-gradient(rgba(225, 6, 0, 0.6) 1px, transparent 1px),
        linear-gradient(90deg, rgba(225, 6, 0, 0.6) 1px, transparent 1px)
      `,
      duration: 1.5,
      ease: "power2.inOut",
    })
    .to(".telemetry-grid-pulse", {
      backgroundImage: `
        linear-gradient(rgba(0, 191, 255, 0.6) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 191, 255, 0.6) 1px, transparent 1px)
      `,
      duration: 1.5,
      ease: "power2.inOut",
    })

    // Enhanced layered panels with 3D reveal effect
    gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 75%",
        end: "bottom 25%",
        toggleActions: "play none none reverse",
      },
    })
    .fromTo(".layered-panel",
      {
        opacity: 0,
        y: 60,
        scale: 0.9,
        rotateX: 10,
        rotateY: 5,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
      }
    )
    .to(".layered-panel", {
      boxShadow: "0 10px 30px rgba(0, 255, 0, 0.3), 0 5px 15px rgba(0, 255, 0, 0.2)",
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
    }, "-=0.8")

    // HUD panel enhancement with scanning effect
    gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
    .to(".hud-panel", {
      background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 255, 0, 0.1) 50%, rgba(0, 0, 0, 0.8) 100%)",
      duration: 3,
      ease: "power2.inOut",
    })
    .to(".hud-panel", {
      background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(225, 6, 0, 0.1) 50%, rgba(0, 0, 0, 0.8) 100%)",
      duration: 3,
      ease: "power2.inOut",
    })
    .to(".hud-panel", {
      background: "linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 191, 255, 0.1) 50%, rgba(0, 0, 0, 0.8) 100%)",
      duration: 3,
      ease: "power2.inOut",
    })

    // Cockpit corner accents with enhanced glow
    gsap.timeline({
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
    .to(".hud-corner-accent", {
      boxShadow: "0 0 20px rgba(0, 255, 0, 0.8), 0 0 40px rgba(0, 255, 0, 0.6)",
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.1,
    })
    .to(".hud-corner-accent", {
      boxShadow: "0 0 25px rgba(225, 6, 0, 0.8), 0 0 50px rgba(225, 6, 0, 0.6)",
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.1,
    })

    // Enhanced cockpit data stream with multiple layers
    gsap.timeline({
      repeat: -1,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })
    .to(".cockpit-data-stream", {
      color: "#00ff00",
      textShadow: "0 0 10px rgba(0, 255, 0, 0.8), 0 0 20px rgba(0, 255, 0, 0.6)",
      duration: 2,
      ease: "power2.inOut",
    })
    .to(".cockpit-data-stream", {
      color: "#E10600",
      textShadow: "0 0 10px rgba(225, 6, 0, 0.8), 0 0 20px rgba(225, 6, 0, 0.6)",
      duration: 2,
      ease: "power2.inOut",
    })
    .to(".cockpit-data-stream", {
      color: "#00bfff",
      textShadow: "0 0 10px rgba(0, 191, 255, 0.8), 0 0 20px rgba(0, 191, 255, 0.6)",
      duration: 2,
      ease: "power2.inOut",
    })

    // Additional cockpit elements reveal
    gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 60%",
        end: "bottom 40%",
        toggleActions: "play none none reverse",
      },
    })
    .fromTo(".cockpit-radar-panel, .cockpit-gauge-panel, .cockpit-status-panel",
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
        rotateX: 15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
      }
    )
    .to(".cockpit-radar-panel, .cockpit-gauge-panel, .cockpit-status-panel", {
      boxShadow: "0 5px 20px rgba(0, 255, 0, 0.3), 0 2px 10px rgba(0, 255, 0, 0.2)",
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
    }, "-=0.8")

    // HUD panel animations
    gsap.fromTo(".hud-panel",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Corner accents animation
    gsap.fromTo(".hud-corner-accent",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Pit crew testimonials animations
    // Title and intro text animation
    gsap.fromTo(".pit-crew-title",
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Pit crew cards slide-in animation
    gsap.fromTo(".pit-crew-card",
      {
        x: -100,
        opacity: 0,
        rotationY: -15,
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Stars glow animation
    gsap.to(".pit-crew-star",
      {
        textShadow: "0 0 8px #e10600",
        scale: 1.1,
        duration: 0.3,
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Pit crew carousel timeline with proper sync
    const timeline = gsap.timeline({ repeat: -1, paused: true })
    
    timeline
      .to(pitCrewTrackRef.current, {
        x: "-33.333%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setCurrentTestimonialSlide(1),
      })
      .set({}, {}, "+=3")
      .to(pitCrewTrackRef.current, {
        x: "-66.666%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setCurrentTestimonialSlide(2),
      })
      .set({}, {}, "+=3")
      .to(pitCrewTrackRef.current, {
        x: "0%",
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => setCurrentTestimonialSlide(0),
      })
      .set({}, {}, "+=3")

    pitCrewTimelineRef.current = timeline

    // Start carousel when in view
    ScrollTrigger.create({
      trigger: testimonialsRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => timeline.play(),
      onLeave: () => timeline.pause(),
      onEnterBack: () => timeline.play(),
      onLeaveBack: () => timeline.pause(),
    })

    // Contact section F1 finish line animations
    // Header animations
    gsap.fromTo(".finish-line-text",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(".finish-line-title",
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(".finish-line-subtitle",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Racing line animation
    gsap.fromTo(".racing-line-animation",
      {
        width: "0%",
      },
      {
        width: "100%",
        duration: 1.5,
        ease: "power2.out",
        delay: 0.6,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Contact info panel animations
    gsap.fromTo(".race-info-panel",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(".contact-info-item",
      {
        x: -50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.8,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Form fields animations from sides
    gsap.fromTo(".race-input-name",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.0,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(".race-input-email",
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.2,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(".race-input-project",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.4,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(".race-textarea",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.6,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(".race-submit-btn",
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1.8,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Trophy animation
    gsap.fromTo(".finish-line-trophy",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 2.0,
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Portfolio Victory Lap animations
    // Victory lap header animations
    gsap.fromTo(".victory-lap-text",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(".victory-lap-title",
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    gsap.fromTo(".victory-lap-subtitle",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.4,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Victory HUD container glow effect
    gsap.to(".victory-hud-glow", {
      boxShadow: "0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.3), inset 0 0 30px rgba(6, 182, 212, 0.2)",
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      scrollTrigger: {
        trigger: portfolioRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    // Victory corner accents animation
    gsap.fromTo(".victory-corner-accent",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Victory project panels slide-in animation
    gsap.fromTo(".victory-project-panel",
      {
        x: -100,
        opacity: 0,
        rotationY: -15,
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Victory project displays slide-in from right
    gsap.fromTo(".victory-project-display",
      {
        x: 100,
        opacity: 0,
        rotationY: 15,
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Victory project titles glow animation
    gsap.to(".victory-project-title",
      {
        textShadow: "0 0 10px rgba(6, 182, 212, 0.8)",
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Victory scan lines animation
    gsap.to(".victory-scan-lines",
      {
        backgroundPosition: "0 100%",
        duration: 2,
        ease: "none",
        repeat: -1,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Victory stats dashboard animation
    gsap.fromTo(".victory-stat-card",
      {
        opacity: 0,
        y: 30,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Victory speed lines animation
    gsap.to(".victory-speed-lines",
      {
        backgroundPosition: "100% 0",
        duration: 1.5,
        ease: "none",
        repeat: -1,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Victory data stream scrolling animation
    gsap.to(".victory-data-stream",
      {
        transform: "translateX(-100%)",
        duration: 10,
        ease: "none",
        repeat: -1,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      }
    )

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      if (pitCrewTimelineRef.current) {
        pitCrewTimelineRef.current.kill()
      }
    }
  }, [])

  // Section reveal animations
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  // Staggered children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const services = [
    {
      icon: Sparkles,
      title: "Web Design",
      description: "Lightning-fast, responsive websites engineered for peak performance and user experience.",
      tag: "DESIGN",
      speed: "0.3s",
      efficiency: "98%",
    },
    {
      icon: Zap,
      title: "UI/UX Design",
      description: "Precision-crafted interfaces that deliver seamless user journeys and engagement.",
      tag: "INTERFACE",
      speed: "0.2s",
      efficiency: "96%",
    },
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Strategic brand positioning that accelerates growth and market dominance.",
      tag: "STRATEGY",
      speed: "1.5s",
      efficiency: "94%",
    },
    {
      icon: Users,
      title: "Performance Optimization",
      description: "Turbo-charged optimization for maximum speed, conversion, and user satisfaction.",
      tag: "PERFORMANCE",
      speed: "0.1s",
      efficiency: "99%",
    },
  ]

  const portfolioItems = [
    {
      title: "TechFlow Platform Redesign",
      category: "SaaS Platform",
      image: "/placeholder.svg?height=400&width=600",
      description: "Complete brand redesign and platform development for next-gen SaaS",
      tag: "FEATURED",
      year: "2024",
    },
    {
      title: "Luxe Fashion E-commerce",
      category: "E-commerce",
      image: "/placeholder.svg?height=400&width=600",
      description: "Premium fashion brand digital transformation and user experience",
      tag: "AWARD WINNER",
      year: "2024",
    },
    {
      title: "GreenTech Sustainability",
      category: "Sustainability",
      image: "/placeholder.svg?height=400&width=600",
      description: "Environmental tech company branding and digital presence",
      tag: "INNOVATION",
      year: "2023",
    },
    {
      title: "FinanceFlow Fintech",
      category: "Fintech",
      image: "/placeholder.svg?height=400&width=600",
      description: "Financial services platform design and development",
      tag: "ENTERPRISE",
      year: "2023",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      content: "Enshift transformed our brand completely. The results exceeded all expectations and drove 300% growth.",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "TechFlow",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, GreenTech",
      content: "Their creative vision and technical expertise are unmatched in the industry. Truly exceptional work.",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "GreenTech",
    },
    {
      name: "Emily Watson",
      role: "CMO, Luxe Fashion",
      content: "Working with Enshift was a game-changer for our digital presence. Outstanding results.",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Luxe Fashion",
    },
  ]

  const newsItems = [
    {
      title: "Enshift wins Digital Agency of the Year",
      description: "Recognition for outstanding creative work and client results",
      image: "/placeholder.svg?height=200&width=300",
      tag: "AWARD",
      date: "Dec 2024",
    },
    {
      title: "New AI-powered design tools launched",
      description: "Revolutionary approach to automated brand design",
      image: "/placeholder.svg?height=200&width=300",
      tag: "INNOVATION",
      date: "Nov 2024",
    },
    {
      title: "Partnership with Fortune 500 companies",
      description: "Expanding our enterprise client portfolio",
      image: "/placeholder.svg?height=200&width=300",
      tag: "PARTNERSHIP",
      date: "Oct 2024",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  // Pit crew carousel controls
  const nextTestimonialSlide = () => {
    const newSlide = (currentTestimonialSlide + 1) % testimonials.length
    setCurrentTestimonialSlide(newSlide)
    if (pitCrewTimelineRef.current) {
      pitCrewTimelineRef.current.pause()
      gsap.to(pitCrewTrackRef.current, {
        x: `${-newSlide * 33.333}%`,
        duration: 0.8,
        ease: "power2.inOut",
      })
    }
  }

  const prevTestimonialSlide = () => {
    const newSlide = currentTestimonialSlide === 0 ? testimonials.length - 1 : currentTestimonialSlide - 1
    setCurrentTestimonialSlide(newSlide)
    if (pitCrewTimelineRef.current) {
      pitCrewTimelineRef.current.pause()
      gsap.to(pitCrewTrackRef.current, {
        x: `${-newSlide * 33.333}%`,
        duration: 0.8,
        ease: "power2.inOut",
      })
    }
  }

  const goToTestimonialSlide = (index: number) => {
    setCurrentTestimonialSlide(index)
    if (pitCrewTimelineRef.current) {
      pitCrewTimelineRef.current.pause()
      gsap.to(pitCrewTrackRef.current, {
        x: `${-index * 33.333}%`,
        duration: 0.8,
        ease: "power2.inOut",
      })
    }
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  // Animated Counter Component with enhanced scroll trigger
  function AnimatedCounter({
    end,
    suffix = "",
    label,
    delay = 0,
    inView,
    className = "text-red-600",
  }: {
    end: number
    suffix?: string
    label: string
    delay?: number
    inView: boolean
    className?: string
  }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!inView) return

      const timer = setTimeout(() => {
        let start = 0
        const increment = end / 60 // 60 frames for smooth animation
        const timer = setInterval(() => {
          start += increment
          if (start >= end) {
            setCount(end)
            clearInterval(timer)
          } else {
            setCount(Math.floor(start))
          }
        }, 16) // ~60fps

        return () => clearInterval(timer)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }, [end, delay, inView])

    return (
      <motion.div variants={itemVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <div className={`text-4xl font-bold mb-2 ${className}`}>
          {count}
          {suffix}
        </div>
        <div className="text-gray-600 text-sm uppercase tracking-wider">{label}</div>
      </motion.div>
    )
  }

  // Progress Bar Component with enhanced animations
  function ProgressBar({
    percentage,
    inView,
    delay = 0,
    maxValue = 100,
  }: {
    percentage: number
    inView: boolean
    delay?: number
    maxValue?: number
  }) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
      if (!inView) return

      const timer = setTimeout(() => {
        setWidth((percentage / maxValue) * 100)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }, [percentage, inView, delay, maxValue])

    return (
      <div className="w-full bg-gray-800 h-2 relative overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-red-600 to-red-400"
          initial={{ width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      </div>
    )
  }

  // Speed Meter Component with enhanced scroll animations
  function SpeedMeter({
    value,
    inView,
    delay = 0,
  }: {
    value: number
    inView: boolean
    delay?: number
  }) {
    const [rotation, setRotation] = useState(-90)

    useEffect(() => {
      if (!inView) return

      const timer = setTimeout(() => {
        const targetRotation = -90 + (value / 100) * 180
        setRotation(targetRotation)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }, [value, inView, delay])

    return (
      <motion.div
        className="relative w-24 h-12 mx-auto"
        variants={itemVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <svg className="w-full h-full" viewBox="0 0 100 50">
          <path d="M 10 40 A 30 30 0 0 1 90 40" stroke="#374151" strokeWidth="3" fill="none" />
          <path
            d="M 10 40 A 30 30 0 0 1 90 40"
            stroke="#E10600"
            strokeWidth="3"
            fill="none"
            strokeDasharray="100"
            strokeDashoffset={100 - value}
            className="transition-all duration-1500 ease-out"
          />
        </svg>

        <motion.div
          className="absolute top-8 left-1/2 w-0.5 h-6 bg-white origin-bottom"
          style={{ transformOrigin: "bottom center" }}
          initial={{ rotate: -90 }}
          animate={{ rotate: rotation }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="absolute top-8 left-1/2 w-2 h-2 bg-red-600 rounded-full transform -translate-x-1/2" />
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-red-600 text-lg font-bold">
          {value}
        </div>
      </motion.div>
    )
  }

  // Footer Animations
  useEffect(() => {
    if (footerRef.current) {
      // Animate footer content fade-in and slide up
      gsap.set(footerContentRef.current, { opacity: 0, y: 50 })
      gsap.set(footerSocialRef.current, { opacity: 0, y: 30 })
      
      ScrollTrigger.create({
        trigger: footerRef.current,
        start: "top 85%",
        onEnter: () => {
          // Animate track line
          gsap.fromTo(footerTrackRef.current, 
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 2, ease: "power2.out" }
          )
          
          // Animate content
          gsap.to(footerContentRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.out"
          })
          
          // Animate social icons
          gsap.to(footerSocialRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.7,
            ease: "power2.out"
          })
          
          // Neon flicker effect for social icons
          gsap.to(".social-icon", {
            textShadow: "0 0 10px #E10600, 0 0 20px #E10600, 0 0 30px #E10600",
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            repeatDelay: 2,
            delay: 1
          })
        }
      })
    }
  }, [])

  return (
    <>
      {/* Custom Animations Styles */}
      <style jsx>{`
        @keyframes slideInRight {
          0% { width: 0%; }
          50% { width: 100%; }
          100% { width: 0%; }
        }
        @keyframes slideInLeft {
          0% { width: 0%; right: 0; }
          50% { width: 100%; right: 0; }
          100% { width: 0%; right: 0; }
        }
        @keyframes fadeInScale {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes loadingBar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        @keyframes scanLine {
          0% { transform: translateY(-100vh); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes verticalScan {
          0% { transform: translateX(-100vw); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatRotate {
          0% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          75% { transform: translateY(-10px) rotate(270deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      
      {/* Cinematic Film Grain Overlay */}
      <div className="cinematic-grain"></div>
      
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* F1 Racing Hero Section with GSAP ScrollTrigger */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900 cinematic-depth-blur cinematic-color-grade"
      >
        {/* Cinematic Lens Flare Effects */}
        <div className="cinematic-lens-flare">
          <div className="lens-flare-element flare-1"></div>
          <div className="lens-flare-element flare-2"></div>
          <div className="lens-flare-element flare-3"></div>
        </div>

        {/* Cinematic Light Rays */}
        <div className="cinematic-light-rays">
          <div className="light-ray ray-1"></div>
          <div className="light-ray ray-2"></div>
          <div className="light-ray ray-3"></div>
          <div className="light-ray ray-4"></div>
          <div className="light-ray ray-5"></div>
        </div>

        {/* Cinematic Spotlight Effects */}
        <div className="cinematic-spotlight"></div>

        {/* Cinematic Anamorphic Flares */}
        <div className="cinematic-anamorphic anamorphic-1"></div>
        <div className="cinematic-anamorphic anamorphic-2"></div>

        {/* Cinematic Bokeh Particles */}
        <div className="cinematic-bokeh">
          <div className="bokeh-particle bokeh-1"></div>
          <div className="bokeh-particle bokeh-2"></div>
          <div className="bokeh-particle bokeh-3"></div>
          <div className="bokeh-particle bokeh-4"></div>
        </div>

        {/* Cinematic Vignette */}
        <div className="cinematic-vignette"></div>
        {/* Modern Racing Grid Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-16 h-full">
            {Array.from({ length: 16 }).map((_, i) => (
              <div 
                key={i} 
                className="border-r border-red-600/20 h-full bg-gradient-to-b from-red-600/5 via-transparent to-red-600/5 animate-pulse" 
                style={{ animationDelay: `${i * 0.1}s`, animationDuration: '3s' }}
              />
            ))}
          </div>
        </div>

        {/* Dynamic F1 Racing Lines with Enhanced Animations */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
        <div className="absolute top-0 left-0 w-0 h-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 animate-[slideInRight_4s_ease-in-out_infinite]" />
        <div className="absolute top-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
        <div className="absolute bottom-0 right-0 w-0 h-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 animate-[slideInLeft_4s_ease-in-out_infinite]" style={{ animationDelay: '2s' }} />

        {/* Enhanced Speed Lines Animation with Multiple Layers */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-red-600/20 to-transparent animate-pulse"></div>
          <div className="absolute inset-0 w-full h-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-red-600/30 to-transparent animate-bounce"
                style={{ 
                  left: `${15 + i * 15}%`, 
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Racing Corner Accents with Staggered Animations */}
        <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-red-600/60 opacity-0 animate-[fadeInScale_1s_ease-out_0.5s_forwards]"></div>
        <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-orange-500/60 opacity-0 animate-[fadeInScale_1s_ease-out_0.7s_forwards]"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-orange-500/60 opacity-0 animate-[fadeInScale_1s_ease-out_0.9s_forwards]"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-red-600/60 opacity-0 animate-[fadeInScale_1s_ease-out_1.1s_forwards]"></div>

        {/* Enhanced Racing Data Stream with Sliding Animation */}
        <div className="absolute top-8 left-0 right-0 overflow-hidden">
          <div className="text-xs font-mono text-red-500 whitespace-nowrap opacity-80 animate-[marquee_15s_linear_infinite]">
            ENGINE_STATUS: TURBOCHARGED | PERFORMANCE: MAX | SPEED: 320KM/H | POSITION: POLE | SYSTEM: ENSHIFT_RACING | ENGINE_STATUS: TURBOCHARGED | PERFORMANCE: MAX | SPEED: 320KM/H | POSITION: POLE | SYSTEM: ENSHIFT_RACING
          </div>
        </div>

        {/* Background Image with Enhanced Parallax */}
        <div className="absolute inset-0">
          <div
            ref={heroBgRef}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
            style={{
              backgroundImage: "url('/images/f1-hero-bg.png')",
              zIndex: 1,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80" style={{ zIndex: 2 }} />
        </div>

        {/* Modern Racing HUD Container with Glassmorphism */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-black/20 backdrop-blur-md border border-red-600/20 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-red-600/10 hover:shadow-red-600/20 transition-all duration-500 animate-[fadeInUp_1s_ease-out_0.5s_both] hover:scale-[1.02]">
            {/* Hero Content */}
            <div ref={heroContentRef} className="text-center">
              {/* Enhanced System Status with Floating Animation */}
              <div className="mb-8 animate-[fadeInDown_1s_ease-out_0.8s_both]">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-red-600/30 bg-black/40 backdrop-blur-sm hover:border-red-600/50 transition-all duration-300 animate-float">
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                  <span className="text-red-500 text-sm font-mono font-bold tracking-wider uppercase">System Online</span>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>

              {/* Enhanced Main Title with Staggered Entrance */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-none">
                <span className="block text-white mb-2 animate-[slideInLeft_1s_ease-out_1s_both] hover:animate-pulse">ELEVATE YOUR</span>
                <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent animate-[slideInRight_1s_ease-out_1.2s_both] hover:animate-bounce bg-[length:200%_100%]">
                  DIGITAL PRESENCE
                </span>
              </h1>

              {/* Enhanced Racing Subtitle with Typing Effect */}
              <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed animate-[fadeIn_1s_ease-out_1.5s_both]">
                We create immersive digital experiences that captivate audiences and drive results. 
                <span className="text-red-500 font-semibold animate-pulse"> Transform your brand</span> with cutting-edge design and 
                <span className="text-orange-500 font-semibold animate-pulse" style={{ animationDelay: '1s' }}> innovative technology</span>.
              </p>

              {/* Enhanced Racing HUD Status Bar with Loading Animation */}
              <div className="mx-auto w-80 h-1 bg-gray-700/50 mb-12 rounded-full overflow-hidden animate-[fadeIn_1s_ease-out_1.8s_both]">
                <div className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-red-600 animate-[loadingBar_3s_ease-in-out_infinite] rounded-full"></div>
              </div>

              {/* Enhanced Racing Control Buttons with Hover Animations */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-[fadeInUp_1s_ease-out_2s_both]">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 px-10 py-6 text-lg font-bold uppercase tracking-wider relative overflow-hidden group shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-pulse hover:animate-none"
                >
                  <span className="relative z-10 flex items-center">
                    GET STARTED
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-10 py-6 text-lg font-bold uppercase tracking-wider bg-black/20 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-red-600/30 hover:scale-110 hover:-translate-y-1 group"
                >
                  <Play className="mr-3 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
                  WATCH DEMO
                </Button>
              </div>

              {/* Enhanced Racing Performance Dashboard with Staggered Animations */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: "320+", label: "Projects", icon: "🏁" },
                  { value: "98%", label: "Success Rate", icon: "🏆" },
                  { value: "5+", label: "Years Racing", icon: "⚡" },
                  { value: "24/7", label: "Pit Support", icon: "🔧" },
                ].map((stat, index) => (
                  <div 
                    key={index} 
                    className="group animate-[fadeInUp_1s_ease-out_both]"
                    style={{ animationDelay: `${2.5 + index * 0.2}s` }}
                  >
                    <div className="bg-black/30 backdrop-blur-sm border border-red-600/20 rounded-xl p-6 hover:border-red-600/40 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                      <div className="text-2xl mb-2 animate-bounce group-hover:animate-spin" style={{ animationDelay: `${index * 0.5}s` }}>{stat.icon}</div>
                      <div className="text-red-600 text-3xl lg:text-4xl font-black mb-2 group-hover:text-orange-500 transition-colors duration-300 animate-pulse group-hover:animate-bounce">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 text-sm uppercase tracking-wider font-semibold group-hover:text-gray-300 transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Racing Scan Lines Effect with Multiple Layers */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-transparent via-red-600/20 to-transparent animate-pulse"></div>
          {/* Horizontal Scan Lines */}
          <div className="absolute inset-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent animate-[scanLine_4s_linear_infinite]"
                style={{ 
                  top: `${20 + i * 20}%`,
                  animationDelay: `${i * 0.8}s`
                }}
              />
            ))}
          </div>
          {/* Vertical Scan Lines */}
          <div className="absolute inset-0">
            {Array.from({ length: 3 }).map((_, i) => (
              <div 
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-orange-500/30 to-transparent animate-[verticalScan_6s_linear_infinite]"
                style={{ 
                  left: `${30 + i * 20}%`,
                  animationDelay: `${i * 1.5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Racing Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Floating F1 Icons */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-red-600/20 text-4xl animate-[float_6s_ease-in-out_infinite]"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${4 + i % 3}s`
              }}
            >
              🏎️
            </div>
          ))}
          
          {/* Floating Geometric Shapes */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 border border-orange-500/30 rotate-45 animate-[floatRotate_8s_linear_infinite]"
              style={{
                right: `${5 + i * 15}%`,
                top: `${10 + (i % 4) * 20}%`,
                animationDelay: `${i * 1.2}s`
              }}
            />
          ))}
        </div>
      </section>

      {/* F1 Racing Video Section */}
      

      {/* F1 Modern About Section */}
      <section 
        id="about" 
        ref={aboutRef} 
        className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden"
      >
        {/* F1 About Background with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-15 motion-div"
          style={{
            backgroundImage: "url('/images/f1-about-bg.png')",
            y: aboutParallaxY,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/75 to-black/90" />
        
        {/* Modern Racing Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-px h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-gradient-to-b from-red-600/20 via-transparent to-red-600/20" />
            ))}
          </div>
        </div>

        {/* Dynamic F1 Racing Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
        <div className="absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
        <div className="absolute bottom-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>

  

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          {/* Modern Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            {/* F1 Status Indicator */}
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-red-600/30 bg-black/40 backdrop-blur-sm">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-red-500 text-sm font-mono font-bold tracking-wider uppercase">About Enshift</span>
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
            </div>
            
            {/* Modern Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none">
              <span className="block text-white">CHAMPIONSHIP</span>
              <span className="block bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
                ENGINEERING
              </span>
            </h2>
            
            {/* Modern Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-red-600"></div>
              <div className="w-3 h-3 border-2 border-red-600 rotate-45"></div>
              <div className="w-24 h-px bg-gradient-to-r from-red-600 to-orange-500"></div>
              <div className="w-3 h-3 border-2 border-orange-500 rotate-45"></div>
              <div className="w-12 h-px bg-gradient-to-r from-orange-500 to-transparent"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Racing ahead of the competition with <span className="text-red-500 font-semibold">precision engineering</span> and 
              <span className="text-orange-500 font-semibold"> championship-level performance</span>
            </p>
          </div>

          {/* Modern F1 Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
            
            {/* Main Mission Control - Large Modern Card */}
            <div className="lg:col-span-7 group">
              <div className="relative h-full min-h-[400px] lg:min-h-[500px] bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-sm border border-red-600/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-red-600/40 hover:shadow-2xl hover:shadow-red-600/10">
                {/* Modern Scan Line Animation */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
                <div className="absolute -top-1 left-0 w-0 h-px bg-red-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-red-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-orange-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-orange-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-red-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-8 lg:p-10 h-full flex flex-col">
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">MISSION CONTROL</h3>
                    </div>
                    <div className="px-4 py-2 bg-red-600/20 border border-red-600/40 rounded-lg">
                      <span className="text-red-500 font-mono font-bold text-lg">01</span>
                    </div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="flex-1 space-y-8">
                    <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                      To be the catalyst that propels brands into the future, creating digital experiences 
                      that not only meet today's needs but <span className="text-orange-500 font-semibold">anticipate tomorrow's possibilities</span>.
                    </p>
                    
                    {/* Modern Metrics Dashboard */}
                    <div className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-xl p-6">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="text-center group/metric">
                          <div className="text-4xl lg:text-5xl font-black text-green-400 mb-3 group-hover/metric:scale-110 transition-transform duration-300">150+</div>
                          <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">Projects Complete</div>
                        </div>
                        <div className="text-center group/metric">
                          <div className="text-4xl lg:text-5xl font-black text-green-400 mb-3 group-hover/metric:scale-110 transition-transform duration-300">50+</div>
                          <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">Happy Clients</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Modern Status Indicators */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center group/status">
                        <div className="w-6 h-6 bg-green-400 rounded-full mx-auto mb-3 animate-pulse shadow-lg shadow-green-400/50 group-hover/status:scale-125 transition-transform duration-300"></div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">OPERATIONAL</div>
                      </div>
                      <div className="text-center group/status">
                        <div className="w-6 h-6 bg-orange-400 rounded-full mx-auto mb-3 animate-pulse shadow-lg shadow-orange-400/50 group-hover/status:scale-125 transition-transform duration-300"></div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">OPTIMIZED</div>
                      </div>
                      <div className="text-center group/status">
                        <div className="w-6 h-6 bg-red-600 rounded-full mx-auto mb-3 animate-pulse shadow-lg shadow-red-600/50 group-hover/status:scale-125 transition-transform duration-300"></div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">CHAMPION</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stacked Cards */}
            <div className="lg:col-span-5 space-y-6 lg:space-y-8">
              {/* Performance Matrix */}
              <div className="group">
                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-sm border border-orange-500/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>
                  
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50"></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white">PERFORMANCE</h3>
                      </div>
                      <div className="px-3 py-1 bg-orange-500/20 border border-orange-500/40 rounded-lg">
                        <span className="text-orange-500 font-mono font-bold">02</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="group/bar">
                        <div className="flex justify-between mb-3">
                          <span className="text-sm text-gray-400 font-medium">Client Satisfaction</span>
                          <span className="text-orange-500 font-bold text-sm">98%</span>
                        </div>
                        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 group-hover/bar:shadow-lg group-hover/bar:shadow-orange-500/30" style={{width: '98%'}}></div>
                        </div>
                      </div>
                      
                      <div className="group/bar">
                        <div className="flex justify-between mb-3">
                          <span className="text-sm text-gray-400 font-medium">Success Rate</span>
                          <span className="text-orange-500 font-bold text-sm">95%</span>
                        </div>
                        <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 group-hover/bar:shadow-lg group-hover/bar:shadow-orange-500/30" style={{width: '95%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <div className="text-4xl font-black text-orange-500 mb-2">A+</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">RATING</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Championship Stats */}
              <div className="group">
                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-sm border border-blue-500/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
                  
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
                        <h3 className="text-xl lg:text-2xl font-bold text-white">STATS</h3>
                      </div>
                      <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/40 rounded-lg">
                        <span className="text-blue-500 font-mono font-bold">03</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20 group/stat hover:border-blue-500/40 transition-all duration-300">
                        <div className="text-3xl font-black text-blue-500 mb-2 group-hover/stat:scale-110 transition-transform duration-300">5+</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Years Racing</div>
                      </div>
                      <div className="text-center bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20 group/stat hover:border-blue-500/40 transition-all duration-300">
                        <div className="text-3xl font-black text-blue-500 mb-2 group-hover/stat:scale-110 transition-transform duration-300">24/7</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Pit Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Technology Stack and Additional Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-16">
            
            {/* Technology Stack - Wide Modern Card */}
            <div className="lg:col-span-8 group">
              <div className="relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-sm border border-orange-600/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-600/40 hover:shadow-xl hover:shadow-orange-600/10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
                
                <div className="p-6 lg:p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse shadow-lg shadow-orange-600/50"></div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white">TECHNOLOGY STACK</h3>
                    </div>
                    <div className="px-3 py-1 bg-orange-600/20 border border-orange-600/40 rounded-lg">
                      <span className="text-orange-600 font-mono font-bold">04</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    <div className="group/tech bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-orange-600/40 transition-all duration-300 hover:bg-gray-700/50">
                      <div className="text-orange-600 font-bold text-base mb-1 group-hover/tech:text-orange-500 transition-colors duration-300">React</div>
                      <div className="text-xs text-gray-400 font-medium">Frontend</div>
                    </div>
                    <div className="group/tech bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-red-600/40 transition-all duration-300 hover:bg-gray-700/50">
                      <div className="text-red-600 font-bold text-base mb-1 group-hover/tech:text-red-500 transition-colors duration-300">Node.js</div>
                      <div className="text-xs text-gray-400 font-medium">Backend</div>
                    </div>
                    <div className="group/tech bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-orange-600/40 transition-all duration-300 hover:bg-gray-700/50">
                      <div className="text-orange-600 font-bold text-base mb-1 group-hover/tech:text-orange-500 transition-colors duration-300">AWS</div>
                      <div className="text-xs text-gray-400 font-medium">Cloud</div>
                    </div>
                    <div className="group/tech bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-red-600/40 transition-all duration-300 hover:bg-gray-700/50">
                      <div className="text-red-600 font-bold text-base mb-1 group-hover/tech:text-red-500 transition-colors duration-300">MongoDB</div>
                      <div className="text-xs text-gray-400 font-medium">Database</div>
                    </div>
                    <div className="group/tech bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-orange-600/40 transition-all duration-300 hover:bg-gray-700/50">
                      <div className="text-orange-600 font-bold text-base mb-1 group-hover/tech:text-orange-500 transition-colors duration-300">Docker</div>
                      <div className="text-xs text-gray-400 font-medium">DevOps</div>
                    </div>
                    <div className="group/tech bg-gray-800/50 backdrop-blur-sm p-4 rounded-xl border border-gray-700/50 hover:border-red-600/40 transition-all duration-300 hover:bg-gray-700/50">
                      <div className="text-red-600 font-bold text-base mb-1 group-hover/tech:text-red-500 transition-colors duration-300">AI/ML</div>
                      <div className="text-xs text-gray-400 font-medium">Intelligence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Expertise & Awards Combined */}
            <div className="lg:col-span-4 space-y-6">
              {/* Team Expertise */}
              <div className="group">
                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse shadow-lg shadow-cyan-500/50"></div>
                        <h3 className="text-lg lg:text-xl font-bold text-white">TEAM</h3>
                      </div>
                      <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/40 rounded-lg">
                        <span className="text-cyan-500 font-mono font-bold text-sm">05</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/20 group/stat hover:border-cyan-500/40 transition-all duration-300">
                        <div className="text-2xl font-black text-cyan-500 mb-2 group-hover/stat:scale-110 transition-transform duration-300">12+</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Experts</div>
                      </div>
                      <div className="text-center bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-cyan-500/20 group/stat hover:border-cyan-500/40 transition-all duration-300">
                        <div className="text-2xl font-black text-cyan-500 mb-2 group-hover/stat:scale-110 transition-transform duration-300">100%</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Remote</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievement Card */}
              <div className="group">
                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-sm border border-yellow-500/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/10">
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-pulse"></div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50"></div>
                        <h3 className="text-lg lg:text-xl font-bold text-white">AWARDS</h3>
                      </div>
                      <div className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/40 rounded-lg">
                        <span className="text-yellow-500 font-mono font-bold text-sm">06</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-5xl mb-4 filter drop-shadow-lg">🏆</div>
                      <div className="text-3xl font-black text-yellow-500 mb-2 group-hover:scale-110 transition-transform duration-300">15+</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Industry Awards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Modern F1 Championship Summary */}
          <div className="relative group">
            <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-red-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-600/20">
              {/* Top Racing Line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
              <div className="absolute -top-1 left-0 w-0 h-px bg-red-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-8 lg:p-12">
                <div className="text-center mb-12">
                  {/* Championship Status */}
                  <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-red-600/30 bg-black/40 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-red-500 text-sm font-mono font-bold tracking-wider uppercase">Championship Summary</span>
                    <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 leading-tight">
                    POLE POSITION PERFORMANCE
                  </h3>
                  
                  <p className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Combining <span className="text-red-500 font-semibold">cutting-edge technology</span> with 
                    <span className="text-orange-500 font-semibold"> championship-level execution</span> to deliver 
                    unparalleled digital experiences that accelerate your business forward.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  <div className="text-center group/summary">
                    <div className="bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-red-600/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-red-600 mb-4 group-hover/summary:scale-110 transition-transform duration-300">98.7%</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Performance Score</div>
                    </div>
                  </div>
                  <div className="text-center group/summary">
                    <div className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-green-400/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-green-400 mb-4 group-hover/summary:scale-110 transition-transform duration-300">24/7</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Pit Crew Support</div>
                    </div>
                  </div>
                  <div className="text-center group/summary">
                    <div className="bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-blue-500/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-blue-500 mb-4 group-hover/summary:scale-110 transition-transform duration-300">150+</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Victories</div>
                    </div>
                  </div>
                  <div className="text-center group/summary">
                    <div className="bg-black/40 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-orange-500/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-orange-500 mb-4 group-hover/summary:scale-110 transition-transform duration-300">5+</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Championship Years</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Racing Line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* F1 Modern Garage Services Section */}
      <section
        id="services"
        ref={servicesRef}
        className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden"
      >
        {/* F1 Services Background with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 motion-div"
          style={{
            backgroundImage: "url('/images/f1-services-bg.png')",
            y: servicesParallaxY,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/70 to-black/85" />
        
        {/* Modern Racing Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-px h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-gradient-to-b from-orange-600/20 via-transparent to-orange-600/20" />
            ))}
          </div>
        </div>

        {/* Dynamic Pit Lane Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse" />
        <div className="absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60" />
        <div className="absolute bottom-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse" />

        {/* Modern Racing Data Stream */}
        <div className="absolute top-4 left-0 right-0 overflow-hidden z-10">
          <div className="text-xs md:text-sm text-orange-600 font-mono tracking-wider whitespace-nowrap animate-marquee">
            <span className="px-8">GARAGE: OPERATIONAL</span>
            <span className="px-8 text-red-600">PRECISION: 99.9%</span>
            <span className="px-8 text-orange-600">SERVICES: ACTIVE</span>
            <span className="px-8 text-red-600">DEPLOYMENT: READY</span>
            <span className="px-8 text-orange-600">PERFORMANCE: MAXIMUM</span>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Modern Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            {/* F1 Status Indicator */}
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-orange-600/30 bg-black/40 backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
              <span className="text-orange-500 text-sm font-mono font-bold tracking-wider uppercase">F1 Garage Services</span>
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
            </div>
            
            {/* Modern Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none">
              <span className="block text-white">PRECISION</span>
              <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                ENGINEERING
              </span>
            </h2>
            
            {/* Modern Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-600"></div>
              <div className="w-3 h-3 border-2 border-orange-600 rotate-45"></div>
              <div className="w-24 h-px bg-gradient-to-r from-orange-600 to-red-600"></div>
              <div className="w-3 h-3 border-2 border-red-600 rotate-45"></div>
              <div className="w-12 h-px bg-gradient-to-r from-red-600 to-transparent"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Fast, efficient, and dynamic solutions crafted with <span className="text-orange-500 font-semibold">F1-level precision</span> and 
              <span className="text-red-500 font-semibold"> championship performance</span>.
            </p>
          </div>

          {/* Modern Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                ref={(el) => {
                  if (el) serviceCardsRef.current[index] = el
                }}
                className="group relative h-full"
              >
                <div className="relative h-full min-h-[400px] bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-sm border border-orange-600/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-600/40 hover:shadow-2xl hover:shadow-orange-600/10">
                  {/* Modern Scan Line Animation */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
                  <div className="absolute -top-1 left-0 w-0 h-px bg-orange-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-orange-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-red-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-red-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-orange-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="p-6 lg:p-8 h-full flex flex-col">
                    {/* Service Tag */}
                    <div className="mb-6">
                      <div className="inline-flex items-center px-3 py-1 bg-orange-600/20 border border-orange-600/40 rounded-lg">
                        <span className="text-orange-500 text-xs font-mono font-bold uppercase tracking-wider">{service.tag}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl flex items-center justify-center border border-orange-600/30 group-hover:border-orange-600/60 transition-all duration-300">
                        <service.icon className="w-8 h-8 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold mb-4 text-white group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300 flex-1">
                      {service.description}
                    </p>

                    {/* Performance Metrics */}
                    <div className="space-y-4 mb-6">
                      <div className="bg-black/40 backdrop-blur-sm border border-orange-600/20 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Speed Rating</span>
                          <span className="text-orange-500 font-bold text-sm">{service.speed}</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000" style={{width: service.speed}}></div>
                        </div>
                      </div>
                      
                      <div className="bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-xl p-4">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Efficiency</span>
                          <span className="text-red-500 font-bold text-sm">{service.efficiency}</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all duration-1000" style={{width: service.efficiency}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Modern Deploy Button */}
                    <div className="mt-auto">
                      <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-red-600 hover:to-orange-600 text-white py-4 px-6 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 relative overflow-hidden group/btn border border-orange-600/30 hover:border-orange-600/60">
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <span>DEPLOY SERVICE</span>
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      </button>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-transparent to-red-600/30 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modern Garage Status Dashboard */}
          <div className="relative group">
            <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-orange-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-600/50 hover:shadow-2xl hover:shadow-orange-600/20">
              {/* Top Racing Line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
              <div className="absolute -top-1 left-0 w-0 h-px bg-orange-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-8 lg:p-12">
                <div className="text-center mb-12">
                  {/* Dashboard Status */}
                  <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-orange-600/30 bg-black/40 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                    <span className="text-orange-500 text-sm font-mono font-bold tracking-wider uppercase">Garage Operations</span>
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 leading-tight">
                    CHAMPIONSHIP PERFORMANCE METRICS
                  </h3>
                  
                  <p className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Our <span className="text-orange-500 font-semibold">precision-engineered services</span> deliver 
                    <span className="text-red-500 font-semibold"> championship-level results</span> with unmatched reliability and speed.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  <div className="text-center group/dashboard">
                    <div className="bg-black/40 backdrop-blur-sm border border-orange-600/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-orange-600/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-orange-600 mb-4 group-hover/dashboard:scale-110 transition-transform duration-300">24/7</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Garage Operations</div>
                    </div>
                  </div>
                  <div className="text-center group/dashboard">
                    <div className="bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-red-600/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-red-600 mb-4 group-hover/dashboard:scale-110 transition-transform duration-300">0.3s</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Avg Response Time</div>
                    </div>
                  </div>
                  <div className="text-center group/dashboard">
                    <div className="bg-black/40 backdrop-blur-sm border border-orange-600/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-orange-600/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-orange-600 mb-4 group-hover/dashboard:scale-110 transition-transform duration-300">99.9%</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Uptime Record</div>
                    </div>
                  </div>
                  <div className="text-center group/dashboard">
                    <div className="bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-red-600/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-red-600 mb-4 group-hover/dashboard:scale-110 transition-transform duration-300">150+</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Projects Deployed</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Racing Line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* F1 Victory Lap Portfolio Section */}
      <section 
        id="portfolio" 
        ref={portfolioRef} 
        className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
      >
        {/* F1 Portfolio Background with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/f1-portfolio-bg.png')",
            y: portfolioParallaxY,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/70" />
        
        {/* Victory Lap Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="grid grid-cols-8 h-full">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-r border-cyan-400/20 h-full" />
            ))}
          </div>
        </div>

        {/* Victory Lap Lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 animate-pulse" />

        {/* Speed Lines Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="flex space-x-8 animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse" 
                style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </div>

        {/* Victory Lap Corner Accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/50" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/50" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/50" />


        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Modern Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            {/* F1 Status Indicator */}
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-cyan-400/30 bg-black/40 backdrop-blur-sm">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-500 text-sm font-mono font-bold tracking-wider uppercase">Victory Lap Portfolio</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Modern Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none">
              <span className="block text-white">CHAMPIONSHIP</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                VICTORIES
              </span>
            </h2>
            
            {/* Modern Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
              <div className="w-3 h-3 border-2 border-cyan-400 rotate-45"></div>
              <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <div className="w-3 h-3 border-2 border-blue-500 rotate-45"></div>
              <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Showcasing our <span className="text-cyan-500 font-semibold">championship portfolio</span> of 
              <span className="text-blue-500 font-semibold"> victory-lap projects</span> that dominated the digital racing circuit.
            </p>
          </div>

          {/* Victory Lap HUD Container */}
          <div className="bg-black/20 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8 mb-12 shadow-2xl shadow-cyan-400/10">
            {/* Portfolio Carousel with F1 Theme */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {portfolioItems.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Project Information Panel */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-8 shadow-xl">
                          {/* Project Status */}
                          <div className="mb-6">
                            <div className="flex items-center mb-4">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider font-mono">
                                PROJECT STATUS: VICTORY
                              </span>
                            </div>
                            <div className="bg-cyan-400/20 text-cyan-400 text-xs font-bold px-4 py-2 uppercase tracking-wider border border-cyan-400/30 rounded-md inline-block">
                              {item.tag}
                            </div>
                          </div>

                          {/* Project Details */}
                          <div className="">
                            <h3 className="text-3xl font-bold mb-4 text-white">
                              {item.title}
                            </h3>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                              {item.description}
                            </p>
                            
                            {/* Project Metrics */}
                            <div className="mb-6 border-t border-cyan-400/30 pt-4">
                              <div className="flex items-center space-x-4 mb-2">
                                <span className="text-cyan-400 font-bold text-sm">{item.category}</span>
                                <span className="text-gray-500">•</span>
                                <span className="text-gray-400 text-sm">{item.year}</span>
                              </div>
                              <div className="flex items-center space-x-4 text-sm">
                                <div className="flex items-center space-x-2">
                                  <span className="text-gray-400">Completion:</span>
                                  <span className="text-cyan-400 font-mono">100%</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-gray-400">Performance:</span>
                                  <span className="text-green-400 font-mono">98%</span>
                                </div>
                              </div>
                            </div>

                            {/* Victory Button */}
                            <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105">
                              <span className="relative z-10 flex items-center justify-center">
                                <span className="mr-2">VIEW VICTORY</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                              </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                          </div>
                        </div>

                        {/* Project Image Display */}
                        <div className="relative">
                          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 shadow-xl">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-96 object-cover rounded-lg"
                            />
                            <div className="absolute inset-4 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none" />
                            
                            {/* Screen Overlay Effects */}
                            <div className="absolute inset-4 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 rounded-lg pointer-events-none animate-pulse"></div>
                            <div className="absolute inset-4 bg-gradient-to-t from-transparent via-transparent to-cyan-400/5 rounded-lg pointer-events-none"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Victory Lap Controls */}
              <div className="mt-12">
                <div className="flex justify-center items-center space-x-6">
                  <button 
                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-cyan-400 hover:to-blue-500 text-white hover:text-black border border-cyan-400/30 hover:border-cyan-400 p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <div className="flex space-x-3">
                    {portfolioItems.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                            : 'bg-transparent border-cyan-400/50 hover:border-cyan-400'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                      />
                    ))}
                  </div>

                  <button 
                    className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-cyan-400 hover:to-blue-500 text-white hover:text-black border border-cyan-400/30 hover:border-cyan-400 p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25 hover:scale-105"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Victory Lap Statistics Dashboard */}
          <div className="mt-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group">
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono group-hover:scale-110 transition-transform duration-300">150+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Victories Won</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group">
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group">
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Awards Won</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 group">
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono group-hover:scale-110 transition-transform duration-300">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Championship Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F1 Pit Crew Testimonials Section */}
      <section id="testimonials" ref={testimonialsRef} className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
        {/* F1 Testimonials Background with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-15"
          style={{
            backgroundImage: "url('/images/f1-testimonials-bg.png')",
            y: testimonialsParallaxY,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/75 to-black/90" />
        
        {/* Modern Racing Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-px h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-gradient-to-b from-orange-600/20 via-transparent to-orange-600/20" />
            ))}
          </div>
        </div>

        {/* Dynamic Pit Lane Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse" />
        <div className="absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60" />
        <div className="absolute bottom-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse" />
        
        {/* Pit Crew Timer */}
        <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-sm border border-orange-600/30 rounded-lg px-4 py-2">
          <div className="text-orange-400 text-xs font-mono font-bold tracking-wider">PIT TIME: 3.24s</div>
        </div>
        
        {/* Performance Status */}
        <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-lg px-4 py-2">
          <div className="text-green-400 text-xs font-mono font-bold tracking-wider">STATUS: OPTIMAL</div>
        </div>



        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Modern Section Header */}
          <div className="text-center mb-16 lg:mb-24">
            {/* F1 Status Indicator */}
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-orange-600/30 bg-black/40 backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
              <span className="text-orange-500 text-sm font-mono font-bold tracking-wider uppercase">Pit Crew Testimonials</span>
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
            </div>
            
            {/* Modern Title */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-none">
              <span className="block text-white">CHAMPIONSHIP</span>
              <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent">
                TEAMWORK
              </span>
            </h2>
            
            {/* Modern Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-600"></div>
              <div className="w-3 h-3 border-2 border-orange-600 rotate-45"></div>
              <div className="w-24 h-px bg-gradient-to-r from-orange-600 to-red-600"></div>
              <div className="w-3 h-3 border-2 border-red-600 rotate-45"></div>
              <div className="w-12 h-px bg-gradient-to-r from-red-600 to-transparent"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our clients are our <span className="text-orange-500 font-semibold">pit crew champions</span>. Here's what the 
              <span className="text-red-500 font-semibold"> fastest teams</span> in the industry say about our performance.
            </p>
          </div>

          {/* Modern Pit Crew Carousel */}
          <div className="mb-12" ref={pitCrewCarouselRef}>
            <div className="overflow-hidden" ref={pitCrewTrackRef}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.name} className="group">
                    <div 
                      className="relative h-full bg-gradient-to-br from-gray-900/90 via-black/90 to-gray-800/90 backdrop-blur-sm border border-orange-600/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-600/40 hover:shadow-2xl hover:shadow-orange-600/10"
                      ref={(el) => {
                        if (el) pitCrewCardsRef.current[index] = el
                      }}
                    >
                      {/* Modern Scan Line Animation */}
                      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
                      <div className="absolute -top-1 left-0 w-0 h-px bg-orange-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-orange-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-red-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-red-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-orange-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      <div className="p-6 lg:p-8 h-full flex flex-col">
                        {/* Pit Crew Tool Icon */}
                        <div className="mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl flex items-center justify-center border border-orange-600/30 group-hover:border-orange-600/60 transition-all duration-300">
                            {index % 3 === 0 ? <Wrench className="w-6 h-6 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" /> : 
                             index % 3 === 1 ? <Settings className="w-6 h-6 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" /> : 
                             <Gauge className="w-6 h-6 text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />}
                          </div>
                        </div>

                        {/* Star Rating */}
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, starIndex) => (
                            <Star 
                              key={starIndex} 
                              className="w-5 h-5 text-orange-400 fill-orange-400 group-hover:text-orange-300 group-hover:fill-orange-300 transition-colors duration-300"
                            />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-gray-300 text-base lg:text-lg leading-relaxed mb-8 flex-1 group-hover:text-gray-200 transition-colors duration-300">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Member Info */}
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 mr-4 rounded-full overflow-hidden border-2 border-orange-600/30 group-hover:border-orange-600/60 transition-all duration-300">
                            <img
                              src={testimonial.avatar || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-white font-bold text-lg group-hover:text-orange-400 transition-colors duration-300">{testimonial.name}</div>
                            <div className="text-orange-500 text-sm font-medium">{testimonial.role}</div>
                            <div className="text-gray-400 text-sm">{testimonial.company}</div>
                          </div>
                        </div>

                        {/* Performance Metrics */}
                        <div className="bg-black/40 backdrop-blur-sm border border-orange-600/20 rounded-xl p-4">
                          <div className="flex justify-between items-center text-sm mb-2">
                            <span className="text-gray-400">Pit Stop Time:</span>
                            <span className="text-orange-400 font-mono font-bold">{(2.1 + index * 0.3).toFixed(1)}s</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Efficiency:</span>
                            <span className="text-green-400 font-mono font-bold">{98 - index}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-transparent to-red-600/30 rounded-2xl"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modern Pit Crew Controls */}
          <div className="flex justify-center items-center space-x-6 mb-16">
            <button 
              className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-orange-600 hover:to-red-600 text-white border border-orange-600/30 hover:border-orange-600 p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/25 hover:scale-105"
              onClick={prevTestimonialSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    index === currentTestimonialSlide 
                      ? 'bg-orange-600 border-orange-600 shadow-lg shadow-orange-600/50' 
                      : 'bg-transparent border-orange-600/50 hover:border-orange-600'
                  }`}
                  onClick={() => goToTestimonialSlide(index)}
                />
              ))}
            </div>

            <button 
              className="bg-gradient-to-r from-gray-700 to-gray-800 hover:from-orange-600 hover:to-red-600 text-white border border-orange-600/30 hover:border-orange-600 p-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/25 hover:scale-105"
              onClick={nextTestimonialSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Modern Pit Stop Statistics Dashboard */}
          <div className="relative group">
            <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-orange-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-600/50 hover:shadow-2xl hover:shadow-orange-600/20">
              {/* Top Racing Line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
              <div className="absolute -top-1 left-0 w-0 h-px bg-orange-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-8 lg:p-12">
                <div className="text-center mb-12">
                  {/* Dashboard Status */}
                  <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-orange-600/30 bg-black/40 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                    <span className="text-orange-500 text-sm font-mono font-bold tracking-wider uppercase">Pit Stop Statistics</span>
                    <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                  </div>
                  
                  <h3 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 leading-tight">
                    CHAMPIONSHIP PIT CREW PERFORMANCE
                  </h3>
                  
                  <p className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Our <span className="text-orange-500 font-semibold">championship pit crew</span> delivers 
                    <span className="text-red-500 font-semibold"> lightning-fast results</span> with unmatched precision and teamwork.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  <div className="text-center group/dashboard">
                    <div className="bg-black/40 backdrop-blur-sm border border-orange-600/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-orange-600/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-orange-600 mb-4 group-hover/dashboard:scale-110 transition-transform duration-300">2.3s</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Avg Response Time</div>
                    </div>
                  </div>
                  <div className="text-center group/dashboard">
                    <div className="bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-red-600/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-red-600 mb-4 group-hover/dashboard:scale-110 transition-transform duration-300">150+</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Projects Completed</div>
                    </div>
                  </div>
                  <div className="text-center group/dashboard">
                    <div className="bg-black/40 backdrop-blur-sm border border-orange-600/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-orange-600/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-orange-600 mb-4 group-hover/dashboard:scale-110 transition-transform duration-300">98%</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Success Rate</div>
                    </div>
                  </div>
                  <div className="text-center group/dashboard">
                    <div className="bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-xl p-6 lg:p-8 transition-all duration-300 hover:border-red-600/40 hover:bg-black/60">
                      <div className="text-4xl lg:text-5xl xl:text-6xl font-black text-red-600 mb-4 group-hover/dashboard:scale-110 transition-transform duration-300">24/7</div>
                      <div className="text-sm lg:text-base text-gray-400 uppercase tracking-widest font-medium">Pit Support</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Racing Line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* F1 Championship Contact Section */}
      <section id="contact" ref={contactRef} className="py-16 lg:py-24 relative overflow-hidden">
        {/* F1 Contact Background with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/f1-contact-bg.png')",
            y: contactParallaxY,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/80 to-black/90" />
        
        {/* Animated Racing Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top Racing Line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
          <div className="absolute top-2 left-0 w-0 h-px bg-orange-600 animate-[expandLine_3s_ease-in-out_infinite] delay-500"></div>
          
          {/* Middle Racing Lines */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600/40 to-transparent animate-pulse"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600/40 to-transparent animate-pulse"></div>
          
          {/* Bottom Racing Line */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
          <div className="absolute bottom-2 left-0 w-0 h-px bg-orange-600 animate-[expandLine_3s_ease-in-out_infinite] delay-1000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Modern F1 Section Header */}
          <div className="text-center mb-16 lg:mb-20 relative group">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full border border-orange-600/30 bg-black/40 backdrop-blur-sm">
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
              <span className="text-orange-500 text-sm font-mono font-bold tracking-wider uppercase">Championship Contact Zone</span>
              <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
            </div>
            
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-none">
              CROSS THE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-orange-600">
                FINISH LINE
              </span>
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to claim victory? Start your engines and race towards 
              <span className="text-orange-500 font-semibold"> digital excellence</span> with our 
              <span className="text-red-500 font-semibold">championship team</span>.
            </p>
            
            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 border-l-2 border-r-2 border-t-2 border-orange-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-6 border-l-2 border-r-2 border-b-2 border-orange-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Main Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Contact Information Panel */}
            <div className="relative group">
              <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-orange-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-600/50 hover:shadow-2xl hover:shadow-orange-600/20">
                {/* Top Racing Line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
                <div className="absolute -top-1 left-0 w-0 h-px bg-orange-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-8 lg:p-12">
                  <h3 className="text-3xl lg:text-4xl font-black text-white mb-8 leading-tight">
                    PIT STOP <span className="text-orange-600">INFORMATION</span>
                  </h3>
                  
                  <div className="space-y-8">
                    {/* Email Contact */}
                    <div className="flex items-center group/item transition-all duration-300 hover:bg-black/30 hover:border-orange-600/30 p-4 rounded-xl border border-transparent">
                      <div className="w-14 h-14 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-600/30 rounded-xl flex items-center justify-center group-hover/item:from-orange-600/30 group-hover/item:to-red-600/30 group-hover/item:border-orange-600/50 transition-all duration-300">
                        <Mail className="w-6 h-6 text-orange-600 group-hover/item:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="ml-6">
                        <div className="text-orange-600 text-sm font-bold uppercase tracking-wider font-mono">Email Command</div>
                        <div className="text-white text-lg lg:text-xl font-medium">hello@enshift.com</div>
                      </div>
                    </div>
                    
                    {/* Phone Contact */}
                    <div className="flex items-center group/item transition-all duration-300 hover:bg-black/30 hover:border-red-600/30 p-4 rounded-xl border border-transparent">
                      <div className="w-14 h-14 bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm border border-red-600/30 rounded-xl flex items-center justify-center group-hover/item:from-red-600/30 group-hover/item:to-orange-600/30 group-hover/item:border-red-600/50 transition-all duration-300">
                        <Phone className="w-6 h-6 text-red-600 group-hover/item:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="ml-6">
                        <div className="text-red-600 text-sm font-bold uppercase tracking-wider font-mono">Radio Frequency</div>
                        <div className="text-white text-lg lg:text-xl font-medium">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    {/* Location Contact */}
                    <div className="flex items-center group/item transition-all duration-300 hover:bg-black/30 hover:border-orange-600/30 p-4 rounded-xl border border-transparent">
                      <div className="w-14 h-14 bg-gradient-to-r from-orange-600/20 to-red-600/20 backdrop-blur-sm border border-orange-600/30 rounded-xl flex items-center justify-center group-hover/item:from-orange-600/30 group-hover/item:to-red-600/30 group-hover/item:border-orange-600/50 transition-all duration-300">
                        <MapPin className="w-6 h-6 text-orange-600 group-hover/item:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="ml-6">
                        <div className="text-orange-600 text-sm font-bold uppercase tracking-wider font-mono">Circuit Location</div>
                        <div className="text-white text-lg lg:text-xl font-medium">Monaco, Monte Carlo</div>
                      </div>
                    </div>
                  </div>

                  {/* F1 Race Statistics Dashboard */}
                  <div className="mt-12 pt-8 border-t border-orange-600/20">
                    <div className="grid grid-cols-3 gap-6">
                      <div className="text-center group/stat">
                        <div className="bg-black/40 backdrop-blur-sm border border-orange-600/20 rounded-xl p-4 lg:p-6 transition-all duration-300 hover:border-orange-600/40 hover:bg-black/60">
                          <div className="text-2xl lg:text-3xl font-black text-orange-600 mb-2 font-mono group-hover/stat:scale-110 transition-transform duration-300">24h</div>
                          <div className="text-xs lg:text-sm text-gray-400 uppercase tracking-widest font-medium">Response Time</div>
                        </div>
                      </div>
                      <div className="text-center group/stat">
                        <div className="bg-black/40 backdrop-blur-sm border border-red-600/20 rounded-xl p-4 lg:p-6 transition-all duration-300 hover:border-red-600/40 hover:bg-black/60">
                          <div className="text-2xl lg:text-3xl font-black text-red-600 mb-2 font-mono group-hover/stat:scale-110 transition-transform duration-300">100%</div>
                          <div className="text-xs lg:text-sm text-gray-400 uppercase tracking-widest font-medium">Success Rate</div>
                        </div>
                      </div>
                      <div className="text-center group/stat">
                        <div className="bg-black/40 backdrop-blur-sm border border-orange-600/20 rounded-xl p-4 lg:p-6 transition-all duration-300 hover:border-orange-600/40 hover:bg-black/60">
                          <div className="text-2xl lg:text-3xl font-black text-orange-600 mb-2 font-mono group-hover/stat:scale-110 transition-transform duration-300">300+</div>
                          <div className="text-xs lg:text-sm text-gray-400 uppercase tracking-widest font-medium">Projects Won</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Racing Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
              </div>
            </div>

            {/* Glassmorphism Contact Form */}
            <div className="relative group">
              <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-orange-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-600/50 hover:shadow-2xl hover:shadow-orange-600/20">
                {/* Top Racing Line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
                <div className="absolute -top-1 left-0 w-0 h-px bg-orange-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-8 lg:p-12">
                  <div className="mb-8">
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 leading-tight">
                      START YOUR <span className="text-orange-600">RACE</span>
                    </h3>
                    <p className="text-gray-400 text-base lg:text-lg">Fill out the form below to begin your journey to victory</p>
                  </div>
                  
                  <form className="space-y-6">
                    {/* Name Input */}
                    <div className="relative group/input">
                      <Input 
                        placeholder="Your Name" 
                        className="w-full bg-black/40 backdrop-blur-sm border border-orange-600/30 text-white placeholder-gray-500 px-4 py-4 lg:py-5 rounded-xl text-base lg:text-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 group-hover/input:border-orange-600/50 group-hover/input:bg-black/60" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    {/* Email Input */}
                    <div className="relative group/input">
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="w-full bg-black/40 backdrop-blur-sm border border-orange-600/30 text-white placeholder-gray-500 px-4 py-4 lg:py-5 rounded-xl text-base lg:text-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 group-hover/input:border-orange-600/50 group-hover/input:bg-black/60" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    {/* Project Type Input */}
                    <div className="relative group/input">
                      <Input 
                        placeholder="Project Type" 
                        className="w-full bg-black/40 backdrop-blur-sm border border-orange-600/30 text-white placeholder-gray-500 px-4 py-4 lg:py-5 rounded-xl text-base lg:text-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 group-hover/input:border-orange-600/50 group-hover/input:bg-black/60" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    {/* Message Textarea */}
                    <div className="relative group/input">
                      <textarea 
                        placeholder="Tell us about your vision..."
                        rows={5}
                        className="w-full bg-black/40 backdrop-blur-sm border border-orange-600/30 text-white placeholder-gray-500 px-4 py-4 lg:py-5 rounded-xl text-base lg:text-lg focus:outline-none focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 transition-all duration-300 group-hover/input:border-orange-600/50 group-hover/input:bg-black/60 resize-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    {/* Submit Button with F1 Racing Effects */}
                    <div className="relative group/submit">
                      <button 
                        type="submit" 
                        className="w-full relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold py-4 lg:py-5 px-8 rounded-xl transition-all duration-300 group-hover/submit:shadow-2xl group-hover/submit:shadow-orange-600/50 group-hover/submit:scale-[1.02] flex items-center justify-center space-x-3 text-base lg:text-lg"
                      >
                        {/* Button Background Animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover/submit:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                        
                        <span className="relative z-10 flex items-center space-x-3">
                          <span className="font-black tracking-wider uppercase">CROSS THE FINISH LINE</span>
                          <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover/submit:translate-x-1 transition-transform duration-300" />
                        </span>
                        
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 bg-orange-600/30 rounded-xl scale-100 group-hover/submit:scale-110 opacity-0 group-hover/submit:opacity-100 transition-all duration-300"></div>
                      </button>
                    </div>
                  </form>
                </div>
                
                {/* Bottom Racing Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* F1 Championship Trophy Section */}
          <div className="mt-16 lg:mt-20 text-center relative group">
            <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-orange-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-600/50 hover:shadow-2xl hover:shadow-orange-600/20 max-w-2xl mx-auto">
              {/* Top Racing Line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
              <div className="absolute -top-1 left-0 w-0 h-px bg-orange-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-8 lg:p-12">
                {/* Trophy Icon */}
                <div className="mb-6 relative">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-orange-600/50 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <span className="text-3xl lg:text-4xl animate-bounce">🏆</span>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-20 h-20 lg:w-24 lg:h-24 bg-orange-600/30 rounded-full mx-auto blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Championship Status */}
                <div className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full border border-orange-600/30 bg-black/40 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                  <span className="text-orange-500 text-sm font-mono font-bold tracking-wider uppercase">Championship Ready</span>
                  <div className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></div>
                </div>
                
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                  Join <span className="text-orange-500 font-bold">300+ winning projects</span> and claim your 
                  <span className="text-red-500 font-bold"> digital championship</span> today
                </p>
              </div>
              
              {/* Bottom Racing Line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* F1 Championship Footer Section */}
      <footer
        ref={footerRef}
        className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900 border-t border-red-600/30"
      >
        {/* F1 Racing Circuit Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 h-full gap-px">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-gradient-to-b from-red-600/10 via-transparent to-red-600/10" />
            ))}
          </div>
        </div>

        {/* Dynamic Championship Racing Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />
        <div className="absolute top-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60" />
        <div className="absolute bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-60" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse" />

        {/* Championship Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-gray-900/70 to-black/90"></div>
        
        {/* Dynamic Championship Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 opacity-80">
          <div
            ref={footerTrackRef}
            className="h-full bg-gradient-to-r from-red-600 via-white to-red-600 w-0 animate-[expandLine_4s_ease-in-out_infinite]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 lg:py-20">
          {/* Modern Championship Header */}
          <div className="text-center mb-16 relative group">
            {/* Championship Logo */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 leading-none group-hover:scale-105 transition-transform duration-500">
                  EN<span className="text-red-600">SHIFT</span>
                </div>
                
                {/* Status Lights */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-lg shadow-red-600/50" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-red-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              </div>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <span className="text-red-600 font-bold">CHAMPIONSHIP WINNER</span> in digital racing. 
              Delivering <span className="text-cyan-400 font-semibold">high-performance</span> solutions 
              that put your brand on the <span className="text-orange-400 font-semibold">podium</span>.
            </p>
          </div>

          {/* Modern Championship Dashboard */}
          <div ref={footerContentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
            {/* Main Championship Control Center */}
            <div className="lg:col-span-6 relative group">
              <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-red-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-red-600/50 hover:shadow-2xl hover:shadow-red-600/20">
                {/* Top Racing Line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
                <div className="absolute -top-1 left-0 w-0 h-px bg-red-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-8 lg:p-10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
                      RACING CONTROL <span className="text-red-600">CENTER</span>
                    </h3>
                    <div className="bg-black/40 backdrop-blur-sm border border-red-600/30 rounded-lg px-4 py-2">
                      <span className="text-red-600 font-mono text-sm lg:text-base font-bold tracking-wider uppercase">LIVE</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 lg:p-6 transition-all duration-300 hover:border-cyan-400/40 hover:bg-black/60 group/metric">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                          <Gauge className="w-5 h-5 text-cyan-400 group-hover/metric:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <div className="text-2xl lg:text-3xl font-black text-cyan-400 font-mono">300+</div>
                          <div className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider font-medium">Projects Won</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-sm border border-orange-400/20 rounded-xl p-4 lg:p-6 transition-all duration-300 hover:border-orange-400/40 hover:bg-black/60 group/metric">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-400/20 to-yellow-500/20 rounded-lg flex items-center justify-center">
                          <Trophy className="w-5 h-5 text-orange-400 group-hover/metric:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <div className="text-2xl lg:text-3xl font-black text-orange-400 font-mono">50+</div>
                          <div className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider font-medium">Awards</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-sm border border-green-400/20 rounded-xl p-4 lg:p-6 transition-all duration-300 hover:border-green-400/40 hover:bg-black/60 group/metric">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-green-400 group-hover/metric:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <div className="text-2xl lg:text-3xl font-black text-green-400 font-mono">24/7</div>
                          <div className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider font-medium">Support</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-black/40 backdrop-blur-sm border border-orange-600/20 rounded-xl p-4 lg:p-6 transition-all duration-300 hover:border-orange-600/40 hover:bg-black/60 group/metric">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-600/20 to-red-500/20 rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-orange-600 group-hover/metric:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <div className="text-2xl lg:text-3xl font-black text-orange-600 font-mono">99.9%</div>
                          <div className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider font-medium">On-Time Delivery</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Championship Performance Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">Championship Performance</span>
                      <span className="text-sm text-cyan-400 font-mono font-bold">98.7%</span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden border border-gray-700/50">
                      <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out animate-pulse" style={{width: '98.7%'}}></div>
                    </div>
                  </div>

                  {/* Live Status */}
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      <span className="text-green-400 font-semibold text-sm lg:text-base uppercase tracking-wider">SYSTEMS OPTIMAL</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                      <span className="text-cyan-400 font-semibold text-sm lg:text-base uppercase tracking-wider">READY TO RACE</span>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Racing Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
              </div>
            </div>

            {/* Navigation & Contact Cards */}
            <div className="lg:col-span-6 space-y-8">
              {/* Racing Navigation */}
              <div className="relative group">
                <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-orange-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-600/50 hover:shadow-2xl hover:shadow-orange-600/20">
                  {/* Top Racing Line */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
                  <div className="absolute -top-1 left-0 w-0 h-px bg-orange-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-orange-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="p-6 lg:p-8">
                    <h4 className="text-xl lg:text-2xl font-black text-white mb-6 leading-tight">
                      RACING <span className="text-orange-600">CIRCUITS</span>
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "Home", icon: Home, color: "text-cyan-400" },
                        { name: "About", icon: User, color: "text-orange-400" },
                        { name: "Services", icon: Settings, color: "text-green-400" },
                        { name: "Portfolio", icon: Trophy, color: "text-orange-600" },
                        { name: "Contact", icon: Mail, color: "text-red-600" },
                        { name: "Blog", icon: FileText, color: "text-yellow-400" }
                      ].map((item) => (
                        <a
                          key={item.name}
                          href={`#${item.name.toLowerCase()}`}
                          className="flex items-center space-x-3 p-3 bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-lg transition-all duration-300 hover:border-orange-600/50 hover:bg-black/50 group/nav"
                        >
                          <item.icon className={`w-4 h-4 ${item.color} group-hover/nav:text-white transition-colors duration-300 group-hover/nav:scale-110`} />
                          <span className="text-gray-300 group-hover/nav:text-white transition-colors duration-300 text-sm font-medium">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom Racing Line */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent animate-pulse"></div>
                </div>
              </div>

              {/* Championship Contact */}
              <div className="relative group">
                <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-400/20">
                  {/* Top Racing Line */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                  <div className="absolute -top-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-1000 ease-out"></div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-blue-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="p-6 lg:p-8">
                    <h4 className="text-xl lg:text-2xl font-black text-white mb-6 leading-tight">
                      PIT STOP <span className="text-cyan-400">COMMUNICATIONS</span>
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-3 bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-lg transition-all duration-300 hover:border-cyan-400/50 hover:bg-black/50 group/contact">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                          <Mail className="w-5 h-5 text-cyan-400 group-hover/contact:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider font-mono">Email Command</div>
                          <div className="text-white text-sm lg:text-base font-medium">hello@enshift.com</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-3 bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-lg transition-all duration-300 hover:border-green-400/50 hover:bg-black/50 group/contact">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-lg flex items-center justify-center">
                          <Phone className="w-5 h-5 text-green-400 group-hover/contact:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <div className="text-green-400 text-xs font-bold uppercase tracking-wider font-mono">Radio Frequency</div>
                          <div className="text-white text-sm lg:text-base font-medium">+1 (555) 123-4567</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-3 bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-lg transition-all duration-300 hover:border-red-600/50 hover:bg-black/50 group/contact">
                        <div className="w-10 h-10 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-red-600 group-hover/contact:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <div className="text-red-600 text-xs font-bold uppercase tracking-wider font-mono">Circuit Location</div>
                          <div className="text-white text-sm lg:text-base font-medium">Digital Highway, Cloud City</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom Racing Line */}
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Championship Social & Newsletter */}
          <div ref={footerSocialRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Social Racing Hub */}
            <div className="relative group">
              <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-purple-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-600/50 hover:shadow-2xl hover:shadow-purple-600/20">
                {/* Top Racing Line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent animate-pulse"></div>
                <div className="absolute -top-1 left-0 w-0 h-px bg-purple-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-pink-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-pink-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-purple-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-6 lg:p-8">
                  <h4 className="text-xl lg:text-2xl font-black text-white mb-6 leading-tight">
                    FOLLOW THE <span className="text-purple-600">CHAMPIONSHIP</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { Icon: Twitter, label: "Twitter", color: "text-blue-400", bg: "from-blue-500/20 to-cyan-500/20" },
                      { Icon: Instagram, label: "Instagram", color: "text-pink-400", bg: "from-pink-500/20 to-purple-500/20" },
                      { Icon: Linkedin, label: "LinkedIn", color: "text-blue-500", bg: "from-blue-600/20 to-indigo-500/20" },
                      { Icon: Github, label: "GitHub", color: "text-gray-300", bg: "from-gray-500/20 to-slate-500/20" }
                    ].map(({ Icon, label, color, bg }, index) => (
                      <a
                        key={label}
                        href="#"
                        className={`flex items-center space-x-3 p-4 bg-gradient-to-r ${bg} backdrop-blur-sm border border-gray-700/50 rounded-xl transition-all duration-300 hover:border-purple-600/50 hover:bg-black/50 group/social`}
                      >
                        <Icon className={`w-5 h-5 ${color} group-hover/social:text-white transition-colors duration-300 group-hover/social:scale-110`} />
                        <span className="text-gray-300 group-hover/social:text-white transition-colors duration-300 text-sm font-medium">
                          {label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Bottom Racing Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent animate-pulse"></div>
              </div>
            </div>

            {/* Championship Newsletter */}
            <div className="relative group">
              <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-yellow-600/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-yellow-600/50 hover:shadow-2xl hover:shadow-yellow-600/20">
                {/* Top Racing Line */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent animate-pulse"></div>
                <div className="absolute -top-1 left-0 w-0 h-px bg-yellow-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-yellow-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-orange-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-yellow-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="p-6 lg:p-8">
                  <h4 className="text-xl lg:text-2xl font-black text-white mb-6 leading-tight">
                    CHAMPIONSHIP <span className="text-yellow-600">UPDATES</span>
                  </h4>
                  <div className="mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
                      </div>
                      <span className="text-gray-300 text-sm lg:text-base">Get race updates & performance insights</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative group/input">
                      <Input
                        placeholder="Enter your email for championship updates"
                        className="w-full bg-black/40 backdrop-blur-sm border border-yellow-600/30 text-white placeholder-gray-500 px-4 py-3 lg:py-4 rounded-xl text-sm lg:text-base focus:outline-none focus:border-yellow-600 focus:ring-2 focus:ring-yellow-600/20 transition-all duration-300 group-hover/input:border-yellow-600/50 group-hover/input:bg-black/60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                    
                    <button className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white font-bold py-3 lg:py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-600/50 hover:scale-[1.02] flex items-center justify-center space-x-3 text-sm lg:text-base group/submit">
                      {/* Button Background Animation */}
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover/submit:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                      
                      <Send className="w-4 h-4 group-hover/submit:translate-x-1 transition-transform duration-300" />
                      <span className="font-black tracking-wider uppercase">JOIN RACE</span>
                      
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 bg-yellow-600/30 rounded-xl scale-100 group-hover/submit:scale-110 opacity-0 group-hover/submit:opacity-100 transition-all duration-300"></div>
                    </button>
                  </div>
                </div>
                
                {/* Bottom Racing Line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Championship Footer Bottom */}
          <div className="relative group">
            <div className="bg-gradient-to-r from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gray-600/50 hover:shadow-2xl hover:shadow-gray-600/20">
              {/* Top Racing Line */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-pulse"></div>
              <div className="absolute -top-1 left-0 w-0 h-px bg-gray-600 group-hover:w-full transition-all duration-1000 ease-out"></div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-gray-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-gray-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-gray-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-gray-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                  <div className="text-center lg:text-left">
                    <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                      &copy; {new Date().getFullYear()} 
                      <span className="text-red-600 font-bold"> ENSHIFT RACING TEAM</span>
                      . All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Championship winner in digital performance racing since 2020.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 lg:gap-8 text-sm">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline font-medium">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline font-medium">
                      Terms of Service
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline font-medium">
                      Cookie Policy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline font-medium">
                      Racing Rules
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Bottom Racing Line */}
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Championship Finish Line */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse shadow-lg shadow-red-600/50" />
      </footer>
    </div>
    </>
  )
}
