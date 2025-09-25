import Link from "next/link"
import { ChevronLeft, Clock, Share2, BookOpen, AlertTriangle, CheckCircle } from "lucide-react"

export default function SubjectToArticle() {
  return (
    <div className="min-h-screen bg-white">
      {/* Article Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/education"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Education Hub
            </Link>
          </div>

          <div className="mb-6">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Financing Strategy
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            What is Subject-To?
          </h1>

          <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                8 min read
              </div>
              <span>Published March 15, 2024</span>
            </div>
            <button className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </button>
          </div>

          <p className="text-xl text-gray-600 leading-relaxed">
            Learn the fundamentals of subject-to investing - how to acquire properties by taking over existing mortgage payments without formally assuming the loan. This strategy can unlock deals in challenging markets.
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Important Legal Notice</h3>
                  <p className="text-blue-800 text-sm">
                    Subject-to transactions involve legal complexities and risks. Always consult with qualified real estate attorneys and ensure full disclosure to all parties. This article is for educational purposes only and does not constitute legal advice.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Understanding Subject-To Deals</h2>

            <p className="text-gray-700 mb-6">
              A "subject-to" deal occurs when a buyer acquires a property by taking over the existing mortgage payments without formally assuming the loan or getting their name on the mortgage. The original borrower remains on the loan, but the new owner controls the property and makes the payments.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h3>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <ol className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <strong>Property Owner Needs to Sell:</strong> They may be facing foreclosure, job loss, or need to relocate quickly.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <strong>Investor Steps In:</strong> The investor agrees to take over mortgage payments and assumes control of the property.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <strong>Deed Transfer:</strong> The seller deeds the property to the buyer, but the original mortgage stays in the seller's name.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</div>
                  <div>
                    <strong>Investor Controls Property:</strong> The new owner can rent, renovate, or eventually sell the property while making the mortgage payments.
                  </div>
                </li>
              </ol>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">When Subject-To Makes Sense</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="professional-card">
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                    For Sellers
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Facing foreclosure</li>
                    <li>• Need to relocate quickly</li>
                    <li>• Negative equity situation</li>
                    <li>• Can't afford payments</li>
                    <li>• Want to preserve credit</li>
                  </ul>
                </div>
              </div>

              <div className="professional-card">
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                    For Buyers
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Low or no money down</li>
                    <li>• Bypass traditional lending</li>
                    <li>• Assume lower interest rates</li>
                    <li>• Quick acquisition process</li>
                    <li>• Build portfolio faster</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Risks and Considerations</h3>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-amber-900 mb-3">Due-on-Sale Clause</h4>
              <p className="text-amber-800">
                Most mortgages contain a due-on-sale clause that technically allows the lender to call the loan due upon transfer. While rarely enforced if payments are current, this remains a legal risk that must be understood and disclosed.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Legal Requirements</h3>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Full Disclosure:</strong> All parties must understand the risks and legal implications</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Proper Documentation:</strong> Written agreements outlining all terms and responsibilities</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Insurance Coverage:</strong> Ensure proper insurance and liability protection</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700"><strong>Exit Strategy:</strong> Plan for refinancing or selling within reasonable timeframe</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Practices</h3>

            <p className="text-gray-700 mb-4">
              Subject-to deals can be powerful tools when used ethically and transparently:
            </p>

            <ol className="space-y-3 mb-8">
              <li className="text-gray-700"><strong>1. Work with experienced attorneys</strong> who understand creative financing</li>
              <li className="text-gray-700"><strong>2. Ensure all parties benefit</strong> from the transaction</li>
              <li className="text-gray-700"><strong>3. Maintain current payments</strong> to protect everyone's interests</li>
              <li className="text-gray-700"><strong>4. Have clear exit strategies</strong> and timelines</li>
              <li className="text-gray-700"><strong>5. Consider title insurance</strong> and other protections</li>
            </ol>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-blue-900 mb-3">Real-World Example</h4>
              <p className="text-blue-800 mb-4">
                Sarah owns a home worth $200,000 with a $180,000 mortgage at 3.5% interest. She needs to relocate for work but can't afford both a new home and the current mortgage.
              </p>
              <p className="text-blue-800">
                Investor Mike agrees to take the property subject-to the existing mortgage. Sarah deeds the property to Mike, who takes over the $1,200 monthly payment. Mike rents the property for $1,600/month, creating positive cash flow while helping Sarah avoid foreclosure.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Continue Learning</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/education/seller-financing" className="professional-card group hover:shadow-md transition-all">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  What is Seller Financing?
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn how owner-carry financing creates win-win scenarios for buyers and sellers.
                </p>
              </div>
            </Link>

            <Link href="/education/strategy-guide" className="professional-card group hover:shadow-md transition-all">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  When to Use Each Tool
                </h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive guide to choosing the right creative financing method.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-blue-600 rounded-2xl text-white p-8">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Explore Creative Financing?
            </h2>
            <p className="text-blue-100 mb-6">
              Join our community of investors who are successfully using ethical creative financing strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/community"
                className="bg-white text-blue-600 hover:bg-gray-50 font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Join Community
              </Link>
              <Link
                href="/success-stories"
                className="border border-blue-400 text-white hover:bg-blue-700 font-semibold px-6 py-3 rounded-md transition-colors inline-flex items-center justify-center"
              >
                See Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}