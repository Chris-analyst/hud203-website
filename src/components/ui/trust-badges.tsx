"use client"

import { Shield, Lock, CheckCircle, Award, Star } from "lucide-react"

interface TrustBadge {
  id: string
  name: string
  icon?: string
  description: string
}

interface TrustBadgesProps {
  badges?: TrustBadge[]
  variant?: 'default' | 'inline' | 'minimal'
  showDescriptions?: boolean
}

const defaultBadges: TrustBadge[] = [
  {
    id: 'bbb-accredited',
    name: 'BBB Accredited Business',
    description: 'A+ Rating with Better Business Bureau'
  },
  {
    id: 'ssl-secured',
    name: 'SSL Secured',
    description: 'Your information is protected with 256-bit encryption'
  },
  {
    id: 'satisfaction-guarantee',
    name: '90-Day Money Back Guarantee',
    description: 'Full refund if you\'re not completely satisfied'
  },
  {
    id: 'legal-compliant',
    name: 'Legal Compliance Verified',
    description: 'All strategies are legally compliant and ethical'
  }
]

const iconMap = {
  'bbb-accredited': Award,
  'ssl-secured': Lock,
  'satisfaction-guarantee': Star,
  'legal-compliant': Shield,
  'default': CheckCircle
}

export function TrustBadges({
  badges = defaultBadges,
  variant = 'default',
  showDescriptions = true
}: TrustBadgesProps) {
  if (variant === 'minimal') {
    return (
      <div className="flex items-center justify-center space-x-6 opacity-60">
        {badges.map((badge) => {
          const IconComponent = iconMap[badge.id as keyof typeof iconMap] || iconMap.default
          return (
            <div key={badge.id} className="flex items-center space-x-2">
              <IconComponent className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-emerald-700">{badge.name}</span>
            </div>
          )
        })}
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 py-4">
        {badges.map((badge) => {
          const IconComponent = iconMap[badge.id as keyof typeof iconMap] || iconMap.default
          return (
            <div
              key={badge.id}
              className="flex items-center space-x-2 px-3 py-2 bg-emerald-50 rounded-lg border border-emerald-200"
            >
              <IconComponent className="h-5 w-5 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-800">{badge.name}</span>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {badges.map((badge) => {
        const IconComponent = iconMap[badge.id as keyof typeof iconMap] || iconMap.default

        return (
          <div
            key={badge.id}
            className="flex items-start space-x-3 p-4 bg-white rounded-lg border border-emerald-200 hover:border-emerald-300 transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                <IconComponent className="h-5 w-5 text-emerald-600" />
              </div>
            </div>
            <div>
              <h4 className="font-medium text-emerald-800 mb-1">{badge.name}</h4>
              {showDescriptions && (
                <p className="text-sm text-emerald-600">{badge.description}</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Security-focused trust badges for lead capture forms
export function SecurityBadges() {
  const securityBadges = [
    {
      id: 'ssl-encrypted',
      name: '256-bit SSL Encrypted',
      description: 'Your data is secure'
    },
    {
      id: 'privacy-protected',
      name: 'Privacy Protected',
      description: 'We never share your information'
    },
    {
      id: 'spam-free',
      name: 'No Spam Promise',
      description: 'Unsubscribe anytime'
    }
  ]

  return (
    <div className="flex items-center justify-center space-x-4 py-2 opacity-75">
      {securityBadges.map((badge) => (
        <div key={badge.id} className="flex items-center space-x-1">
          <Lock className="h-3 w-3 text-emerald-600" />
          <span className="text-xs text-emerald-700">{badge.name}</span>
        </div>
      ))}
    </div>
  )
}

// Money-back guarantee badge
export function GuaranteeBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-emerald-100 rounded-full ${className}`}>
      <Star className="h-5 w-5 text-emerald-600 fill-emerald-600" />
      <span className="text-sm font-semibold text-emerald-800">90-Day Money Back Guarantee</span>
    </div>
  )
}