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
  Clock
} from "lucide-react"
import { generateSEO } from "@/lib/seo"
import { Metadata } from "next"
import Link from "next/link"

export function generateMetadata(): Metadata {
  return generateSEO({
    title: "Real Estate Market Analysis - HUD203 Target States",
    description: "Comprehensive market analysis for Florida, Georgia, Alabama, Texas, Tennessee, Carolinas, Oklahoma, Missouri, and Louisiana. Days on market, price trends, and investment opportunities.",
    path: "/market-analysis",
    keywords: ["real estate market analysis", "days on market", "price trends", "investment opportunities", "creative financing markets"],
    type: "article"
  })
}

// Market data - in a real app this would come from an API
const marketData = [
  {
    state: "Florida",
    slug: "florida",
    averageDaysOnMarket: 45,
    averageHomePriceChange: -2.3,
    inventoryChange: +15.2,
    investorActivity: "High",
    cashBuyerPercentage: 28.4,
    description: "High cash buyer activity creates opportunities for creative financing",
    keyInsights: [
      "Insurance costs driving seller flexibility",
      "Strong rental market for buy-and-hold strategies",
      "Seller financing opportunities in rural markets"
    ]
  },
  {
    state: "Georgia",
    slug: "georgia",
    averageDaysOnMarket: 38,
    averageHomePriceChange: -1.8,
    inventoryChange: +12.7,
    investorActivity: "High",
    cashBuyerPercentage: 24.1,
    description: "Growing inventory creates seller motivation for alternative solutions",
    keyInsights: [
      "Atlanta metro showing price adjustments",
      "Rural areas perfect for Subject-To deals",
      "Strong population growth supports long-term holds"
    ]
  },
  {
    state: "Alabama",
    slug: "alabama",
    averageDaysOnMarket: 52,
    averageHomePriceChange: -3.1,
    inventoryChange: +18.9,
    investorActivity: "Moderate",
    cashBuyerPercentage: 19.7,
    description: "Extended market times create prime conditions for creative deals",
    keyInsights: [
      "Lower competition for investors",
      "High seller motivation due to longer market times",
      "Affordable price points ideal for wrap mortgages"
    ]
  },
  {
    state: "Texas",
    slug: "texas",
    averageDaysOnMarket: 41,
    averageHomePriceChange: -2.7,
    inventoryChange: +14.3,
    investorActivity: "Very High",
    cashBuyerPercentage: 31.2,
    description: "Large market with diverse opportunities across metro areas",
    keyInsights: [
      "Dallas-Houston corridor showing corrections",
      "Rural Texas excellent for seller financing",
      "Strong job growth supports rental strategies"
    ]
  },
  {
    state: "Tennessee",
    slug: "tennessee",
    averageDaysOnMarket: 43,
    averageHomePriceChange: -1.9,
    inventoryChange: +11.5,
    investorActivity: "High",
    cashBuyerPercentage: 22.8,
    description: "No state income tax attracts investors and creates opportunities",
    keyInsights: [
      "Nashville market cooling creates opportunities",
      "Strong rental demand statewide",
      "Seller financing popular in rural areas"
    ]
  },
  {
    state: "North Carolina",
    slug: "north-carolina",
    averageDaysOnMarket: 39,
    averageHomePriceChange: -1.4,
    inventoryChange: +9.8,
    inventorActivity: "High",
    cashBuyerPercentage: 26.3,
    description: "Research Triangle and Charlotte drive diverse market conditions",
    keyInsights: [
      "Tech growth creates rental opportunities",
      "Rural areas showing price flexibility",
      "Strong population in-migration"
    ]
  },
  {
    state: "South Carolina",
    slug: "south-carolina",
    averageDaysOnMarket: 47,
    averageHomePriceChange: -2.1,
    inventoryChange: +13.6,
    investorActivity: "Moderate",
    cashBuyerPercentage: 23.1,
    description: "Coastal tourism and retiree markets create unique opportunities",
    keyInsights: [
      "Vacation rental potential in coastal areas",
      "Retiree influx creates seller financing opportunities",
      "Affordable inland markets for investors"
    ]
  },
  {
    state: "Oklahoma",
    slug: "oklahoma",
    averageDaysOnMarket: 56,
    averageHomePriceChange: -3.4,
    inventoryChange: +21.2,
    investorActivity: "Low",
    cashBuyerPercentage: 18.3,
    description: "Energy sector volatility creates motivated seller opportunities",
    keyInsights: [
      "Oil price volatility drives seller flexibility",
      "Low investor competition",
      "Excellent cash flow potential for rentals"
    ]
  },
  {
    state: "Missouri",
    slug: "missouri",
    averageDaysOnMarket: 49,
    averageHomePriceChange: -2.8,
    inventoryChange: +16.7,
    investorActivity: "Low",
    cashBuyerPercentage: 20.4,
    description: "Affordable markets with strong cash flow potential",
    keyInsights: [
      "St. Louis and KC showing price corrections",
      "Rural areas with excellent cash flow",
      "Low competition from institutional investors"
    ]
  },
  {
    state: "Louisiana",
    slug: "louisiana",
    averageDaysOnMarket: 58,
    averageHomePriceChange: -3.7,
    inventoryChange: +19.4,
    investorActivity: "Low",
    cashBuyerPercentage: 17.9,
    description: "Insurance challenges create unique seller financing opportunities",
    keyInsights: [
      "Insurance costs driving seller flexibility",
      "New Orleans rental market potential",
      "Hurricane recovery creates opportunities"
    ]
  }
]

export default function MarketAnalysis() {
  const currentMonth = new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

  return (
    <main className="min-h-screen py-12">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Real Estate Market Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Deep dive into market conditions across our target states. Understanding days on market, price trends,
            and investor activity helps identify the best opportunities for creative financing strategies.
          </p>
          <p className="text-sm text-muted-foreground">
            <Clock className="inline h-4 w-4 mr-2" />
            Data updated for {currentMonth}
          </p>
        </div>
      </section>

      {/* Market Overview Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">47</div>
              <div className="text-sm text-muted-foreground">Avg Days on Market</div>
            </Card>

            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-6 w-6 text-destructive" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">-2.4%</div>
              <div className="text-sm text-muted-foreground">Avg Price Change</div>
            </Card>

            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">+15.1%</div>
              <div className="text-sm text-muted-foreground">Inventory Growth</div>
            </Card>

            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">23.1%</div>
              <div className="text-sm text-muted-foreground">Avg Cash Buyers</div>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-6 mb-12">
            <h3 className="text-lg font-semibold text-foreground mb-3">Market Insight Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Current market conditions show increasing inventory and longer days on market across our target states,
              creating optimal conditions for creative financing strategies. Sellers are becoming more flexible on terms
              as traditional cash and conventional buyers face affordability challenges.
            </p>
          </div>
        </div>
      </section>

      {/* State-by-State Analysis */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              State-by-State Market Analysis
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Click any state for detailed market analysis, creative financing opportunities, and local insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketData.map((market) => (
              <Card key={market.state} className="professional-card p-6 hover:border-primary/50 transition-all group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{market.state}</h3>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    market.investorActivity === 'Very High' ? 'bg-red-100 text-red-700' :
                    market.investorActivity === 'High' ? 'bg-orange-100 text-orange-700' :
                    market.investorActivity === 'Moderate' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {market.investorActivity} Activity
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Days on Market</span>
                    <span className="font-semibold text-foreground">{market.averageDaysOnMarket} days</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Price Change</span>
                    <span className={`font-semibold ${market.averageHomePriceChange < 0 ? 'text-destructive' : 'text-accent'}`}>
                      {market.averageHomePriceChange > 0 ? '+' : ''}{market.averageHomePriceChange}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Inventory Change</span>
                    <span className="font-semibold text-accent">+{market.inventoryChange}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Cash Buyers</span>
                    <span className="font-semibold text-foreground">{market.cashBuyerPercentage}%</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {market.description}
                </p>

                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-semibold text-foreground">Key Insights:</h4>
                  {market.keyInsights.slice(0, 2).map((insight, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{insight}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/market-analysis/${market.slug}`}>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    View Full Analysis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Trends Insights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Current Market Trends
            </h2>
            <p className="text-lg text-muted-foreground">
              Understanding these trends helps identify the best opportunities for creative financing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="professional-card p-8">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-center text-foreground mb-4">
                Price Corrections Continue
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Average home prices are declining across target markets, creating motivated sellers
                willing to consider creative terms to avoid further price reductions.
              </p>
            </Card>

            <Card className="professional-card p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-center text-foreground mb-4">
                Inventory Rising
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Increased inventory gives buyers more options and sellers more competition,
                making creative financing an attractive differentiator for motivated sellers.
              </p>
            </Card>

            <Card className="professional-card p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center text-foreground mb-4">
                Extended Market Times
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Longer days on market indicate sellers are becoming more flexible on terms,
                creating prime opportunities for Subject-To and seller financing deals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Capitalize on These Market Conditions?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Current market trends create optimal conditions for creative financing. Join our community
            to learn how to identify and structure these opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cta-button text-lg px-8 py-4">
              Join Our Community
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