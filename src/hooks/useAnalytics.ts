"use client"

import { useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import {
  trackPageView,
  leadEvents,
  engagementEvents,
  funnelEvents,
  trackAttribution,
  initializeAttribution,
  calculateLeadScore,
  getPageInfo
} from '@/lib/analytics'

// Main analytics hook
export function useAnalytics() {
  const pathname = usePathname()

  // Initialize attribution tracking
  useEffect(() => {
    initializeAttribution()
  }, [])

  // Track page views
  useEffect(() => {
    const pageInfo = getPageInfo()
    trackPageView(pageInfo)
  }, [pathname])

  // Return tracking functions
  return {
    trackLeadMagnetView: useCallback((magnetId: string, magnetTitle: string) => {
      leadEvents.leadMagnetView(magnetId, magnetTitle)
    }, []),

    trackLeadMagnetDownload: useCallback((magnetId: string, magnetTitle: string, userType?: string) => {
      leadEvents.leadMagnetDownload(magnetId, magnetTitle, userType)
      trackAttribution('lead_magnet_download', 1)
    }, []),

    trackFormStart: useCallback((formType: string) => {
      leadEvents.formStart(formType)
    }, []),

    trackFormComplete: useCallback((formType: string, leadScore?: number) => {
      leadEvents.formComplete(formType, leadScore)
      trackAttribution('form_submission', leadScore || 1)
    }, []),

    trackResourceView: useCallback((resourceType: string, resourceId: string) => {
      engagementEvents.resourceView(resourceType, resourceId)
    }, []),

    trackScrollDepth: useCallback((depth: number) => {
      engagementEvents.scrollDepth(pathname, depth)
    }, [pathname]),

    trackOutboundClick: useCallback((url: string, linkText: string) => {
      engagementEvents.outboundClick(url, linkText)
    }, []),

    trackFunnelStep: useCallback((funnelName: string, step: string, stepNumber: number) => {
      funnelEvents.funnelStep(funnelName, step, stepNumber)
    }, []),

    calculateLeadScore
  }
}

// Hook for scroll depth tracking
export function useScrollTracking(threshold: number = 75) {
  const { trackScrollDepth } = useAnalytics()

  useEffect(() => {
    let hasTracked = false

    const handleScroll = () => {
      if (hasTracked) return

      const scrollTop = window.scrollY
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / documentHeight) * 100

      if (scrollPercent >= threshold) {
        trackScrollDepth(Math.round(scrollPercent))
        hasTracked = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [trackScrollDepth, threshold])
}

// Hook for time on page tracking
export function useTimeTracking(intervalSeconds: number = 30) {
  const { trackScrollDepth } = useAnalytics()
  const pathname = usePathname()

  useEffect(() => {
    const startTime = Date.now()
    let timeInterval: NodeJS.Timeout

    const trackTime = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      engagementEvents.timeOnPage(pathname, timeSpent)
    }

    // Track at intervals
    timeInterval = setInterval(trackTime, intervalSeconds * 1000)

    // Track on page unload
    const handleUnload = () => {
      trackTime()
    }

    window.addEventListener('beforeunload', handleUnload)

    return () => {
      clearInterval(timeInterval)
      window.removeEventListener('beforeunload', handleUnload)
      trackTime() // Final tracking when component unmounts
    }
  }, [pathname, intervalSeconds])
}

// Hook for form analytics
export function useFormAnalytics(formType: string) {
  const { trackFormStart, trackFormComplete } = useAnalytics()

  const handleFormStart = useCallback(() => {
    trackFormStart(formType)
  }, [formType, trackFormStart])

  const handleFormComplete = useCallback((leadScore?: number) => {
    trackFormComplete(formType, leadScore)
  }, [formType, trackFormComplete])

  return {
    onFormStart: handleFormStart,
    onFormComplete: handleFormComplete
  }
}

// Hook for lead magnet analytics
export function useLeadMagnetAnalytics() {
  const { trackLeadMagnetView, trackLeadMagnetDownload } = useAnalytics()

  const handleLeadMagnetView = useCallback((magnetId: string, magnetTitle: string) => {
    trackLeadMagnetView(magnetId, magnetTitle)
  }, [trackLeadMagnetView])

  const handleLeadMagnetDownload = useCallback((magnetId: string, magnetTitle: string, userType?: string) => {
    trackLeadMagnetDownload(magnetId, magnetTitle, userType)
  }, [trackLeadMagnetDownload])

  return {
    onLeadMagnetView: handleLeadMagnetView,
    onLeadMagnetDownload: handleLeadMagnetDownload
  }
}

// Hook for conversion funnel tracking
export function useFunnelTracking(funnelName: string) {
  const { trackFunnelStep } = useAnalytics()

  const trackStep = useCallback((step: string, stepNumber: number) => {
    trackFunnelStep(funnelName, step, stepNumber)
  }, [funnelName, trackFunnelStep])

  const trackEntry = useCallback((entryStep: string = 'entry') => {
    funnelEvents.enterFunnel(funnelName, entryStep)
  }, [funnelName])

  const trackCompletion = useCallback((conversionValue?: number) => {
    funnelEvents.funnelComplete(funnelName, conversionValue)
  }, [funnelName])

  const trackExit = useCallback((exitStep: string) => {
    funnelEvents.funnelExit(funnelName, exitStep)
  }, [funnelName])

  return {
    trackStep,
    trackEntry,
    trackCompletion,
    trackExit
  }
}

// Hook for outbound link tracking
export function useOutboundTracking() {
  const { trackOutboundClick } = useAnalytics()

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement
      if (target.tagName === 'A' && target.href) {
        const url = new URL(target.href)
        const currentDomain = window.location.hostname

        // Check if it's an outbound link
        if (url.hostname !== currentDomain && !url.hostname.includes(currentDomain)) {
          trackOutboundClick(target.href, target.textContent || target.href)
        }
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [trackOutboundClick])
}

// Custom event tracking hook
export function useEventTracking() {
  const analytics = useAnalytics()

  const trackCustomEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    const event = {
      event: eventName,
      category: 'custom' as const,
      action: eventName,
      properties
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, properties)
    }
  }, [])

  return {
    ...analytics,
    trackCustomEvent
  }
}