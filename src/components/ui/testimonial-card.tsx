"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle, DollarSign, Clock } from "lucide-react"
import { Testimonial } from "@/lib/trust-signals"

interface TestimonialCardProps {
  testimonial: Testimonial
  variant?: 'default' | 'featured' | 'compact'
  showMetrics?: boolean
}

export function TestimonialCard({
  testimonial,
  variant = 'default',
  showMetrics = true
}: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ))
  }

  if (variant === 'compact') {
    return (
      <Card className="trust-card">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-emerald-700">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <p className="text-sm font-medium text-emerald-800">
                  {testimonial.name}
                </p>
                {testimonial.verified && (
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                )}
              </div>
              <div className="flex items-center mb-2">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">
                "{testimonial.content}"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  const isFeatured = variant === 'featured'

  return (
    <Card className={`trust-card h-full ${isFeatured ? 'ring-2 ring-emerald-500' : ''}`}>
      <CardContent className="p-6 h-full flex flex-col">
        {isFeatured && (
          <div className="mb-4">
            <Badge className="bg-emerald-500 text-white">
              Success Story
            </Badge>
          </div>
        )}

        <div className="flex items-center space-x-2 mb-4">
          {renderStars(testimonial.rating)}
          {testimonial.verified && (
            <div className="flex items-center space-x-1">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <span className="text-xs text-emerald-600">Verified</span>
            </div>
          )}
        </div>

        <blockquote className="text-gray-700 mb-4 flex-grow">
          "{testimonial.content}"
        </blockquote>

        <div className="space-y-3">
          {showMetrics && (testimonial.profitAmount || testimonial.timeFrame) && (
            <div className="flex items-center space-x-4 p-3 bg-emerald-50 rounded-lg">
              {testimonial.profitAmount && (
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-emerald-600" />
                  <div>
                    <div className="text-sm font-semibold text-emerald-800">
                      {testimonial.profitAmount}
                    </div>
                    <div className="text-xs text-emerald-600">Profit</div>
                  </div>
                </div>
              )}
              {testimonial.timeFrame && (
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <div>
                    <div className="text-sm font-semibold text-emerald-800">
                      {testimonial.timeFrame}
                    </div>
                    <div className="text-xs text-emerald-600">Timeframe</div>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-emerald-800">{testimonial.name}</p>
              {testimonial.title && (
                <p className="text-sm text-gray-600">{testimonial.title}</p>
              )}
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
            {testimonial.dealType && (
              <Badge variant="outline" className="text-xs">
                {testimonial.dealType}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}