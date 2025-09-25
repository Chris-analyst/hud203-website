"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronDown,
  BookOpen,
  Users,
  Phone,
  Award,
  MessageCircle,
  FileText,
  Info,
  BarChart3
} from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isEducationOpen, setIsEducationOpen] = useState(false)

  const educationLinks = [
    {
      title: "What is Subject-To?",
      href: "/education/subject-to",
      description: "Learn the fundamentals of subject-to investing"
    },
    {
      title: "What is Seller Financing?",
      href: "/education/seller-financing",
      description: "Owner-carry financing strategies explained"
    },
    {
      title: "What is a Wrap Mortgage?",
      href: "/education/wrap-mortgage",
      description: "All-inclusive trust deed and wrap financing"
    },
    {
      title: "What are Loan Assumptions?",
      href: "/education/loan-assumptions",
      description: "VA and FHA assumable loan process"
    },
    {
      title: "When to Use Each Tool",
      href: "/education/strategy-guide",
      description: "Choosing the right creative financing method"
    }
  ]

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">HUD203</span>
              <span className="text-xs text-gray-500 -mt-1">Creative Real Estate</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/education" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
              <BookOpen className="h-4 w-4" />
              <span>Education</span>
            </Link>

            <Link href="/market-analysis" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
              <BarChart3 className="h-4 w-4" />
              <span>Market Analysis</span>
            </Link>

            <Link href="/realtors" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
              <Users className="h-4 w-4" />
              <span>For Realtors</span>
            </Link>

            <Link href="/blog" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
              <MessageCircle className="h-4 w-4" />
              <span>Blog</span>
            </Link>

            <Link href="/community" className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors font-medium">
              <Award className="h-4 w-4" />
              <span>Community</span>
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
            <Button className="cta-button">
              Join Community
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <nav className="py-4 border-t border-border">
            <div className="space-y-1">
              <Link
                href="/education"
                className="flex items-center space-x-2 p-3 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                <span>Education</span>
              </Link>

              <Link
                href="/market-analysis"
                className="flex items-center space-x-2 p-3 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <BarChart3 className="h-4 w-4" />
                <span>Market Analysis</span>
              </Link>

              <Link
                href="/realtors"
                className="flex items-center space-x-2 p-3 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Users className="h-4 w-4" />
                <span>For Realtors</span>
              </Link>

              <Link
                href="/blog"
                className="flex items-center space-x-2 p-3 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="h-4 w-4" />
                <span>Blog</span>
              </Link>

              <Link
                href="/community"
                className="flex items-center space-x-2 p-3 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Award className="h-4 w-4" />
                <span>Community</span>
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
                <Button className="cta-button w-full">
                  Join Community
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}