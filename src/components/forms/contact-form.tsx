"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  role: z.enum(["buyer", "seller", "realtor", "investor"], {
    required_error: "Please select your role",
  }),
  interest: z.string().min(10, "Please tell us more about your interest"),
  tcpaConsent: z.boolean().refine(val => val === true, {
    message: "You must agree to receive communications",
  }),
})

type FormData = z.infer<typeof formSchema>

interface ContactFormProps {
  className?: string
  title?: string
  description?: string
}

export function ContactForm({
  className,
  title = "Join the HUD203 Community",
  description = "Connect with like-minded real estate professionals and learn creative financing strategies."
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      // Submit to n8n webhook
      const response = await fetch(process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || '/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: 'contact-form',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        reset()
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className={cn("w-full max-w-md mx-auto", className)}>
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              Welcome to HUD203!
            </h3>
            <p className="text-muted-foreground">
              Thank you for joining our community. You&apos;ll receive a welcome email with next steps shortly.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={cn("w-full max-w-md mx-auto", className)}>
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
              Full Name *
            </label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Your full name"
              className={errors.name ? "border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
              Email Address *
            </label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="your.email@example.com"
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
              Phone Number *
            </label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              placeholder="(555) 123-4567"
              className={errors.phone ? "border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-primary mb-1">
              I am a... *
            </label>
            <select
              id="role"
              {...register("role")}
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                errors.role ? "border-red-500" : ""
              )}
            >
              <option value="">Select your role</option>
              <option value="buyer">Homebuyer</option>
              <option value="seller">Home Seller</option>
              <option value="realtor">Realtor</option>
              <option value="investor">Investor</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="interest" className="block text-sm font-medium text-primary mb-1">
              What interests you about creative financing? *
            </label>
            <Textarea
              id="interest"
              {...register("interest")}
              placeholder="Tell us about your goals and interests..."
              rows={3}
              className={errors.interest ? "border-red-500" : ""}
            />
            {errors.interest && (
              <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>
            )}
          </div>

          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="tcpaConsent"
              {...register("tcpaConsent")}
              className="mt-1"
            />
            <label htmlFor="tcpaConsent" className="text-xs text-gray-600">
              I agree to receive communications from HUD203 via email, phone, or text message.
              I understand I can opt out at any time. Message and data rates may apply. *
            </label>
          </div>
          {errors.tcpaConsent && (
            <p className="text-red-500 text-xs">{errors.tcpaConsent.message}</p>
          )}

          <Button
            type="submit"
            variant="cta"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Joining Community..." : "Join HUD203 Community"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}