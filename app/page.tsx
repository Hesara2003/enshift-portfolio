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
  const [pitCrewTimeline, setPitCrewTimeline] = useState<gsap.core.Timeline | null>(null)
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

    setPitCrewTimeline(timeline)

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
      if (pitCrewTimeline) {
        pitCrewTimeline.kill()
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
      icon: <Sparkles className="w-8 h-8" />,
      title: "Web Design",
      description: "Lightning-fast, responsive websites engineered for peak performance and user experience.",
      tag: "DESIGN",
      speed: "0.3s",
      efficiency: "98%",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Precision-crafted interfaces that deliver seamless user journeys and engagement.",
      tag: "INTERFACE",
      speed: "0.2s",
      efficiency: "96%",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Strategic brand positioning that accelerates growth and market dominance.",
      tag: "STRATEGY",
      speed: "1.5s",
      efficiency: "94%",
    },
    {
      icon: <Users className="w-8 h-8" />,
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
    if (pitCrewTimeline) {
      pitCrewTimeline.pause()
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
    if (pitCrewTimeline) {
      pitCrewTimeline.pause()
      gsap.to(pitCrewTrackRef.current, {
        x: `${-newSlide * 33.333}%`,
        duration: 0.8,
        ease: "power2.inOut",
      })
    }
  }

  const goToTestimonialSlide = (index: number) => {
    setCurrentTestimonialSlide(index)
    if (pitCrewTimeline) {
      pitCrewTimeline.pause()
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
    className = "text-f1-red",
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
          className="h-full bg-gradient-to-r from-f1-red to-red-400"
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

        <div className="absolute top-8 left-1/2 w-2 h-2 bg-f1-red rounded-full transform -translate-x-1/2" />
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-f1-red text-lg font-bold">
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
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* F1 Racing Hero Section with GSAP ScrollTrigger */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black racing-hero-section"
      >
        {/* Racing Grid Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-16 h-full">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="border-r border-f1-red/20 h-full" />
            ))}
          </div>
        </div>

        {/* F1 Racing Lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-f1-red via-red-400 to-f1-red racing-line-animation" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-f1-red via-red-400 to-f1-red racing-line-animation" />

        {/* Speed Lines Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="hero-speed-lines"></div>
        </div>

        {/* Racing Corner Accents */}
        <div className="racing-corner-accent top-left"></div>
        <div className="racing-corner-accent top-right"></div>
        <div className="racing-corner-accent bottom-left"></div>
        <div className="racing-corner-accent bottom-right"></div>

        {/* Racing Data Stream */}
        <div className="absolute top-4 left-0 right-0 overflow-hidden">
          <div className="racing-data-stream">
            ENGINE_STATUS: TURBOCHARGED | PERFORMANCE: MAX | SPEED: 320KM/H | POSITION: POLE | SYSTEM: ENSHIFT_RACING
          </div>
        </div>

        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div
            ref={heroBgRef}
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60 bg-image-optimized"
            style={{
              backgroundImage: "url('/images/f1-hero-bg.png')",
              zIndex: 1,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" style={{ zIndex: 2 }} />
        </div>

        {/* Racing HUD Container */}
        <div className="racing-hud-container racing-hud-glow p-8 relative z-10">
          {/* Hero Content */}
          <div ref={heroContentRef} className="container mx-auto px-6 text-center">
            {/* System Status */}
            <div className="racing-system-status mb-6">
              <div className="text-f1-red text-sm font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-f1-red rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-f1-red rounded-full animate-pulse"></span>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="racing-hero-title text-6xl md:text-8xl font-bold mb-6 text-white leading-tight">
              ELEVATE YOUR
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-f1-red via-red-400 to-orange-500 racing-title-glow">
                DIGITAL PRESENCE
              </span>
            </h1>

            {/* Racing Subtitle */}
            <p className="racing-hero-subtitle text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              We create immersive digital experiences that captivate audiences and drive results. Transform your brand with cutting-edge design and innovative technology.
            </p>

            {/* Racing HUD Status Bar */}
            <div className="racing-hud-status-bar mx-auto w-64 mb-8"></div>

            {/* Racing Control Buttons */}
            <div className="racing-controls flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="racing-btn-primary bg-gradient-to-r from-f1-red to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-8 py-4 text-lg font-bold uppercase tracking-wider relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  GET STARTED
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="racing-btn-secondary border-2 border-f1-red text-f1-red hover:bg-f1-red hover:text-white px-8 py-4 text-lg font-bold uppercase tracking-wider bg-transparent transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                WATCH DEMO
              </Button>
            </div>

            {/* Racing Performance Indicators */}
            <div className="racing-performance-indicators mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="racing-indicator">
                <div className="racing-indicator-value text-f1-red text-2xl font-bold mb-2">320+</div>
                <div className="racing-indicator-label text-gray-400 text-sm uppercase tracking-wider">Projects</div>
              </div>
              <div className="racing-indicator">
                <div className="racing-indicator-value text-f1-red text-2xl font-bold mb-2">98%</div>
                <div className="racing-indicator-label text-gray-400 text-sm uppercase tracking-wider">Success Rate</div>
              </div>
              <div className="racing-indicator">
                <div className="racing-indicator-value text-f1-red text-2xl font-bold mb-2">5+</div>
                <div className="racing-indicator-label text-gray-400 text-sm uppercase tracking-wider">Years Racing</div>
              </div>
              <div className="racing-indicator">
                <div className="racing-indicator-value text-f1-red text-2xl font-bold mb-2">24/7</div>
                <div className="racing-indicator-label text-gray-400 text-sm uppercase tracking-wider">Pit Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Racing Scan Lines Effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="racing-scan-lines"></div>
        </div>
      </section>

      {/* F1 Racing Video Section */}
      

      {/* F1 Sliding Cards About Section */}
      <section 
        id="about" 
        ref={aboutRef} 
        className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
      >
        {/* F1 About Background with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 motion-div"
          style={{
            backgroundImage: "url('/images/f1-about-bg.png')",
            y: aboutParallaxY,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        
        {/* Racing Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="racing-grid-pattern"></div>
        </div>

        {/* F1 Speed Lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="f1-speed-lines"></div>
        </div>

        {/* Racing Data Stream */}
        <div className="absolute top-2 sm:top-4 left-0 right-0 overflow-hidden z-10">
          <div className="f1-data-stream text-xs sm:text-sm">
            <span className="hidden sm:inline">TELEMETRY: ACTIVE | PERFORMANCE: 98.7% | STATUS: CHAMPIONSHIP MODE | CLIENTS: 150+ | PROJECTS: DEPLOYED</span>
            <span className="sm:hidden">TELEMETRY: ACTIVE | PERFORMANCE: 98.7%</span>
          </div>
        </div>

        <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-20">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-16">
            <div className="f1-status-indicator text-f1-red mb-3 sm:mb-4 text-xs sm:text-sm">
              <span className="inline-block w-1.5 sm:w-2 h-1.5 sm:h-2 bg-f1-red rounded-full animate-pulse mr-2"></span>
              ABOUT ENSHIFT
              <span className="inline-block w-1.5 sm:w-2 h-1.5 sm:h-2 bg-f1-red rounded-full animate-pulse ml-2"></span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 text-white leading-tight">
              CHAMPIONSHIP
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-f1-red to-orange-500">
                ENGINEERING
              </span>
            </h2>
            <div className="f1-divider mx-auto w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-f1-red to-orange-500 mb-4 sm:mb-6"></div>
            <p className="f1-body text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
              Racing ahead of the competition with precision engineering and championship-level performance
            </p>
          </div>

          {/* F1 Racing Cards Grid */}
          <div className="f1-racing-cards-grid grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
            
            {/* Card 1 - Mission Control */}
            <div className="f1-racing-card f1-card-1">
              <div className="f1-card-inner bg-gradient-to-br from-gray-800 to-gray-900 border border-f1-red/30 p-4 sm:p-6 lg:p-8 rounded-lg relative overflow-hidden">
                <div className="f1-card-scan-line"></div>
                <div className="f1-card-header flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                  <div className="flex items-center">
                    <div className="f1-status-light bg-green-400 w-2 sm:w-3 h-2 sm:h-3 rounded-full animate-pulse mr-2 sm:mr-3"></div>
                    <h3 className="f1-subtitle text-lg sm:text-xl lg:text-2xl text-white">MISSION CONTROL</h3>
                  </div>
                  <div className="f1-card-number text-f1-red font-bold text-base sm:text-lg">01</div>
                </div>
                <div className="f1-card-content">
                  <p className="f1-body text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                    To be the catalyst that propels brands into the future, creating digital experiences 
                    that not only meet today's needs but anticipate tomorrow's possibilities.
                  </p>
                  <div className="f1-metrics-grid grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    <div className="f1-metric text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1 sm:mb-2">150+</div>
                      <div className="text-xs sm:text-sm text-gray-400 uppercase">Projects Complete</div>
                    </div>
                    <div className="f1-metric text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-400 mb-1 sm:mb-2">50+</div>
                      <div className="text-xs sm:text-sm text-gray-400 uppercase">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Performance Matrix */}
            <div className="f1-racing-card f1-card-2">
              <div className="f1-card-inner bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 p-4 sm:p-6 lg:p-8 rounded-lg relative overflow-hidden">
                <div className="f1-card-scan-line"></div>
                <div className="f1-card-header flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                  <div className="flex items-center">
                    <div className="f1-status-light bg-orange-500 w-2 sm:w-3 h-2 sm:h-3 rounded-full animate-pulse mr-2 sm:mr-3"></div>
                    <h3 className="f1-subtitle text-lg sm:text-xl lg:text-2xl text-white">PERFORMANCE MATRIX</h3>
                  </div>
                  <div className="f1-card-number text-orange-500 font-bold text-base sm:text-lg">02</div>
                </div>
                <div className="f1-card-content">
                  <p className="f1-body text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                    We combine strategic thinking with creative execution, ensuring every project delivers 
                    measurable results while pushing the boundaries of what's possible.
                  </p>
                  <div className="f1-performance-bars space-y-3 sm:space-y-4">
                    <div className="f1-perf-bar">
                      <div className="flex justify-between mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm text-gray-400">Client Satisfaction</span>
                        <span className="text-orange-500 font-bold text-xs sm:text-sm">98%</span>
                      </div>
                      <div className="f1-progress-track bg-gray-700 h-1.5 sm:h-2 rounded-full overflow-hidden">
                        <div className="f1-progress-fill bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full" style={{width: '98%'}}></div>
                      </div>
                    </div>
                    <div className="f1-perf-bar">
                      <div className="flex justify-between mb-1 sm:mb-2">
                        <span className="text-xs sm:text-sm text-gray-400">Success Rate</span>
                        <span className="text-orange-500 font-bold text-xs sm:text-sm">95%</span>
                      </div>
                      <div className="f1-progress-track bg-gray-700 h-1.5 sm:h-2 rounded-full overflow-hidden">
                        <div className="f1-progress-fill bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Championship Stats */}
            <div className="f1-racing-card f1-card-3">
              <div className="f1-card-inner bg-gradient-to-br from-gray-800 to-gray-900 border border-blue-500/30 p-4 sm:p-6 lg:p-8 rounded-lg relative overflow-hidden">
                <div className="f1-card-scan-line"></div>
                <div className="f1-card-header flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                  <div className="flex items-center">
                    <div className="f1-status-light bg-blue-500 w-2 sm:w-3 h-2 sm:h-3 rounded-full animate-pulse mr-2 sm:mr-3"></div>
                    <h3 className="f1-subtitle text-lg sm:text-xl lg:text-2xl text-white">CHAMPIONSHIP STATS</h3>
                  </div>
                  <div className="f1-card-number text-blue-500 font-bold text-base sm:text-lg">03</div>
                </div>
                <div className="f1-card-content">
                  <p className="f1-body text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                    Championship-level performance across all metrics, delivering excellence 
                    that sets new industry standards.
                  </p>
                  <div className="f1-stats-grid grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    <div className="f1-stat-item text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mb-1 sm:mb-2">5+</div>
                      <div className="text-xs sm:text-sm text-gray-400 uppercase">Years Racing</div>
                    </div>
                    <div className="f1-stat-item text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mb-1 sm:mb-2">24/7</div>
                      <div className="text-xs sm:text-sm text-gray-400 uppercase">Pit Support</div>
                    </div>
                    <div className="f1-stat-item text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mb-1 sm:mb-2">100%</div>
                      <div className="text-xs sm:text-sm text-gray-400 uppercase">On-Time Delivery</div>
                    </div>
                    <div className="f1-stat-item text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-500 mb-1 sm:mb-2">300%</div>
                      <div className="text-xs sm:text-sm text-gray-400 uppercase">ROI Boost</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 - Technology Stack */}
            <div className="f1-racing-card f1-card-4">
              <div className="f1-card-inner bg-gradient-to-br from-gray-800 to-gray-900 border border-f1-orange/30 p-4 sm:p-6 lg:p-8 rounded-lg relative overflow-hidden">
                <div className="f1-card-scan-line"></div>
                <div className="f1-card-header flex items-center justify-between mb-3 sm:mb-4 lg:mb-6">
                  <div className="flex items-center">
                    <div className="f1-status-light bg-f1-orange w-2 sm:w-3 h-2 sm:h-3 rounded-full animate-pulse mr-2 sm:mr-3"></div>
                    <h3 className="f1-subtitle text-lg sm:text-xl lg:text-2xl text-white">TECHNOLOGY STACK</h3>
                  </div>
                  <div className="f1-card-number text-f1-orange font-bold text-base sm:text-lg">04</div>
                </div>
                <div className="f1-card-content">
                  <p className="f1-body text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                    Cutting-edge technology arsenal that powers our championship-winning solutions, 
                    optimized for maximum performance and reliability.
                  </p>
                  <div className="f1-tech-grid grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                    <div className="f1-tech-item bg-gray-700/50 p-2 sm:p-3 rounded text-center">
                      <div className="text-f1-orange font-bold text-xs sm:text-sm">React</div>
                      <div className="text-xs text-gray-400">Frontend</div>
                    </div>
                    <div className="f1-tech-item bg-gray-700/50 p-2 sm:p-3 rounded text-center">
                      <div className="text-f1-red font-bold text-xs sm:text-sm">Node.js</div>
                      <div className="text-xs text-gray-400">Backend</div>
                    </div>
                    <div className="f1-tech-item bg-gray-700/50 p-2 sm:p-3 rounded text-center">
                      <div className="text-f1-orange font-bold text-xs sm:text-sm">AWS</div>
                      <div className="text-xs text-gray-400">Cloud</div>
                    </div>
                    <div className="f1-tech-item bg-gray-700/50 p-2 sm:p-3 rounded text-center">
                      <div className="text-f1-red font-bold text-xs sm:text-sm">MongoDB</div>
                      <div className="text-xs text-gray-400">Database</div>
                    </div>
                    <div className="f1-tech-item bg-gray-700/50 p-2 sm:p-3 rounded text-center">
                      <div className="text-f1-orange font-bold text-xs sm:text-sm">Docker</div>
                      <div className="text-xs text-gray-400">DevOps</div>
                    </div>
                    <div className="f1-tech-item bg-gray-700/50 p-2 sm:p-3 rounded text-center">
                      <div className="text-f1-red font-bold text-xs sm:text-sm">AI/ML</div>
                      <div className="text-xs text-gray-400">Intelligence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* F1 Championship Summary */}
          <div className="f1-championship-summary bg-gradient-to-r from-gray-800 to-gray-900 border border-f1-red/30 p-4 sm:p-6 lg:p-8 rounded-lg">
            <div className="text-center mb-4 sm:mb-6 lg:mb-8">
              <div className="f1-status-indicator text-f1-red mb-3 sm:mb-4 text-xs sm:text-sm">
                <span className="inline-block w-1.5 sm:w-2 h-1.5 sm:h-2 bg-f1-red rounded-full animate-pulse mr-2"></span>
                CHAMPIONSHIP SUMMARY
                <span className="inline-block w-1.5 sm:w-2 h-1.5 sm:h-2 bg-f1-red rounded-full animate-pulse ml-2"></span>
              </div>
              <h3 className="f1-subtitle text-xl sm:text-2xl lg:text-3xl text-white mb-3 sm:mb-4">POLE POSITION PERFORMANCE</h3>
              <p className="f1-body text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
                Combining cutting-edge technology with championship-level execution to deliver 
                unparalleled digital experiences that accelerate your business forward.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8 text-center">
              <div className="f1-summary-stat">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-f1-red mb-1 sm:mb-2">98.7%</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase">Performance Score</div>
              </div>
              <div className="f1-summary-stat">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-400 mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase">Pit Crew Support</div>
              </div>
              <div className="f1-summary-stat">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-500 mb-1 sm:mb-2">150+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase">Victories</div>
              </div>
              <div className="f1-summary-stat">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">5+</div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase">Championship Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F1 Garage Services Section */}
      <section
        id="services"
        ref={servicesRef}
        className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden"
      >
        {/* F1 Services Background with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-25 motion-div"
          style={{
            backgroundImage: "url('/images/f1-services-bg.png')",
            y: servicesParallaxY,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/50 to-black/75" />
        
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-f1-orange/20 h-full" />
            ))}
          </div>
        </div>

        {/* Pit Lane Lines */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-f1-orange via-f1-red to-f1-orange" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-f1-orange via-f1-red to-f1-orange" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-f1-orange text-sm font-bold uppercase tracking-wider mb-4 flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-f1-orange rounded-full animate-pulse" />
              F1 GARAGE SERVICES
              <span className="w-2 h-2 bg-f1-orange rounded-full animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              PRECISION
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-f1-orange to-f1-red">
                ENGINEERING
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fast, efficient, and dynamic solutions crafted with F1-level precision and performance.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                ref={(el) => {
                  if (el) serviceCardsRef.current[index] = el
                }}
                className="group relative bg-gradient-to-br from-gray-800 to-gray-900 border border-f1-orange/30 hover:border-f1-orange transition-all duration-500 overflow-hidden"
                style={{
                  clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-f1-orange/0 via-f1-orange/0 to-f1-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Neon Underline */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-f1-orange to-f1-red group-hover:w-full transition-all duration-700 ease-out" />
                
                {/* Corner Details */}
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-f1-orange/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-f1-orange/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-8 relative z-10">
                  {/* Service Tag */}
                  <div className="bg-f1-orange/20 text-f1-orange text-xs font-bold px-3 py-1 uppercase tracking-wider mb-6 inline-block border border-f1-orange/30">
                    {service.tag}
                  </div>

                  {/* Icon */}
                  <div className="text-f1-orange mb-6 group-hover:text-f1-red group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-f1-orange transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Performance Metrics */}
                  <div className="border-t border-f1-orange/30 pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Speed</span>
                      <span className="text-f1-orange font-bold text-sm">{service.speed}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Efficiency</span>
                      <span className="text-f1-red font-bold text-sm">{service.efficiency}</span>
                    </div>
                  </div>

                  {/* Power Button */}
                  <div className="mt-6">
                    <button className="w-full bg-gradient-to-r from-f1-orange to-f1-red hover:from-f1-red hover:to-f1-orange text-white py-3 px-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden group/btn">
                      <span className="relative z-10">DEPLOY</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-f1-orange to-f1-red opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>

                {/* Scan Lines Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-f1-orange/10 to-transparent animate-pulse" />
                </div>
              </div>
            ))}
          </div>

          {/* Garage Status Dashboard */}
          <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 border border-f1-orange/30 p-8 text-center">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-f1-orange mb-2">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Garage Operations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-f1-red mb-2">0.3s</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Avg Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-f1-orange mb-2">99.9%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Uptime Record</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-f1-red mb-2">150+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Deployed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F1 Victory Lap Portfolio Section */}
      <section 
        id="portfolio" 
        ref={portfolioRef} 
        className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden victory-lap-section"
      >
        {/* F1 Portfolio Background with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 motion-div"
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
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

        {/* Speed Lines Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="victory-speed-lines"></div>
        </div>

        {/* Victory Lap Corner Accents */}
        <div className="victory-corner-accent top-left"></div>
        <div className="victory-corner-accent top-right"></div>
        <div className="victory-corner-accent bottom-left"></div>
        <div className="victory-corner-accent bottom-right"></div>

        {/* Victory Lap Data Stream */}
        <div className="absolute top-4 left-0 right-0 overflow-hidden">
          <div className="victory-data-stream">
            PROJECT_STATUS: VICTORY | COMPLETION: 100% | CLIENT_SATISFACTION: 98% | AWARDS: 15+ | PORTFOLIO: CHAMPIONSHIP
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="victory-lap-indicator mb-4">
              <div className="victory-lap-text text-cyan-400 text-sm font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                VICTORY LAP PORTFOLIO
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              </div>
            </div>
            <h2 className="victory-lap-title text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              CHAMPIONSHIP
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-f1-orange via-f1-red to-f1-orange">
                VICTORIES
              </span>
            </h2>
            <p className="victory-lap-subtitle text-xl text-gray-300 max-w-3xl mx-auto">
              Our trophy collection showcases the championship projects that have dominated the digital racing circuit.
            </p>
          </div>

          {/* Victory Lap HUD Container */}
          <div className="victory-hud-container victory-hud-glow p-8 mb-12">
            {/* Portfolio Carousel with F1 Theme */}
            <div className="relative victory-carousel-container">
              <div className="overflow-hidden">
                <div
                  className="victory-carousel-track flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {portfolioItems.map((item, index) => (
                    <div key={index} className="w-full flex-shrink-0 victory-carousel-slide">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Project Information Panel */}
                        <div className="victory-project-panel p-8">
                          {/* Project Status */}
                          <div className="victory-project-status mb-6">
                            <div className="flex items-center mb-4">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider font-mono">
                                PROJECT STATUS: VICTORY
                              </span>
                            </div>
                            <div className="victory-project-tag bg-cyan-400/20 text-cyan-400 text-xs font-bold px-4 py-2 uppercase tracking-wider border border-cyan-400/30">
                              {item.tag}
                            </div>
                          </div>

                          {/* Project Details */}
                          <div className="victory-project-details">
                            <h3 className="text-3xl font-bold mb-4 text-white victory-project-title">
                              {item.title}
                            </h3>
                            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                              {item.description}
                            </p>
                            
                            {/* Project Metrics */}
                            <div className="victory-project-metrics mb-6 border-t border-cyan-400/30 pt-4">
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
                            <button className="victory-project-btn group relative overflow-hidden">
                              <span className="relative z-10 flex items-center justify-center">
                                <span className="mr-2">VIEW VICTORY</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                              </span>
                              <div className="victory-btn-glow"></div>
                            </button>
                          </div>
                        </div>

                        {/* Project Image Display */}
                        <div className="victory-project-display relative">
                          <div className="victory-screen-frame">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.title}
                              className="w-full h-96 object-cover victory-project-image"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            
                            {/* Screen Overlay Effects */}
                            <div className="victory-screen-overlay"></div>
                            <div className="victory-scan-lines"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Victory Lap Controls */}
              <div className="victory-controls mt-12">
                <div className="flex justify-center items-center space-x-6">
                  <button 
                    className="victory-control-btn"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <div className="victory-indicators flex space-x-3">
                    {portfolioItems.map((_, index) => (
                      <button
                        key={index}
                        className={`victory-indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                      />
                    ))}
                  </div>

                  <button 
                    className="victory-control-btn"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Victory Lap Statistics Dashboard */}
          <div className="victory-stats-dashboard mt-16">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="victory-stat-card">
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">150+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Victories Won</div>
              </div>
              <div className="victory-stat-card">
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">98%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Success Rate</div>
              </div>
              <div className="victory-stat-card">
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">15+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Awards Won</div>
              </div>
              <div className="victory-stat-card">
                <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">Championship Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F1 Pit Crew Testimonials Section */}
      <section id="testimonials" ref={testimonialsRef} className="py-20 pit-crew-section relative overflow-hidden">
        {/* F1 Testimonials Background with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-25 motion-div"
          style={{
            backgroundImage: "url('/images/f1-testimonials-bg.png')",
            y: testimonialsParallaxY,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        
        {/* Pit Lane Lines */}
        <div className="pit-lane-lines"></div>
        <div className="pit-lane-lines bottom"></div>
        
        {/* Pit Crew Timer */}
        <div className="pit-crew-timer">3.24s</div>
        
        {/* Performance Status */}
        <div className="pit-crew-performance">OPTIMAL</div>

        <div className="container mx-auto px-6 pit-crew-container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="pit-crew-title text-orange-400 text-sm font-bold uppercase tracking-wider mb-4 font-mono flex items-center justify-center gap-2">
              <Wrench className="w-4 h-4" />
              PIT CREW TESTIMONIALS
              <Settings className="w-4 h-4" />
            </div>
            <h2 className=" text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              CHAMPIONSHIP
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                TEAMWORK
              </span>
            </h2>
            <p className=" text-xl text-gray-300 max-w-3xl mx-auto">
              Our clients are our pit crew champions. Here's what the fastest teams in the industry say about our performance.
            </p>
          </div>

          {/* Pit Crew Carousel */}
          <div className="pit-crew-carousel mb-12" ref={pitCrewCarouselRef}>
            <div className="pit-crew-track" ref={pitCrewTrackRef}>
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="pit-crew-slide">
                  <div 
                    className="pit-crew-card p-8 mx-4 h-full"
                    ref={(el) => {
                      if (el) pitCrewCardsRef.current[index] = el
                    }}
                  >
                    {/* Pit Crew Tool Icon */}
                    <div className="pit-crew-tool">
                      {index % 3 === 0 ? <Wrench className="w-5 h-5" /> : 
                       index % 3 === 1 ? <Settings className="w-5 h-5" /> : 
                       <Gauge className="w-5 h-5" />}
                    </div>

                    {/* Star Rating */}
                    <div className="pit-crew-stars mb-6">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star 
                          key={starIndex} 
                          className={`pit-crew-star ${starIndex < 5 ? 'glow' : ''}`}
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="pit-crew-quote mb-8">
                      {testimonial.content}
                    </div>

                    {/* Member Info */}
                    <div className="pit-crew-member flex items-center">
                      <div className="pit-crew-avatar w-16 h-16 mr-4">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="pit-crew-name">{testimonial.name}</div>
                        <div className="pit-crew-role">{testimonial.role}</div>
                        <div className="pit-crew-company">{testimonial.company}</div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="mt-6 pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Pit Stop Time:</span>
                        <span className="text-orange-400 font-mono">{(2.1 + index * 0.3).toFixed(1)}s</span>
                      </div>
                      <div className="flex justify-between items-center text-sm mt-2">
                        <span className="text-gray-400">Efficiency:</span>
                        <span className="text-green-400 font-mono">{98 - index}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pit Crew Controls */}
          <div className="pit-crew-controls">
            <button 
              className="pit-crew-btn"
              onClick={prevTestimonialSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="pit-crew-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`pit-crew-indicator ${index === currentTestimonialSlide ? 'active' : ''}`}
                  onClick={() => goToTestimonialSlide(index)}
                />
              ))}
            </div>

            <button 
              className="pit-crew-btn"
              onClick={nextTestimonialSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Pit Stop Statistics */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-black/80 p-6 border border-orange-500/30">
              <div className="text-3xl font-bold text-orange-400 mb-2 font-mono">2.3s</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Avg Response Time</div>
            </div>
            <div className="bg-black/80 p-6 border border-orange-500/30">
              <div className="text-3xl font-bold text-orange-400 mb-2 font-mono">150+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="bg-black/80 p-6 border border-orange-500/30">
              <div className="text-3xl font-bold text-orange-400 mb-2 font-mono">98%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Success Rate</div>
            </div>
            <div className="bg-black/80 p-6 border border-orange-500/30">
              <div className="text-3xl font-bold text-orange-400 mb-2 font-mono">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Pit Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* F1 Race Finish Line Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 race-finish-section relative overflow-hidden">
        {/* F1 Contact Background with Parallax */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-30 motion-div"
          style={{
            backgroundImage: "url('/images/f1-contact-bg.png')",
            y: contactParallaxY,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/50 to-black/75" />
        
        {/* Checkered Flag Background Pattern */}
        <div className="checkered-flag-bg"></div>
        
        {/* Racing Track Lines */}
        <div className="race-track-lines"></div>
        
        {/* Speed Lines */}
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="finish-line-indicator mb-4">
              <div className="finish-line-text text-f1-orange text-sm font-bold uppercase tracking-wider font-mono flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-f1-orange rounded-full animate-pulse"></span>
                FINISH LINE CONTACT
                <span className="w-2 h-2 bg-f1-orange rounded-full animate-pulse"></span>
              </div>
            </div>
            <h2 className=" text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              CROSS THE
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-f1-orange via-f1-red to-f1-orange">
                FINISH LINE
              </span>
            </h2>
            <p className="finish-line-subtitle text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to claim victory? Start your engines and race towards digital excellence with our championship team.
            </p>
          </div>

          {/* Main Contact Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="race-info-panel">
              <h3 className="text-3xl font-bold mb-8 text-white">
                PIT STOP <span className="text-f1-orange">INFORMATION</span>
              </h3>
              
              <div className="space-y-6">
                <div className="contact-info-item flex items-center group">
                  <div className="contact-icon-wrapper">
                    <Mail className="w-6 h-6 text-f1-orange" />
                  </div>
                  <div className="ml-6">
                    <div className="text-f1-orange text-sm font-bold uppercase tracking-wider">Email</div>
                    <div className="text-white text-lg">hello@enshift.com</div>
                  </div>
                </div>
                
                <div className="contact-info-item flex items-center group">
                  <div className="contact-icon-wrapper">
                    <Phone className="w-6 h-6 text-f1-red" />
                  </div>
                  <div className="ml-6">
                    <div className="text-f1-red text-sm font-bold uppercase tracking-wider">Phone</div>
                    <div className="text-white text-lg">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="contact-info-item flex items-center group">
                  <div className="contact-icon-wrapper">
                    <MapPin className="w-6 h-6 text-f1-orange" />
                  </div>
                  <div className="ml-6">
                    <div className="text-f1-orange text-sm font-bold uppercase tracking-wider">Location</div>
                    <div className="text-white text-lg">Monaco, Monte Carlo</div>
                  </div>
                </div>
              </div>

              {/* Race Statistics */}
              <div className="mt-12 race-stats-grid">
                <div className="race-stat-item">
                  <div className="text-2xl font-bold text-f1-orange mb-1 font-mono">24h</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Response Time</div>
                </div>
                <div className="race-stat-item">
                  <div className="text-2xl font-bold text-f1-red mb-1 font-mono">100%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Success Rate</div>
                </div>
                <div className="race-stat-item">
                  <div className="text-2xl font-bold text-f1-orange mb-1 font-mono">300+</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">Projects Won</div>
                </div>
              </div>
            </div>

            {/* Glassmorphism Contact Form */}
            <div className="race-form-container">
              {/* Racing Line Animation */}
              <div className="racing-line-animation"></div>
              
              <div className="glassmorphism-form">
                <div className="form-header mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">START YOUR RACE</h3>
                  <p className="text-gray-400">Fill out the form below to begin your journey to victory</p>
                </div>
                
                <form className="space-y-6">
                  <div className="form-field-group">
                    <div className="form-field-wrapper">
                      <Input 
                        placeholder="Your Name" 
                        className="race-input race-input-name bg-transparent border-gray-600 text-white placeholder-gray-400" 
                      />
                      <div className="input-glow-effect"></div>
                    </div>
                  </div>
                  
                  <div className="form-field-group">
                    <div className="form-field-wrapper">
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        className="race-input race-input-email bg-transparent border-gray-600 text-white placeholder-gray-400" 
                      />
                      <div className="input-glow-effect"></div>
                    </div>
                  </div>
                  
                  <div className="form-field-group">
                    <div className="form-field-wrapper">
                      <Input 
                        placeholder="Project Type" 
                        className="race-input race-input-project bg-transparent border-gray-600 text-white placeholder-gray-400" 
                      />
                      <div className="input-glow-effect"></div>
                    </div>
                  </div>
                  
                  <div className="form-field-group">
                    <div className="form-field-wrapper">
                      <textarea 
                        placeholder="Tell us about your vision..."
                        rows={4}
                        className="race-textarea bg-transparent border border-gray-600 rounded-lg w-full p-4 text-white placeholder-gray-400 resize-none focus:outline-none"
                      />
                      <div className="input-glow-effect"></div>
                    </div>
                  </div>
                  
                  {/* Submit Button with Pulse Animation */}
                  <div className="form-submit-wrapper">
                    <button 
                      type="submit" 
                      className="race-submit-btn group relative w-full"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <span className="mr-2">CROSS THE FINISH LINE</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="submit-btn-glow"></div>
                      <div className="submit-btn-pulse"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Finish Line Trophy */}
          <div className="finish-line-trophy mt-16 text-center">
            <div className="trophy-icon mx-auto mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Join 300+ winning projects and claim your digital championship</p>
          </div>
        </div>
      </section>

      {/* Footer - Night-time F1 Street Circuit */}
      <footer
        ref={footerRef}
        className="relative overflow-hidden bg-black border-t border-f1-red/30"
      >
        {/* Racing Circuit Background */}
        <div className="absolute inset-0 championship-circuit-bg opacity-30">
          {/* Track Layout Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-f1-red to-transparent track-line"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-f1-orange to-transparent track-line"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent track-line"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-f1-red to-transparent track-line"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-f1-red to-transparent track-line"></div>
        </div>

        {/* Championship Trophy Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/80 to-black/90"></div>
        
        {/* Dynamic Championship Stats Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-f1-red via-orange-500 to-f1-red opacity-80">
          <div
            ref={footerTrackRef}
            className="h-full bg-gradient-to-r from-f1-red via-white to-f1-red championship-progress"
          />
        </div>

        {/* Championship Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="championship-grid">
            {Array.from({ length: 100 }, (_, i) => (
              <div key={i} className="championship-cell" />
            ))}
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Championship Header */}
          <div className="text-center mb-16">
            <div className="championship-badge mb-6">
              <div className="championship-logo-container">
                <div className="text-5xl font-bold text-white championship-glow mb-2">
                  EN<span className="text-f1-red">SHIFT</span>
                </div>
                <div className="championship-status-lights">
                  <div className="status-light green"></div>
                  <div className="status-light yellow"></div>
                  <div className="status-light red"></div>
                </div>
              </div>
            </div>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              <span className="text-f1-red font-bold">CHAMPIONSHIP WINNER</span> in digital racing. 
              Delivering <span className="text-cyan-400">high-performance</span> solutions 
              that put your brand on the <span className="text-orange-400">podium</span>.
            </p>
          </div>

          {/* Championship Dashboard */}
          <div ref={footerContentRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Main Championship Card */}
            <div className="lg:col-span-6">
              <div className="championship-main-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white championship-glow">
                    RACING CONTROL CENTER
                  </h3>
                  <div className="championship-timer">
                    <span className="text-f1-red font-mono text-lg">LIVE</span>
                  </div>
                </div>
                
                <div className="championship-metrics grid grid-cols-2 gap-6 mb-8">
                  <div className="metric-card">
                    <div className="metric-icon">
                      <Gauge className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="metric-value">300+</div>
                    <div className="metric-label">Projects Won</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-icon">
                      <Trophy className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="metric-value">50+</div>
                    <div className="metric-label">Awards</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-icon">
                      <Clock className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="metric-value">24/7</div>
                    <div className="metric-label">Support</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-icon">
                      <Target className="w-6 h-6 text-f1-orange" />
                    </div>
                    <div className="metric-value">99.9%</div>
                    <div className="metric-label">On-Time Delivery</div>
                  </div>
                </div>

                {/* Championship Performance Bar */}
                <div className="championship-performance-bar mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400 uppercase tracking-wider">Championship Performance</span>
                    <span className="text-sm text-cyan-400 font-mono">98.7%</span>
                  </div>
                  <div className="performance-track">
                    <div className="performance-progress" style={{width: '98.7%'}}></div>
                  </div>
                </div>

                {/* Live Status */}
                <div className="championship-live-status">
                  <div className="flex items-center space-x-4">
                    <div className="status-indicator pulsing-green"></div>
                    <span className="text-green-400 font-semibold">SYSTEMS OPTIMAL</span>
                    <div className="status-indicator pulsing-cyan"></div>
                    <span className="text-cyan-400 font-semibold">READY TO RACE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation & Contact Cards */}
            <div className="lg:col-span-6 space-y-8">
              {/* Racing Navigation */}
              <div className="championship-nav-card p-6">
                <h4 className="text-xl font-bold text-white mb-4 championship-glow">
                  RACING CIRCUITS
                </h4>
                <div className="nav-grid grid grid-cols-2 gap-3">
                  {[
                    { name: "Home", icon: Home, color: "text-cyan-400" },
                    { name: "About", icon: User, color: "text-orange-400" },
                    { name: "Services", icon: Settings, color: "text-green-400" },
                    { name: "Portfolio", icon: Trophy, color: "text-f1-orange" },
                    { name: "Contact", icon: Mail, color: "text-f1-red" },
                    { name: "Blog", icon: FileText, color: "text-yellow-400" }
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={`#${item.name.toLowerCase()}`}
                      className="nav-link-card group"
                    >
                      <item.icon className={`w-4 h-4 ${item.color} group-hover:text-white transition-colors`} />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Championship Contact */}
              <div className="championship-contact-card p-6">
                <h4 className="text-xl font-bold text-white mb-4 championship-glow">
                  PIT STOP COMMUNICATIONS
                </h4>
                <div className="contact-channels space-y-4">
                  <div className="contact-channel">
                    <div className="channel-icon">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="channel-info">
                      <div className="channel-label">Email Command</div>
                      <div className="channel-value">hello@enshift.com</div>
                    </div>
                  </div>
                  <div className="contact-channel">
                    <div className="channel-icon">
                      <Phone className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="channel-info">
                      <div className="channel-label">Radio Frequency</div>
                      <div className="channel-value">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="contact-channel">
                    <div className="channel-icon">
                      <MapPin className="w-5 h-5 text-f1-red" />
                    </div>
                    <div className="channel-info">
                      <div className="channel-label">Circuit Location</div>
                      <div className="channel-value">Digital Highway, Cloud City</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Championship Social & Newsletter */}
          <div ref={footerSocialRef} className="championship-social-section">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Social Racing Hub */}
              <div className="social-racing-hub">
                <h4 className="text-xl font-bold text-white mb-6 championship-glow">
                  FOLLOW THE CHAMPIONSHIP
                </h4>
                <div className="social-grid">
                  {[
                    { Icon: Twitter, label: "Twitter", color: "text-blue-400", bg: "bg-blue-500/20" },
                    { Icon: Instagram, label: "Instagram", color: "text-pink-400", bg: "bg-pink-500/20" },
                    { Icon: Linkedin, label: "LinkedIn", color: "text-blue-500", bg: "bg-blue-600/20" },
                    { Icon: Github, label: "GitHub", color: "text-gray-300", bg: "bg-gray-500/20" }
                  ].map(({ Icon, label, color, bg }, index) => (
                    <a
                      key={label}
                      href="#"
                      className={`social-platform-card ${bg} group`}
                    >
                      <Icon className={`w-6 h-6 ${color} group-hover:text-white transition-colors`} />
                      <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-medium">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Championship Newsletter */}
              <div className="championship-newsletter">
                <h4 className="text-xl font-bold text-white mb-6 championship-glow">
                  CHAMPIONSHIP UPDATES
                </h4>
                <div className="newsletter-card">
                  <div className="newsletter-header mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="newsletter-icon">
                        <Zap className="w-5 h-5 text-yellow-400" />
                      </div>
                      <span className="text-gray-300">Get race updates & performance insights</span>
                    </div>
                  </div>
                  <div className="newsletter-form">
                    <div className="form-group">
                      <Input
                        placeholder="Enter your email for championship updates"
                        className="championship-input"
                      />
                      <Button className="championship-submit-btn">
                        <Send className="w-4 h-4 mr-2" />
                        JOIN RACE
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Championship Footer Bottom */}
          <div className="championship-footer-bottom mt-16 pt-8 border-t border-gray-700">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="championship-copyright">
                <p className="text-gray-400 text-lg">
                  &copy; {new Date().getFullYear()} 
                  <span className="text-f1-red font-bold"> ENSHIFT RACING TEAM</span>
                  . All rights reserved.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Championship winner in digital performance racing since 2020.
                </p>
              </div>
              <div className="championship-legal-links">
                <div className="flex items-center space-x-8 text-sm">
                  <a href="#" className="legal-link">Privacy Policy</a>
                  <a href="#" className="legal-link">Terms of Service</a>
                  <a href="#" className="legal-link">Cookie Policy</a>
                  <a href="#" className="legal-link">Racing Rules</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Championship Finish Line */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-f1-red to-transparent championship-finish-line" />
      </footer>
    </div>
  )
}
