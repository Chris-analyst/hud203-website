import { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  path: string
  keywords?: string[]
  noIndex?: boolean
  canonical?: string
  type?: "website" | "article"
  publishDate?: string
  modifiedDate?: string
  author?: string
  category?: string
}

// JSON-LD structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'HUD203',
    description: 'Creative real estate financing education and community',
    url: 'https://hud203.com',
    logo: 'https://hud203.com/logo.png',
    sameAs: [
      'https://twitter.com/hud203',
      'https://facebook.com/hud203',
      'https://linkedin.com/company/hud203'
    ],
    areaServed: 'United States',
    specialty: [
      'Creative Real Estate Financing',
      'Subject-To Investing',
      'Seller Financing',
      'Real Estate Education'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: 'https://hud203.com/contact'
    }
  };
}

export function generateCourseSchema(courseName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: courseName,
    description,
    provider: {
      '@type': 'Organization',
      name: 'HUD203',
      url: 'https://hud203.com'
    },
    educationalLevel: 'Intermediate',
    courseMode: 'Online',
    teaches: [
      'Creative Real Estate Financing',
      'Subject-To Investing',
      'Seller Financing',
      'Real Estate Investment Strategies'
    ]
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  publishedTime: string,
  modifiedTime?: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished: publishedTime,
    ...(modifiedTime && { dateModified: modifiedTime }),
    author: {
      '@type': 'Organization',
      name: 'HUD203',
      url: 'https://hud203.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'HUD203',
      url: 'https://hud203.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hud203.com/logo.png'
      }
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
        width: 1200,
        height: 630
      }
    }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function generateSEO({
  title,
  description,
  path,
  keywords = [],
  noIndex = false,
  canonical,
  type = "website",
  publishDate,
  modifiedDate,
  author,
  category,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hud203.com"
  const fullUrl = `${baseUrl}${path}`
  const canonicalUrl = canonical || fullUrl

  const defaultKeywords = [
    "creative real estate financing",
    "subject to deals",
    "seller financing",
    "wrap mortgages",
    "loan assumptions",
    "HUD203",
    "real estate community",
    "win-win real estate",
    "creative financing education"
  ]

  const allKeywords = Array.from(new Set([...defaultKeywords, ...keywords]))

  return {
    title,
    description,
    keywords: allKeywords.join(", "),
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: type === "article" ? "article" : "website",
      locale: "en_US",
      url: fullUrl,
      title,
      description,
      siteName: "HUD203 - Creative Real Estate Community",
      images: [
        {
          url: type === "article"
            ? `${baseUrl}/images/blog-og-image.jpg`
            : `${baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article" && {
        publishedTime: publishDate,
        modifiedTime: modifiedDate || publishDate,
        authors: [author || "HUD203 Community"],
        section: category,
        tags: keywords,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/og-image.jpg`],
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  }
}