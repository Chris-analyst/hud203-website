import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  DollarSign,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Lightbulb,
  FileText,
  Phone,
  MessageSquare,
  Calculator,
  Award,
  Handshake,
  BookOpen
} from "lucide-react"
import { generateSEO } from "@/lib/seo"
import { Metadata } from "next"
import Link from "next/link"

export function generateMetadata(): Metadata {
  return generateSEO({
    title: "Creative Financing for Realtors - Save Deals & Earn Referral Fees",
    description: "Learn how realtors can offer creative financing options like seller financing to save challenging transactions and earn significant referral fees on deals that would otherwise be lost.",
    path: "/realtors",
    keywords: ["realtor creative financing", "seller financing realtor", "realtor referral fees", "save real estate deals", "creative real estate solutions"],
    type: "website"
  })
}

const problemScenarios = [
  {
    title: "Low Equity Sellers",
    description: "Sellers with little to no equity who can't afford traditional sale costs.",
    solution: "Subject-To or wrap mortgage structures allow them to move without cash out of pocket.",
    referralPotential: "$3,000-$8,000"
  },
  {
    title: "High Interest Rate Buyers",
    description: "Qualified buyers priced out by current 7-8% mortgage rates.",
    solution: "Seller financing at rates below market but above seller's existing rate.",
    referralPotential: "$2,500-$6,000"
  },
  {
    title: "Time-Sensitive Sellers",
    description: "Job relocation, divorce, or other urgent situations requiring quick sale.",
    solution: "Creative structures that allow faster closing without traditional financing delays.",
    referralPotential: "$4,000-$10,000"
  },
  {
    title: "Investor Sellers",
    description: "Rental property owners facing tax consequences from outright sale.",
    solution: "Installment sales through seller financing to spread tax impact over time.",
    referralPotential: "$5,000-$15,000"
  }
]

const creativeOptions = [
  {
    title: "Seller Financing",
    description: "Seller acts as the bank, providing financing directly to buyer",
    bestFor: "Sellers with low mortgage balances or paid-off properties",
    realtorBenefit: "Save deals, earn full commission plus potential ongoing referral fees",
    riskLevel: "Low to Medium"
  },
  {
    title: "Subject-To",
    description: "Buyer takes over existing mortgage payments while seller maintains loan liability",
    bestFor: "Sellers in distress with good payment history",
    realtorBenefit: "Quick solutions for difficult situations, significant referral potential",
    riskLevel: "Medium to High"
  },
  {
    title: "Wrap Mortgages",
    description: "New financing that 'wraps around' existing mortgage with seller carrying additional financing",
    bestFor: "Properties with existing low-rate mortgages and equity",
    realtorBenefit: "Complex deals with higher commission potential",
    riskLevel: "Medium"
  },
  {
    title: "Lease Options",
    description: "Buyer leases with option to purchase, building toward ownership",
    bestFor: "Buyers who need time to improve credit or save for down payment",
    realtorBenefit: "Two potential commission opportunities - lease and purchase",
    riskLevel: "Low"
  }
]

export default function RealtorsPage() {
  return (
    <main className="min-h-screen py-12">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Turn Dead Deals Into
            <span className="text-primary"> Profit Opportunities</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Learn how to offer creative financing solutions that save challenging transactions
            and generate significant referral fees on deals you'd otherwise lose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cta-button text-lg px-8 py-4">
              Join Realtor Network
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="outline-button text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How Many Deals Are You Losing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              In today's market, traditional financing fails many motivated buyers and sellers.
              Creative financing can save these deals and create new revenue streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="professional-card p-8">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Common Deal Killers</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Buyers can't qualify at current interest rates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Sellers have no equity for closing costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Time-sensitive situations requiring quick closes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Credit or income issues preventing approval</span>
                </li>
              </ul>
            </Card>

            <Card className="professional-card p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 text-center">Revenue Opportunity</h3>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-primary mb-2">$2,500-$15,000</div>
                <p className="text-sm text-muted-foreground">Potential referral fee per saved deal</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Traditional commission on closed deal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Referral fee from creative financing partner</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Ongoing relationship with satisfied clients</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Turn Your Dead Deal Pipeline Into Profit
              </h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                Instead of telling clients "sorry, it won't work," offer them creative solutions.
                Even one saved deal per month can add $30,000-$180,000 annually to your income.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">1 Deal/Month</div>
                  <div className="text-sm text-muted-foreground">$30,000-$180,000/year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">2 Deals/Month</div>
                  <div className="text-sm text-muted-foreground">$60,000-$360,000/year</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">3+ Deals/Month</div>
                  <div className="text-sm text-muted-foreground">$90,000+ annually</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Scenarios */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Common Scenarios You Can Save
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real situations where creative financing turns failed deals into profitable transactions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problemScenarios.map((scenario, index) => (
              <Card key={index} className="professional-card p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{scenario.title}</h3>
                    <p className="text-sm text-muted-foreground">{scenario.description}</p>
                  </div>
                </div>

                <div className="bg-muted/20 rounded-lg p-4 mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Creative Solution:</h4>
                  <p className="text-sm text-muted-foreground">{scenario.solution}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Referral Potential:</span>
                  <span className="font-semibold text-primary">{scenario.referralPotential}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creative Options Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Creative Financing Options to Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Simple explanations of each strategy so you can confidently present options to clients
            </p>
          </div>

          <div className="space-y-6">
            {creativeOptions.map((option, index) => (
              <Card key={index} className="professional-card p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{option.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{option.description}</p>
                    <div className="bg-primary/5 rounded-lg p-3">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Best For:</h4>
                      <p className="text-sm text-muted-foreground">{option.bestFor}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Your Benefit</h4>
                    <p className="text-sm text-muted-foreground mb-4">{option.realtorBenefit}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Risk Level:</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        option.riskLevel.includes('Low') ? 'bg-green-100 text-green-700' :
                        option.riskLevel.includes('High') ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {option.riskLevel}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <Button variant="outline" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How the Referral Program Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple process to start saving deals and earning additional income
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">1. Identify Opportunity</h3>
              <p className="text-muted-foreground mb-6">
                Recognize when traditional financing won't work and creative solutions could save the deal.
              </p>
              <ul className="text-sm text-muted-foreground text-left space-y-2">
                <li>• Buyer qualification issues</li>
                <li>• Seller equity problems</li>
                <li>• Time constraints</li>
                <li>• Interest rate challenges</li>
              </ul>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">2. Present & Refer</h3>
              <p className="text-muted-foreground mb-6">
                Present creative financing options to your clients and connect them with our specialists.
              </p>
              <ul className="text-sm text-muted-foreground text-left space-y-2">
                <li>• Use our presentation materials</li>
                <li>• Schedule joint client calls</li>
                <li>• Maintain client relationship</li>
                <li>• Coordinate deal structure</li>
              </ul>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">3. Get Paid</h3>
              <p className="text-muted-foreground mb-6">
                Earn your traditional commission plus referral fees when deals close successfully.
              </p>
              <ul className="text-sm text-muted-foreground text-left space-y-2">
                <li>• Full traditional commission</li>
                <li>• Referral fee: $2,500-$15,000</li>
                <li>• Ongoing relationship benefits</li>
                <li>• Client satisfaction & loyalty</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Complete Training & Support
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to confidently present creative financing options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Educational Resources</h3>
              <ul className="text-sm text-muted-foreground text-left space-y-2">
                <li>• Creative financing fundamentals</li>
                <li>• When to use each strategy</li>
                <li>• Risk assessment guidelines</li>
                <li>• Legal and ethical considerations</li>
              </ul>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Client Presentations</h3>
              <ul className="text-sm text-muted-foreground text-left space-y-2">
                <li>• Professional presentation decks</li>
                <li>• Case study examples</li>
                <li>• Comparison calculators</li>
                <li>• FAQ handling guides</li>
              </ul>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Ongoing Support</h3>
              <ul className="text-sm text-muted-foreground text-left space-y-2">
                <li>• Direct specialist access</li>
                <li>• Deal structuring assistance</li>
                <li>• Joint client consultations</li>
                <li>• Monthly training sessions</li>
              </ul>
            </Card>
          </div>

          <div className="mt-12 bg-primary/5 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Start Earning Referral Fees This Month
              </h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                Join our realtor network and start turning your challenging deals into profit opportunities.
                Complete training provided, ongoing support guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="cta-button text-lg px-8 py-4">
                  Join Realtor Network
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="outline-button text-lg px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Discovery Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Real Results from Partner Realtors
            </h2>
            <p className="text-lg text-muted-foreground">
              See how other realtors are saving deals and earning additional income
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="professional-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Sarah M., Tampa Bay</h4>
                  <p className="text-sm text-muted-foreground">12 years experience</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "I was ready to lose a $450K deal when the buyer's rate went from 4% to 7.5%.
                Seller financing at 5.5% saved the transaction. I earned my full commission plus a $6,800 referral fee."
              </p>
              <div className="bg-primary/5 rounded-lg p-3">
                <div className="text-sm text-foreground font-medium">Result: $19,300 total earnings on saved deal</div>
              </div>
            </Card>

            <Card className="professional-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Mike R., Jacksonville</h4>
                  <p className="text-sm text-muted-foreground">8 years experience</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Seller had zero equity and needed to relocate for work. Subject-To structure let them move
                without bringing cash to close. Added $47,000 to my annual income in the first six months."
              </p>
              <div className="bg-accent/5 rounded-lg p-3">
                <div className="text-sm text-foreground font-medium">Result: 7 creative deals, $47K additional income</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Turn Dead Deals Into Profit?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join successful realtors who are earning $30K-$180K+ annually in referral fees
            by offering creative financing solutions to challenging transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cta-button text-lg px-8 py-4">
              Join Realtor Network Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="outline-button text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Discovery Call
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No upfront costs • Complete training included • Start earning within 30 days
          </p>
        </div>
      </section>
    </main>
  )
}