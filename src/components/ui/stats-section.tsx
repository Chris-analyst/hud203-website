"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus, Users, Target, DollarSign, BarChart3, MapPin } from "lucide-react"
import { Statistic } from "@/lib/trust-signals"

interface StatsSectionProps {
  statistics: Statistic[]
  title?: string
  description?: string
  variant?: 'default' | 'hero' | 'compact'
}

const iconMap = {
  Users,
  TrendingUp,
  DollarSign,
  BarChart3,
  Target,
  MapPin
}

export function StatsSection({
  statistics,
  title,
  description,
  variant = 'default'
}: StatsSectionProps) {
  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-emerald-500" />
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />
      case 'stable':
        return <Minus className="h-4 w-4 text-gray-500" />
      default:
        return null
    }
  }

  const getTrendColor = (trend?: string) => {
    switch (trend) {
      case 'up':
        return 'text-emerald-600'
      case 'down':
        return 'text-red-600'
      case 'stable':
        return 'text-gray-600'
      default:
        return 'text-gray-600'
    }
  }

  if (variant === 'hero') {
    return (
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {(title || description) && (
            <div className="text-center mb-12">
              {title && (
                <h2 className="text-3xl sm:text-4xl font-bold text-emerald-800 mb-4">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
                  {description}
                </p>
              )}
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {statistics.map((stat) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || Users

              return (
                <div key={stat.id} className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-emerald-800 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-emerald-700 mb-1">
                    {stat.label}
                  </div>
                  {stat.trend && stat.trendValue && (
                    <div className="flex items-center justify-center space-x-1">
                      {getTrendIcon(stat.trend)}
                      <span className={`text-xs ${getTrendColor(stat.trend)}`}>
                        {stat.trendValue}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statistics.map((stat) => (
          <div key={stat.id} className="text-center p-4 bg-white rounded-lg border">
            <div className="text-2xl font-bold text-emerald-800 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-emerald-600">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statistics.map((stat) => {
        const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || Users

        return (
          <Card key={stat.id} className="trust-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-emerald-600" />
                </div>
                {stat.trend && stat.trendValue && (
                  <div className="flex items-center space-x-1">
                    {getTrendIcon(stat.trend)}
                    <span className={`text-sm font-medium ${getTrendColor(stat.trend)}`}>
                      {stat.trendValue}
                    </span>
                  </div>
                )}
              </div>

              <div className="text-3xl font-bold text-emerald-800 mb-2">
                {stat.value}
              </div>

              <div className="text-lg font-semibold text-emerald-700 mb-2">
                {stat.label}
              </div>

              {stat.description && (
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              )}
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}