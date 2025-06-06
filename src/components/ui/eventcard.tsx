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
        <div className="flex gap-3 min-w-0 flex-1">
          {/* Icon/Image section - only shown if iconSrc is provided */}
          {iconSrc && (
            <div className="flex-shrink-0 h-14 w-14 overflow-hidden rounded-[2px]">
              <img 
                src={iconSrc} 
                alt={iconAlt} 
                className="w-full h-full object-cover" 
                style={{ borderRadius: 0 }}
              />
            </div>
          )}
          
          {/* Content section */}
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-sans-sm font-semibold">{title}</span>
            <span className="text-muted-foreground text-sans-sm truncate">{app}</span>
            
            {/* Social preview */}
            {socialPreviewProps && (
              <div className="mt-1 max-w-full">
                <SocialPreview {...socialPreviewProps} />
              </div>
            )}
          </div>
        </div>
        
        {/* Action section */}
        <div className="flex flex-col items-center gap-1 ml-3 flex-shrink-0">
          <Button variant="secondary" size="sm" className="text-primary whitespace-nowrap" onClick={onCtaClick}>
            {ctaText}
          </Button>
          
          {xp !== undefined && (
            <span className="text-muted-foreground text-sans-xs whitespace-nowrap">+{xp}XP</span>
          )}
        </div>
      </div>
    </div>
  )
} 