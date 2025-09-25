"use client"

import { useEffect, createContext, useContext, ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { useAnalytics, useScrollTracking, useTimeTracking, useOutboundTracking } from '@/hooks/useAnalytics'

interface AnalyticsContextType {
  analytics: ReturnType<typeof useAnalytics>
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null)

interface AnalyticsProviderProps {
  children: ReactNode
  enableScrollTracking?: boolean
  enableTimeTracking?: boolean
  enableOutboundTracking?: boolean
  scrollThreshold?: number
  timeInterval?: number
}

export function AnalyticsProvider({
  children,
  enableScrollTracking = true,
  enableTimeTracking = true,
  enableOutboundTracking = true,
  scrollThreshold = 75,
  timeInterval = 30
}: AnalyticsProviderProps) {
  const analytics = useAnalytics()

  // Enable optional tracking hooks
  if (enableScrollTracking) {
    useScrollTracking(scrollThreshold)
  }

  if (enableTimeTracking) {
    useTimeTracking(timeInterval)
  }

  if (enableOutboundTracking) {
    useOutboundTracking()
  }

  return (
    <AnalyticsContext.Provider value={{ analytics }}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export function useAnalyticsContext() {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalyticsContext must be used within an AnalyticsProvider')
  }
  return context
}

// Google Analytics initialization component
export function GoogleAnalytics() {
  useEffect(() => {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

    if (!GA_MEASUREMENT_ID) {
      console.warn('Google Analytics measurement ID not found')
      return
    }

    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    script1.async = true
    document.head.appendChild(script1)

    // Initialize gtag
    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: false
      });
    `
    document.head.appendChild(script2)

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  return null
}

// Facebook Pixel initialization component
export function FacebookPixel() {
  useEffect(() => {
    const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

    if (!FACEBOOK_PIXEL_ID) {
      console.warn('Facebook Pixel ID not found')
      return
    }

    // Load Facebook Pixel
    const script = document.createElement('script')
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FACEBOOK_PIXEL_ID}');
      fbq('track', 'PageView');
    `
    document.head.appendChild(script)

    // Add noscript fallback
    const noscript = document.createElement('noscript')
    noscript.innerHTML = `
      <img height="1" width="1" style="display:none"
           src="https://www.facebook.com/tr?id=${FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1" />
    `
    document.head.appendChild(noscript)

    return () => {
      document.head.removeChild(script)
      document.head.removeChild(noscript)
    }
  }, [])

  return null
}

// Development analytics debugger
export function AnalyticsDebugger() {
  const pathname = usePathname()

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return

    const debugPanel = document.createElement('div')
    debugPanel.id = 'analytics-debugger'
    debugPanel.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 15px;
      border-radius: 8px;
      font-family: monospace;
      font-size: 12px;
      max-width: 300px;
      z-index: 10000;
      display: none;
    `

    const toggleButton = document.createElement('button')
    toggleButton.innerHTML = '📊'
    toggleButton.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: none;
      background: #10B981;
      color: white;
      font-size: 20px;
      cursor: pointer;
      z-index: 10001;
    `

    toggleButton.onclick = () => {
      const isVisible = debugPanel.style.display !== 'none'
      debugPanel.style.display = isVisible ? 'none' : 'block'
      toggleButton.style.display = isVisible ? 'block' : 'none'
    }

    const updateDebugInfo = () => {
      const utmParams = new URLSearchParams(window.location.search)
      const sessionViews = sessionStorage.getItem('page_views') || '0'
      const firstTouch = localStorage.getItem('first_touch_source') || 'unknown'

      debugPanel.innerHTML = `
        <h4 style="margin: 0 0 10px 0;">📊 Analytics Debug</h4>
        <div><strong>Page:</strong> ${pathname}</div>
        <div><strong>Session Views:</strong> ${sessionViews}</div>
        <div><strong>First Touch:</strong> ${firstTouch}</div>
        <div><strong>UTM Source:</strong> ${utmParams.get('utm_source') || 'none'}</div>
        <div><strong>UTM Campaign:</strong> ${utmParams.get('utm_campaign') || 'none'}</div>
        <div><strong>Referrer:</strong> ${document.referrer || 'direct'}</div>
        <button onclick="this.parentElement.style.display='none'; document.querySelector('#analytics-debugger + button').style.display='block';" style="margin-top: 10px; padding: 5px 10px; background: #EF4444; color: white; border: none; border-radius: 4px; cursor: pointer;">Close</button>
      `
    }

    document.body.appendChild(debugPanel)
    document.body.appendChild(toggleButton)
    updateDebugInfo()

    return () => {
      document.body.removeChild(debugPanel)
      document.body.removeChild(toggleButton)
    }
  }, [pathname])

  return null
}