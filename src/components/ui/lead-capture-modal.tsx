"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Download, CheckCircle, X } from "lucide-react"
import { LeadMagnet } from "@/lib/lead-magnets"

interface LeadCaptureModalProps {
  isOpen: boolean
  onClose: () => void
  leadMagnet: LeadMagnet
}

export function LeadCaptureModal({ isOpen, onClose, leadMagnet }: LeadCaptureModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    experience: '',
    consent: false,
    marketingConsent: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.consent) {
      alert('Please agree to the Terms of Service and Privacy Policy')
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to lead capture API
      const response = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          leadMagnetId: leadMagnet.id,
          leadMagnetTitle: leadMagnet.title,
          source: 'lead-magnet-download'
        })
      })

      if (response.ok) {
        setIsSuccess(true)
        // Trigger download after successful submission
        setTimeout(() => {
          window.open(leadMagnet.downloadUrl, '_blank')
        }, 1000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Lead capture error:', error)
      alert('There was an error processing your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  if (isSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6 text-emerald-500" />
              <DialogTitle className="text-emerald-800">Download Starting!</DialogTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              Your download should begin automatically. If it doesn't start, click the button below.
            </p>
            <Button
              onClick={() => window.open(leadMagnet.downloadUrl, '_blank')}
              className="w-full"
              variant="cta"
            >
              <Download className="h-4 w-4 mr-2" />
              Download {leadMagnet.title}
            </Button>
            <div className="text-sm text-gray-500 text-center">
              <p>Check your email for additional resources and updates from the HUD203 community.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-emerald-800 text-xl">
            Get Your Free {leadMagnet.category === 'guide' ? 'Guide' :
                         leadMagnet.category === 'checklist' ? 'Checklist' :
                         leadMagnet.category === 'calculator' ? 'Calculator' :
                         leadMagnet.category === 'template' ? 'Templates' : 'Report'}
          </DialogTitle>
          <DialogDescription className="text-base">
            {leadMagnet.description}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                required
                placeholder="Your first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="experience">Experience Level (Optional)</Label>
            <select
              id="experience"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={formData.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
            >
              <option value="">Select your experience level</option>
              <option value="beginner">Complete Beginner</option>
              <option value="some-knowledge">Some Knowledge</option>
              <option value="experienced">Experienced Investor</option>
              <option value="professional">Real Estate Professional</option>
            </select>
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
              />
              <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                I agree to the <a href="/terms" className="text-emerald-600 hover:underline" target="_blank">Terms of Service</a> and <a href="/privacy" className="text-emerald-600 hover:underline" target="_blank">Privacy Policy</a> *
              </Label>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="marketingConsent"
                checked={formData.marketingConsent}
                onCheckedChange={(checked) => handleInputChange('marketingConsent', checked as boolean)}
              />
              <Label htmlFor="marketingConsent" className="text-sm text-gray-600 leading-relaxed">
                Yes, I'd like to receive valuable creative financing tips and updates from HUD203
              </Label>
            </div>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg">
            <h4 className="font-medium text-emerald-800 mb-2">What you'll get instantly:</h4>
            <ul className="space-y-1 text-sm text-emerald-700">
              {leadMagnet.benefits.slice(0, 3).map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="cta"
              disabled={isSubmitting || !formData.consent}
              className="flex-1"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Get Free Download
                </>
              )}
            </Button>
          </div>
        </form>

        <div className="text-xs text-gray-500 text-center">
          <p>🔒 Your information is secure and will never be shared with third parties.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}