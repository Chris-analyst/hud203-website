import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, BookOpen, DollarSign, Users, Calculator } from "lucide-react"
import { generateSEO, generateArticleSchema } from "@/lib/seo"
import { pageTemplates } from "@/lib/seo-keywords"
import { Metadata } from "next"
import Link from "next/link"

export function generateMetadata(): Metadata {
  return generateSEO({
    title: pageTemplates.sellerFinancingGuide.title,
    description: pageTemplates.sellerFinancingGuide.description,
    path: "/guides/seller-financing",
    keywords: pageTemplates.sellerFinancingGuide.keywords,
    type: "article",
    author: "HUD203 Team",
    category: "Creative Financing"
  })
}

export default function SellerFinancingGuidePage() {
  const benefits = {
    sellers: [
      {
        title: "Higher Sale Price",
        description: "Typically 10-20% above market value due to financing premium"
      },
      {
        title: "Monthly Income Stream",
        description: "Steady passive income from mortgage payments"
      },
      {
        title: "Tax Advantages",
        description: "Installment sale treatment spreads capital gains over years"
      },
      {
        title: "Faster Sale",
        description: "Larger buyer pool includes those who can't get traditional financing"
      }
    ],
    buyers: [
      {
        title: "No Bank Qualification",
        description: "Bypass strict lending requirements and credit checks"
      },
      {
        title: "Flexible Terms",
        description: "Negotiate interest rates, down payment, and payment schedule"
      },
      {
        title: "Quick Closing",
        description: "Close in weeks instead of months with no loan approval delays"
      },
      {
        title: "Build Equity Immediately",
        description: "Start building ownership from day one of ownership"
      }
    ]
  }

  const structureTypes = [
    {
      title: "All-Inclusive Deed of Trust (AITD)",
      description: "Seller keeps existing mortgage, buyer makes payments to seller",
      whenToUse: "When seller has favorable existing financing",
      pros: ["Lower buyer down payment", "Seller keeps good rate"],
      cons: ["Due-on-sale risk", "More complex structure"]
    },
    {
      title: "Land Contract (Contract for Deed)",
      description: "Buyer gets equitable title, deed transfers after full payment",
      whenToUse: "Higher-risk buyers or investment properties",
      pros: ["Seller retains legal title", "Easier foreclosure process"],
      cons: ["Buyer has limited rights", "State-specific regulations"]
    },
    {
      title: "Purchase Money Mortgage",
      description: "Traditional mortgage where seller acts as the lender",
      whenToUse: "Clean transactions with qualified buyers",
      pros: ["Clear ownership transfer", "Standard foreclosure process"],
      cons: ["Higher down payment typically required", "More documentation"]
    }
  ]

  const negotiationPoints = [
    {
      category: "Financial Terms",
      items: [
        "Interest rate (typically 1-3% above market)",
        "Down payment (10-20% common)",
        "Monthly payment amount",
        "Loan term (15-30 years typical)"
      ]
    },
    {
      category: "Property & Legal",
      items: [
        "Property maintenance responsibilities",
        "Insurance requirements",
        "Property tax payment method",
        "Default and foreclosure procedures"
      ]
    },
    {
      category: "Exit Strategies",
      items: [
        "Balloon payment timing",
        "Refinance requirements",
        "Early payoff incentives",
        "Transfer restrictions"
      ]
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 text-sm text-primary/80 mb-4">
            <Link href="/education" className="hover:text-accent">Education Hub</Link>
            <ArrowRight className="h-4 w-4" />
            <span>Seller Financing Guide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            {pageTemplates.sellerFinancingGuide.h1}
          </h1>

          <p className="text-xl text-primary/90 leading-relaxed mb-8">
            Seller financing creates win-win real estate transactions where the property owner acts as the bank,
            providing financing directly to the buyer. This comprehensive guide covers structures, benefits,
            and best practices for both buyers and sellers.
          </p>

          <div className="flex items-center gap-6 text-sm text-primary/80">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>12 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Beginner Level</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Win-Win Strategy</span>
            </div>
          </div>
        </div>

        {/* What is Seller Financing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">What is Seller Financing?</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-primary/90 leading-relaxed mb-6">
              Seller financing, also known as owner financing or seller carryback financing, is an arrangement
              where the property owner provides financing to the buyer instead of the buyer obtaining a traditional
              bank mortgage. The seller essentially becomes the bank, holding a mortgage secured by the property.
            </p>

            <p className="text-primary/90 leading-relaxed mb-6">
              This strategy has become increasingly popular in high interest rate environments, allowing sellers
              to access a larger pool of potential buyers while providing buyers an alternative to strict
              traditional lending requirements.
            </p>
          </div>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Perfect for Today&apos;s Market</h3>
                  <p className="text-sm text-primary/90">
                    With interest rates at multi-decade highs and lending standards tightening, seller financing
                    provides a practical solution that benefits both parties in the transaction.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Benefits for Everyone</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Seller Benefits */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-green-600" />
                For Sellers
              </h3>
              <div className="space-y-4">
                {benefits.sellers.map((benefit, index) => (
                  <Card key={index} className="bg-card border border-border rounded-lg shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-primary">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-primary/90">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Buyer Benefits */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" />
                For Buyers
              </h3>
              <div className="space-y-4">
                {benefits.buyers.map((benefit, index) => (
                  <Card key={index} className="bg-card border border-border rounded-lg shadow-sm">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg text-primary">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-primary/90">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Structure Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Common Seller Financing Structures</h2>

          <div className="space-y-6">
            {structureTypes.map((structure, index) => (
              <Card key={index} className="bg-card border border-border rounded-lg shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{structure.title}</CardTitle>
                  <p className="text-primary/90">{structure.description}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">When to Use:</h4>
                    <p className="text-sm text-primary/90">{structure.whenToUse}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Pros
                      </h4>
                      <ul className="space-y-1">
                        {structure.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="text-sm text-green-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0 mt-2" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">Considerations</h4>
                      <ul className="space-y-1">
                        {structure.cons.map((con, conIndex) => (
                          <li key={conIndex} className="text-sm text-yellow-700 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full flex-shrink-0 mt-2" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Negotiation Points */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Key Negotiation Points</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {negotiationPoints.map((category, index) => (
              <Card key={index} className="bg-card border border-border rounded-lg shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-accent" />
                    {category.category}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-primary/90 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Best Practices</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-primary">For Sellers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary">Screen Buyers Carefully</h4>
                    <p className="text-sm text-primary/90">Verify income, assets, and motivation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary">Require Adequate Down Payment</h4>
                    <p className="text-sm text-primary/90">10-20% minimum to ensure buyer commitment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary">Use Professional Documentation</h4>
                    <p className="text-sm text-primary/90">Attorney-prepared agreements and proper recording</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-xl text-primary">For Buyers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary">Complete Due Diligence</h4>
                    <p className="text-sm text-primary/90">Title search, inspection, and market analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary">Understand All Terms</h4>
                    <p className="text-sm text-primary/90">Interest rate, balloon payments, and default consequences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary">Plan Your Exit Strategy</h4>
                    <p className="text-sm text-primary/90">Refinance timeline and backup plans</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-br from-background via-secondary/20 to-accent/10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Master Seller Financing Today
          </h2>
          <p className="text-lg text-primary/90 mb-8 max-w-2xl mx-auto">
            Join thousands of real estate professionals who have learned to structure
            profitable seller financing deals in any market condition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Join HUD203 Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="gold" size="xl">
              Get Contract Templates
            </Button>
          </div>
        </section>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateArticleSchema(
              pageTemplates.sellerFinancingGuide.title,
              pageTemplates.sellerFinancingGuide.description,
              "https://hud203.com/guides/seller-financing",
              new Date().toISOString(),
              undefined,
              "https://hud203.com/images/seller-financing-guide.jpg"
            ))
          }}
        />
      </div>
    </div>
  )
}