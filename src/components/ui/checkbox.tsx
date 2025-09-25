"use client"

import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & {
    onCheckedChange?: (checked: boolean) => void
  }
>(({ className, onCheckedChange, checked, ...props }, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCheckedChange?.(e.target.checked)
    props.onChange?.(e)
  }

  return (
    <div className="relative">
      <input
        type="checkbox"
        ref={ref}
        checked={checked}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none bg-white",
          className
        )}
        onChange={handleChange}
        {...props}
      />
      <Check className={cn(
        "h-4 w-4 absolute top-0 left-0 text-primary-foreground pointer-events-none opacity-0 peer-checked:opacity-100",
        "transition-opacity"
      )} />
    </div>
  )
})
Checkbox.displayName = "Checkbox"

export { Checkbox }