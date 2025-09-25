import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/forms/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  BookOpen,
  TrendingUp,
  Award,
  ArrowRight,
  Phone,
  CheckCircle,
  GraduationCap,
  Handshake,
  Lightbulb,
  DollarSign,
  Home as HomeIcon,
  FileText,
  MessageCircle
} from "lucide-react"
import { generateSEO, generateOrganizationSchema } from "@/lib/seo"
import { Metadata } from "next"

export function generateMetadata(): Metadata {
  return generateSEO({
    title: "HUD203 - Creative Real Estate Solutions That Work",
    description: "Join the community transforming real estate with creative financing. Subject-To, Seller Financing, Wrap Mortgages - win-win solutions for buyers, sellers, and investors.",
    path: "/",
    keywords: ["creative real estate", "subject to", "seller financing", "wrap mortgage", "real estate investing", "creative financing"],
    type: "website"
  })
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                  Creative Real Estate Solutions in a
                  <span className="text-primary"> Broken Market</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  HUD203 brings together realtors, homebuyers, sellers, and investors who believe in the power of
                  creative financing to solve today&apos;s real estate challenges.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="cta-button text-lg px-8 py-4">
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="outline-button text-lg px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Win-Win Solutions</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-5 w-5 text-primary" />
                  <span>Growing Community</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Proven Strategies</span>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end w-full max-w-md">
              <div className="professional-card p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              The Real Estate Market is Broken
            </h2>
            <p className="text-xl text-destructive font-semibold mb-8">
              Traditional real estate transactions are failing buyers and sellers alike
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HomeIcon className="h-8 w-8 text-destructive" />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground">Sellers Are Trapped</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Locked into ultra-low COVID-era interest rates, sellers can&apos;t afford to move without losing their favorable financing.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-destructive" />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground">Buyers Can't Qualify</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  High interest rates and soaring home prices make homeownership unaffordable for most buyers.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-destructive" />
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-foreground">Markets Stagnate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Properties sit unsold, values slip, and the whole system fails to serve anyone's needs effectively.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
              This broken cycle leaves families stuck, dreams deferred, and communities without the housing mobility they need to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Creative Financing: A Path Forward
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              When traditional sales fail, creative real estate strategies provide win-win solutions that benefit sellers, buyers, and entire communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Seller Benefits */}
            <Card className="professional-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">For Sellers</h3>
                  <p className="text-sm text-muted-foreground">Achieve your goals without losing low rates</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Get asking price with flexible terms</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Create steady, long-term income streams</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Move without sacrificing favorable rates</span>
                </li>
              </ul>
            </Card>

            {/* Buyer Benefits */}
            <Card className="professional-card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <HomeIcon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">For Buyers</h3>
                  <p className="text-sm text-muted-foreground">Access homeownership without high rates</p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Affordable payments despite market rates</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Alternative qualification criteria</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Build equity while market recovers</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Creative Strategies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="professional-card p-6 text-center group hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground">Subject-To</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Take over existing mortgage payments while building equity and positive cash flow.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card p-6 text-center group hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground">Seller Financing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sellers act as the bank, creating steady income and easier transactions.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card p-6 text-center group hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground">Wrap Mortgages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Combine existing financing with additional funding for flexible solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="professional-card p-6 text-center group hover:border-primary/50 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground">Loan Assumptions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Transfer existing loans with favorable terms to qualified buyers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Goals */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Community Mission
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building a network where everyone succeeds through collaboration and creative problem-solving
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Educate",
                description: "Demystify creative financing through clear explanations, examples, and success stories.",
                icon: GraduationCap
              },
              {
                title: "Connect",
                description: "Bring together realtors, sellers, buyers, and investors who believe in collaboration and long-term value.",
                icon: Users
              },
              {
                title: "Inspire",
                description: "Share real-world case studies of creative deals that solved problems for families and communities.",
                icon: Lightbulb
              },
              {
                title: "Empower",
                description: "Equip members with the tools, network, and confidence to create deals outside the broken traditional system.",
                icon: Award
              }
            ].map((goal, index) => {
              const IconComponent = goal.icon;
              return (
                <Card key={index} className="professional-card p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-foreground">{goal.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Community Network Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Join the HUD203 Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're looking to buy, sell, learn, or connect with like-minded professionals,
              our community has resources tailored to your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "I want to sell", icon: HomeIcon, description: "Creative exit strategies for property owners" },
              { label: "I want to buy", icon: DollarSign, description: "Alternative financing for homeownership" },
              { label: "I want to learn", icon: BookOpen, description: "Education on creative real estate" },
              { label: "I'm a realtor", icon: Users, description: "Tools and network for professionals" }
            ].map((option, index) => {
              const IconComponent = option.icon;
              return (
                <Card key={index} className="professional-card p-6 text-center cursor-pointer hover:border-primary/50 transition-all group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{option.label}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                  <Button className="cta-button w-full text-sm">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Tools & Resources for Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to understand, evaluate, and execute creative real estate strategies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Deal Templates</h3>
              <p className="text-muted-foreground mb-6">
                Ready-to-use contracts and agreements for Subject-To, seller financing, and wrap mortgages.
              </p>
              <Button variant="outline" className="w-full">View Templates</Button>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Education Hub</h3>
              <p className="text-muted-foreground mb-6">
                Step-by-step guides, video tutorials, and case studies covering all creative financing strategies.
              </p>
              <Button variant="outline" className="w-full">Start Learning</Button>
            </Card>

            <Card className="professional-card p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Success Stories</h3>
              <p className="text-muted-foreground mb-6">
                Real deals, real results from community members who've implemented these strategies.
              </p>
              <Button variant="outline" className="w-full">Read Stories</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Transform Real Estate?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join a community that's proving creative financing isn't a loophole—it's a well-founded solution to today's housing challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="cta-button text-lg px-8 py-4">
              Join HUD203 Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="outline-button text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema())
        }}
      />
    </main>
  )
}
