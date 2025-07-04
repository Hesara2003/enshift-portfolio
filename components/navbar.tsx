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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-2xl font-bold text-white cursor-pointer" onClick={() => handleNavClick("#hero")}>
              EN<span className="text-f1-orange">SHIFT</span>
            </div>
            <div className="hidden md:block text-xs text-gray-400 uppercase tracking-wider">
              Digital Racing
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                  activeSection === item.href.substring(1) || (activeSection === "hero" && item.href === "#hero")
                    ? "text-f1-orange"
                    : "text-white hover:text-f1-orange"
                }`}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button 
              className="bg-gradient-to-r from-f1-orange to-f1-red hover:from-f1-red hover:to-f1-orange text-white border-0 text-sm font-bold uppercase tracking-wider transition-all duration-300"
              onClick={() => handleNavClick("#contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-black/95 backdrop-blur-md border-l border-gray-800">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center justify-between py-4 border-b border-gray-800">
                    <div className="text-2xl font-bold text-white">
                      EN<span className="text-f1-orange">SHIFT</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/10"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex-1 py-6">
                    <nav className="space-y-2">
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
                            className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-colors duration-300 ${
                              isActive
                                ? "bg-f1-orange/20 text-f1-orange border-l-4 border-f1-orange"
                                : "text-white hover:bg-f1-orange/10 hover:text-f1-orange"
                            }`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Icon className="h-5 w-5" />
                            <span className="text-lg font-medium">{item.name}</span>
                          </motion.a>
                        )
                      })}
                    </nav>
                  </div>

                  {/* Mobile CTA Button */}
                  <div className="py-6 border-t border-gray-800">
                    <Button 
                      className="w-full bg-gradient-to-r from-f1-orange to-f1-red hover:from-f1-red hover:to-f1-orange text-white border-0 text-lg font-bold uppercase tracking-wider py-3 transition-all duration-300"
                      onClick={() => handleNavClick("#contact")}
                    >
                      Get Started
                    </Button>
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
