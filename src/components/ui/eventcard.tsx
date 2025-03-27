"use client"

import * as React from "react"
import { SocialPreview } from "@/components/ui/socialpreview"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon URL or image source */
  iconSrc?: string
  /** Alt text for the icon */
  iconAlt?: string
  /** Main title of the event */
  title: string
  /** App or source name */
  app: string
  /** Primary call-to-action button text */
  ctaText: string
  /** Primary call-to-action button onClick function */
  onCtaClick?: () => void
  /** XP reward amount (without the + symbol) */
  xp?: number
  /** Props to pass to the SocialPreview component */
  socialPreviewProps?: React.ComponentProps<typeof SocialPreview>
}

export function EventCard({
  className,
  iconSrc,
  iconAlt = "App icon",
  title,
  app,
  ctaText = "Open",
  onCtaClick,
  xp,
  socialPreviewProps,
  ...props
}: EventCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col",
        className
      )}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div className="flex gap-2">
          {/* Icon/Image section - only shown if iconSrc is provided */}
          {iconSrc && (
            <div className="flex-shrink-0 h-16 w-16 overflow-hidden rounded-sm">
              <img 
                src={iconSrc} 
                alt={iconAlt} 
                className="w-full h-full object-cover" 
                style={{ borderRadius: 0 }}
              />
            </div>
          )}
          
          {/* Content section */}
          <div className="flex flex-col">
            <span className="text-sans-base font-semibold">{title}</span>
            <span className="text-muted-foreground text-sans-sm">{app}</span>
            
            {/* Social preview */}
            {socialPreviewProps && (
              <div className="mt-1">
                <SocialPreview {...socialPreviewProps} />
              </div>
            )}
          </div>
        </div>
        
        {/* Action section */}
        <div className="flex flex-col items-center gap-2">
          <Button variant="secondary" onClick={onCtaClick}>
            {ctaText}
          </Button>
          
          {xp !== undefined && (
            <span className="text-muted-foreground text-sans-xs">+{xp}XP</span>
          )}
        </div>
      </div>
    </div>
  )
} 