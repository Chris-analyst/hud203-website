import { NextRequest, NextResponse } from 'next/server'

interface LeadData {
  firstName: string
  email: string
  experience?: string
  leadMagnetId: string
  leadMagnetTitle: string
  source: string
  consent: boolean
  marketingConsent: boolean
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json()

    // Validate required fields
    if (!data.firstName || !data.email || !data.consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare data for GoHighLevel
    const ghlData = {
      firstName: data.firstName,
      email: data.email,
      customField: {
        experience_level: data.experience || 'not_specified',
        lead_magnet_id: data.leadMagnetId,
        lead_magnet_title: data.leadMagnetTitle,
        lead_source: data.source,
        consent_given: data.consent,
        marketing_consent: data.marketingConsent,
        captured_at: new Date().toISOString()
      },
      tags: [
        'lead-magnet-download',
        `magnet-${data.leadMagnetId}`,
        data.experience ? `experience-${data.experience}` : 'experience-not-specified',
        ...(data.marketingConsent ? ['marketing-consent'] : [])
      ]
    }

    // Submit to GoHighLevel (replace with actual GHL webhook URL)
    const ghlWebhookUrl = process.env.GOHIGHLEVEL_WEBHOOK_URL

    if (ghlWebhookUrl) {
      const ghlResponse = await fetch(ghlWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.GOHIGHLEVEL_API_KEY}`
        },
        body: JSON.stringify(ghlData)
      })

      if (!ghlResponse.ok) {
        console.error('GoHighLevel submission failed:', await ghlResponse.text())
        // Continue with success response even if GHL fails
      }
    }

    // Log successful lead capture (for analytics/debugging)
    console.log('Lead captured:', {
      email: data.email,
      leadMagnet: data.leadMagnetId,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully',
      downloadUrl: `/downloads/${data.leadMagnetId}`
    })

  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}