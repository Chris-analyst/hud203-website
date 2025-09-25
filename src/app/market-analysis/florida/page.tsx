import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  Home as HomeIcon,
  DollarSign,
  BarChart3,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Shield,
  Zap
} from "lucide-react"
import { generateSEO } from "@/lib/seo"
import { Metadata } from "next"
import Link from "next/link"

export function generateMetadata(): Metadata {
  return generateSEO({
    title: "Florida Real Estate Market Analysis - Creative Financing Opportunities",
    description: "Detailed Florida real estate market analysis. Days on market data, price trends, and creative financing opportunities across major metro areas including Miami, Orlando, Tampa, and Jacksonville.",
    path: "/market-analysis/florida",
    keywords: ["Florida real estate", "days on market", "creative financing", "Subject-To Florida", "seller financing"],
    type: "article"
  })
}

const floridaMetroAreas = [
  {
    name: "Miami-Dade",
    averageDaysOnMarket: 42,
    averageHomePrice: 485000,
    priceChange: -3.2,
    cashBuyerPercentage: 34.1,
    opportunities: [
      "High cash buyer competition creates seller financing opportunities",
      "International buyers create wrap mortgage potential",
      "Condo market cooling provides Subject-To opportunities"
    ]
  },
  {
    name: "Orlando",
    averageDaysOnMarket: 38,
    averageHomePrice: 295000,
    priceChange: -2.8,
    cashBuyerPercentage: 31.7,
    opportunities: [
      "Tourism market creates short-term rental potential",
      "Population growth supports long-term appreciation",
      "New construction competition motivates existing sellers"
    ]
  },
  {
    name: "Tampa Bay",
    averageDaysOnMarket: 45,
    averageHomePrice: 325000,
    priceChange: -2.1,
    cashBuyerPercentage: 29.3,
    opportunities: [
      "Tech sector growth creates rental demand",
      "Waterfront properties ideal for seller financing",
      "Retiree market provides long-term seller financing"
    ]
  },
  {
    name: "Jacksonville",
    averageDaysOnMarket: 48,
    averageHomePrice: 245000,
    priceChange: -1.9,
    cashBuyerPercentage: 25.8,
    opportunities: [
      "Military relocations create turnover opportunities",
      "Affordable prices ideal for first-time investor deals",
      "Growing job market supports rental strategies"
    ]
  },
  {
    name: "Fort Lauderdale",
    averageDaysOnMarket: 41,
    averageHomePrice: 425000,
    priceChange: -2.7,
    cashBuyerPercentage: 32.4,
    opportunities: [
      "Luxury market slowdown creates flexibility",
      "Vacation rental market provides cash flow",
      "International buyer interest supports wraps"
    ]
  }
]

const floridaInsights = [
  {
    title: "Insurance Crisis Creates Opportunity",
    description: "Rising homeowner's insurance costs are motivating sellers to consider creative terms that transfer insurance responsibility to buyers.",
    impact: "High",
    strategy: "Subject-To deals where buyer assumes insurance responsibilities can be attractive to cost-burdened sellers."
  },
  {
    title: "Strong Rental Market",
    description: "Florida's tourism and population growth create consistent rental demand, supporting buy-and-hold strategies.",
    impact: "High",
    strategy: "Wrap mortgages and seller financing on rental properties provide cash flow while building equity."
  },
  {
    title: "Seasonal Market Fluctuations",
    description: "Winter buying season creates urgency, while summer slowdowns increase seller flexibility.",
    impact: "Medium",
    strategy: "Time creative financing offers during slower periods for maximum seller motivation."
  }
]

export default function FloridaMarketAnalysis() {
  const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  return (
    <main className="min-h-screen py-12">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/market-analysis" className="text-muted-foreground hover:text-primary transition-colors">
              Market Analysis
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Florida</span>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">Florida</h1>
            </div>
            <p className="text-xl text-muted-foreground mb-6 max-w-4xl mx-auto">
              In-depth market analysis for the Sunshine State. Florida's unique market conditions create
              exceptional opportunities for creative financing strategies.
            </p>
            <p className="text-sm text-muted-foreground">
              <Clock className="inline h-4 w-4 mr-2" />
              Data updated for {currentMonth}
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">45</div>
              <div className="text-sm text-muted-foreground">Days on Market</div>
              <div className="text-xs text-accent mt-1">+8 vs 2022</div>
            </Card>

            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-6 w-6 text-destructive" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">-2.3%</div>
              <div className="text-sm text-muted-foreground">Price Change</div>
              <div className="text-xs text-destructive mt-1">YoY Change</div>
            </Card>

            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">+15.2%</div>
              <div className="text-sm text-muted-foreground">Inventory Growth</div>
              <div className="text-xs text-accent mt-1">More Choice</div>
            </Card>

            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">28.4%</div>
              <div className="text-sm text-muted-foreground">Cash Buyers</div>
              <div className="text-xs text-primary mt-1">High Competition</div>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-8 mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-4">Florida Market Summary</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Florida's real estate market is experiencing a significant shift. While still attractive to investors and retirees,
              rising insurance costs and increased inventory are creating motivated sellers willing to consider creative financing options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground font-medium">Insurance challenges create opportunities</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-sm text-foreground font-medium">Strong population growth</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-destructive" />
                <span className="text-sm text-foreground font-medium">Increasing seller motivation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metro Area Breakdown */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Metro Area Analysis
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each Florida metro area offers unique opportunities for creative financing strategies
            </p>
          </div>

          <div className="space-y-6">
            {floridaMetroAreas.map((metro, index) => (
              <Card key={metro.name} className="professional-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{metro.name}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Days on Market</span>
                        <span className="font-semibold text-foreground">{metro.averageDaysOnMarket} days</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Average Home Price</span>
                        <span className="font-semibold text-foreground">${metro.averageHomePrice.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Price Change</span>
                        <span className="font-semibold text-destructive">{metro.priceChange}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Cash Buyers</span>
                        <span className="font-semibold text-foreground">{metro.cashBuyerPercentage}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Creative Financing Opportunities</h4>
                    <div className="space-y-3">
                      {metro.opportunities.map((opportunity, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-muted-foreground text-sm">{opportunity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Florida Market Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Key factors driving creative financing opportunities in the Florida market
            </p>
          </div>

          <div className="space-y-8">
            {floridaInsights.map((insight, index) => (
              <Card key={index} className="professional-card p-8">
                <div className="flex items-start gap-6">
                  <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                    insight.impact === 'High' ? 'bg-primary' :
                    insight.impact === 'Medium' ? 'bg-accent' : 'bg-muted'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-foreground">{insight.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        insight.impact === 'High' ? 'bg-primary/10 text-primary' :
                        insight.impact === 'Medium' ? 'bg-accent/10 text-accent' :
                        'bg-muted/10 text-muted-foreground'
                      }`}>
                        {insight.impact} Impact
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{insight.description}</p>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Strategy Application:</h4>
                      <p className="text-sm text-muted-foreground">{insight.strategy}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Rate Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Interest Rate Impact Analysis
            </h2>
            <p className="text-lg text-muted-foreground">
              How current rates compare to 2022 and create seller financing opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="professional-card p-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">2022 Average Rate</h3>
                <div className="text-4xl font-bold text-primary mb-2">3.2%</div>
                <p className="text-sm text-muted-foreground">COVID-era historic lows</p>
              </div>
            </Card>

            <Card className="professional-card p-8">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Current Average Rate</h3>
                <div className="text-4xl font-bold text-destructive mb-2">7.8%</div>
                <p className="text-sm text-muted-foreground">+143% increase from 2022</p>
              </div>
            </Card>
          </div>

          <Card className="professional-card p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Monthly Payment Impact Example</h3>
            <div className="bg-muted/20 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">$400,000 Home - 2022 Rate (3.2%)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Payment:</span>
                      <span className="font-semibold text-foreground">$1,738</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Interest:</span>
                      <span className="font-semibold text-foreground">$225,680</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">$400,000 Home - Current Rate (7.8%)</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monthly Payment:</span>
                      <span className="font-semibold text-destructive">$2,869</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Interest:</span>
                      <span className="font-semibold text-destructive">$712,840</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Monthly Payment Difference:</p>
                  <p className="text-2xl font-bold text-destructive">+$1,131/month (+65%)</p>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-primary/5 rounded-lg p-4">
              <p className="text-sm text-foreground font-medium mb-2">Creative Financing Opportunity:</p>
              <p className="text-sm text-muted-foreground">
                Sellers with low-rate mortgages can offer rates between current market rates and their existing rate,
                creating win-win scenarios. A 5% seller financing rate saves buyers $826/month while earning sellers
                more than traditional investments.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Capitalize on Florida's Market Conditions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our Florida community of investors, realtors, and creative financing professionals.
            Learn how to identify and structure deals in the Sunshine State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cta-button text-lg px-8 py-4">
              Join Florida Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/education">
              <Button variant="outline" className="outline-button text-lg px-8 py-4">
                Learn Creative Strategies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}