import Link from "next/link"
import { BookOpen, Users, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const educationLinks = [
    { title: "Education Hub", href: "/education" },
    { title: "What is Subject-To?", href: "/education/subject-to" },
    { title: "What is Seller Financing?", href: "/education/seller-financing" },
    { title: "What is a Wrap Mortgage?", href: "/education/wrap-mortgage" },
    { title: "What are Loan Assumptions?", href: "/education/loan-assumptions" }
  ]

  const communityLinks = [
    { title: "Join Community", href: "/community" },
    { title: "Success Stories", href: "/success-stories" },
    { title: "Events", href: "/events" },
    { title: "Mentorship", href: "/mentorship" }
  ]

  const resourceLinks = [
    { title: "Deal Calculator", href: "/tools/calculator" },
    { title: "Contract Templates", href: "/resources/contracts" },
    { title: "Due Diligence Checklist", href: "/resources/checklist" },
    { title: "State Laws Guide", href: "/resources/state-laws" }
  ]

  const companyLinks = [
    { title: "About HUD203", href: "/about" },
    { title: "Contact Us", href: "/contact" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold">HUD203</span>
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              The creative way to win-win real estate. Building a community of professionals
              who believe in ethical, profitable real estate solutions.
            </p>
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <MapPin className="h-4 w-4" />
              <span>Nationwide Community</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-400" />
              Education
            </h3>
            <ul className="space-y-2">
              {educationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-400" />
              Community
            </h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-blue-400 text-sm transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Mail className="h-4 w-4" />
                <span>hello@hud203.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="h-4 w-4" />
                <span>(555) 203-HUD3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-white/80">
              © {new Date().getFullYear()} HUD203. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-sm text-white/80 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/80 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/legal"
                className="text-sm text-white/80 hover:text-blue-400 transition-colors"
              >
                Legal Disclaimers
              </Link>
            </div>
          </div>

          <div className="mt-4 text-xs text-white/60 text-center md:text-left">
            <p>
              HUD203 provides educational content about real estate investing strategies. This information
              is not legal, financial, or investment advice. Always consult qualified professionals before
              making investment decisions. Real estate investing involves risk and may not be suitable for all investors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}