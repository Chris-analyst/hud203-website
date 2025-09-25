import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LeadMagnetCard } from "@/components/ui/lead-magnet-card"
import { Download, Star, TrendingUp, BookOpen, Users } from "lucide-react"
import { leadMagnets, getFeaturedLeadMagnets, getLeadMagnetsByCategory } from "@/lib/lead-magnets"
import { generateSEO } from "@/lib/seo"
import { Metadata } from "next"
import Link from "next/link"

export function generateMetadata(): Metadata {
  return generateSEO({
    title: "Free Creative Real Estate Financing Resources | HUD203 Downloads",
    description: "Download free guides, calculators, and templates for creative real estate financing. Subject-to investing, seller financing, wrap mortgages, and more.",
    path: "/resources/",
    keywords: [
      "free real estate guides",
      "creative financing downloads",
      "subject to investing guide",
      "seller financing templates",
      "real estate calculators",
      "wrap mortgage contracts",
      "assumable loans guide"
    ],
    type: "website"
  })
}

const categories = [
  {
    id: 'guide',
    name: 'Complete Guides',
    description: 'In-depth resources covering creative financing strategies',
    icon: BookOpen,
    color: 'bg-emerald-100 text-emerald-800'
  },
  {
    id: 'checklist',
    name: 'Checklists',
    description: 'Step-by-step checklists to ensure you never miss a detail',
    icon: TrendingUp,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'calculator',
    name: 'Calculators',
    description: 'Excel tools for deal analysis and profit calculations',
    icon: TrendingUp,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'template',
    name: 'Templates',
    description: 'Ready-to-use contracts and legal documents',
    icon: BookOpen,
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'report',
    name: 'Market Reports',
    description: 'Current market analysis and opportunity insights',
    icon: TrendingUp,
    color: 'bg-red-100 text-red-800'
  }
]

export default function ResourcesPage() {
  const featuredMagnets = getFeaturedLeadMagnets()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50 to-gold-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Badge className="bg-emerald-500 text-white">
                <Star className="h-4 w-4 mr-1" />
                Free Resources
              </Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-6">
              Creative Financing Resource Library
            </h1>
            <p className="text-xl text-emerald-700 mb-8 max-w-3xl mx-auto">
              Access our comprehensive collection of guides, calculators, templates, and tools
              designed to help you master creative real estate financing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" className="animate-bounce-subtle">
                <Download className="mr-2 h-5 w-5" />
                Browse All Resources
              </Button>
              <Button variant="outline-forest" size="xl" asChild>
                <Link href="/community">
                  <Users className="mr-2 h-5 w-5" />
                  Join Community
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-800">{leadMagnets.length}</div>
              <div className="text-sm text-emerald-600">Free Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-800">10K+</div>
              <div className="text-sm text-emerald-600">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-800">500+</div>
              <div className="text-sm text-emerald-600">Pages of Content</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-800">5★</div>
              <div className="text-sm text-emerald-600">Community Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
              Most Popular Downloads
            </h2>
            <p className="text-xl text-emerald-700">
              Start with these essential resources that have helped thousands of investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMagnets.map((magnet, index) => (
              <LeadMagnetCard
                key={magnet.id}
                leadMagnet={magnet}
                variant={index === 0 ? "featured" : "default"}
                showBenefits={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
              Browse by Category
            </h2>
            <p className="text-xl text-emerald-700">
              Find exactly what you need to advance your creative financing knowledge
            </p>
          </div>

          {categories.map((category) => {
            const categoryMagnets = getLeadMagnetsByCategory(category.id as any)
            if (categoryMagnets.length === 0) return null

            const IconComponent = category.icon

            return (
              <div key={category.id} className="mb-16">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-800">{category.name}</h3>
                    <p className="text-emerald-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryMagnets.map((magnet) => (
                    <LeadMagnetCard
                      key={magnet.id}
                      leadMagnet={magnet}
                      variant="default"
                      showBenefits={false}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
              Quick Access Resources
            </h2>
            <p className="text-xl text-emerald-700">
              Get these essential resources instantly - perfect for beginners
            </p>
          </div>

          <div className="space-y-4">
            {leadMagnets.slice(0, 4).map((magnet) => (
              <LeadMagnetCard
                key={magnet.id}
                leadMagnet={magnet}
                variant="compact"
                showBenefits={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50 to-gold-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
            Get New Resources First
          </h2>
          <p className="text-xl text-emerald-700 mb-8">
            Join our community to get notified when we release new guides, templates, and tools.
            Plus, get exclusive content not available anywhere else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link href="/community">
                <Users className="mr-2 h-5 w-5" />
                Join HUD203 Community
              </Link>
            </Button>
            <Button variant="outline-forest" size="xl" asChild>
              <Link href="/education">
                <BookOpen className="mr-2 h-5 w-5" />
                Education Hub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}