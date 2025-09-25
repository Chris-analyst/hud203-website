export interface LeadMagnet {
  id: string
  title: string
  description: string
  category: 'guide' | 'checklist' | 'calculator' | 'template' | 'report'
  downloadUrl: string
  thumbnailUrl?: string
  fileSize: string
  pages?: number
  ctaText: string
  benefits: string[]
  targetAudience: string[]
  keywords: string[]
}

export const leadMagnets: LeadMagnet[] = [
  {
    id: 'subject-to-complete-guide',
    title: 'Complete Subject-To Real Estate Guide',
    description: 'Master the art of subject-to investing with this comprehensive 47-page guide covering legal structures, contracts, and step-by-step processes.',
    category: 'guide',
    downloadUrl: '/downloads/subject-to-complete-guide.pdf',
    thumbnailUrl: '/images/lead-magnets/subject-to-guide-thumb.jpg',
    fileSize: '2.8 MB',
    pages: 47,
    ctaText: 'Download Free Guide',
    benefits: [
      'Learn legal subject-to structures and protections',
      'Master due diligence and property analysis',
      'Get proven contract templates and forms',
      'Understand seller motivation and negotiation',
      'Discover exit strategies and profit maximization'
    ],
    targetAudience: ['new investors', 'wholesalers', 'creative financing enthusiasts'],
    keywords: ['subject to investing', 'creative financing guide', 'real estate contracts', 'subject to deals']
  },
  {
    id: 'seller-financing-checklist',
    title: 'Seller Financing Deal Checklist',
    description: 'Never miss a critical step with this comprehensive checklist for structuring and closing seller financing deals.',
    category: 'checklist',
    downloadUrl: '/downloads/seller-financing-checklist.pdf',
    thumbnailUrl: '/images/lead-magnets/seller-financing-checklist-thumb.jpg',
    fileSize: '850 KB',
    pages: 8,
    ctaText: 'Get Free Checklist',
    benefits: [
      'Ensure legal compliance in every deal',
      'Streamline your deal analysis process',
      'Avoid costly mistakes and oversights',
      'Accelerate deal closing timelines',
      'Build seller confidence and trust'
    ],
    targetAudience: ['experienced investors', 'real estate agents', 'deal makers'],
    keywords: ['seller financing checklist', 'owner financing', 'creative real estate', 'deal closing']
  },
  {
    id: 'creative-financing-calculator',
    title: 'Creative Financing Deal Calculator',
    description: 'Excel calculator that instantly analyzes subject-to, seller financing, and wrap mortgage deals with built-in profit projections.',
    category: 'calculator',
    downloadUrl: '/downloads/creative-financing-calculator.xlsx',
    thumbnailUrl: '/images/lead-magnets/calculator-thumb.jpg',
    fileSize: '145 KB',
    ctaText: 'Download Calculator',
    benefits: [
      'Instant deal profitability analysis',
      'Compare multiple financing scenarios',
      'Built-in cash flow projections',
      'Risk assessment calculations',
      'Professional presentation ready'
    ],
    targetAudience: ['deal analyzers', 'investors', 'wholesalers', 'real estate professionals'],
    keywords: ['real estate calculator', 'deal analysis', 'creative financing calculator', 'investment analysis']
  },
  {
    id: 'wrap-mortgage-contracts',
    title: 'Wrap Mortgage Contract Templates',
    description: 'Attorney-reviewed contract templates for All-Inclusive Trust Deeds (AITD) and wrap-around mortgage transactions.',
    category: 'template',
    downloadUrl: '/downloads/wrap-mortgage-contracts.zip',
    thumbnailUrl: '/images/lead-magnets/contracts-thumb.jpg',
    fileSize: '1.2 MB',
    ctaText: 'Get Contract Pack',
    benefits: [
      'Attorney-reviewed legal documents',
      'State-specific compliance variations',
      'Step-by-step completion guides',
      'Risk mitigation clauses included',
      'Save thousands in legal fees'
    ],
    targetAudience: ['advanced investors', 'deal makers', 'real estate attorneys'],
    keywords: ['wrap mortgage contracts', 'AITD templates', 'real estate contracts', 'wrap around mortgage']
  },
  {
    id: 'assumable-loans-report',
    title: 'VA & FHA Assumable Loans Market Report 2024',
    description: 'Comprehensive analysis of current assumable loan opportunities, interest rate spreads, and profitable strategies.',
    category: 'report',
    downloadUrl: '/downloads/assumable-loans-report-2024.pdf',
    thumbnailUrl: '/images/lead-magnets/market-report-thumb.jpg',
    fileSize: '3.1 MB',
    pages: 28,
    ctaText: 'Get Market Report',
    benefits: [
      'Current market opportunities analysis',
      'Interest rate arbitrage strategies',
      'VA and FHA assumption processes',
      'Profit potential calculations',
      'Regional market insights'
    ],
    targetAudience: ['market analysts', 'investors', 'real estate professionals'],
    keywords: ['assumable loans', 'VA loans', 'FHA loans', 'market report', 'interest rates']
  },
  {
    id: 'beginner-creative-financing',
    title: 'Beginner\'s Guide to Creative Real Estate Financing',
    description: 'Perfect introduction to creative financing strategies with real-world examples and case studies.',
    category: 'guide',
    downloadUrl: '/downloads/beginner-creative-financing-guide.pdf',
    thumbnailUrl: '/images/lead-magnets/beginner-guide-thumb.jpg',
    fileSize: '1.9 MB',
    pages: 32,
    ctaText: 'Start Learning Today',
    benefits: [
      'Understand all major strategies',
      'Real-world case studies included',
      'Risk assessment frameworks',
      'Step-by-step action plans',
      'Resource and tools directory'
    ],
    targetAudience: ['beginners', 'new investors', 'students', 'career changers'],
    keywords: ['creative financing basics', 'real estate investing guide', 'beginner real estate', 'alternative financing']
  }
]

export function getLeadMagnetsByCategory(category: LeadMagnet['category']): LeadMagnet[] {
  return leadMagnets.filter(magnet => magnet.category === category)
}

export function getLeadMagnetById(id: string): LeadMagnet | undefined {
  return leadMagnets.find(magnet => magnet.id === id)
}

export function getFeaturedLeadMagnets(): LeadMagnet[] {
  return leadMagnets.slice(0, 3) // Return top 3 as featured
}

export function getLeadMagnetsForAudience(audience: string): LeadMagnet[] {
  return leadMagnets.filter(magnet =>
    magnet.targetAudience.some(target =>
      target.toLowerCase().includes(audience.toLowerCase())
    )
  )
}