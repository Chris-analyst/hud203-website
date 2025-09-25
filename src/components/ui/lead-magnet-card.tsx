"use client"

import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Calculator, CheckSquare, FileSpreadsheet, BarChart3 } from "lucide-react"
import { LeadMagnet } from "@/lib/lead-magnets"
import { LeadCaptureModal } from "./lead-capture-modal"

interface LeadMagnetCardProps {
  leadMagnet: LeadMagnet
  variant?: 'default' | 'featured' | 'compact'
  showBenefits?: boolean
}

const categoryIcons = {
  guide: FileText,
  checklist: CheckSquare,
  calculator: Calculator,
  template: FileSpreadsheet,
  report: BarChart3
}

const categoryColors = {
  guide: 'bg-emerald-100 text-emerald-800',
  checklist: 'bg-blue-100 text-blue-800',
  calculator: 'bg-purple-100 text-purple-800',
  template: 'bg-orange-100 text-orange-800',
  report: 'bg-red-100 text-red-800'
}

export function LeadMagnetCard({
  leadMagnet,
  variant = 'default',
  showBenefits = true
}: LeadMagnetCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const IconComponent = categoryIcons[leadMagnet.category]

  const handleDownloadClick = () => {
    setIsModalOpen(true)
  }

  if (variant === 'compact') {
    return (
      <>
        <Card className="trust-card hover:shadow-md transition-all duration-300">
          <CardContent className="p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${categoryColors[leadMagnet.category]}`}>
                  <IconComponent className="h-5 w-5" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-emerald-800 mb-1 line-clamp-2">
                  {leadMagnet.title}
                </h4>
                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {leadMagnet.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{leadMagnet.fileSize}</span>
                    {leadMagnet.pages && (
                      <span className="text-xs text-gray-500">• {leadMagnet.pages} pages</span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleDownloadClick}
                    className="text-xs"
                  >
                    <Download className="h-3 w-3 mr-1" />
                    Get Free
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <LeadCaptureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          leadMagnet={leadMagnet}
        />
      </>
    )
  }

  const isFeatured = variant === 'featured'

  return (
    <>
      <Card className={`trust-card hover:shadow-lg transition-all duration-300 ${isFeatured ? 'ring-2 ring-emerald-500' : ''}`}>
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between mb-2">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${categoryColors[leadMagnet.category]}`}>
              <IconComponent className="h-6 w-6" />
            </div>
            {isFeatured && (
              <Badge className="bg-emerald-500 text-white">
                Most Popular
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl text-emerald-800 leading-tight">
            {leadMagnet.title}
          </CardTitle>
          <p className="text-gray-600 text-sm">
            {leadMagnet.description}
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span>{leadMagnet.fileSize}</span>
            {leadMagnet.pages && (
              <span>• {leadMagnet.pages} pages</span>
            )}
            <Badge variant="outline" className="text-xs">
              {leadMagnet.category}
            </Badge>
          </div>

          {showBenefits && leadMagnet.benefits && (
            <div>
              <h4 className="font-medium text-emerald-800 mb-2 text-sm">What you'll get:</h4>
              <ul className="space-y-1">
                {leadMagnet.benefits.slice(0, 3).map((benefit, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <CheckSquare className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>

        <CardFooter>
          <Button
            onClick={handleDownloadClick}
            className="w-full"
            variant={isFeatured ? "cta" : "outline-forest"}
            size="lg"
          >
            <Download className="h-4 w-4 mr-2" />
            {leadMagnet.ctaText}
          </Button>
        </CardFooter>
      </Card>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        leadMagnet={leadMagnet}
      />
    </>
  )
}