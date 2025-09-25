import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/contact-form"
import { MapPin, Users, TrendingUp, ArrowRight, Phone, Building, DollarSign } from "lucide-react"
import { generateSEO } from "@/lib/seo"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface LocationData {
  city: string
  state: string
  fullName: string
  region: string
  population: string
  medianHome: string
  marketTrend: string
  description: string
  keyMetrics: {
    avgDealSize: string
    investors: string
    growthRate: string
    rentYield: string
  }
  neighborhoods: string[]
  nearbyAreas: string[]
  localInfo: {
    county: string
    founded: string
    majorEmployers: string[]
  }
  marketInsights: {
    bestStrategies: string[]
    challenges: string[]
    opportunities: string[]
  }
}

// Location data - in a real app, this would come from a database
const locationData: Record<string, LocationData> = {
  "atlanta-georgia": {
    city: "Atlanta",
    state: "Georgia",
    fullName: "Atlanta, Georgia",
    region: "Southeast",
    population: "498,715",
    medianHome: "$385,000",
    marketTrend: "Strong Growth",
    description: "Atlanta's dynamic real estate market offers exceptional opportunities for creative financing. With a diverse economy, growing population, and strong rental demand, the metro area provides ideal conditions for subject-to deals, seller financing, and creative investment strategies.",
    keyMetrics: {
      avgDealSize: "$275K",
      investors: "2,500+",
      growthRate: "+15%",
      rentYield: "8.2%"
    },
    neighborhoods: [
      "Buckhead", "Midtown", "Virginia-Highland", "Grant Park",
      "East Atlanta", "Inman Park", "Old Fourth Ward", "Decatur"
    ],
    nearbyAreas: [
      "Marietta", "Alpharetta", "Roswell", "Sandy Springs",
      "Duluth", "Lawrenceville", "Conyers", "Stone Mountain"
    ],
    localInfo: {
      county: "Fulton County",
      founded: "1837",
      majorEmployers: ["Delta Air Lines", "The Home Depot", "UPS", "Coca-Cola", "AT&T"]
    },
    marketInsights: {
      bestStrategies: [
        "Subject-to deals in transitioning neighborhoods",
        "Seller financing for luxury properties",
        "Lease options near universities",
        "Wrap mortgages in suburban areas"
      ],
      challenges: [
        "Competitive market requires fast decision-making",
        "Higher property taxes in some areas",
        "Gentrification affecting traditional rental areas"
      ],
      opportunities: [
        "Strong job growth driving housing demand",
        "Multiple universities creating rental demand",
        "Transportation improvements increasing values",
        "Corporate relocations bringing high-income buyers"
      ]
    }
  },
  "tampa-florida": {
    city: "Tampa",
    state: "Florida",
    fullName: "Tampa, Florida",
    region: "Southeast",
    population: "384,959",
    medianHome: "$295,000",
    marketTrend: "Rapid Growth",
    description: "Tampa Bay's booming real estate market combines Florida's tax advantages with strong economic growth. The area offers excellent opportunities for creative financing, with motivated sellers, diverse property types, and strong rental demand from young professionals and retirees.",
    keyMetrics: {
      avgDealSize: "$225K",
      investors: "1,800+",
      growthRate: "+12%",
      rentYield: "9.1%"
    },
    neighborhoods: [
      "Hyde Park", "Seminole Heights", "Ybor City", "Westchase",
      "South Tampa", "Channelside", "Davis Islands", "Carrollwood"
    ],
    nearbyAreas: [
      "St. Petersburg", "Clearwater", "Brandon", "Riverview",
      "Plant City", "Valrico", "Lutz", "Wesley Chapel"
    ],
    localInfo: {
      county: "Hillsborough County",
      founded: "1855",
      majorEmployers: ["Raymond James", "Publix", "BayCare Health", "Busch Gardens", "MacDill AFB"]
    },
    marketInsights: {
      bestStrategies: [
        "Subject-to deals with relocating retirees",
        "Seller financing for waterfront properties",
        "Vacation rental conversions",
        "Pre-foreclosure creative solutions"
      ],
      challenges: [
        "Hurricane insurance considerations",
        "Seasonal market fluctuations",
        "High demand driving up prices"
      ],
      opportunities: [
        "No state income tax attracts businesses",
        "Tourism driving short-term rental demand",
        "Tech sector growth in downtown",
        "Retirement migration creating seller motivation"
      ]
    }
  }
};

interface Props {
  params: Promise<{ location: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const location = locationData[resolvedParams.location]

  if (!location) {
    return generateSEO({
      title: "Location Not Found | HUD203",
      description: "The requested location page was not found.",
      path: `/locations/${resolvedParams.location}/`,
      noIndex: true
    })
  }

  return generateSEO({
    title: `Creative Real Estate Financing in ${location.fullName} | HUD203`,
    description: `Learn creative real estate financing strategies specific to ${location.fullName}. Connect with local investors, find deals, and master ${location.city} market dynamics.`,
    path: `/locations/${resolvedParams.location}/`,
    keywords: [
      `${location.city} real estate investing`,
      `creative financing ${location.city}`,
      `${location.city} real estate investors`,
      `subject to deals ${location.city}`,
      `seller financing ${location.state}`,
      `${location.city} real estate market`
    ],
    type: "website"
  })
}

export default async function LocationPage({ params }: Props) {
  const resolvedParams = await params
  const location = locationData[resolvedParams.location]

  if (!location) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50 to-gold-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <span className="text-emerald-600 font-medium">{location.region} Region</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-emerald-800 leading-tight mb-6">
                Creative Real Estate Financing in {location.fullName}
              </h1>

              <p className="text-xl text-emerald-700 mb-8 leading-relaxed">
                {location.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="cta" size="xl" className="animate-bounce-subtle">
                  Join {location.city} Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline-forest" size="xl">
                  <Phone className="mr-2 h-5 w-5" />
                  Local Market Call
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-lg font-bold text-emerald-800">{location.keyMetrics.investors}</div>
                  <div className="text-sm text-gray-600">Local Investors</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-lg font-bold text-emerald-800">{location.keyMetrics.avgDealSize}</div>
                  <div className="text-sm text-gray-600">Avg Deal Size</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-lg font-bold text-emerald-800">{location.keyMetrics.growthRate}</div>
                  <div className="text-sm text-gray-600">Market Growth</div>
                </div>
                <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                  <div className="text-lg font-bold text-emerald-800">{location.keyMetrics.rentYield}</div>
                  <div className="text-sm text-gray-600">Avg Rent Yield</div>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <Card className="trust-card">
                <CardHeader>
                  <CardTitle className="text-emerald-800">
                    Connect with {location.city} Investors
                  </CardTitle>
                  <p className="text-gray-600">
                    Join our local community and get market-specific insights.
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
              {location.city} Market Overview
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Understanding local market dynamics is crucial for successful creative financing.
              Here's what makes {location.city} unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="trust-card text-center">
              <CardHeader>
                <Building className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-emerald-800">Market Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Population:</span>
                  <span className="font-semibold">{location.population}</span>
                </div>
                <div className="flex justify-between">
                  <span>Median Home:</span>
                  <span className="font-semibold">{location.medianHome}</span>
                </div>
                <div className="flex justify-between">
                  <span>County:</span>
                  <span className="font-semibold">{location.localInfo.county}</span>
                </div>
                <div className="flex justify-between">
                  <span>Market Trend:</span>
                  <span className="font-semibold text-emerald-600">{location.marketTrend}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="trust-card text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-emerald-800">Investment Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span>Avg Deal Size:</span>
                  <span className="font-semibold">{location.keyMetrics.avgDealSize}</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Investors:</span>
                  <span className="font-semibold">{location.keyMetrics.investors}</span>
                </div>
                <div className="flex justify-between">
                  <span>Growth Rate:</span>
                  <span className="font-semibold text-emerald-600">{location.keyMetrics.growthRate}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rent Yield:</span>
                  <span className="font-semibold">{location.keyMetrics.rentYield}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="trust-card text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-emerald-800">Economic Base</CardTitle>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2">Major Employers:</h4>
                <ul className="text-sm space-y-1">
                  {location.localInfo.majorEmployers.map((employer, index) => (
                    <li key={index} className="text-gray-700">• {employer}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Strategies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
              Best Creative Financing Strategies for {location.city}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="trust-card">
              <CardHeader>
                <CardTitle className="text-emerald-800 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Top Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {location.marketInsights.bestStrategies.map((strategy, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{strategy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="trust-card">
              <CardHeader>
                <CardTitle className="text-emerald-800 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {location.marketInsights.opportunities.map((opportunity, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="trust-card">
              <CardHeader>
                <CardTitle className="text-emerald-800 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Market Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {location.marketInsights.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-4 w-4 text-gold-600 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 text-center mb-12">
            Key {location.city} Neighborhoods for Creative Financing
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {location.neighborhoods.map((neighborhood, index) => (
              <div key={index} className="p-4 bg-emerald-50 rounded-lg text-center">
                <div className="font-semibold text-emerald-800">{neighborhood}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold text-emerald-800 mb-4">
              Extended Service Area
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {location.nearbyAreas.map((area, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg text-center">
                  <div className="text-gray-700">{area}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-emerald-50 to-gold-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-6">
            Ready to Start Investing in {location.city}?
          </h2>
          <p className="text-xl text-emerald-700 mb-8">
            Connect with our {location.city} community and get access to local deals,
            market insights, and experienced investors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" className="animate-bounce-subtle">
              Join {location.city} HUD203 Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="gold" size="xl">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Local Market Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

// Generate static pages for known locations
export function generateStaticParams() {
  return Object.keys(locationData).map((location) => ({
    location,
  }))
}