// Analytics and conversion tracking utilities for HUD203

export interface ConversionEvent {
  event: string
  category: 'lead_generation' | 'engagement' | 'conversion' | 'download'
  action: string
  label?: string
  value?: number
  properties?: Record<string, any>
}

export interface PageView {
  page: string
  title: string
  referrer?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  timestamp?: number
}

// Google Analytics 4 event tracking
export function trackEvent(event: ConversionEvent) {
  // Client-side only
  if (typeof window === 'undefined') return

  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
      custom_parameters: event.properties
    })
  }

  // Facebook Pixel
  if (typeof window.fbq === 'function') {
    const fbEvent = mapToFacebookEvent(event)
    if (fbEvent) {
      window.fbq('track', fbEvent.name, fbEvent.params)
    }
  }

  // Custom analytics (could be replaced with your preferred analytics service)
  if (typeof window.analytics === 'function') {
    window.analytics.track(event.event, {
      category: event.category,
      action: event.action,
      label: event.label,
      value: event.value,
      ...event.properties
    })
  }

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics] Event tracked:', event)
  }
}

// Page view tracking
export function trackPageView(pageView: PageView) {
  if (typeof window === 'undefined') return

  // Google Analytics 4
  if (typeof window.gtag === 'function') {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
      page_title: pageView.title,
      page_location: pageView.page
    })
  }

  // Custom analytics
  if (typeof window.analytics === 'function') {
    window.analytics.page(pageView.page, {
      title: pageView.title,
      referrer: pageView.referrer,
      utm_source: pageView.utm_source,
      utm_medium: pageView.utm_medium,
      utm_campaign: pageView.utm_campaign,
      timestamp: pageView.timestamp || Date.now()
    })
  }
}

// Lead generation events
export const leadEvents = {
  leadMagnetView: (magnetId: string, magnetTitle: string) => trackEvent({
    event: 'lead_magnet_viewed',
    category: 'lead_generation',
    action: 'view_lead_magnet',
    label: magnetId,
    properties: {
      magnet_id: magnetId,
      magnet_title: magnetTitle
    }
  }),

  leadMagnetDownload: (magnetId: string, magnetTitle: string, userType?: string) => trackEvent({
    event: 'lead_magnet_downloaded',
    category: 'conversion',
    action: 'download_lead_magnet',
    label: magnetId,
    value: 1,
    properties: {
      magnet_id: magnetId,
      magnet_title: magnetTitle,
      user_type: userType
    }
  }),

  formStart: (formType: string) => trackEvent({
    event: 'form_started',
    category: 'engagement',
    action: 'start_form',
    label: formType,
    properties: {
      form_type: formType
    }
  }),

  formComplete: (formType: string, leadScore?: number) => trackEvent({
    event: 'form_completed',
    category: 'conversion',
    action: 'complete_form',
    label: formType,
    value: leadScore || 1,
    properties: {
      form_type: formType,
      lead_score: leadScore
    }
  }),

  newsletterSignup: (source: string) => trackEvent({
    event: 'newsletter_signup',
    category: 'conversion',
    action: 'signup_newsletter',
    label: source,
    value: 1,
    properties: {
      signup_source: source
    }
  }),

  contactRequest: (method: string) => trackEvent({
    event: 'contact_request',
    category: 'lead_generation',
    action: 'request_contact',
    label: method,
    value: 2,
    properties: {
      contact_method: method
    }
  })
}

// Engagement events
export const engagementEvents = {
  resourceView: (resourceType: string, resourceId: string) => trackEvent({
    event: 'resource_viewed',
    category: 'engagement',
    action: 'view_resource',
    label: resourceType,
    properties: {
      resource_type: resourceType,
      resource_id: resourceId
    }
  }),

  videoPlay: (videoTitle: string, duration?: number) => trackEvent({
    event: 'video_played',
    category: 'engagement',
    action: 'play_video',
    label: videoTitle,
    properties: {
      video_title: videoTitle,
      video_duration: duration
    }
  }),

  scrollDepth: (page: string, depth: number) => trackEvent({
    event: 'scroll_depth',
    category: 'engagement',
    action: 'scroll',
    label: page,
    value: depth,
    properties: {
      page_path: page,
      scroll_depth: depth
    }
  }),

  timeOnPage: (page: string, timeSeconds: number) => trackEvent({
    event: 'time_on_page',
    category: 'engagement',
    action: 'time_spent',
    label: page,
    value: timeSeconds,
    properties: {
      page_path: page,
      time_seconds: timeSeconds
    }
  }),

  outboundClick: (url: string, linkText: string) => trackEvent({
    event: 'outbound_click',
    category: 'engagement',
    action: 'click_outbound',
    label: url,
    properties: {
      outbound_url: url,
      link_text: linkText
    }
  })
}

// Conversion funnel tracking
export const funnelEvents = {
  enterFunnel: (funnelName: string, step: string) => trackEvent({
    event: 'funnel_entered',
    category: 'conversion',
    action: 'enter_funnel',
    label: funnelName,
    properties: {
      funnel_name: funnelName,
      funnel_step: step
    }
  }),

  funnelStep: (funnelName: string, step: string, stepNumber: number) => trackEvent({
    event: 'funnel_step',
    category: 'conversion',
    action: 'advance_funnel',
    label: funnelName,
    value: stepNumber,
    properties: {
      funnel_name: funnelName,
      funnel_step: step,
      step_number: stepNumber
    }
  }),

  funnelComplete: (funnelName: string, conversionValue?: number) => trackEvent({
    event: 'funnel_completed',
    category: 'conversion',
    action: 'complete_funnel',
    label: funnelName,
    value: conversionValue || 1,
    properties: {
      funnel_name: funnelName,
      conversion_value: conversionValue
    }
  }),

  funnelExit: (funnelName: string, step: string) => trackEvent({
    event: 'funnel_exited',
    category: 'engagement',
    action: 'exit_funnel',
    label: funnelName,
    properties: {
      funnel_name: funnelName,
      exit_step: step
    }
  })
}

// Map events to Facebook Pixel events
function mapToFacebookEvent(event: ConversionEvent) {
  const eventMap: Record<string, { name: string; params?: any }> = {
    'lead_magnet_downloaded': {
      name: 'Lead',
      params: {
        content_name: event.properties?.magnet_title,
        content_category: 'Lead Magnet',
        value: 1,
        currency: 'USD'
      }
    },
    'form_completed': {
      name: 'CompleteRegistration',
      params: {
        content_name: event.label,
        value: event.value || 1,
        currency: 'USD'
      }
    },
    'newsletter_signup': {
      name: 'Subscribe',
      params: {
        value: 1,
        currency: 'USD'
      }
    },
    'contact_request': {
      name: 'Lead',
      params: {
        content_name: 'Contact Request',
        value: 2,
        currency: 'USD'
      }
    }
  }

  return eventMap[event.event]
}

// Utility functions
export function getUTMParams() {
  if (typeof window === 'undefined') return {}

  const urlParams = new URLSearchParams(window.location.search)
  return {
    utm_source: urlParams.get('utm_source'),
    utm_medium: urlParams.get('utm_medium'),
    utm_campaign: urlParams.get('utm_campaign'),
    utm_term: urlParams.get('utm_term'),
    utm_content: urlParams.get('utm_content')
  }
}

export function getPageInfo() {
  if (typeof window === 'undefined') return { page: '', title: '' }

  return {
    page: window.location.pathname + window.location.search,
    title: document.title,
    referrer: document.referrer,
    ...getUTMParams()
  }
}

// Lead scoring based on user actions
export function calculateLeadScore(actions: string[]): number {
  const scoreMap: Record<string, number> = {
    'page_view': 1,
    'resource_view': 2,
    'video_play': 3,
    'form_start': 5,
    'lead_magnet_view': 7,
    'lead_magnet_download': 15,
    'form_complete': 20,
    'contact_request': 25,
    'newsletter_signup': 10
  }

  return actions.reduce((total, action) => total + (scoreMap[action] || 0), 0)
}

// Conversion attribution tracking
export function trackAttribution(conversionType: string, value?: number) {
  const attribution = {
    conversion_type: conversionType,
    conversion_value: value,
    first_touch: localStorage.getItem('first_touch_source'),
    last_touch: localStorage.getItem('last_touch_source'),
    session_start: sessionStorage.getItem('session_start'),
    page_views: parseInt(sessionStorage.getItem('page_views') || '0'),
    ...getUTMParams()
  }

  trackEvent({
    event: 'conversion_attributed',
    category: 'conversion',
    action: 'attribute_conversion',
    label: conversionType,
    value,
    properties: attribution
  })

  return attribution
}

// Initialize attribution tracking
export function initializeAttribution() {
  if (typeof window === 'undefined') return

  // First-touch attribution
  if (!localStorage.getItem('first_touch_source')) {
    const utmParams = getUTMParams()
    const source = utmParams.utm_source || document.referrer || 'direct'
    localStorage.setItem('first_touch_source', source)
    localStorage.setItem('first_touch_timestamp', Date.now().toString())
  }

  // Last-touch attribution
  const utmParams = getUTMParams()
  const lastSource = utmParams.utm_source || document.referrer || 'direct'
  localStorage.setItem('last_touch_source', lastSource)

  // Session tracking
  if (!sessionStorage.getItem('session_start')) {
    sessionStorage.setItem('session_start', Date.now().toString())
    sessionStorage.setItem('page_views', '0')
  }

  // Increment page views
  const currentViews = parseInt(sessionStorage.getItem('page_views') || '0')
  sessionStorage.setItem('page_views', (currentViews + 1).toString())
}

// Type declarations for global analytics functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
    analytics: {
      track: (event: string, properties: any) => void
      page: (page: string, properties: any) => void
    }
  }
}