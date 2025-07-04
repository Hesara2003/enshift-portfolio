"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Settings, Trophy, MessageSquare, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Services", href: "#services", icon: Settings },
  { name: "Portfolio", href: "#portfolio", icon: Trophy },
  { name: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { name: "Contact", href: "#contact", icon: Mail },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleSectionChange = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollY = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section === "hero" ? "" : section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("scroll", handleSectionChange)
    handleSectionChange()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("scroll", handleSectionChange)
    }
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    
    if (href === "#hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b-2 border-red-600/30 shadow-2xl shadow-red-600/10"
          : "bg-gradient-to-b from-black/20 via-transparent to-transparent backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-6 lg:px-8 py-5 lg:py-6">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo with F1 Racing Theme */}
          <motion.div
            className="flex items-center space-x-6 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => handleNavClick("#hero")}
          >
            <div className="relative">
              {/* Racing status indicator */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
              <div className="text-3xl lg:text-4xl font-black text-white drop-shadow-2xl tracking-tight group-hover:text-gray-100 transition-colors duration-300">
                EN<span className="text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text animate-pulse">SHIFT</span>
              </div>
            </div>
            <div className="hidden lg:flex flex-col">
              <div className="text-xs text-gray-300 uppercase tracking-widest font-bold group-hover:text-red-400 transition-colors duration-300">
                Digital Racing
              </div>
              <div className="text-[10px] text-red-500 font-mono uppercase tracking-wider animate-pulse">
                System Online
              </div>
            </div>
          </motion.div>

          {/* Enhanced Desktop Navigation with F1 Theme */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`relative group text-sm font-bold uppercase tracking-widest transition-all duration-400 ${
                  activeSection === item.href.substring(1) || (activeSection === "hero" && item.href === "#hero")
                    ? "text-red-500 scale-110"
                    : "text-gray-200 hover:text-red-400 hover:scale-105"
                }`}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {/* Racing line indicator */}
                <div className={`absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-red-600 to-orange-500 transition-all duration-400 ${
                  activeSection === item.href.substring(1) || (activeSection === "hero" && item.href === "#hero")
                    ? "w-full shadow-lg shadow-red-600/50"
                    : "w-0 group-hover:w-full"
                }`}></div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-red-600/10 rounded-lg scale-0 group-hover:scale-110 transition-transform duration-300 -z-10"></div>
                
                <span className="relative z-10 drop-shadow-lg">{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Enhanced Desktop CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button 
                className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-red-600 hover:from-red-700 hover:via-orange-600 hover:to-red-700 text-white border-2 border-red-600/50 hover:border-red-500 text-sm font-black uppercase tracking-widest px-8 py-3 rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-400 group"
                onClick={() => handleNavClick("#contact")}
              >
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Racing stripes */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                
                <span className="relative z-10 drop-shadow-lg">GET STARTED</span>
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative text-white hover:bg-red-600/20 hover:text-red-400 border-2 border-gray-600/30 hover:border-red-600/50 rounded-xl backdrop-blur-sm transition-all duration-300 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <Menu className="h-6 w-6 relative z-10 drop-shadow-lg" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-96 bg-gradient-to-br from-black/98 via-gray-900/95 to-red-950/90 backdrop-blur-2xl border-l-2 border-red-600/30 shadow-2xl shadow-red-600/20">
                <div className="flex flex-col h-full relative">
                  {/* Racing grid background */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-8 h-full gap-px">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="bg-gradient-to-b from-red-600/20 to-orange-500/20"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Racing lines */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-pulse"></div>
                  
                  {/* Enhanced Mobile Logo */}
                  <div className="flex items-center justify-between py-6 px-6 border-b-2 border-red-600/30 relative z-10">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                        <div className="text-3xl font-black text-white drop-shadow-2xl">
                          EN<span className="text-transparent bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text">SHIFT</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-xs text-gray-300 uppercase tracking-widest font-bold">Digital Racing</div>
                        <div className="text-[10px] text-red-500 font-mono uppercase tracking-wider animate-pulse">Mobile Control</div>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:bg-red-600/20 hover:text-red-400 border-2 border-gray-600/30 hover:border-red-600/50 rounded-xl transition-all duration-300"
                      >
                        <X className="h-6 w-6 drop-shadow-lg" />
                      </Button>
                    </motion.div>
                  </div>

                  {/* Enhanced Mobile Navigation */}
                  <div className="flex-1 py-8 px-6 relative z-10">
                    <nav className="space-y-3">
                      {navItems.map((item, index) => {
                        const Icon = item.icon
                        const isActive = activeSection === item.href.substring(1) || (activeSection === "hero" && item.href === "#hero")
                        
                        return (
                          <motion.a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavClick(item.href)
                            }}
                            className={`flex items-center space-x-5 px-6 py-4 rounded-2xl transition-all duration-400 group relative overflow-hidden ${
                              isActive
                                ? "bg-gradient-to-r from-red-600/30 to-orange-500/20 text-red-400 border-l-4 border-red-500 shadow-xl shadow-red-600/20"
                                : "text-gray-200 hover:bg-gradient-to-r hover:from-red-600/20 hover:to-orange-500/10 hover:text-red-400 hover:border-l-4 hover:border-red-500/50"
                            }`}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ x: 10, scale: 1.02 }}
                          >
                            {/* Background glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"></div>
                            
                            {/* Icon with enhanced styling */}
                            <div className={`relative p-2 rounded-lg transition-all duration-300 ${
                              isActive 
                                ? "bg-red-600/20 shadow-lg shadow-red-600/30" 
                                : "bg-gray-700/30 group-hover:bg-red-600/20"
                            }`}>
                              <Icon className="h-6 w-6 relative z-10 drop-shadow-lg" />
                            </div>
                            
                            <span className="text-lg font-bold uppercase tracking-wider relative z-10 drop-shadow-lg">{item.name}</span>
                            
                            {/* Racing line indicator */}
                            <div className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-red-600 to-orange-500 transition-all duration-400 ${
                              isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                            }`}></div>
                          </motion.a>
                        )
                      })}
                    </nav>
                  </div>

                  {/* Enhanced Mobile CTA Button */}
                  <div className="py-8 px-6 border-t-2 border-red-600/30 relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button 
                        className="relative w-full overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-red-600 hover:from-red-700 hover:via-orange-600 hover:to-red-700 text-white border-2 border-red-600/50 hover:border-red-500 text-lg font-black uppercase tracking-widest py-4 rounded-2xl shadow-2xl shadow-red-600/40 hover:shadow-red-600/60 transition-all duration-500 group"
                        onClick={() => handleNavClick("#contact")}
                      >
                        {/* Button glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        
                        {/* Racing stripes */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                        
                        {/* Pulse effect */}
                        <div className="absolute inset-0 bg-red-600/20 rounded-2xl animate-pulse"></div>
                        
                        <span className="relative z-10 drop-shadow-lg flex items-center justify-center gap-3">
                          GET STARTED
                          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                        </span>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
