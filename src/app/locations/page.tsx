import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Users, TrendingUp, ArrowRight } from "lucide-react"
import Link from "next/link"
import { generateSEO } from "@/lib/seo"
import { Metadata } from "next"

export function generateMetadata(): Metadata {
  return generateSEO({
    title: "Creative Real Estate Financing Locations | HUD203 Community",
    description: "Find HUD203 creative real estate financing communities across the United States. Connect with local investors and learn market-specific strategies.",
    path: "/locations/",
    keywords: [
      "creative financing locations",
      "real estate investors by city",
      "local real estate community",
      "real estate meetups near me",
      "creative financing network"
    ],
    type: "website"
  })
}

// Primary markets with high creative financing activity
const primaryMarkets = [
  {
    city: "Atlanta",
    state: "Georgia",
    region: "Southeast",
    population: "498K",
    marketStrength: "Very Strong",
    description: "Active creative financing market with strong investor community and diverse property types.",
    keyMetrics: {
      avgInvestors: "2,500+",
      marketGrowth: "+15%",
      dealFlow: "High"
    }
  },
  {
    city: "Tampa",
    state: "Florida",
    region: "Southeast",
    population: "384K",
    marketStrength: "Strong",
    description: "Growing real estate market with excellent opportunities for subject-to and seller financing deals.",
    keyMetrics: {
      avgInvestors: "1,800+",
      marketGrowth: "+12%",
      dealFlow: "High"
    }
  },
  {
    city: "Austin",
    state: "Texas",
    region: "Southwest",
    population: "965K",
    marketStrength: "Very Strong",
    description: "Hot tech-driven market creating unique creative financing opportunities.",
    keyMetrics: {
      avgInvestors: "3,200+",
      marketGrowth: "+18%",
      dealFlow: "Very High"
    }
  },
  {
    city: "Nashville",
    state: "Tennessee",
    region: "Southeast",
    population: "689K",
    marketStrength: "Strong",
    description: "Music City's booming real estate market with strong rental demand and investor activity.",
    keyMetrics: {
      avgInvestors: "2,100+",
      marketGrowth: "+14%",
      dealFlow: "High"
    }
  },
  {
    city: "Phoenix",
    state: "Arizona",
    region: "Southwest",
    population: "1.6M",
    marketStrength: "Strong",
    description: "Desert metropolis with consistent growth and excellent creative financing opportunities.",
    keyMetrics: {
      avgInvestors: "2,800+",
      marketGrowth: "+11%",
      dealFlow: "High"
    }
  },
  {
    city: "Charlotte",
    state: "North Carolina",
    region: "Southeast",
    population: "874K",
    marketStrength: "Strong",
    description: "Banking hub with sophisticated investor community and strong economic fundamentals.",
    keyMetrics: {
      avgInvestors: "2,000+",
      marketGrowth: "+13%",
      dealFlow: "High"
    }
  }
];

// Growing secondary markets
const secondaryMarkets = [
  {
    city: "Kansas City",
    state: "Missouri",
    region: "Midwest",
    marketStrength: "Growing",
    description: "Emerging market with affordable properties and growing investor interest."
  },
  {
    city: "Indianapolis",
    state: "Indiana",
    region: "Midwest",
    marketStrength: "Growing",
    description: "Steady market with good cash flow opportunities and active REI community."
  },
  {
    city: "Memphis",
    state: "Tennessee",
    region: "Southeast",
    marketStrength: "Growing",
    description: "Value market with strong rental yields and creative financing potential."
  },
  {
    city: "Birmingham",
    state: "Alabama",
    region: "Southeast",
    marketStrength: "Emerging",
    description: "Affordable market showing signs of investor activity and growth potential."
  }
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50 to-gold-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-emerald-800 mb-6">
            HUD203 Communities Nationwide
          </h1>
          <p className="text-xl text-emerald-700 mb-8">
            Connect with creative real estate financing communities across the United States.
            Find local investors, learn market-specific strategies, and build your network.
          </p>
          <Button variant="cta" size="xl" className="animate-bounce-subtle">
            <MapPin className="mr-2 h-5 w-5" />
            Find Your Local Community
          </Button>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
              Primary Creative Financing Markets
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              These metropolitan areas have the most active creative real estate financing communities,
              with established investor networks and strong deal flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryMarkets.map((market, index) => (
              <Card key={index} className="trust-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-emerald-800 text-xl">
                      {market.city}, {market.state}
                    </CardTitle>
                    <span className="text-sm font-medium px-2 py-1 bg-emerald-100 text-emerald-700 rounded">
                      {market.marketStrength}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{market.region} • Pop: {market.population}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">{market.description}</p>

                  <div className="grid grid-cols-3 gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-emerald-800">
                        {market.keyMetrics.avgInvestors}
                      </div>
                      <div className="text-xs text-gray-600">Investors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-emerald-800">
                        {market.keyMetrics.marketGrowth}
                      </div>
                      <div className="text-xs text-gray-600">Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-emerald-800">
                        {market.keyMetrics.dealFlow}
                      </div>
                      <div className="text-xs text-gray-600">Deal Flow</div>
                    </div>
                  </div>

                  <Link href={`/locations/${market.city.toLowerCase()}-${market.state.toLowerCase()}`}>
                    <Button variant="outline" className="w-full group">
                      Explore {market.city} Market
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Markets */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
              Emerging Markets
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              These growing markets offer excellent opportunities for creative financing,
              with developing investor communities and increasing deal activity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryMarkets.map((market, index) => (
              <Card key={index} className="trust-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-800 mb-1">
                        {market.city}, {market.state}
                      </h3>
                      <p className="text-sm text-gray-600">{market.region}</p>
                    </div>
                    <span className="text-sm font-medium px-2 py-1 bg-gold-100 text-gold-700 rounded">
                      {market.marketStrength}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{market.description}</p>
                  <Button variant="outline" size="sm" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
              Market Regions
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Each region has unique characteristics that affect creative financing strategies.
              Understanding regional differences is key to successful investing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="trust-card text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-emerald-800">Southeast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Strong population growth, business-friendly regulations, diverse markets
                </p>
                <div className="text-sm text-emerald-700 font-medium">
                  FL, GA, TN, NC, SC, AL
                </div>
              </CardContent>
            </Card>

            <Card className="trust-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-emerald-800">Southwest</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Tech-driven growth, high appreciation, strong job markets
                </p>
                <div className="text-sm text-emerald-700 font-medium">
                  TX, AZ, NV, CO
                </div>
              </CardContent>
            </Card>

            <Card className="trust-card text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-emerald-800">Midwest</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Affordable prices, stable markets, good cash flow opportunities
                </p>
                <div className="text-sm text-emerald-700 font-medium">
                  MO, IN, OH, KS
                </div>
              </CardContent>
            </Card>

            <Card className="trust-card text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-emerald-800">Northeast</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Established markets, higher prices, sophisticated strategies needed
                </p>
                <div className="text-sm text-emerald-700 font-medium">
                  PA, NJ, MD, VA
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50 to-gold-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
            Ready to Connect with Your Local Market?
          </h2>
          <p className="text-xl text-emerald-700 mb-8">
            Join the HUD203 community and connect with creative real estate investors in your area.
            Get market-specific insights and build your local network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="animate-bounce-subtle">
              Join Your Local Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline-forest" size="xl">
              <MapPin className="mr-2 h-5 w-5" />
              Request New Market
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}