import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, AlertTriangle, CheckCircle, BookOpen, DollarSign } from "lucide-react"
import { generateSEO, generateArticleSchema } from "@/lib/seo"
import { pageTemplates } from "@/lib/seo-keywords"
import { Metadata } from "next"
import Link from "next/link"

export function generateMetadata(): Metadata {
  return generateSEO({
    title: pageTemplates.subjectToGuide.title,
    description: pageTemplates.subjectToGuide.description,
    path: "/guides/subject-to",
    keywords: pageTemplates.subjectToGuide.keywords,
    type: "article",
    author: "HUD203 Team",
    category: "Creative Financing"
  })
}

export default function SubjectToGuidePage() {
  const benefits = [
    {
      title: "Lower Cash Requirements",
      description: "Acquire properties with minimal down payment by taking over existing financing"
    },
    {
      title: "Faster Transactions",
      description: "No loan approval process means deals can close in days, not months"
    },
    {
      title: "Access to Better Rates",
      description: "Benefit from the seller's existing low-interest rate mortgage"
    },
    {
      title: "Market Flexibility",
      description: "Works in any market condition, especially when rates are high"
    }
  ]

  const risks = [
    {
      title: "Due-on-Sale Clause",
      description: "Lender can demand full payment if they discover the transfer",
      mitigation: "Maintain insurance and payments, avoid obvious ownership changes"
    },
    {
      title: "Seller Liability",
      description: "Original borrower remains liable for the mortgage debt",
      mitigation: "Clear communication, proper documentation, exit strategies"
    },
    {
      title: "Property Condition",
      description: "Inheriting unknown issues with the property",
      mitigation: "Thorough inspection, title search, and due diligence"
    }
  ]

  const steps = [
    {
      step: 1,
      title: "Find Motivated Sellers",
      description: "Target homeowners facing foreclosure, job loss, or need to relocate quickly",
      details: [
        "Pre-foreclosure lists",
        "Expired listings",
        "FSBO properties",
        "Direct mail campaigns"
      ]
    },
    {
      step: 2,
      title: "Analyze the Deal",
      description: "Evaluate the property value, mortgage balance, and monthly payments",
      details: [
        "Property valuation (ARV)",
        "Mortgage balance verification",
        "Monthly payment analysis",
        "Exit strategy planning"
      ]
    },
    {
      step: 3,
      title: "Structure the Agreement",
      description: "Create legal documentation protecting both parties' interests",
      details: [
        "Purchase agreement",
        "Authorization to pay",
        "Property management agreement",
        "Disclosure statements"
      ]
    },
    {
      step: 4,
      title: "Due Diligence",
      description: "Verify all information and ensure clear title transfer",
      details: [
        "Title search and insurance",
        "Property inspection",
        "Loan verification",
        "Insurance transfer"
      ]
    },
    {
      step: 5,
      title: "Close and Manage",
      description: "Complete the transaction and manage ongoing responsibilities",
      details: [
        "Closing documentation",
        "Payment setup",
        "Insurance maintenance",
        "Regular monitoring"
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
            <span>Subject-To Guide</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            {pageTemplates.subjectToGuide.h1}
          </h1>

          <p className="text-xl text-primary/90 leading-relaxed mb-8">
            Subject-to real estate investing allows you to acquire properties by taking over the seller's existing
            mortgage payments without formally assuming the loan. This comprehensive guide covers everything you need
            to know to get started safely and profitably.
          </p>

          <div className="flex items-center gap-6 text-sm text-primary/80">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>15 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Intermediate Level</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              <span>High ROI Potential</span>
            </div>
          </div>
        </div>

        {/* What is Subject-To */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">What is Subject-To Real Estate?</h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-primary/90 leading-relaxed mb-6">
              Subject-to real estate investing is a creative financing strategy where an investor purchases a property
              &ldquo;subject to&rdquo; the existing mortgage. The buyer takes over the mortgage payments but doesn&apos;t formally
              assume the loan - meaning the original borrower remains legally responsible for the debt.
            </p>

            <p className="text-primary/90 leading-relaxed mb-6">
              This strategy became popular as a solution to high interest rates and tight lending conditions. When
              sellers have low-rate mortgages they can&apos;t transfer, and buyers can&apos;t qualify for new loans,
              subject-to deals create a win-win scenario.
            </p>
          </div>

          <Card className="bg-accent/10 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Important Legal Note</h3>
                  <p className="text-sm text-primary/90">
                    Subject-to investing involves legal and financial risks. Always consult with qualified
                    attorneys and financial advisors before proceeding with any subject-to transaction.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Benefits of Subject-To Investing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-card border border-border rounded-lg shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-primary/90">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Risks and Mitigation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Risks and How to Mitigate Them</h2>

          <div className="space-y-6">
            {risks.map((risk, index) => (
              <Card key={index} className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    {risk.title}
                  </CardTitle>
                  <p className="text-primary/90">{risk.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Mitigation Strategy
                    </h4>
                    <p className="text-sm text-primary/90">{risk.mitigation}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Step-by-Step Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-primary mb-8">Step-by-Step Process</h2>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.step} className="flex gap-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-lg">{step.step}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-primary mb-3">{step.title}</h3>
                  <p className="text-primary/90 mb-4 leading-relaxed">{step.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-primary/80">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-gradient-to-br from-background via-secondary/20 to-accent/10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Ready to Start Subject-To Investing?
          </h2>
          <p className="text-lg text-primary/90 mb-8 max-w-2xl mx-auto">
            Join our community of successful investors who are using creative financing
            strategies to build wealth in any market condition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Join HUD203 Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="gold" size="xl">
              Get Expert Consultation
            </Button>
          </div>
        </section>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateArticleSchema(
              pageTemplates.subjectToGuide.title,
              pageTemplates.subjectToGuide.description,
              "https://hud203.com/guides/subject-to",
              new Date().toISOString(),
              undefined,
              "https://hud203.com/images/subject-to-guide.jpg"
            ))
          }}
        />
      </div>
    </div>
  )
}