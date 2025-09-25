import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  TrendingUp,
  TrendingDown,
  BarChart3,
  DollarSign,
  ArrowRight,
  Eye,
  MessageSquare,
  BookOpen,
  Filter
} from "lucide-react"
import { generateSEO } from "@/lib/seo"
import { Metadata } from "next"
import Link from "next/link"

export function generateMetadata(): Metadata {
  return generateSEO({
    title: "Real Estate Market Insights Blog - HUD203",
    description: "Latest market trends, days on market data, price analysis, and creative financing insights for Florida, Georgia, Alabama, Texas, Tennessee, Carolinas, Oklahoma, Missouri, and Louisiana.",
    path: "/blog",
    keywords: ["real estate blog", "market trends", "days on market", "price analysis", "creative financing news"],
    type: "website"
  })
}

// Mock blog data - in a real app this would come from a CMS or database
const featuredPosts = [
  {
    id: 1,
    title: "Florida's Insurance Crisis Creates Unprecedented Seller Financing Opportunities",
    slug: "florida-insurance-crisis-seller-financing",
    excerpt: "Rising homeowner's insurance costs are driving Florida sellers to consider creative financing options. Here's how to capitalize on this market shift.",
    content: "Full article content...",
    author: "HUD203 Team",
    publishDate: "2024-09-20",
    readTime: "6 min read",
    category: "Market Analysis",
    tags: ["Florida", "Insurance", "Seller Financing"],
    image: "/blog/florida-insurance.jpg",
    views: 1247,
    featured: true
  },
  {
    id: 2,
    title: "Days on Market Hit 18-Month High Across Target States",
    slug: "days-on-market-18-month-high",
    excerpt: "Properties are sitting longer than they have since early 2023. We analyze what this means for creative financing opportunities.",
    content: "Full article content...",
    author: "Market Research Team",
    publishDate: "2024-09-18",
    readTime: "8 min read",
    category: "Market Trends",
    tags: ["Days on Market", "Market Analysis", "Statistics"],
    image: "/blog/days-on-market.jpg",
    views: 2156,
    featured: true
  },
  {
    id: 3,
    title: "Interest Rate Impact: Why 2024 is the Year of Creative Financing",
    slug: "interest-rate-impact-2024-creative-financing",
    excerpt: "With rates 143% higher than 2022, traditional financing is failing. Here's why creative solutions are becoming mainstream.",
    content: "Full article content...",
    author: "Financial Analysis Team",
    publishDate: "2024-09-15",
    readTime: "10 min read",
    category: "Interest Rates",
    tags: ["Interest Rates", "Creative Financing", "Market Analysis"],
    image: "/blog/interest-rates.jpg",
    views: 3421,
    featured: true
  }
]

const recentPosts = [
  {
    id: 4,
    title: "Texas Market Update: Dallas-Fort Worth Price Corrections Accelerate",
    slug: "texas-dfw-price-corrections",
    excerpt: "DFW market showing significant price adjustments as inventory climbs 22% year-over-year.",
    author: "Regional Team",
    publishDate: "2024-09-17",
    readTime: "5 min read",
    category: "Regional Analysis",
    tags: ["Texas", "Price Corrections", "DFW"],
    views: 892
  },
  {
    id: 5,
    title: "The Real Cost of Property Management vs DIY: 2024 Analysis",
    slug: "property-management-vs-diy-2024",
    excerpt: "Comprehensive breakdown of professional property management costs versus self-management across our target markets.",
    author: "Investment Team",
    publishDate: "2024-09-14",
    readTime: "12 min read",
    category: "Investment Strategy",
    tags: ["Property Management", "ROI", "Investment"],
    views: 1654
  },
  {
    id: 6,
    title: "Georgia's Growing Inventory: Opportunity for Investors",
    slug: "georgia-growing-inventory-opportunity",
    excerpt: "Atlanta metro inventory up 15.3% creates motivated seller situations perfect for creative deals.",
    author: "Georgia Team",
    publishDate: "2024-09-12",
    readTime: "7 min read",
    category: "Regional Analysis",
    tags: ["Georgia", "Atlanta", "Inventory", "Investment"],
    views: 743
  },
  {
    id: 7,
    title: "Seller Financing Tax Advantages: Maximizing Generational Wealth",
    slug: "seller-financing-tax-advantages-wealth",
    excerpt: "How installment sales through seller financing can reduce tax burden while creating steady income streams.",
    author: "Tax Strategy Team",
    publishDate: "2024-09-10",
    readTime: "9 min read",
    category: "Tax Strategy",
    tags: ["Seller Financing", "Taxes", "Wealth Building"],
    views: 2087
  },
  {
    id: 8,
    title: "Alabama Market Deep Dive: Extended Days on Market Signal Opportunity",
    slug: "alabama-extended-days-on-market",
    excerpt: "Alabama's 52-day average time on market creates ideal conditions for Subject-To and wrap mortgage deals.",
    author: "Regional Team",
    publishDate: "2024-09-08",
    readTime: "6 min read",
    category: "Regional Analysis",
    tags: ["Alabama", "Days on Market", "Subject-To"],
    views: 567
  },
  {
    id: 9,
    title: "The Hidden Costs of Vacant Properties: A Complete Analysis",
    slug: "hidden-costs-vacant-properties-analysis",
    excerpt: "Beyond lost rental income - insurance, security, maintenance, and opportunity costs of keeping properties empty.",
    author: "Risk Management Team",
    publishDate: "2024-09-05",
    readTime: "8 min read",
    category: "Risk Management",
    tags: ["Vacant Properties", "Risk", "Costs"],
    views: 1299
  }
]

const categories = [
  "All Posts",
  "Market Analysis",
  "Market Trends",
  "Regional Analysis",
  "Interest Rates",
  "Investment Strategy",
  "Tax Strategy",
  "Risk Management",
  "Creative Financing"
]

export default function BlogPage() {
  return (
    <main className="min-h-screen py-12">
      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Market Insights & Analysis
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
            Stay informed with the latest real estate market trends, days on market data, and creative financing
            insights across Florida, Georgia, Alabama, Texas, Tennessee, Carolinas, Oklahoma, Missouri, and Louisiana.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-background border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Categories:</span>
            </div>
            <div className="flex gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Insights
            </h2>
            <p className="text-lg text-muted-foreground">
              Our most important analysis on current market conditions and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Post */}
            <div className="lg:col-span-2">
              <Card className="professional-card overflow-hidden group cursor-pointer h-full">
                <div className="aspect-[16/9] bg-primary/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-3">
                      {featuredPosts[0].category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {featuredPosts[0].title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {featuredPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredPosts[0].publishDate).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredPosts[0].readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {featuredPosts[0].views.toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPosts[0].slug}`}>
                    <Button className="w-full group-hover:bg-primary/90 transition-colors">
                      Read Full Analysis
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {/* Secondary Featured Posts */}
            <div className="space-y-6">
              {featuredPosts.slice(1).map((post) => (
                <Card key={post.id} className="professional-card p-6 group cursor-pointer">
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.publishDate).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views.toLocaleString()}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 section-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest Market Updates
            </h2>
            <p className="text-lg text-muted-foreground">
              Recent analysis and insights from our market research team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <Card key={post.id} className="professional-card p-6 group cursor-pointer h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-muted/20 text-xs text-muted-foreground rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.publishDate).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read Article
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Data Summary */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Current Market Snapshot
            </h2>
            <p className="text-lg text-muted-foreground">
              Key metrics across our target markets as of {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">47</div>
              <div className="text-sm text-muted-foreground mb-2">Avg Days on Market</div>
              <div className="text-xs text-accent">+12 vs last year</div>
            </Card>

            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-6 w-6 text-destructive" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">-2.4%</div>
              <div className="text-sm text-muted-foreground mb-2">Avg Price Change</div>
              <div className="text-xs text-destructive">Year over year</div>
            </Card>

            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">+15%</div>
              <div className="text-sm text-muted-foreground mb-2">Inventory Growth</div>
              <div className="text-xs text-accent">More opportunities</div>
            </Card>

            <Card className="professional-card p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">7.8%</div>
              <div className="text-sm text-muted-foreground mb-2">Current Mortgage Rate</div>
              <div className="text-xs text-destructive">vs 3.2% in 2022</div>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/market-analysis">
              <Button className="cta-button text-lg px-8 py-4">
                View Full Market Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Stay Ahead of Market Trends
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get weekly market insights, days on market updates, and creative financing opportunities
            delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button className="cta-button px-6 py-3">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Free • No spam • Unsubscribe anytime
          </p>
        </div>
      </section>
    </main>
  )
}