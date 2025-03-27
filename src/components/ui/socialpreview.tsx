"use client"

import * as React from "react"
import { CircleAlert } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import makeBlockie from 'ethereum-blockies-base64'

const socialPreviewVariants = cva(
  "flex items-center gap-1",
  {
    variants: {
      status: {
        "unclaimed": "",
        "you": "",
        "one": "",
        "two": "",
        "many": "",
        "many-plus": ""
      }
    },
    defaultVariants: {
      status: "unclaimed"
    }
  }
)

export interface SocialPreviewProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof socialPreviewVariants> {
  count?: number
  avatars?: string[] // Array of avatar URLs
}

function SocialPreview({ 
  className, 
  status = "unclaimed", 
  count, 
  avatars = [], 
  ...props 
}: SocialPreviewProps) {
  const renderAvatars = () => {
    if (status === "unclaimed") {
      return (
        <CircleAlert className="w-4 h-4 text-primary" />
      )
    }

    // For "you" and "one" status, only show one avatar
    const avatarCount = status === "you" || status === "one" ? 1 :
                       status === "two" ? 2 : 3
    
    const avatarElements = []
    
    for (let i = 0; i < avatarCount; i++) {
      // Generate a unique blockies avatar based on a seed
      const seed = avatars[i] || `user-${status}-${i}`;
      const blockiesUrl = makeBlockie(seed);
      
      avatarElements.push(
        <Avatar 
          key={`avatar-${i}`} 
          className={cn(
            "w-6 h-6 border-2 border-background",
            i !== 0 && "-ml-2"
          )}
          style={{
            zIndex: avatarCount - i
          }}
        >
          <AvatarImage src={blockiesUrl} alt={`User ${i+1}`} />
        </Avatar>
      )
    }
    return <div className="flex items-center">{avatarElements}</div>
  }

  const getText = () => {
    switch (status) {
      case "unclaimed":
        return (
          <>
            <span className="text-sans-xs font-normal text-muted-foreground">claim first</span>
          </>
        )
      case "you":
        return (
          <>
            <span className="text-sans-xs font-normal text-muted-foreground">completed by</span>
            <span className="text-sans-xs font-semibold text-primary">you</span>
          </>
        )
      case "one":
        return (
          <>
            <span className="text-sans-xs font-normal text-muted-foreground">completed by</span>
            <span className="text-sans-xs font-semibold text-primary">1 member</span>
          </>
        )
      case "two":
        return (
          <>
            <span className="text-sans-xs font-normal text-muted-foreground">completed by</span>
            <span className="text-sans-xs font-semibold text-primary">2 members</span>
          </>
        )
      case "many":
        return (
          <>
            <span className="text-sans-xs font-normal text-muted-foreground">completed by</span>
            <span className="text-sans-xs font-semibold text-primary">3 members</span>
          </>
        )
      case "many-plus":
        return (
          <>
            <span className="text-sans-xs font-normal text-muted-foreground">completed by</span>
            <span className="text-sans-xs font-semibold text-primary">{count || 0} members</span>
          </>
        )
      default:
        return ""
    }
  }

  return (
    <div
      data-slot="social-preview"
      className={cn(socialPreviewVariants({ status, className }))}
      {...props}
    >
      {renderAvatars()}
      {getText()}
    </div>
  )
}

export { SocialPreview }

