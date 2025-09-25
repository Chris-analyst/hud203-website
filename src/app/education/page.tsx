import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  Calculator,
  Home as HomeIcon,
  DollarSign,
  ArrowRight,
  TrendingUp,
  Shield,
  AlertTriangle,
  PiggyBank,
  Users,
  FileText,
  Lightbulb
} from "lucide-react"
import { generateSEO } from "@/lib/seo"
import { Metadata } from "next"
import Link from "next/link"

export function generateMetadata(): Metadata {
  return generateSEO({
    title: "Real Estate Education Hub - Learn Creative Financing | HUD203",
    description: "Learn the real costs of buying and selling real estate, rental property returns, and creative financing strategies. Education for buyers, sellers, investors, and realtors.",
    path: "/education",
    keywords: ["real estate education", "creative financing", "seller financing", "real estate costs", "rental property returns"],
    type: "website"
  })
}

const educationModules = [
  {
    title: "The Real Cost to Buy Real Estate",
    slug: "real-cost-to-buy",
    description: "Beyond the purchase price - understanding all the hidden costs, fees, and ongoing expenses of homeownership.",
    icon: Calculator,
    level: "Beginner",
    readTime: "8 min read",
    keyTopics: [
      "Hidden closing costs and fees",
      "Ongoing maintenance and insurance",
      "Property taxes and HOA fees",
      "Opportunity costs vs renting"
    ]
  },
  {
    title: "The Real Cost to Sell Real Estate",
    slug: "real-cost-to-sell",
    description: "What sellers actually pay - from commissions to repairs, and why creative financing often nets more money.",
    icon: HomeIcon,
    level: "Beginner",
    readTime: "7 min read",
    keyTopics: [
      "Real estate commissions and fees",
      "Repairs and staging costs",
      "Carrying costs during sale",
      "Tax implications of selling"
    ]
  },
  {
    title: "Real Returns from Rental Properties",
    slug: "rental-property-returns",
    description: "Honest analysis of rental property performance - cash flow, appreciation, and total returns explained simply.",
    icon: PiggyBank,
    level: "Intermediate",
    readTime: "12 min read",
    keyTopics: [
      "Cash flow vs. appreciation",
      "The 1% rule and other metrics",
      "Vacancy and maintenance reality",
      "Tax benefits and depreciation"
    ]
  },
  {
    title: "Risks of Vacant Properties",
    slug: "vacant-property-risks",
    description: "Why leaving properties empty can be costly - insurance, security, maintenance, and opportunity costs.",
    icon: AlertTriangle,
    level: "Beginner",
    readTime: "6 min read",
    keyTopics: [
      "Insurance complications",
      "Security and vandalism risks",
      "Maintenance deterioration",
      "Lost rental income potential"
    ]
  },
  {
    title: "Property Management: DIY vs Professional",
    slug: "property-management-options",
    description: "Real comparison of managing rentals yourself vs hiring professionals - costs, time, and stress factors.",
    icon: Users,
    level: "Intermediate",
    readTime: "10 min read",
    keyTopics: [
      "Time investment reality",
      "Professional management costs",
      "Tenant screening importance",
      "Legal protection benefits"
    ]
  },
  {
    title: "Generational Wealth Through Seller Financing",
    slug: "seller-financing-wealth",
    description: "How seller financing creates long-term wealth - steady income, tax advantages, and legacy planning.",
    icon: TrendingUp,
    level: "Advanced",
    readTime: "15 min read",
    keyTopics: [
      "Steady income streams",
      "Tax advantages over lump sum",
      "Estate planning benefits",
      "Risk mitigation strategies"
    ]
  },
  {
    title: "Subject-To Investing Explained",
    slug: "subject-to-investing",
    description: "Simple explanation of taking over mortgage payments - risks, benefits, and when it makes sense.",
    icon: Shield,
    level: "Advanced",
    readTime: "18 min read",
    keyTopics: [
      "How Subject-To works",
      "Legal considerations",
      "Risk assessment",
      "Exit strategies"
    ]
  },
  {
    title: "Wrap Mortgages Simplified",
    slug: "wrap-mortgages",
    description: "Understanding wrap-around mortgages - structure, benefits, and real-world applications explained simply.",
    icon: FileText,
    level: "Advanced",
    readTime: "16 min read",
    keyTopics: [
      "Wrap mortgage structure",
      "Benefits for all parties",
      "Legal requirements",
      "Deal structuring examples"
    ]
  },
  {
    title: "Creative Financing for Realtors",
    slug: "realtor-creative-financing",
    description: "How realtors can offer creative financing options to save deals and earn referral fees on challenging transactions.",
    icon: Lightbulb,
    level: "Intermediate",
    readTime: "12 min read",
    keyTopics: [
      "Identifying suitable situations",
      "Presenting options to clients",
      "Referral fee opportunities",
      "Legal and ethical considerations"
    ]
  }
]

export default function EducationHub() {
  return (
    <main className="min-h-screen py-12">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Real Estate Education Hub
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Learn the truth about real estate costs, returns, and creative financing strategies.
            Our education is designed for everyday people - no jargon, just practical knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cta-button text-lg px-8 py-4">
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/market-analysis">
              <Button variant="outline" className="outline-button text-lg px-8 py-4">
                View Market Data
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Education Matters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Real Estate Education Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Most real estate advice focuses on the transaction, not the full picture. We teach the complete truth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Hidden Costs Exposed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn about all the costs that aren't in the listing price - from closing costs to ongoing maintenance,
                so you can make informed decisions.
              </p>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calculator className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Real Returns Revealed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Understand what rental properties actually return after all expenses, vacancy, and management costs
                are properly calculated.
              </p>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Creative Solutions</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover alternative strategies that can work better than traditional buying and selling in today's
                challenging market conditions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Modules */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Complete Education Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Start with the basics and work your way up to advanced creative financing strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <Card key={index} className="professional-card p-6 hover:border-primary/50 transition-all group cursor-pointer h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          module.level === 'Beginner' ? 'bg-green-100 text-green-700' :
                          module.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {module.level}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {module.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {module.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">You'll Learn:</h4>
                      <ul className="space-y-1">
                        {module.keyTopics.slice(0, 3).map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span>{module.readTime}</span>
                    </div>

                    <Link href={`/education/${module.slug}`} className="mt-auto">
                      <Button className="w-full group-hover:bg-primary/90 transition-colors">
                        Start Module
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-muted-foreground">
              Customized education tracks based on your goals and experience level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HomeIcon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">First-Time Buyer Path</h3>
              <p className="text-muted-foreground mb-6">
                Learn the real costs of homeownership and how creative financing can make buying more affordable.
              </p>
              <div className="space-y-2 text-left mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm text-muted-foreground">Real Cost to Buy</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm text-muted-foreground">Subject-To Basics</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm text-muted-foreground">Seller Financing</span>
                </div>
              </div>
              <Button className="w-full">Start Path</Button>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PiggyBank className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Investor Path</h3>
              <p className="text-muted-foreground mb-6">
                Understand real returns from rentals and advanced creative financing strategies for building wealth.
              </p>
              <div className="space-y-2 text-left mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Rental Returns Reality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Property Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-sm text-muted-foreground">Advanced Strategies</span>
                </div>
              </div>
              <Button className="w-full">Start Path</Button>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Realtor Path</h3>
              <p className="text-muted-foreground mb-6">
                Learn to offer creative financing options to save deals and earn referral fees on challenging transactions.
              </p>
              <div className="space-y-2 text-left mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                  <span className="text-sm text-muted-foreground">Creative Options Overview</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                  <span className="text-sm text-muted-foreground">Client Presentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-destructive rounded-full" />
                  <span className="text-sm text-muted-foreground">Referral Programs</span>
                </div>
              </div>
              <Link href="/realtors">
                <Button className="w-full">Start Path</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Learn Real Estate the Right Way?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join thousands who have learned the truth about real estate costs, returns, and creative financing strategies.
            Start with any module that interests you most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cta-button text-lg px-8 py-4">
              Begin Your Education
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/community">
              <Button variant="outline" className="outline-button text-lg px-8 py-4">
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}